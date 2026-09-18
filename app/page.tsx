import Image from "next/image";
import { Footer } from "@/components/Footer";
import { LogoFull, LogoMark } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import {
  BookIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  DownloadIcon,
  HeartHandIcon,
  MailIcon,
  MapIcon,
  QuoteIcon,
  ShieldIcon,
  SirenIcon,
  StarIcon,
  VoiceIcon,
  WhatsAppIcon,
} from "@/components/icons";

const WHATSAPP_URL = "https://wa.me/5493874623956";

function SectionHeading({
  kicker,
  title,
  subtitle,
  titleId,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  titleId: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.24em] text-clay-700 uppercase">
        {kicker}
      </p>
      <h2
        id={titleId}
        className="mt-3 text-3xl font-semibold text-cocoa-800 sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-cocoa-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="contenido">
        {/* ===== HERO ===== */}
        <section
          id="inicio"
          aria-labelledby="titulo-hero"
          className="relative overflow-hidden"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <Image
              src="/images/hero-aliadas.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-60"
            />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
            <h1
              id="titulo-hero"
              className="text-4xl leading-tight font-semibold text-cocoa-800 sm:text-5xl md:text-6xl"
            >
              Recuperá el poder sobre tu vida y tus derechos
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cocoa-800 sm:text-xl">
              Aliada no es un estudio jurídico tradicional. Es claridad,
              estrategia y acompañamiento para que dejes de decidir a ciegas y
              reclames lo que te corresponde.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#agenda"
                className="rounded-full bg-clay-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-clay-600"
              >
                Agendá tu consulta
              </a>
              <a
                href="#servicios"
                className="rounded-full border-2 border-clay-700 px-8 py-4 text-lg font-semibold text-clay-700 transition-colors hover:bg-blush-100"
              >
                Conocé los servicios
              </a>
            </div>

            <p className="mt-6 text-sm text-cocoa-500">
              Atención online para todo el país · Salta · Jujuy · Buenos Aires
            </p>

            <dl className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10">
              <div className="text-center">
                <dt className="order-2 text-sm text-cocoa-600">
                  Seguidoras orgánicas
                </dt>
                <dd className="text-3xl font-bold text-clay-700">7.000+</dd>
              </div>
              <div aria-hidden="true" className="hidden h-12 w-px bg-blush-300 sm:block" />
              <div className="text-center">
                <dt className="order-2 text-sm text-cocoa-600">
                  Mujeres ya pidieron ayuda
                </dt>
                <dd className="text-3xl font-bold text-clay-700">150+</dd>
              </div>
              <div aria-hidden="true" className="hidden h-12 w-px bg-blush-300 sm:block" />
              <div className="text-center">
                <dt className="order-2 text-sm text-cocoa-600">
                  Dedicado a mujeres
                </dt>
                <dd className="text-3xl font-bold text-clay-700">100%</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ===== MANIFIESTO ===== */}
        <section
          id="manifiesto"
          aria-labelledby="titulo-manifiesto"
          className="py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              kicker="¿Por qué existe Aliada?"
              title="Un despertar que se convirtió en tu aliado"
              titleId="titulo-manifiesto"
            />

            <figure className="relative rounded-3xl bg-blush-100 p-8 sm:p-10">
              <QuoteIcon className="absolute -top-5 left-8 h-10 w-10 text-clay-400" />
              <blockquote className="space-y-4 text-lg leading-relaxed text-cocoa-700">
                <p>
                  “Sé lo que se siente intentar defenderte con la voz baja. Con
                  la culpa de tener que reclamar. Con la vergüenza de tener que
                  contar tu historia. Yo también lo sentí, y vi a cientos de
                  mujeres sentirlo igual.”
                </p>
                <p>
                  Por eso en Aliada no vas a encontrar palabras difíciles para
                  marearte, ni una abogada fría que te deje esperando. Acá vas
                  a encontrar claridad: te voy a dar el mapa para que recuperes
                  tu tranquilidad y el poder de decidir.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-300 font-script text-2xl text-cocoa-800"
                >
                  CG
                </span>
                <span>
                  <span className="block font-script text-2xl text-clay-700">
                    Carolina Guerrero
                  </span>
                  <span className="block text-sm text-cocoa-600">
                    Dra. Fabiana Carolina Guerrero · Fundadora de Aliada
                  </span>
                </span>
              </figcaption>
            </figure>

            <p className="mt-8 text-center text-lg leading-relaxed text-cocoa-600">
              Porque cuando una mujer entiende sus derechos, recupera su paz.
              Y no tenés que hacerlo sola:{" "}
              <strong className="font-semibold text-clay-700">
                cuando tenés una aliada, todo cambia.
              </strong>
            </p>
          </div>
        </section>

        {/* ===== SOBRE MÍ ===== */}
        <section
          id="sobre-mi"
          aria-labelledby="titulo-sobre-mi"
          className="bg-cream-50 py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <figure className="relative mx-auto w-full max-w-xl">
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-blush-200"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-4 -bottom-6 h-16 w-16 rounded-full bg-sage-200"
                />
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-lg">
                  <Image
                    src="/images/carolina-guerrero.jpg"
                    alt="Carolina Guerrero, fundadora de Aliada, en su estudio grabando contenido sobre derechos de las mujeres"
                    width={1280}
                    height={853}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <span className="absolute -bottom-7 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-cream-50 shadow-md">
                  <LogoMark className="h-11 w-auto" />
                </span>
              </figure>

              <div>
                <p className="text-xs font-semibold tracking-[0.24em] text-clay-700 uppercase">
                  Sobre mí
                </p>
                <h2
                  id="titulo-sobre-mi"
                  className="mt-3 text-3xl font-semibold text-cocoa-800 sm:text-4xl"
                >
                  Hola, soy Carolina. Tu aliada en el derecho.
                </h2>
                <p className="mt-5 leading-relaxed text-cocoa-600">
                  Soy abogada y trabajé el derecho de las mujeres por un
                  despertar: entendí que empoderar a una mujer desde el
                  reconocimiento de sus derechos no es solo ganar un juicio,
                  puede ser una revolución y un paso concreto hacia un mundo
                  más equitativo.
                </p>
                <p className="mt-4 leading-relaxed text-cocoa-600">
                  Creé el método Mapa para que ninguna mujer tenga que
                  defenderse con la voz baja: traducimos lo complejo a un plan
                  simple y te sostenemos en equipo para que no transites ningún
                  proceso con culpa, vergüenza o miedo.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Derecho de familia",
                    "Perspectiva de género",
                    "Método Mapa",
                    "Derecho Consciente",
                  ].map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-blush-300 bg-white px-4 py-1.5 text-sm font-medium text-cocoa-700"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VALORES ===== */}
        <section
          id="valores"
          aria-labelledby="titulo-valores"
          className="bg-cream-50 py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Nuestros valores"
              title="Así trabajamos con vos"
              subtitle="Cinco compromisos que hacen que el servicio se sienta como un abrazo, sin dejar de ser jurídicamente riguroso."
              titleId="titulo-valores"
            />

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Empatía radical",
                  d: "Primero escuchamos. Sin juzgar, y después abrazamos.",
                },
                {
                  n: "02",
                  t: "Claridad como alivio",
                  d: "Nuestra obsesión es que te vayas más tranquila de lo que llegaste.",
                },
                {
                  n: "03",
                  t: "Honestidad firme",
                  d: "Somos tu equipo: te decimos la verdad con determinación, aunque no sea la más cómoda.",
                },
                {
                  n: "04",
                  t: "Certeza técnica",
                  d: "Reemplazamos sospechas por pruebas. Nuestro diferencial es la estrategia.",
                },
                {
                  n: "05",
                  t: "Diseño y calidez",
                  d: "Todo lo que sale de Aliada es lindo, claro y cuidado. El servicio se tiene que sentir como un abrazo.",
                },
                {
                  n: "06",
                  t: "Derecho Consciente",
                  d: "Traducimos lo complejo a un plan simple, con perspectiva de género y trabajo en equipo.",
                },
              ].map((valor) => (
                <li
                  key={valor.n}
                  className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm"
                >
                  <span aria-hidden="true" className="font-script text-3xl text-clay-400">
                    {valor.n}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-cocoa-800">
                    {valor.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa-600">
                    {valor.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== SERVICIOS ===== */}
        <section
          id="servicios"
          aria-labelledby="titulo-servicios"
          className="bg-blush-100 py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Acompañamiento 1 a 1 · Alto valor"
              title="Servicios pensados para cada momento"
              subtitle="En criollo, sin tecnicismos y con un plan concreto al terminar cada encuentro."
              titleId="titulo-servicios"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* Aliada S.O.S */}
              <article className="flex flex-col rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200 text-clay-700"
                >
                  <SirenIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-cocoa-800">
                  Aliada S.O.S
                </h3>
                <p className="mt-1 text-2xl font-bold text-clay-700">
                  $65.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                  La consulta de urgencia para cuando te llega algo y no podés
                  esperar: una cédula, una notificación del juzgado o un “firmá
                  esto” que te dejó en blanco.
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-cocoa-700">
                  {[
                    "Te traduzco el papel en criollo",
                    "Vemos el riesgo de no contestar",
                    "Tu próximo paso inmediato",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cocoa-500">
                  <ClockIcon className="h-4 w-4" /> 30 minutos
                </p>
                <a
                  href="#agenda"
                  className="mt-4 rounded-full border-2 border-clay-700 py-3 text-center text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  Agendar
                </a>
              </article>

              {/* Aliada Preventiva */}
              <article className="flex flex-col rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200 text-clay-700"
                >
                  <ShieldIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-cocoa-800">
                  Aliada Preventiva
                </h3>
                <p className="mt-1 text-2xl font-bold text-clay-700">
                  $45.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                  El plan para tomar decisiones grandes sin arrepentirte
                  después: convivir, casarte, comprar algo a medias o ser
                  madre. La que piensa antes se ahorra 3 años de juicio.
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-cocoa-700">
                  {[
                    "Vemos tu situación patrimonial y familiar",
                    "Qué conviene firmar y qué no",
                    "Hoja de ruta de protección",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cocoa-500">
                  <ClockIcon className="h-4 w-4" /> 60 minutos
                </p>
                <a
                  href="#agenda"
                  className="mt-4 rounded-full border-2 border-clay-700 py-3 text-center text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  Agendar
                </a>
              </article>

              {/* Aliada Empoderada */}
              <article className="flex flex-col rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200 text-clay-700"
                >
                  <VoiceIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-cocoa-800">
                  Aliada Empoderada
                </h3>
                <p className="mt-1 text-2xl font-bold text-clay-700">
                  $65.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                  El entrenamiento para entrar a una mediación o audiencia sin
                  que te pasen por encima y sin que te manipule quien te haga
                  sentir culpa.
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-cocoa-700">
                  {[
                    "Preparamos juntas la audiencia",
                    "Simulación con guion de frases",
                    "Técnicas de comunicación asertiva",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cocoa-500">
                  <ClockIcon className="h-4 w-4" /> 60 minutos
                </p>
                <a
                  href="#agenda"
                  className="mt-4 rounded-full border-2 border-clay-700 py-3 text-center text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  Agendar
                </a>
              </article>

              {/* Aliada Estrategia — destacado */}
              <article className="relative flex flex-col rounded-3xl bg-sage-700 p-7 text-white shadow-lg">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-clay-700 px-4 py-1.5 text-xs font-bold tracking-wide whitespace-nowrap uppercase">
                  Recomendado
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white"
                >
                  <MapIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  Aliada Estrategia
                </h3>
                <p className="mt-1 text-2xl font-bold">$75.000</p>
                <p className="mt-3 text-sm leading-relaxed text-sage-100">
                  Tu Mapa Legal y Económico: el servicio integral que
                  reemplaza la sospecha por estrategia.
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {[
                    "Informe de solvencia y situación familiar",
                    "Hoja de ruta judicial con oficios (AFIP, ANSES, bancos)",
                    "Plan claro con pruebas para pedir lo justo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-200" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-sage-200">
                  <ClockIcon className="h-4 w-4" /> 60 min + informes
                </p>
                <a
                  href="#agenda"
                  className="mt-4 rounded-full bg-white py-3 text-center text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-100"
                >
                  Agendar
                </a>
              </article>
            </div>

            <p className="mt-8 text-center text-sm text-cocoa-500">
              Aliada Estrategia pasa a $95.000 desde diciembre de 2026 ·
              Reservá tu lugar con el valor actual.
            </p>
          </div>
        </section>

        {/* ===== GUÍAS DIGITALES ===== */}
        <section
          id="guias"
          aria-labelledby="titulo-guias"
          className="py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Aliada Guías · Biblioteca digital"
              title="Claridad accesible, desde donde estés"
              subtitle="Guías prácticas en PDF, diseñadas por mí, con lenguaje claro, pasos a seguir, checklists y modelos de escritos para que no empieces de cero."
              titleId="titulo-guias"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <article className="flex flex-col rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200 text-clay-700"
                >
                  <BookIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-cocoa-800">
                  Guía de cuota alimentaria
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cocoa-600">
                  Todo lo que necesitás saber para reclamar, aumentar y
                  asegurar la cuota alimentaria de tus hijos, con modelos de
                  escritos listos para usar.
                </p>
                <a
                  href="/pdfs/pdf1.pdf"
                  download
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-clay-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Descargar guía
                </a>
              </article>

              <article className="flex flex-col rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200 text-clay-700"
                >
                  <BookIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-cocoa-800">
                  Guía de bienes en pareja
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cocoa-600">
                  Cómo proteger lo que construiste y dividir con claridad los
                  bienes adquiridos durante la relación, con checklist
                  incluido.
                </p>
                <a
                  href="/pdfs/pdf2.pdf"
                  download
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-clay-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay-600"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Descargar guía
                </a>
              </article>

              <article className="flex flex-col justify-center rounded-3xl bg-clay-700 p-7 text-white shadow-md">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"
                >
                  <HeartHandIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  ¿Necesitás más claridad?
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-blush-100/90">
                  Si tu situación necesita una mirada personalizada, agendá una
                  consulta 1 a 1 y salí con tu plan.
                </p>
                <a
                  href="#agenda"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Agendar consulta
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ===== ¿TE SENTÍS IDENTIFICADA? ===== */}
        <section
          id="momentos"
          aria-labelledby="titulo-momentos"
          className="bg-cream-50 py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Nuestra aliada ideal"
              title="Si estás en alguno de estos momentos, estás en el lugar correcto"
              subtitle="Natalia, entre 28 y 48 años, profesional y responsable de todo, puede estar en tres momentos distintos. Pero siente lo mismo: incertidumbre, culpa y el cansancio de cargar sola."
              titleId="titulo-momentos"
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "Natalia Preventiva",
                  d: "Está por irse a convivir, casarse, comprar algo a medias o pensar en ser madre. Por dentro piensa: “no quiero que por amor termine perdiendo lo que tanto me costó”.",
                },
                {
                  t: "Natalia en crisis",
                  d: "Se está separando o divorciando y tiene que definir quién se queda dónde, los cuidados de los hijos y qué pasa con los bienes. Siente culpa, miedo y angustia de no saber por dónde empezar.",
                },
                {
                  t: "Natalia que sostiene sola",
                  d: "Ya está separada y sostiene todo sola: reclamar cuota, pedir aumento, ordenar el régimen de cuidados. Siente indignación porque el otro se borra mientras ella hace malabares.",
                },
              ].map((momento) => (
                <article
                  key={momento.t}
                  className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-clay-700">
                    {momento.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                    {momento.d}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-sage-100 p-8 text-center">
              <p className="text-lg leading-relaxed text-cocoa-700">
                No nos busca porque quiera ganar un juicio a cualquier precio.
                Nos busca porque quiere a alguien que sea{" "}
                <strong className="font-semibold text-sage-700">
                  su equipo
                </strong>
                : una profesional con autoridad que le hable con firmeza y
                honestidad, sin tecnicismos, y que le dé un plan.
              </p>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIOS ===== */}
        <section
          id="historias"
          aria-labelledby="titulo-historias"
          className="py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Testimonios reales"
              title="Lo que dicen las mujeres que ya fueron aliadas"
              titleId="titulo-historias"
            />

            <ul className="grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "Natalia",
                  s: "Aliada Estrategia",
                  q: "Gracias por darme claridad, ahora estoy más tranquila. Es bueno encontrar a una profesional tan humana y comprensiva.",
                },
                {
                  n: "Mariana",
                  s: "Aliada S.O.S",
                  q: "Me llegó una cédula del juzgado y me quedé en blanco. En 30 minutos entendí qué hacer y me saqué un peso de encima.",
                },
                {
                  n: "Carolina",
                  s: "Aliada Empoderada",
                  q: "Entré a la mediación segura, no reactiva. Defendí lo mío y lo de mis hijos sin desgastarme emocionalmente.",
                },
              ].map((testimonio) => (
                <li
                  key={testimonio.n}
                  className="flex flex-col rounded-3xl bg-blush-100 p-7"
                >
                  <div
                    role="img"
                    aria-label="Calificación: 5 de 5 estrellas"
                    className="flex gap-1 text-clay-500"
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-cocoa-700 italic">
                    “{testimonio.q}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-300 font-semibold text-cocoa-800"
                    >
                      {testimonio.n.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold text-cocoa-800">
                        {testimonio.n}
                      </span>
                      <span className="block text-sm text-cocoa-600">
                        Clienta de {testimonio.s}
                      </span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== PREGUNTAS FRECUENTES ===== */}
        <section
          id="preguntas"
          aria-labelledby="titulo-preguntas"
          className="py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              kicker="Preguntas frecuentes"
              title="Lo que suelen preguntarme antes de empezar"
              titleId="titulo-preguntas"
            />

            <div className="space-y-4">
              {[
                {
                  q: "¿Cómo es una consulta?",
                  a: "Online o presencial, siempre en criollo y sin tecnicismos. Contamos tu historia, vemos qué sabés, qué falta saber y armamos juntas el plan: qué hacer, cómo y cuándo.",
                },
                {
                  q: "¿Qué pasa después de agendar?",
                  a: "Confirmás el día y la hora, abonás por adelantado y tenemos nuestra sesión. Dentro de las 72 horas recibís tu entrega con la hoja de ruta y la invitación a la comunidad de mujeres.",
                },
                {
                  q: "¿Me van a prometer un resultado?",
                  a: "No, y eso es una garantía. Nadie puede prometerte saber exactamente qué gana tu ex sin una orden judicial, y la que te promete eso te miente. Lo que sí te prometemos es claridad, estrategia y honestidad firme.",
                },
                {
                  q: "¿Puedo consultar si todavía no quiero separarme?",
                  a: "Sí, y de hecho es lo ideal. Aliada Preventiva existe para eso: protegerte antes de firmar o mudarte, para que tus proyectos empiecen blindados.",
                },
                {
                  q: "¿Atienden solo en Salta?",
                  a: "No. Las consultas son online para todo el país, con especial foco en Salta, Jujuy y Buenos Aires.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-blush-200 bg-white px-6 py-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-cocoa-800">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-2xl leading-none font-light text-clay-600 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== AGENDA ===== */}
        <section
          id="agenda"
          aria-labelledby="titulo-agenda"
          className="bg-blush-100 py-20"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading
              kicker="Demos el primer paso"
              title="Agendá tu consulta"
              subtitle="Elegí el día y el horario que mejor te convengan. El pago se hace al agendar y tu lugar queda reservado."
              titleId="titulo-agenda"
            />

            <div className="rounded-3xl bg-white p-4 shadow-md sm:p-6">
              <iframe
                src="https://calendly.com/aliada-as-legal"
                title="Calendario para agendar una consulta con Aliada"
                loading="lazy"
                className="h-[600px] w-full rounded-2xl border-0"
              />
            </div>

            <div className="mt-10 text-center">
              <p className="text-cocoa-600">
                ¿Preferís escribirme directamente? Te respondo en menos de 24
                horas hábiles.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-sage-500"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:hola@aliada.com.ar"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-clay-600"
                >
                  <MailIcon className="h-5 w-5" />
                  hola@aliada.com.ar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section
          aria-labelledby="titulo-cta"
          className="relative overflow-hidden bg-sage-700 py-20 text-white"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/5" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <LogoFull size={72} className="mx-auto" />
            <h2
              id="titulo-cta"
              className="mt-6 text-3xl font-semibold sm:text-4xl"
            >
              ¿Lista para dejar de ir a ciegas?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-sage-100">
              Agendá tu consulta hoy y empezá a construir tu estrategia legal
              con claridad, respaldo y una comunidad que te sostiene.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#agenda"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-sage-700 shadow-md transition-colors hover:bg-sage-100"
              >
                Agendá tu consulta
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escribime por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chateá con Aliada por WhatsApp"
        className="fixed right-5 bottom-5 z-50 rounded-full bg-sage-600 p-4 text-white shadow-lg transition-transform hover:scale-105 hover:bg-sage-500"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
