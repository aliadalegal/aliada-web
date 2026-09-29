"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";

export function Community() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    province: "",
    locality: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido.";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "El WhatsApp es obligatorio.";
    } else if (!/^[0-9\s\-\+\(\)]+$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Ingresá solo números y símbolos válidos.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario");
      }

      setSubmitted(true);
      setErrors({});
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
      console.error("Error enviando formulario:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  if (submitted) {
    return (
      <section
        id="community-success"
        aria-labelledby="community-success-title"
        className="py-20 bg-cream-50"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-sage-200 bg-sage-100 p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage-200">
              <CheckIcon className="h-10 w-10 text-sage-700" />
            </div>
            <h2
              id="community-success-title"
              className="mt-6 text-2xl font-semibold text-cocoa-800"
            >
              ¡Gracias por unirte a nuestra comunidad!
            </h2>
            <p className="mt-4 text-lg text-cocoa-700">
              Recibíás nuevos recursos, talleres y contenidos creados
              especialmente para mujeres como vos.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="community-error"
        aria-labelledby="community-error-title"
        className="py-20 bg-cream-50"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-200">
              <CheckIcon className="h-10 w-10 text-red-700" />
            </div>
            <h2
              id="community-error-title"
              className="mt-6 text-2xl font-semibold text-cocoa-800"
            >
              Hubo un error
            </h2>
            <p className="mt-4 text-lg text-cocoa-700">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="py-20 bg-blush-100"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            id="community-title"
            className="text-3xl font-semibold text-cocoa-800 sm:text-4xl"
          >
            QUEDATE CERCA.
          </h2>
          <p className="mt-4 text-xl text-cocoa-700">
            Aliada recién empieza. Si querés recibir nuevos recursos, talleres,
            actividades y contenidos creados especialmente para mujeres, podés
            formar parte de nuestra comunidad.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-blush-200 bg-white p-8 shadow-md"
          >
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-cocoa-800"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={`mt-2 w-full rounded-xl border-2 px-4 py-3 text-base transition-colors ${
                    errors.name
                      ? "border-red-400 bg-red-50 focus:border-red-600"
                      : "border-blush-200 focus:border-clay-700"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-cocoa-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`mt-2 w-full rounded-xl border-2 px-4 py-3 text-base transition-colors ${
                    errors.email
                      ? "border-red-400 bg-red-50 focus:border-red-600"
                      : "border-blush-200 focus:border-clay-700"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-cocoa-800"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+54 9 11 1234 5678"
                  className={`mt-2 w-full rounded-xl border-2 px-4 py-3 text-base transition-colors ${
                    errors.whatsapp
                      ? "border-red-400 bg-red-50 focus:border-red-600"
                      : "border-blush-200 focus:border-clay-700"
                  }`}
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-sm text-red-600">{errors.whatsapp}</p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="province"
                    className="block text-sm font-semibold text-cocoa-800"
                  >
                    Provincia
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    placeholder="Ej: Salta"
                    className={`mt-2 w-full rounded-xl border-2 px-4 py-3 text-base transition-colors ${
                      errors.province
                        ? "border-red-400 bg-red-50 focus:border-red-600"
                        : "border-blush-200 focus:border-clay-700"
                    }`}
                  />
                  {errors.province && (
                    <p className="mt-1 text-sm text-red-600">{errors.province}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="locality"
                    className="block text-sm font-semibold text-cocoa-800"
                  >
                    Localidad
                  </label>
                  <input
                    type="text"
                    id="locality"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    placeholder="Ej: San Salvador de Jujuy"
                    className={`mt-2 w-full rounded-xl border-2 px-4 py-3 text-base transition-colors ${
                      errors.locality
                        ? "border-red-400 bg-red-50 focus:border-red-600"
                        : "border-blush-200 focus:border-clay-700"
                    }`}
                  />
                  {errors.locality && (
                    <p className="mt-1 text-sm text-red-600">{errors.locality}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-4 w-full rounded-full bg-clay-700 px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-clay-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "ENVIANDO..." : "QUIERO SER PARTE"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-cocoa-600">
            Esta es una comunidad inicial gratuita / lista de interés. No
            presentamos membresías pagas.
          </p>
        </div>
      </div>
    </section>
  );
}
