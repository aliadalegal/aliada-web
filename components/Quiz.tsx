"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

const questions = [
  {
    id: 1,
    text: "¿Qué describe mejor el momento en el que estás?",
    options: [
      {
        label: "Estoy por tomar una decisión importante y quiero protegerme antes de hacerlo.",
        value: "preventiva",
        points: 3,
      },
      {
        label: "Ya ocurrió algo y necesito saber qué hacer ahora.",
        value: "sos",
        points: 3,
      },
      {
        label: "Tengo un conflicto que requiere analizar información y estrategia.",
        value: "estrategica",
        points: 3,
      },
      {
        label: "Tengo una mediación o conversación importante y quiero prepararme.",
        value: "empoderada",
        points: 3,
      },
    ],
  },
  {
    id: 2,
    text: "¿Qué necesitás principalmente?",
    options: [
      {
        label: "Prevenir problemas futuros.",
        value: "preventiva",
        points: 3,
      },
      {
        label: "Resolver una duda puntual o urgente.",
        value: "sos",
        points: 3,
      },
      {
        label: "Comprender profundamente mi situación y diseñar una estrategia.",
        value: "estrategica",
        points: 3,
      },
      {
        label: "Prepararme para negociar o comunicarme con la otra persona.",
        value: "empoderada",
        points: 3,
      },
    ],
  },
  {
    id: 3,
    text: "¿Ya existe un conflicto?",
    options: [
      {
        label: "No. Quiero anticiparme.",
        value: "preventiva",
        points: 3,
      },
      {
        label: "Sí, pero necesito saber cuál es el próximo paso inmediato.",
        value: "sos",
        points: 3,
      },
      {
        label: "Sí, y necesito analizarlo en profundidad.",
        value: "estrategica",
        points: 3,
      },
      {
        label: "Sí, y próximamente tengo una mediación o instancia de negociación.",
        value: "empoderada",
        points: 3,
      },
    ],
  },
  {
    id: 4,
    text: "¿Cuál de estas situaciones se parece más a la tuya?",
    options: [
      {
        label: "Convivencia, matrimonio, llegada de un hijo, patrimonio o una decisión familiar importante.",
        value: "preventiva",
        points: 3,
      },
      {
        label: "Una notificación, documento o situación inesperada.",
        value: "sos",
        points: 3,
      },
      {
        label: "Alimentos, ingresos, patrimonio, situación económica del otro progenitor/ex pareja u otro conflicto que requiere investigación.",
        value: "estrategica",
        points: 3,
      },
      {
        label: "Mediación, negociación, acuerdo o conversación en la que necesitás prepararte.",
        value: "empoderada",
        points: 3,
      },
    ],
  },
  {
    id: 5,
    text: "¿Qué resultado te gustaría obtener?",
    options: [
      {
        label: "Saber cómo prevenir riesgos.",
        value: "preventiva",
        points: 2,
      },
      {
        label: "Saber exactamente qué hacer ahora.",
        value: "sos",
        points: 2,
      },
      {
        label: "Tener una estrategia integral.",
        value: "estrategica",
        points: 2,
      },
      {
        label: "Llegar preparada, segura y con límites claros.",
        value: "empoderada",
        points: 2,
      },
    ],
  },
];

