"use client";

import Image from "next/image";
import { useEffect } from "react";
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
      <p className="text-xs font-bold tracking-[0.24em] text-green-primary uppercase">
        {kicker}
      </p>
      <h2
        id={titleId}
        className="mt-3 text-4xl font-display text-carbon sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-gray">
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
            <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: 'url(/images/hero-aliadas.jpg)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-pink-50/40 to-pink-50/50" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
            <h1
              id="titulo-hero"
              className="text-5xl font-display text-carbon sm:text-6xl md:text-7xl"
            >
              Recuperá el poder sobre tus derechos y cambia tu vida
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-green-primary sm:text-xl font-display">
              El derecho también puede ser una forma de cuidarte
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-green-primary transition-all hover:bg-white/10"
              >
                CONOCÉ NUESTROS SERVICIOS
              </a>
            </div>

            <p className="mt-6 text-sm text-green-primary/90">
              Atención online para todo el país · Salta · Jujuy · Buenos Aires
            </p>

            <dl className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10">
              <div className="text-center">
                <dt className="order-2 text-sm text-green-primary/90">
                  Seguidoras orgánicas
                </dt>
                <dd className="text-3xl font-bold text-green-primary">7.000+</dd>
              </div>
              <div aria-hidden="true" className="hidden h-12 w-px bg-green-primary/30 sm:block" />
              <div className="text-center">
                <dt className="order-2 text-sm text-green-primary/90">
                  Mujeres ya pidieron ayuda
                </dt>
                <dd className="text-3xl font-bold text-green-primary">150+</dd>
              </div>
              <div aria-hidden="true" className="hidden h-12 w-px bg-green-primary/30 sm:block" />
              <div className="text-center">
                <dt className="order-2 text-sm text-green-primary/90">
                  Dedicado a mujeres
                </dt>
                <dd className="text-3xl font-bold text-green-primary">100%</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ===== FRASE DE INTRODUCCIÓN ===== */}
        <section
          id="frase-introduccion"
          aria-labelledby="titulo-frase-introduccion"
          className="py-16 bg-pink-light"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p
              id="titulo-frase-introduccion"
              className="text-2xl font-display text-carbon sm:text-3xl"
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
              subtitle="Hay decisiones jurídicas que llegan acompañadas de miedo, culpa, vergüenza, incertidumbre o agotamiento. A veces no sabemos si estamos haciendo lo correcto. A veces ni siquiera sabemos qué deberíamos preguntar. Y muchas mujeres llegan al buscar una solución cuando el problema ya explotó. En Aliada creemos que puede ser diferente. El derecho también puede ser una herramienta para anticiparte, comprender tus opciones y recuperar claridad para decidir."
              titleId="titulo-por-que-existe"
            />

            <p className="mt-10 text-center text-xl font-display text-green-primary">
              INFORMACIÓN TAMBIÉN ES AUTONOMÍA.
            </p>
          </div>
        </section>

        {/* ===== ¿QUÉ ES ALIADA? ===== */}
        <section
          id="que-es-aliada"
          aria-labelledby="titulo-que-es-aliada"
          className="py-20 bg-cream"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              kicker="¿Qué es Aliada?"
              title="MUCHO MÁS QUE UN ESTUDIO JURÍDICO."
              subtitle="Derecho · Educación · Comunidad · Autonomía · Impacto"
              titleId="titulo-que-es-aliada"
            />

            <p className="text-lg leading-relaxed text-gray">
              Aliada es un espacio de asesoramiento jurídico para mujeres que
              quieren comprender sus opciones, proteger lo que les importa y
              tomar decisiones conscientes sobre su vida.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray">
              No solo te ayudo a entender tu situación, sino que también te ofrezco
              herramientas para que puedas defenderte de forma clara y estratégica.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-primary">
                  Derecho
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Asesoramiento jurídico claro y directo, sin tecnicismos.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-alt">
                  Educación
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Guías y recursos para que puedas comprender tu situación.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-clay-alt">
                  Comunidad
                </h3>
                <p className="mt-2 text-sm text-cocoa-600">
                  Un espacio seguro para compartir experiencias y apoyarnos.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-primary">
                  Autonomía
                </h3>
                <p className="mt-2 text-sm text-gray">
                  Te ayudo a tomar decisiones conscientes sobre tu vida.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-green-primary">
                  Impacto
                </h3>
                <p className="mt-2 text-sm text-gray">
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
          className="bg-pink-light py-20"
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
                  d: "Todo lo que sale de Aliada es auténtico, claro y cuidado. Nuestro servicio se sienta como un abrazo.",
                },
                {
                  n: "06",
                  t: "Derecho Consciente",
                  d: "Traducimos lo complejo a un plan simple, con perspectiva de género y trabajo en equipo.",
                },
              ].map((valor) => (
                <li
                  key={valor.n}
                  className="rounded-3xl border border-pink bg-white p-7 shadow-sm"
                >
                  <span aria-hidden="true" className="font-hand text-3xl text-green-primary">
                    {valor.n}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-carbon">
                    {valor.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">
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
          className="bg-cream py-20"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <figure className="relative mx-auto w-full max-w-xl">
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-pink"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-4 -bottom-6 h-16 w-16 rounded-full bg-green-secondary"
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
                <span className="absolute -bottom-7 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                  <span className="font-hand text-2xl text-green-primary">CG</span>
                </span>
              </figure>

              <div>
                <p className="text-xs font-bold tracking-[0.24em] text-green-primary uppercase">
                  Sobre mí
                </p>
                <h2
                  id="titulo-sobre-mi"
                  className="mt-3 text-4xl font-display text-carbon sm:text-5xl"
                >
                  SOY CAROLINA. Y CREÉ ALIADA PORQUE QUERÍA EJERCER EL DERECHO DE OTRA MANERA.
                </h2>
                <p className="mt-5 leading-relaxed text-gray">
                  Soy abogada y trabajé el derecho de las mujeres por un despertar:
                  entendí que empoderar a una mujer desde el reconocimiento de sus
                  derechos no es solo ganar un juicio, puede ser una revolución y un
                  paso concreto hacia un mundo más equitativo.
                </p>
                <p className="mt-4 leading-relaxed text-gray">
                  Creé el método MAPA para que ninguna mujer tenga que defenderse
                  con la voz baja: traducimos lo complejo a un plan simple y te
                  sostenemos en equipo para que no transitas ningún proceso con
                  culpa, vergüenza o miedo.
                </p>
                <p className="mt-4 text-xl font-display text-green-primary">
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
                      className="rounded-full border border-pink bg-white px-4 py-1.5 text-sm font-medium text-carbon"
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
          className="bg-pink py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="flex-1">
                <SectionHeading
                  kicker="Acompañamiento 1 a 1 · Alto valor"
                  title="ENCONTRÁ EL ACOMPAÑAMIENTO QUE NECESITÁS."
                  subtitle="No todas las situaciones necesitan la misma respuesta. Por eso creamos diferentes experiencias de consulta."
                  titleId="titulo-servicios"
                />
              </div>
              <div className="hidden md:block">
                <figure className="w-full max-w-xs">
                  <Image
                    src="/carolina-2.jpg"
                    alt="Carolina Guerrero, fundadora de Aliada, en una sesión de consulta"
                    width={400}
                    height={500}
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="h-auto w-full rounded-3xl shadow-lg"
                  />
                </figure>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* Aliada S.O.S */}
              <article className="flex flex-col rounded-3xl border border-pink bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-green-primary"
                >
                  <SirenIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-carbon">
                  ALIADA SOS
                </h3>
                <p className="mt-1 text-2xl font-bold text-green-primary">
                  $75.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Consultoría de claridad inmediata.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Una sesión enfocada y ágil de 30 minutos destinada a resolver de manera urgente una duda puntual, una notificación judicial o un conflicto específico que requiere una respuesta técnica directa y sin demoras.
                </p>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  ESTO ES PARA VOS SI:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray">
                  <li>• Te enfrentás a una situación legal imprevista que te genera incertidumbre y necesitás un diagnóstico técnico inmediato.</li>
                  <li>• Buscás resolver una duda puntual con una especialista, sin rodeos y con confidencialidad.</li>
                  <li>• Necesitás definir hoy tu mejor movimiento inmediato.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  QUÉ INCLUYE:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray">
                  <li>• Lectura express de la situación o del documento.</li>
                  <li>• Asesoramiento legal directo y personalizado durante 30 minutos.</li>
                  <li>• Definición de la acción inmediata para resguardarte.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  BENEFICIO
                </p>
                <p className="mt-2 text-sm text-gray">
                  Reemplazás la angustia y la parálisis por claridad técnica en solo media hora, sabiendo cuál es el próximo paso.
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 rounded-full border-2 border-green-primary py-3 text-center text-sm font-semibold text-green-primary transition-all duration-300 hover:bg-green-primary/90 hover:text-white"
                >
                  Agendá tu consulta
                </a>
              </article>

              {/* Aliada Preventiva */}
              <article className="flex flex-col rounded-3xl border border-pink bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-green-primary"
                >
                  <ShieldIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-carbon">
                  TU ALIADA PREVENTIVA
                </h3>
                <p className="mt-1 text-2xl font-bold text-green-primary">
                  $50.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Consulta de resguardo.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Un espacio estratégico de 40 minutos diseñado para anticiparte a decisiones importantes de tu vida —como convivir, casarte, planificar la llegada de un hijo o adquirir un inmueble— protegiendo tu patrimonio y tu tranquilidad de manera consciente.
                </p>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  ESTO ES PARA VOS SI:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-cocoa-600">
                  <li>• Estás por dar un gran paso familiar o patrimonial y querés hacerlo con la cabeza fría y la seguridad de estar cuidando tu futuro.</li>
                  <li>• No buscás que nadie decida por vos, sino contar con la información técnica necesaria para tomar tus propias decisiones con claridad.</li>
                  <li>• Entendés que el resguardo se construye de manera anticipada, evitando conflictos futuros costosos y emocionalmente desgastantes.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-clay-alt">
                  QUÉ INCLUYE:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-cocoa-600">
                  <li>• Análisis personalizado de tu situación civil y patrimonial actual.</li>
                  <li>• Identificación de posibles riesgos.</li>
                  <li>• Diseño de alternativas legales.</li>
                  <li>• Hoja de ruta digital con recomendaciones para dar pasos seguros.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  BENEFICIO
                </p>
                <p className="mt-2 text-sm text-gray">
                  La tranquilidad de saber que vos, tu familia y tus proyectos están protegidos bajo un marco legal sólido antes de firmar o asumir compromisos.
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 rounded-full border-2 border-green-primary py-3 text-center text-sm font-semibold text-green-primary transition-all duration-300 hover:bg-green-primary/90 hover:text-white"
                >
                  Agendá tu consulta
                </a>
              </article>

              {/* Aliada Estratégica */}
              <article className="flex flex-col rounded-3xl border border-pink bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-green-primary"
                >
                  <MapIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-carbon">
                  ALIADA ESTRATÉGICA
                </h3>
                <p className="mt-1 text-2xl font-bold text-green-primary">
                  $80.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Diagnóstico estratégico e informe de solvencia.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray">
                  El análisis más profundo de tu situación familiar, respaldado por una investigación técnica patrimonial para conocer la realidad económica del deudor de alimentos o ex esposo.
                </p>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  ESTO ES PARA VOS SI:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray">
                  <li>• Estás cansada de las evasivas sobre los ingresos reales del progenitor y decidiste que es hora de poner datos concretos sobre la mesa para defender el derecho de tus hijos.</li>
                  <li>• Buscás un espacio de contención profesional y respeto para diseñar una estrategia legal sólida, dejando atrás la improvisación.</li>
                  <li>• Estás lista para emprender un camino que requiere paciencia y trabajo en equipo.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  QUÉ INCLUYE:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray">
                  <li>• Sesión estratégica en profundidad de 60 minutos.</li>
                  <li>• Investigación técnica.</li>
                  <li>• Elaboración de un informe detallado sobre la situación económica, laboral y patrimonial del alimentante.</li>
                  <li>• Retroalimentación digitalizada con la estrategia diseñada para tu caso.</li>
                  <li>• Ejercicios prácticos de empoderamiento.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  BENEFICIO
                </p>
                <p className="mt-2 text-sm text-gray">
                  Reemplazás las sospechas por certezas técnicas y ganás previsibilidad y solidez para diseñar tu estrategia.
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 rounded-full border-2 border-green-primary py-3 text-center text-sm font-semibold text-green-primary transition-all duration-300 hover:bg-green-primary/90 hover:text-white"
                >
                  Agendá tu consulta
                </a>
              </article>

              {/* Aliada Empoderada */}
              <article className="flex flex-col rounded-3xl border border-pink bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-green-primary"
                >
                  <VoiceIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-carbon">
                  ALIADA EMPODERADA
                </h3>
                <p className="mt-1 text-2xl font-bold text-green-primary">
                  $75.000
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Preparación integral y fortaleza legal.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray">
                  Un entrenamiento técnico y de comunicación diseñado para que afrontes una audiencia de mediación con seguridad, sabiendo qué acordar, cómo expresarte y cómo sostener tus límites frente a la otra parte.
                </p>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  ESTO ES PARA VOS SI:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-cocoa-600">
                  <li>• Tenés una instancia de mediación por delante y querés sentarte a la mesa sintiéndote segura.</li>
                  <li>• Querés transformar la carga emocional en una estrategia de comunicación asertiva.</li>
                  <li>• Querés trabajar en equipo para ensayar el escenario, saber qué firmar y qué rechazar.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-clay-alt">
                  QUÉ INCLUYE:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-cocoa-600">
                  <li>• Sesión de preparación estratégica.</li>
                  <li>• Simulación del proceso.</li>
                  <li>• Diseño de propuestas de acuerdo.</li>
                  <li>• Guía digital con técnicas de comunicación asertiva.</li>
                  <li>• Herramientas para controlar las emociones y sostener límites.</li>
                </ul>

                <p className="mt-3 text-sm font-semibold text-green-primary">
                  BENEFICIO
                </p>
                <p className="mt-2 text-sm text-gray">
                  Ingresás a la audiencia con mayor preparación, claridad y firmeza, evitando desgaste emocional innecesario.
                </p>
                <a
                  href={WHATSAPP_URL}
                  className="mt-4 rounded-full border-2 border-green-primary py-3 text-center text-sm font-semibold text-green-primary transition-all duration-300 hover:bg-green-primary/90 hover:text-white"
                >
                  Agendá tu consulta
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ===== CUESTIONARIO INTERACTIVO ===== */}
        <section
          id="quiz"
          aria-labelledby="titulo-quiz"
          className="py-20"
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <Quiz />
          </div>
        </section>

        {/* ===== GUÍAS GRATUITAS ===== */}
        <section
          id="guias"
          aria-labelledby="titulo-guias"
          className="py-20 bg-pink-light"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              kicker="Aliada Guías · Biblioteca digital"
              title="RECURSOS PARA TU CAMINO."
              subtitle="Porque una Aliada también comparte herramientas."
              titleId="titulo-guias"
            />

            <p className="text-lg leading-relaxed text-gray">
              Creamos recursos gratuitos para ayudarte a comprender, organizar y
              atravesar diferentes situaciones con mayor claridad.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="flex flex-col rounded-3xl border border-pink bg-white p-7 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-green-primary"
                >
                  <BookIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-carbon">
                  Respuestas Estratégicas
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cocoa-600">
                  Una guía práctica para aprender a responder determinadas conversaciones por WhatsApp de manera más consciente y estratégica, especialmente cuando una conversación puede convertirse también en información relevante para tu situación.
                </p>
                <p className="mt-3 text-sm text-cocoa-600">
                  La guía ayuda a:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-cocoa-600">
                  <li>• Evitar responder impulsivamente.</li>
                  <li>• Conservar conversaciones relevantes.</li>
                  <li>• Pensar qué comunicar antes de enviar un mensaje.</li>
                  <li>• Utilizar la comunicación de manera estratégica.</li>
                </ul>
                <form
                  id="guide-download-form"
                  className="mt-6 space-y-3"
                >
                  <input
                    type="hidden"
                    name="guide"
                    value="respuestas-estrategicas"
                  />
                  <div>
                    <label
                      htmlFor="name-3"
                      className="sr-only"
                    >
                      Nombre
                    </label>
                    <input
                      id="name-3"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-full border border-blush-200 px-4 py-3 text-sm placeholder:text-blush-300 focus:border-blush-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email-3"
                      className="sr-only"
                    >
                      Email
                    </label>
                    <input
                      id="email-3"
                      name="email"
                      type="email"
                      required
                      placeholder="Tu email"
                      className="w-full rounded-full border border-blush-200 px-4 py-3 text-sm placeholder:text-blush-300 focus:border-blush-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-3"
                      className="sr-only"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone-3"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Tu teléfono"
                      className="w-full rounded-full border border-blush-200 px-4 py-3 text-sm placeholder:text-blush-300 focus:border-blush-300 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={async function() {
                      const form = document.getElementById('guide-download-form') as HTMLFormElement;
                      if (!form) return;

                      const formData = new FormData(form);
                      const pdfUrl = '/pdfs/Respuestas%20estrategicas%202026.pdf';

                      console.log('Iniciando descarga de guía...');
                      console.log('Datos del formulario:', {
                        guide: formData.get('guide'),
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                      });

                      try {
                        // 1. Enviar datos al API para recibir el email
                        console.log('Enviando datos a la API...');
                        const response = await fetch('/api/guide-download', {
                          method: 'POST',
                          body: formData,
                        });

                        console.log('Respuesta de la API:', {
                          status: response.status,
                          statusText: response.statusText,
                        });

                        if (!response.ok) {
                          const errorData = await response.text();
                          console.error('Error de la API:', errorData);
                          throw new Error(`Error de la API: ${response.status} - ${response.statusText}. Detalles: ${errorData}`);
                        }

                        // 2. Crear un enlace temporal para descargar el PDF
                        console.log('Creando enlace de descarga...');
                        const link = document.createElement('a');
                        link.href = pdfUrl;
                        link.download = 'Respuestas estrategicas 2026.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        console.log('Descarga iniciada correctamente');

                      } catch (error) {
                        console.error('Error al descargar la guía:', error);
                        alert('Hubo un error al descargar la guía. Por favor, intentá nuevamente.');
                      }
                    }}
                    className="w-full rounded-full bg-green-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-primary/90"
                  >
                    <DownloadIcon className="h-4 w-4 inline" />
                    QUIERO LA GUÍA
                  </button>
                </form>
              </article>

              <article className="flex flex-col justify-center rounded-3xl bg-green-primary p-7 text-green-primary shadow-md opacity-75">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"
                >
                  <HeartHandIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  PRÓXIMAMENTE
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white">
                  Estamos preparando nuevas guías gratuitas para acompañarte en otros momentos importantes de tu camino.
                </p>
                <button
                  disabled
                  className="mt-6 w-full rounded-full bg-green-primary/20 px-5 py-3 text-sm font-semibold text-green-primary cursor-not-allowed"
                >
                  PRÓXIMAMENTE
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* ===== CAPTURA DE COMUNIDAD ===== */}
        <Community />

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

            <div className="grid gap-8 md:grid-cols-2">
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
                    className="flex gap-1 text-clay-alt"
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
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-alt font-semibold text-cocoa-800"
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
            </div>

            <figure className="relative mx-auto mt-12 max-w-lg">
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-20 w-20 rounded-full bg-blush-200"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 -bottom-4 h-14 w-14 rounded-full bg-sage-200"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src="/carolina-1.jpg"
                  alt="Carolina Guerrero, fundadora de Aliada, sonriendo en una sesión de consulta"
                  width={640}
                  height={800}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p className="text-sm text-cocoa-600">
                  "Para cualquier situación, problema o conflicto, siempre es mejor tener una aliada."
                </p>
              </figcaption>
            </figure>
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

        {/* ===== CTA FINAL ===== */}
        <section
          aria-labelledby="titulo-cta"
          className="relative overflow-hidden bg-green-primary py-20 text-green-primary"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-pink/10" />
            <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-pink/5" />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2
              id="titulo-cta"
              className="text-3xl font-semibold sm:text-4xl text-white"
            >
              ¿HAY ALGO EN TU VIDA QUE NECESITÁS ENTENDER ANTES DE DECIDIR?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white">
              No hace falta que tengas todo claro para empezar.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
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
        className="fixed right-5 bottom-5 z-50 rounded-full bg-green-primary p-4 text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-primary/90"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
