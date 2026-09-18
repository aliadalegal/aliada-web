"""Genera los recursos de marca para la web desde las imágenes originales."""
from collections import deque
import os
import shutil

from PIL import Image

SRC = r"C:\Users\Alejo\Downloads\WhatsApp Image 2026-09-17 at 21.22.45.jpeg"
PHOTO = r"C:\Users\Alejo\Downloads\WhatsApp Image 2026-09-17 at 21.24.13.jpeg"
OUT = r"C:\Users\Alejo\Documents\Proyectos\aliada-web\public\images"
APP = r"C:\Users\Alejo\Documents\Proyectos\aliada-web\app"

os.makedirs(OUT, exist_ok=True)

img = Image.open(SRC).convert("RGB")
w, h = img.size
px = img.load()

# --- 1) Logotipo completo: fondo blanco -> transparente, con bordes suaves ---
# El fondo del JPEG no es blanco puro: se muestrean las esquinas y el umbral
# se calcula respecto de ese valor real.
esquinas = [px[2, 2], px[w - 3, 2], px[2, h - 3], px[w - 3, h - 3]]
fondo = min(min(c) for c in esquinas)
print("min de fondo en esquinas:", fondo)

full = Image.new("RGBA", (w, h))
fpx = full.load()
RAMP = 16
for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        m = min(r, g, b)
        if m >= fondo - 2:
            a = 0
        elif m <= fondo - 2 - RAMP:
            a = 255
        else:
            a = int(255 * (fondo - 2 - m) / RAMP)
        fpx[x, y] = (r, g, b, a)

alpha = full.split()[3]
bbox = alpha.getbbox()
full_cropped = full.crop(bbox)
full_cropped.save(os.path.join(OUT, "logo-aliada.png"))
print("logo-aliada.png", full_cropped.size)

cx0, cy0, cx1, cy1 = bbox
ch = cy1 - cy0

# --- 2) Marca de las hojas: componentes conexos de tinta oscura en la zona superior ---
gray = img.convert("L")
gpx = gray.load()
visited = [[False] * w for _ in range(h)]
comp_id = [[-1] * w for _ in range(h)]
comps = []
for y in range(h):
    for x in range(w):
        if visited[y][x] or gpx[x, y] >= 140:
            continue
        cid = len(comps)
        q = deque([(x, y)])
        visited[y][x] = True
        minx = maxx = x
        miny = maxy = y
        count = 0
        while q:
            qx, qy = q.popleft()
            count += 1
            comp_id[qy][qx] = cid
            minx = min(minx, qx)
            maxx = max(maxx, qx)
            miny = min(miny, qy)
            maxy = max(maxy, qy)
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nx, ny = qx + dx, qy + dy
                if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx] and gpx[nx, ny] < 140:
                    visited[ny][nx] = True
                    q.append((nx, ny))
        comps.append((minx, miny, maxx, maxy, count))

# Las hojas son componentes grandes y contenidos en la mitad superior;
# el trazo superior de la "A" forma fragmentos chicos que se descartan.
mark_comps = [
    c for c in comps
    if c[4] > 100
    and c[3] < cy0 + 0.52 * ch
    and (c[3] - c[1]) < 0.30 * ch
]
if not mark_comps:
    raise SystemExit("No se encontró la marca de hojas")
included_ids = {comps.index(c) for c in mark_comps}

mx0 = min(c[0] for c in mark_comps)
my0 = min(c[1] for c in mark_comps)
mx1 = max(c[2] for c in mark_comps)
my1 = max(c[3] for c in mark_comps)
pad = 6
mx0, my0 = max(0, mx0 - pad), max(0, my0 - pad)
mx1, my1 = min(w - 1, mx1 + pad), min(h - 1, my1 + pad)
print("marca bbox:", (mx0, my0, mx1, my1))

# Tinta sobre fondo transparente: alpha según la oscuridad del píxel
mark = Image.new("RGBA", (mx1 - mx0 + 1, my1 - my0 + 1))
mpx = mark.load()
for y in range(my0, my1 + 1):
    for x in range(mx0, mx1 + 1):
        r, g, b = px[x, y]
        if comp_id[y][x] not in included_ids:
            a = 0
        else:
            lum = gpx[x, y]
            if lum >= 210:
                a = 0
            elif lum <= 120:
                a = 255
            else:
                a = int(255 * (210 - lum) / 90)
        mpx[x - mx0, y - my0] = (r, g, b, a)
mark.save(os.path.join(OUT, "marca-aliada.png"))
print("marca-aliada.png", mark.size)

# --- 3) Favicon e ícono Apple con el logo real ---
full_cropped.resize((256, 256), Image.LANCZOS).save(os.path.join(APP, "icon.png"))

apple = Image.new("RGB", (180, 180), (246, 229, 223))
logo180 = full_cropped.resize((176, 176), Image.LANCZOS)
apple.paste(logo180, (2, 2), logo180)
apple.save(os.path.join(APP, "apple-icon.png"))
print("icon.png / apple-icon.png generados")

# --- 4) Foto de Carolina ---
photo = Image.open(PHOTO)
print("foto:", photo.size, photo.mode)
shutil.copy(PHOTO, os.path.join(OUT, "carolina-guerrero.jpg"))
print("carolina-guerrero.jpg copiada")
