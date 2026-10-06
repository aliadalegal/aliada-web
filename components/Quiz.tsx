"use client";

import { useState, useEffect } from "react";
import { CheckIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/5493874623956";

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Mapa: índice de pregunta (0..3) -> índice de la opción elegida en esa pregunta.
  // Se guarda el ÍNDICE (no el value) porque los values se repiten dentro
  // de una misma pregunta (p. ej. "estrategica" aparece 2 veces en la pregunta 2).
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommended, setRecommended] = useState<
    "preventiva" | "sos" | "estrategica" | "empoderada" | "contact"
  >("sos");

  // Scroll a la sección de resultados cuando se muestra
  useEffect(() => {
    if (showResult) {
      const resultElement = document.getElementById("quiz-result");
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [showResult]);

  const handleOptionSelect = (optionIndex: number, questionIndex: number) => {
    const newAnswers = { ...answers, [questionIndex]: optionIndex };
    setAnswers(newAnswers);

    // Verificar si completó todas las preguntas
    if (questionIndex < questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      calculateRecommended(newAnswers);
      setShowResult(true);
    }
  };

  const calculateRecommended = (userAnswers: Record<number, number>) => {
    // Derivar el value de cada respuesta a partir del índice de opción guardado.
    // values[i] = value elegido en la pregunta i (índices 0..3).
    const values = questions.map((question, questionIndex) => {
      const optionIndex = userAnswers[questionIndex];
      return optionIndex !== undefined
        ? question.options[optionIndex]?.value
        : undefined;
    });

    // Contar frecuencias de cada servicio (sobre las 4 preguntas)
    const counts: Record<string, number> = {
      preventiva: 0,
      sos: 0,
      estrategica: 0,
      empoderada: 0,
    };

    for (const value of values) {
      if (value && counts[value] !== undefined) {
        counts[value]++;
      }
    }

    // Encontrar el servicio con mayor puntuación
    let maxCount = 0;
    let recommendedService: string | null = null;

    for (const [service, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        recommendedService = service;
      }
    }

    // Si no hay respuestas suficientes, mostrar contacto
    if (!recommendedService || maxCount <= 1) {
      setRecommended("contact");
      return;
    }

    // Preguntas por índice CORRECTO (0..3)
    const q1 = values[0]; // ¿En qué momento estás?
    const q2 = values[1]; // ¿Qué necesitás resolver?
    const q3 = values[2]; // ¿Necesitás analizar información o documentación?
    const q4 = values[3]; // ¿Qué querés obtener de la consulta?

    // Regla 1: Prevención
    if (q1 === "preventiva") {
      setRecommended("preventiva");
      return;
    }

    // Regla 2: Mediación
    if (q4 === "empoderada") {
      setRecommended("empoderada");
      return;
    }

    // Regla 3: Complejidad (tiene prioridad sobre SOS)
    if (q2 === "estrategica" || q3 === "estrategica") {
      setRecommended("estrategica");
      return;
    }

    // Regla 4: SOS
    setRecommended("sos");
  };

  const questions = [
    {
      id: 1,
      text: "¿En qué momento estás?",
      options: [
        {
          label: "A. Estoy por tomar una decisión importante y quiero saber cómo protegerme antes.",
          value: "preventiva",
        },
        {
          label: "B. Ya ocurrió algo y necesito saber qué hacer ahora.",
          value: "sos",
        },
        {
          label: "C. Estoy atravesando un conflicto y necesito analizar mi situación.",
          value: "estrategica",
        },
        {
          label: "D. Tengo una mediación próxima y necesito prepararme.",
          value: "empoderada",
        },
      ],
    },
    {
      id: 2,
      text: "¿Qué necesitás resolver?",
      options: [
        {
          label: "A. Una duda puntual. Necesito saber qué significa algo.",
          value: "sos",
        },
        {
          label: "B. Necesito analizar información o documentos para diseñar una estrategia.",
          value: "estrategica",
        },
        {
          label: "C. Necesito prepararme para negociar o comunicarme en una mediación.",
          value: "empoderada",
        },
        {
          label: "D. Necesito conocer información económica o patrimonial.",
          value: "estrategica",
        },
      ],
    },
    {
      id: 3,
      text: "¿Necesitás analizar información o documentación para comprender tu situación completa?",
      options: [
        {
          label: "A. No. Solo necesito una respuesta concreta.",
          value: "sos",
        },
        {
          label: "B. Sí, pero se trata de un documento o notificación puntual.",
          value: "sos",
        },
        {
          label: "C. Necesito analizar distintos documentos o información.",
          value: "estrategica",
        },
        {
          label: "D. Necesito conocer información económica, laboral o patrimonial.",
          value: "estrategica",
        },
      ],
    },
    {
      id: 4,
      text: "¿Qué querés obtener de la consulta?",
      options: [
        {
          label: "A. Saber qué significa algo y cuál es mi próximo paso.",
          value: "sos",
        },
        {
          label: "B. Tener una estrategia completa para abordar mi situación.",
          value: "estrategica",
        },
        {
          label: "C. Prepararme para una mediación.",
          value: "empoderada",
        },
        {
          label: "D. Saber cómo protegerme antes de tomar una decisión.",
          value: "preventiva",
        },
      ],
    },
  ];

  const results = {
    preventiva: {
      title: "TU ALIADA PREVENTIVA",
      description: "Por lo que nos contaste, estás frente a una decisión importante y todavía estás a tiempo de anticiparte. Esta consulta está pensada para analizar riesgos y alternativas antes de asumir un compromiso.",
      cta: "QUIERO PREVENIR",
      link: "#quiz",
    },
    sos: {
      title: "ALIADA SOS",
      description: "Por lo que nos contaste, necesitás resolver una situación puntual y saber cuál es tu próximo paso. Esta consulta está pensada para darte claridad técnica de manera directa y ágil.",
      cta: "NECESITO CLARIDAD",
      link: "#quiz",
    },
    estrategica: {
      title: "ALIADA ESTRATÉGICA",
      description: "Por lo que nos contaste, tu situación necesita algo más que una respuesta puntual. Requiere análisis, información y una estrategia diseñada para tu caso.",
      cta: "QUIERO ANALIZAR MI CASO",
      link: WHATSAPP_URL,
    },
    empoderada: {
      title: "ALIADA EMPODERADA",
      description: "Por lo que nos contaste, tenés una instancia de mediación o negociación por delante y necesitás llegar preparada, sabiendo qué querés, qué podés negociar y cuáles son tus límites.",
      cta: "QUIERO PREPARARME",
      link: WHATSAPP_URL,
    },
    contact: {
      title: "NECESITÁS AYUDA PERSONALIZADA",
      description: "Tu situación requiere una orientación más personalizada. Te invitamos a contactarnos directamente para recibir asesoramiento específico.",
      cta: "CONTACTAR A ALIADA",
      link: WHATSAPP_URL,
    },
  };

  if (showResult) {
    const result = results[recommended];
    return (
      <section
        id="quiz-result"
        aria-labelledby="quiz-title"
        className="py-20 bg-cream"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h2
              id="quiz-title"
              className="text-4xl font-display text-carbon sm:text-5xl"
            >
              {result.title}
            </h2>
            <p className="mt-6 text-xl text-gray">{result.description}</p>
            <a
              href={result.link}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-green-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
            >
              {result.cta}
            </a>
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
      className="py-4 bg-sage-100"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-2">
          <h2
            id="quiz-title"
            className="text-3xl font-semibold text-cocoa-800 sm:text-4xl"
          >
            ¿NO SABÉS QUÉ CONSULTA ELEGIR?
          </h2>
          <p className="mt-4 text-xl text-cocoa-700">
            No tenés que saberlo. Creé un pequeño cuestionario para ayudarte a identificar qué tipo de acompañamiento puede adaptarse mejor a la situación que estás atravesando.
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
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleOptionSelect(optionIndex, currentQuestion)}
                  className="w-full text-left rounded-2xl border-2 p-5 text-base transition-colors hover:border-blush-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestion] === optionIndex
                          ? "border-clay-700 bg-clay-700"
                          : "border-blush-300"
                      }`}
                    >
                      {answers[currentQuestion] === optionIndex && (
                        <CheckIcon className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-cocoa-800">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-green-primary">
            Te lleva menos de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
}
