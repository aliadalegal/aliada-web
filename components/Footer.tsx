import { LogoFull } from "./Logo";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <LogoFull size={58} />
            <p className="mt-4 text-sm leading-relaxed text-blush-200/80">
              El primer ecosistema de Derecho Consciente y empoderamiento
              económico para mujeres en el NOA, con proyección federal.
            </p>
            <ul className="mt-5 flex gap-3">
              <li>
                <a
                  href="https://wa.me/5493874623956"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de Aliada"
                  className="block rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aliada.derecho"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Aliada"
                  className="block rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@aliada.com.ar"
                  aria-label="Correo de Aliada"
                  className="block rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                >
                  <MailIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Servicios">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-clay-300 uppercase">
              Servicios
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-blush-200/85">
              <li>Aliada S.O.S</li>
              <li>Aliada Preventiva</li>
              <li>Aliada Empoderada</li>
              <li>Aliada Estrategia</li>
              <li>Aliada Guías digitales</li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-clay-300 uppercase">
              Contacto
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-blush-200/85">
              <li>
                <a
                  href="https://wa.me/5493874623956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp +54 9 387 462-3956
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@aliada.com.ar"
                  className="transition-colors hover:text-white"
                >
                  hola@aliada.com.ar
                </a>
              </li>
              <li>@aliada.derecho en Instagram</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.18em] text-clay-300 uppercase">
              Atención
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-blush-200/85">
              <li>Lunes a viernes: 9 a 18 h</li>
              <li>Sábados: 9 a 13 h</li>
              <li>Consultas online en todo el país</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-blush-200/60">
          <p>
            © 2026 Aliada · Derecho Consciente. Todos los derechos reservados.
          </p>
          <p className="mx-auto mt-2 max-w-xl leading-relaxed">
            La información de este sitio tiene carácter general y no sustituye
            el asesoramiento legal personalizado sobre tu caso.
          </p>
        </div>
      </div>
    </footer>
  );
}
