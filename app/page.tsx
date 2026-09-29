"use client";

import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Quiz } from "@/components/Quiz";
import { Community } from "@/components/Community";
import {
  BookIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  DownloadIcon,
  HeartHandIcon,
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
            <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/images/hero-aliadas.jpg)' }} />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
            <h1
              id="titulo-hero"
              className="text-4xl leading-tight font-semibold text-cocoa-800 sm:text-5xl md:text-6xl"
            >
              EL DERECHO TAMBIÉN PUEDE SER UNA FORMA DE CUIDARTE
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cocoa-800 sm:text-xl font-semibold">
              Aliada es un espacio de asesoramiento jurídico para mujeres que
              quieren comprender sus opciones, proteger lo que les importa y
              tomar decisiones conscientes sobre su vida.
            </p>

            <p className="mt-4 text-xl font-semibold text-clay-700">
              El derecho como herramienta de autonomía.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#quiz"
                className="rounded-full bg-clay-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-clay-600"
              >
                ENCONTRÁ TU CONSULTA
              </a>
              <a
                href="#sobre-mi"
                className="rounded-full border-2 border-clay-700 px-8 py-4 text-lg font-semibold text-clay-700 transition-colors hover:bg-blush-100"
              >
                CONOCÉ ALIADA
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

        {/* ===== FRASE DE INTRODUCCIÓN ===== */}
        <section
          id="frase-introduccion"
          aria-labelledby="titulo-frase-introduccion"
          className="py-16 bg-blush-100"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p
              id="titulo-frase-introduccion"
              className="text-2xl font-semibold text-cocoa-800 sm:text-3xl"
            >
              No necesitás tener todas las respuestas. Pero frente a cualquier
              situación, problema o conflicto, siempre es mejor tener una Aliada.
            </p>
          </div>
        </section>

        {/* ===== ¿POR QUÉ EXISTE ALIADA? ===== */}
        <section
          id="por-que-existe"
          aria-labelledby="titulo-por-que-existe"
          className="py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              kicker="¿Por qué existe Aliada?"
              title="NO TENÉS QUE ATRAVESARLO TODO SOLA."
              subtitle="Sé lo que se siente intentar defenderte con la voz baja. Con la culpa de tener que reclamar. Con la vergüenza de tener que contar tu historia. Yo también lo sentí, y vi a cientos de mujeres sentirlo igual."
              titleId="titulo-por-que-existe"
            />

            <p className="text-lg leading-relaxed text-cocoa-700">
              Por eso en Aliada no vas a encontrar palabras difíciles para marearte,
              ni una abogada fría que te deje esperando. Acá vas a encontrar
              claridad: te voy a dar el mapa para que recuperes tu tranquilidad y
              el poder de decidir.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-cocoa-700">
              Porque cuando una mujer entiende sus derechos, recupera su paz.
              Y no tenés que hacerlo sola: cuando tenés una aliada, todo cambia.
            </p>
          </div>
        </section>

        {/* ===== ¿QUÉ ES ALIADA? ===== */}
        <section
          id="que-es-aliada"
          aria-labelledby="titulo-que-es-aliada"
          className="py-20 bg-sage-100"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              kicker="¿Qué es Aliada?"
              title="MUCHO MÁS QUE UN ESTUDIO JURÍDICO."
              subtitle="Derecho · Educación · Comunidad · Autonomía · Impacto"
              titleId="titulo-que-es-aliada"
            />

            <p className="text-lg leading-relaxed text-cocoa-700">
              Aliada es un espacio de asesoramiento jurídico para mujeres que
              quieren comprender sus opciones, proteger lo que les importa y
              tomar decisiones conscientes sobre su vida. Creo que el derecho puede
              ser una herramienta de autonomía, no una amenaza.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-cocoa-700">
              No solo te ayudo a entender tu situación, sino que también te ofrezco
              herramientas para que puedas defenderte de forma clara y estratégica.
              Creo en el derecho como herramienta de autonomía.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  Derecho
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Asesoramiento jurídico claro y directo, sin tecnicismos.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  Educación
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Guías y recursos para que puedas comprender tu situación.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  Comunidad
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Un espacio seguro para compartir experiencias y apoyarnos.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  Autonomía
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Te ayudo a tomar decisiones conscientes sobre tu vida.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  Impacto
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Cada caso es una oportunidad para crear un mundo más equitativo.
                </p>
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
              subtitle="Seis compromisos que hacen que el servicio se sienta como un abrazo, sin dejar de ser jurídicamente riguroso."
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

        {/* ===== SOBRE CAROLINA ===== */}
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
                  <span className="font-script text-2xl text-clay-700">CG</span>
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
                  SOY CAROLINA. Y CREÉ ALIADA PORQUE QUERÍA EJERCER EL DERECHO DE OTRA MANERA.
                </h2>
                <p className="mt-5 leading-relaxed text-cocoa-600">
                  Soy abogada y trabajé el derecho de las mujeres por un despertar:
                  entendí que empoderar a una mujer desde el reconocimiento de sus
                  derechos no es solo ganar un juicio, puede ser una revolución y un
                  paso concreto hacia un mundo más equitativo.
                </p>
                <p className="mt-4 leading-relaxed text-cocoa-600">
                  Creé el método Mapa para que ninguna mujer tenga que defenderse
                  con la voz baja: traducimos lo complejo a un plan simple y te
                  sostenemos en equipo para que no transitas ningún proceso con
                  culpa, vergüenza o miedo.
                </p>
                <p className="mt-4 text-lg font-semibold text-clay-700">
                  ME INVOLUCRO EN TODO LO QUE ME IMPORTA. Y ALIADA ES UNA DE ESAS COSAS.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Abogada",
                    "Mediadora",
                    "Educadora",
                    "Especialista en Derecho de Familia",
                    "Fundadora de Aliada",
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

        {/* ===== SERVICIOS ===== */}
        <section
          id="servicios"
          aria-labelledby="titulo-servicios"
          className="bg-blush-100 py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Acompañamiento 1 a 1 · Alto valor"
              title="ENCONTRÁ EL ACOMPAÑAMIENTO QUE NECESITÁS."
              subtitle="No todas las situaciones necesitan la misma respuesta. Por eso creamos diferentes experiencias de consulta."
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
                  $75.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                  La consulta de urgencia para cuando te llega algo y no podés
                  esperar: una cédula, una notificación del juzgado o un &ldquo;firmá
                  esto&rdquo; que te dejó en blanco.
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
                  href="#quiz"
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
                  $50.000
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
                  <ClockIcon className="h-4 w-4" /> 40 minutos
                </p>
                <a
                  href="#quiz"
                  className="mt-4 rounded-full border-2 border-clay-700 py-3 text-center text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  Agendar
                </a>
              </article>

              {/* Aliada Estratégica */}
              <article className="flex flex-col rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-200 text-clay-700"
                >
                  <MapIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-cocoa-800">
                  Aliada Estratégica
                </h3>
                <p className="mt-1 text-2xl font-bold text-clay-700">
                  $80.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-600">
                  Tu Mapa Legal y Económico: el servicio integral que
                  reemplaza la sospecha por estrategia.
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-cocoa-700">
                  {[
                    "Informe de solvencia y situación familiar",
                    "Hoja de ruta judicial con oficios (AFIP, ANSES, bancos)",
                    "Plan claro con pruebas para pedir lo justo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cocoa-500">
                  <ClockIcon className="h-4 w-4" /> 60 minutos + informe
                </p>
                <a
                  href="#quiz"
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
                  $75.000
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
                  href="#quiz"
                  className="mt-4 rounded-full border-2 border-clay-700 py-3 text-center text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  Agendar
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ===== ¿NO SABÉS QUÉ CONSULTA ELEGIR? ===== */}
        <section
          id="quiz-intro"
          aria-labelledby="titulo-quiz-intro"
          className="py-20 bg-sage-100"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <SectionHeading
              kicker="¿No sabés qué consulta elegir?"
              title="¿NO SABÉS QUÉ CONSULTA ELEGIR?"
              subtitle="No tenés que saberlo. Creé un pequeño cuestionario para ayudarte a identificar qué tipo de acompañamiento puede adaptarse mejor a la situación que estás atravesando."
              titleId="titulo-quiz-intro"
            />

            <p className="mt-6 text-lg leading-relaxed text-cocoa-700">
              Te lleva menos de 2 minutos.
            </p>

            <a
              href="#quiz"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-clay-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-clay-600"
            >
              ENCONTRÁ TU CONSULTA
            </a>
          </div>
        </section>

        {/* ===== CUESTIONARIO INTERACTIVO ===== */}
        <section
          id="quiz"
          aria-labelledby="titulo-quiz"
          className="py-20"
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <SectionHeading
              kicker="¿No sabés qué consulta elegir?"
              title="ENCONTRÁ TU CONSULTA"
              subtitle="Te lleva menos de 2 minutos"
              titleId="titulo-quiz"
            />

            <Quiz />
          </div>
        </section>

        {/* ===== GUÍAS GRATUITAS ===== */}
        <section
          id="guias"
          aria-labelledby="titulo-guias"
          className="py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Aliada Guías · Biblioteca digital"
              title="RECURSOS PARA TU CAMINO."
              subtitle="Porque una Aliada también comparte herramientas."
              titleId="titulo-guias"
            />

            <p className="text-lg leading-relaxed text-cocoa-700">
              Creamos recursos gratuitos para ayudarte a comprender, organizar y
              atravesar diferentes situaciones con mayor claridad.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
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
                  href="#quiz"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-clay-700 transition-colors hover:bg-blush-100"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Agendar consulta
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ===== CAPTURA DE COMUNIDAD ===== */}
        <Community />

        {/* ===== CLIENTA IDEAL ===== */}
        <section
          id="clienta-ideal"
          aria-labelledby="titulo-clienta-ideal"
          className="py-20 bg-cream-50"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <SectionHeading
              kicker="Nuestra aliada ideal"
              title="QUIZÁS ESTÁS ACÁ PORQUE..."
              subtitle="Natalia, entre 28 y 48 años, profesional y responsable de todo, puede estar en tres momentos distintos. Pero siente lo mismo: incertidumbre, culpa y el cansancio de cargar sola."
              titleId="titulo-clienta-ideal"
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  ESTÁS POR TOMAR UNA DECISIÓN IMPORTANTE
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Pensás en convivir, casarte, comprar algo a medias o ser madre.
                </p>
              </div>
              <div className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  ALGO ACABA DE PASAR
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Te llegó una cédula, una notificación o algo que te dejó en
                  blanco.
                </p>
              </div>
              <div className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  YA ESTÁS ATRAVESANDO UN CONFLICTO
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Tenés que reclamar, definir quién se queda dónde, o qué pasa
                  con los hijos.
                </p>
              </div>
              <div className="rounded-3xl border border-blush-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-700">
                  TENÉS UNA MEDIACIÓN POR DELANTE
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Queres prepararte para una audiencia o mediación importante.
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg leading-relaxed text-cocoa-700">
              No importa en qué momento estés. Podemos empezar por entender qué
              necesitás hoy.
            </p>
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
              title="LO QUE SIENTEN LAS MUJERES DESPUÉS DE SER ESCUCHADAS."
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
                    &ldquo;{testimonio.q}&rdquo;
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

        {/* ===== FAQ ===== */}
        <section
          id="preguntas"
          aria-labelledby="titulo-preguntas"
          className="py-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              kicker="Preguntas frecuentes"
              title="LO QUE SUELEN PREGUNTARME ANTES DE EMPEZAR"
              titleId="titulo-preguntas"
            />

            <div className="space-y-4">
              {[
                {
                  q: "¿Necesito saber qué consulta contratar?",
                  a: "No. Podés hacer el cuestionario interactivo, que te ayudará a identificar cuál servicio puede adaptarse mejor a tu situación. O si preferís, podés hablar conmigo primero.",
                },
                {
                  q: "¿Necesito estar segura de querer iniciar un juicio?",
                  a: "No. Aliada es para cuando necesitas claridad, estrategia y acompañamiento, no solo para cuando ya estás en un juicio. Antes de tomar cualquier decisión importante, vale la pena entender tus opciones.",
                },
                {
                  q: "¿Puedo consultar antes de que exista un conflicto?",
                  a: "Sí, y de hecho es lo ideal. Aliada Preventiva existe para eso: protegerte antes de firmar o mudarte, para que tus proyectos empiecen blindados.",
                },
                {
                  q: "¿Cómo es una consulta?",
                  a: "Online o presencial, siempre en criollo y sin tecnicismos. Contamos tu historia, vemos qué sabés, qué falta saber y armamos juntas el plan: qué hacer, cómo y cuándo.",
                },
                {
                  q: "¿Qué pasa después de agendar?",
                  a: "Confirmás el día y la hora, abonás por adelantado y tenemos nuestra sesión. Dentro de las 72 horas recibís tu entrega con la hoja de ruta.",
                },
                {
                  q: "¿Me van a prometer un resultado?",
                  a: "No, y eso es una garantía. Nadie puede prometerte saber exactamente qué gana tu ex sin una orden judicial, y la que te promete eso te miente. Lo que sí te prometemos es claridad, estrategia y honestidad firme.",
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

        {/* ===== MANIFIESTO ===== */}
        <section
          id="manifiesto"
          aria-labelledby="titulo-manifiesto"
          className="py-20 bg-sage-100"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <SectionHeading
              kicker="¿Por qué existe Aliada?"
              title="SER ALIADA ES..."
              titleId="titulo-manifiesto"
            />

            <figure className="relative rounded-3xl bg-clay-700 p-8 sm:p-10 text-white">
              <QuoteIcon className="absolute -top-5 left-8 h-10 w-10 text-clay-300" />
              <blockquote className="space-y-4 text-lg leading-relaxed">
                <p>
                  &ldquo;Sé lo que se siente intentar defenderte con la voz baja. Con la
                  culpa de tener que reclamar. Con la vergüenza de tener que
                  contar tu historia. Yo también lo sentí, y vi a cientos de
                  mujeres sentirlo igual.&rdquo;
                </p>
                <p>
                  Por eso en Aliada no vas a encontrar palabras difíciles para
                  marearte, ni una abogada fría que te deje esperando. Acá vas a
                  encontrar claridad: te voy a dar el mapa para que recuperes tu
                  tranquilidad y el poder de decidir.
                </p>
                <p>
                  Creé el método Mapa para que ninguna mujer tenga que defenderse
                  con la voz baja: traducimos lo complejo a un plan simple y te
                  sostenemos en equipo para que no transites ningún proceso con
                  culpa, vergüenza o miedo.
                </p>
                <p>
                  Porque cuando una mujer entiende sus derechos, recupera su paz.
                  Y no tenés que hacerlo sola: cuando tenés una aliada, todo
                  cambia.
                </p>
                <p>
                  Soy abogada y trabajé el derecho de las mujeres por un despertar:
                  entendí que empoderar a una mujer desde el reconocimiento de sus
                  derechos no es solo ganar un juicio, puede ser una revolución y
                  un paso concreto hacia un mundo más equitativo.
                </p>
                <p>
                  Creé el método Mapa para que ninguna mujer tenga que defenderse
                  con la voz baja: traducimos lo complejo a un plan simple y te
                  sostenemos en equipo para que no transitas ningún proceso con
                  culpa, vergüenza o miedo.
                </p>
                <p>
                  ME INVOLUCRO EN TODO LO QUE ME IMPORTA. Y ALIADA ES UNA DE ESAS
                  COSAS.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-clay-300 font-script text-2xl text-cocoa-800"
                >
                  CG
                </span>
                <span>
                  <span className="block font-script text-2xl text-clay-300">
                    Carolina Guerrero
                  </span>
                  <span className="block text-sm text-clay-200">
                    Dra. Fabiana Carolina Guerrero · Fundadora de Aliada
                  </span>
                </span>
              </figcaption>
            </figure>

            <p className="mt-8 text-2xl font-semibold text-clay-700">
              PORQUE NO NECESITÁS TENER TODAS LAS RESPUESTAS. PERO FRENTE A
              CUALQUIER SITUACIÓN, PROBLEMA O CONFLICTO... SIEMPRE ES MEJOR TENER
              UNA ALIADA.
            </p>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section
          aria-labelledby="titulo-cta"
          className="relative overflow-hidden bg-clay-700 py-20 text-white"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/5" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2
              id="titulo-cta"
              className="text-3xl font-semibold sm:text-4xl"
            >
              ¿HAY ALGO EN TU VIDA QUE NECESITÁS ENTENDER ANTES DE DECIDIR?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-clay-100">
              No hace falta que tengas todo claro para empezar.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#quiz"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-clay-700 shadow-md transition-colors hover:bg-blush-100"
              >
                ENCONTRÁ TU CONSULTA
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" />
                HABLÁ CON ALIADA
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
