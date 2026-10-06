import { LogoFull } from "./Logo";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LogoFull size={58} />
            <p className="mt-4 text-sm leading-relaxed text-blush-200/80">
              Aliada es un espacio de asesoramiento jurídico para mujeres que
              quieren comprender sus opciones, proteger lo que les importa y
              tomar decisiones conscientes sobre su vida.
            </p>
            <p className="mt-3 text-sm font-semibold text-sage-200/90">
              El derecho como herramienta de autonomía.
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
                  href="https://www.instagram.com/aliadaabogada"
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
                  href="mailto:aliada.as.legal@gmail.com"
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
              <li>Aliada Estratégica</li>
              <li>Aliada Empoderada</li>
            </ul>
          </nav>

          <nav aria-label="Recursos">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-clay-300 uppercase">
              Recursos
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-blush-200/85">
              <li>Guías gratuitas</li>
              <li>Comunidad</li>
              <li>Testimonios</li>
            </ul>
          </nav>

          <nav aria-label="Contacto">
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
                  href="mailto:aliada.as.legal@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  aliada.as.legal@gmail.com
                </a>
              </li>
              <li>@aliadaabogada en Instagram</li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-blush-200/60">
          <p>
            © 2026 Aliada · Derecho como herramienta de autonomía.
          </p>
          <p className="mx-auto mt-2 max-w-xl leading-relaxed">
            La información publicada en este sitio es de carácter general y no
            constituye asesoramiento jurídico personalizado.
          </p>
        </div>
      </div>
    </footer>
  );
}