const serviceDetails = {
  preventiva: {
    title: "ALIADA PREVENTIVA",
    description: "Consulta de resguardo. Un espacio estratégico de 40 minutos para analizar decisiones familiares o patrimoniales antes de asumir compromisos importantes.",
    price: "$50.000",
    duration: "40 minutos",
    cta: "QUIERO PREVENIR",
    link: "#agenda",
    features: [
      "Análisis de tu situación civil y patrimonial",
      "Identificación de riesgos",
      "Alternativas legales",
      "Hoja de ruta digital",
    ],
    reason:
      "Parece que estás por tomar una decisión importante y querés proteger lo que construiste antes de hacerlo.",
  },
  sos: {
    title: "ALIADA SOS",
    description: "Consultoría de claridad inmediata. Para cuando algo acaba de pasar y necesitás saber qué hacer ahora.",
    price: "$75.000",
    duration: "30 minutos",
    cta: "NECESITO CLARIDAD",
    link: "#agenda",
    features: [
      "Lectura express",
      "Asesoramiento personalizado",
      "Definición del próximo paso inmediato",
    ],
    reason:
      "Parece que estás atravesando una situación que ya está ocurriendo y necesitás entender rápidamente qué está pasando y cuál puede ser tu próximo paso.",
  },
  estrategica: {
    title: "ALIADA ESTRATÉGICA",
    description: "Diagnóstico estratégico e informe de solvencia. Para situaciones que necesitan algo más que una respuesta puntual.",
    price: "$80.000",
    duration: "60 minutos + informe",
    cta: "QUIERO ANALIZAR MI CASO",
    link: "#agenda",
    features: [
      "Sesión estratégica de 60 minutos",
      "Investigación técnica patrimonial",
      "Informe",
      "Retroalimentación digital",
      "Estrategia diseñada para el caso",
    ],
    reason:
      "Parece que estás atravesando un conflicto que requiere análisis profundo y estrategia integral.",
  },
  empoderada: {
    title: "ALIADA EMPODERADA",
    description: "Preparación integral para mediación. Para llegar a una mediación sabiendo qué querés, qué podés negociar y cuáles son tus límites.",
    price: "$75.000",
    duration: "Preparación para mediación",
    cta: "QUIERO PREPARARME",
    link: "#agenda",
    features: [
      "Preparación estratégica",
      "Simulación",
      "Diseño de propuestas",
      "Comunicación asertiva",
      "Guía digital",
    ],
    reason:
      "Parece que tienes una mediación o conversación importante por delante y querés prepararte para negociar sin perder de vista tus límites.",
  },
};

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommended, setRecommended] = useState<"preventiva" | "sos" | "estrategica" | "empoderada">(
    "sos"
  );

  const currentAnswer = answers[currentQuestion];

  const handleOptionSelect = (value: string, questionIndex: number) => {
    const newAnswers = { ...answers, [questionIndex]: value };
    setAnswers(newAnswers);

    // Verificar si completó todas las preguntas
    if (questionIndex < questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      calculateRecommended(newAnswers);
      setShowResult(true);
    }
  };

  const calculateRecommended = (userAnswers: Record<number, string>) => {
    const counts: Record<string, number> = {
      preventiva: 0,
      sos: 0,
      estrategica: 0,
      empoderada: 0,
    };

    for (let i = 1; i <= 4; i++) {
      const answer = userAnswers[i];
      if (answer && counts[answer] !== undefined) {
        counts[answer]++;
      }
    }

    // Pregunta 5 da 2 puntos
    const q5 = userAnswers[5];
    if (q5 && counts[q5] !== undefined) {
      counts[q5]++;
    }

    // Encontrar el servicio con más puntos
    let maxCount = 0;
    let recommendedService: keyof typeof counts = "sos";

    for (const [service, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        recommendedService = service as keyof typeof counts;
      }
    }

    // Reglas de desempate
    if (recommendedService === "preventiva") {
      // Si no hay conflictos en las primeras 4 preguntas, es preventiva
      const hasConflict = Object.values(userAnswers).some((a) =>
        ["sos", "estrategica", "empoderada"].includes(a)
      );
      if (!hasConflict) {
        setRecommended("preventiva");
        return;
      }
    }

    if (recommendedService === "sos") {
      // Si hay urgencia en la pregunta 3, es SOS
      const q3 = userAnswers[3];
      if (q3 === "sos") {
        setRecommended("sos");
        return;
      }
    }

    if (recommendedService === "empoderada") {
      // Si hay mediación próxima, es Empoderada
      const q4 = userAnswers[4];
      if (q4 === "empoderada") {
        setRecommended("empoderada");
        return;
      }
    }

    if (recommendedService === "estrategica") {
      // Si no hay mediación y se necesita análisis profundo
      const q4 = userAnswers[4];
      if (q4 !== "empoderada") {
        setRecommended("estrategica");
        return;
      }
    }

    setRecommended(recommendedService as "preventiva" | "sos" | "estrategica" | "empoderada");
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommended("sos");
  };

  if (showResult) {
    const details = serviceDetails[recommended];
    return (
      <section
        id="quiz-result"
        aria-labelledby="quiz-title"
        className="py-20 bg-cream-50"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2
              id="quiz-title"
              className="text-3xl font-semibold text-cocoa-800 sm:text-4xl"
            >
              POR LO QUE NOS CONTASTE, HOY NECESITÁS CLARIDAD.
            </h2>
            <p className="mt-6 text-xl text-cocoa-700">
              Tu consulta recomendada es:
            </p>
          </div>

          <article className="mt-10 rounded-3xl border border-blush-200 bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-cocoa-800">
              {details.title}
            </h3>
            <p className="mt-3 text-lg text-cocoa-700">{details.reason}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-clay-700 uppercase">
                  Precio
                </p>
                <p className="mt-1 text-3xl font-bold text-clay-600">
                  {details.price}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-clay-700 uppercase">
                  Duración
                </p>
                <p className="mt-1 text-xl font-semibold text-cocoa-800">
                  {details.duration}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {details.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" />
                  <span className="text-sm text-cocoa-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={details.link}
              className="mt-8 block w-full rounded-full bg-clay-700 px-8 py-4 text-center text-lg font-semibold text-white shadow-md transition-colors hover:bg-clay-600"
            >
              {details.cta}
            </a>

            <p className="mt-6 text-center text-sm text-cocoa-600">
              Este resultado es orientativo. La evaluación profesional de tu
              situación se realiza durante la consulta.
            </p>
          </article>

          <div className="mt-8 text-center">
            <button
              onClick={resetQuiz}
              className="rounded-full border-2 border-blush-300 px-8 py-3 text-base font-semibold text-cocoa-700 transition-colors hover:bg-blush-100"
            >
              HACER OTRA VEZ EL TEST
            </button>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section
      id="quiz"
      aria-labelledby="quiz-title"
      className="py-20 bg-sage-100"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            id="quiz-title"
            className="text-3xl font-semibold text-cocoa-800 sm:text-4xl"
          >
            ¿NO SABÉS QUÉ CONSULTA ELEGIR?
          </h2>
          <p className="mt-4 text-xl text-cocoa-700">
            No tenés que saberlo. Creé un pequeño cuestionario para ayudarte a
            identificar qué tipo de acompañamiento puede adaptarse mejor a la
            situación que estás atravesando.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <div className="flex justify-between text-sm font-semibold text-clay-700 mb-2">
              <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-blush-200">
              <div
                className="h-full bg-clay-700 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-blush-200 bg-white p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-cocoa-800">
              {question.text}
            </h3>

            <div className="mt-8 space-y-4">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value, currentQuestion)}
                  className={`w-full text-left rounded-2xl border-2 p-5 text-base transition-colors ${
                    currentAnswer === option.value
                      ? "border-clay-700 bg-clay-50"
                      : "border-blush-200 hover:border-blush-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                        currentAnswer === option.value
                          ? "border-clay-700 bg-clay-700"
                          : "border-blush-300"
                      }`}
                    >
                      {currentAnswer === option.value && (
                        <CheckIcon className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-cocoa-800">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-cocoa-600">
            Te lleva menos de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
