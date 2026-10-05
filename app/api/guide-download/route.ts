import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { guide, name, email, phone } = body;

    // Validate required fields
    if (!guide || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Send confirmation email
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: "aliada.as.legal@gmail.com",
      subject: `Nueva descarga de guía: ${guide}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a4a4a;">Nueva descarga de guía</h2>
          <p style="color: #666;">Se ha solicitado la descarga de la guía:</p>
          <h3 style="color: #2c5282;">${guide}</h3>
          <hr style="border: 1px solid #e2e8f0;">
          <p style="color: #666;"><strong>Nombre:</strong> ${name}</p>
          <p style="color: #666;"><strong>Email:</strong> ${email}</p>
          <p style="color: #666;"><strong>Teléfono:</strong> ${phone}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing guide download:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
