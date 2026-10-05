# Configuración de Vercel

## Variables de Entorno para Producción

Para que la aplicación funcione en Vercel, necesitas configurar las siguientes variables de entorno:

### 1. RESEND_API_KEY
- **Valor**: Tu API key de Resend (empieza con `re_`)
- **Dónde obtener**: https://resend.com → API Keys
- **Cómo copiar**: Clic en "Create API Key" y copiá el valor

### 2. RESEND_FROM
- **Valor**: `aliada.as.legal@gmail.com`
- **Descripción**: Email desde el cual se envían los emails de inscripción

---

## Pasos para configurar en Vercel

### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. **Entrá a tu proyecto en Vercel**
   - https://vercel.com/aliada-7614/aliada-web

2. **Idi a Settings → Environment Variables**

3. **Agregar variable 1: RESEND_API_KEY**
   - **Name**: `RESEND_API_KEY`
   - **Value**: `tu_api_key_aqui`
   - **Environment**: Production, Preview, Development
   - **Clic en Save**

4. **Agregar variable 2: RESEND_FROM**
   - **Name**: `RESEND_FROM`
   - **Value**: `aliada.as.legal@gmail.com`
   - **Environment**: Production, Preview, Development
   - **Clic en Save**

5. **Redeployar**
   - En la página principal del proyecto, clic en "Redeploy"
   - Opcional: Crear un nuevo commit vacío para forzar el deploy

---

### Opción B: Desde la CLI de Vercel

```bash
# Instalá la CLI de Vercel (si no la tenés)
npm i -g vercel

# Login en Vercel
vercel login

# Configurar variables de entorno
vercel env add RESEND_API_KEY production
# Pegá tu API key cuando te la pida

vercel env add RESEND_FROM production
# Pegá: aliada.as.legal@gmail.com

# Redeployar
vercel --prod
```

---

## ¿Por qué fallaba el deploy?

El error "Command 'npm run build' exited with 1" ocurría porque:

1. En modo desarrollo, Next.js usa `.env.local` para las variables
2. En producción (Vercel), no lee `.env.local` directamente
3. Si no se configuran las variables en Vercel, el código intenta usarlas y falla

---

## Verificación

Una vez configuradas las variables:

1. Hacé clic en "Redeploy" en Vercel
2. Esperá que termine el deploy
3. Abrí tu sitio en producción
4. Probá el formulario de comunidad
5. Revisá tu email `aliada.as.legal@gmail.com`

Debería llegar un email con los datos del formulario.

---

## Notas de Seguridad

- ✅ `.env.local` está en `.gitignore` → No se sube a Git
- ✅ `.env.local.example` está en el repo → Muestra cómo configurar
- ✅ Las variables se configuran en el dashboard de Vercel → Solo vos las tenés

Nunca compartas tu API key de Resend ni subas archivos `.env` a GitHub.
