import { NextRequest, NextResponse } from "next/server";
import { sendCommunityEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, province, locality } = body;

    // Validaciones básicas
    if (!name || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Enviar email
    await sendCommunityEmail({ name, email, whatsapp, province, locality });

    return NextResponse.json(
      { success: true, message: "Inscripción recibida correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API de comunidad:", error);
    return NextResponse.json(
      { error: "Error al procesar la inscripción" },
      { status: 500 }
    );
  }
}
