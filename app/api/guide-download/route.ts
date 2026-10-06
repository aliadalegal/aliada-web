import { NextRequest, NextResponse } from "next/server";

async function sendGuideEmail(guide: string, name: string, email: string, phone: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM || "aliada.as.legal@gmail.com";

  console.log('Enviando email de guía a Resend...');
  console.log('From:', resendFrom);
  console.log('To:', resendFrom);
  console.log('Subject: PDF descargado:', guide);

  const { data: emailData, error } = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: resendFrom,
      subject: `PDF descargado: ${guide}`,
      text: `PDF (${guide}) descargado\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}`,
    }),
  }).then(async (res) => {
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error de Resend:", errorText);
      // Verificar si es error de dominio no verificado
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.message?.includes("domain is not verified") || errorJson.message?.includes("gmail.com")) {
          console.log("Usando dominio por defecto de Resend...");
          return sendWithDefaultDomain(guide, name, email, phone);
        }
      } catch (e) {
        // Si no es JSON, verificar directamente
        if (errorText.includes("domain is not verified") || errorText.includes("gmail.com")) {
          console.log("Usando dominio por defecto de Resend...");
          return sendWithDefaultDomain(guide, name, email, phone);
        }
      }
      throw new Error(errorText);
    }
    return res.json();
  });

  if (error) {
    console.error("Error enviando email:", error);
    // Si el error es de dominio no verificado, usar el dominio por defecto de Resend
    try {
      const errorJson = JSON.parse(error.message || error);
      if (errorJson.message?.includes("domain is not verified") || errorJson.message?.includes("gmail.com")) {
        console.log("Usando dominio por defecto de Resend...");
        return sendWithDefaultDomain(guide, name, email, phone);
      }
    } catch (e) {
      // Si no es JSON, verificar directamente
      if (error.message?.includes("domain is not verified") || error.message?.includes("gmail.com")) {
        console.log("Usando dominio por defecto de Resend...");
        return sendWithDefaultDomain(guide, name, email, phone);
      }
    }
    throw error;
  }

  console.log("Email enviado exitosamente:", emailData);
  return { success: true, messageId: emailData?.id || 'unknown' };
}

async function sendWithDefaultDomain(guide: string, name: string, email: string, phone: string) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = "onboarding@resend.dev";

  console.log("Enviando email con dominio por defecto...");

  const { data: emailData, error } = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resendFrom,
      to: process.env.RESEND_FROM || "aliada.as.legal@gmail.com",
      subject: `PDF descargado: ${guide}`,
      text: `PDF (${guide}) descargado\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}`,
    }),
  }).then(async (res) => {
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error enviando email con dominio por defecto:", errorText);
      throw new Error(errorText);
    }
    return res.json();
  });

  if (error) {
    console.error("Error enviando email con dominio por defecto:", error);
    throw error;
  }

  console.log("Email enviado exitosamente con dominio por defecto:", emailData);
  return { success: true, messageId: emailData?.id || 'unknown', usingDefaultDomain: true };
}

export async function POST(request: NextRequest) {
  console.log('=== Recibiendo solicitud de descarga de guía ===');

  try {
    const formData = await request.formData();
    console.log('FormData recibido:', formData);

    const guide = formData.get("guide") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    console.log('Datos:', { guide, name, email, phone });

    if (!guide || !name || !email || !phone) {
      console.error('Datos incompletos');
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const message = `PDF (${guide}) descargado\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}`;
    console.log('Mensaje:', message);

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM || "aliada.as.legal@gmail.com";

    console.log('API Key:', resendApiKey ? 'CONFIGURADA' : 'NO CONFIGURADA');
    console.log('From:', resendFrom);

    // Enviar email usando Resend
    if (resendApiKey) {
      await sendGuideEmail(guide, name, email, phone);
    } else {
      console.log("API KEY no configurada");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al procesar:", error);
    return NextResponse.json(
      { error: "Error al procesar la descarga" },
      { status: 500 }
    );
  }
}
