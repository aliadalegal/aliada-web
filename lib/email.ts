import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCommunityEmail(data: {
  name: string;
  email: string;
  whatsapp: string;
  province?: string;
  locality?: string;
}) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: "aliada.as.legal@gmail.com",
      subject: "Nueva inscripción a la comunidad de Aliada",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background-color: #f9f9f9;
                border-radius: 8px;
                padding: 30px;
                border: 1px solid #e0e0e0;
              }
              h1 {
                color: #8B5A2B;
                font-size: 24px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 15px;
              }
              .field-label {
                font-weight: bold;
                color: #5D4037;
              }
              .field-value {
                color: #333;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>📧 Nueva inscripción a la comunidad de Aliada</h1>

              <div class="field">
                <span class="field-label">Nombre:</span>
                <span class="field-value">${data.name}</span>
              </div>

              <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value">${data.email}</span>
              </div>

              <div class="field">
                <span class="field-label">WhatsApp:</span>
                <span class="field-value">${data.whatsapp}</span>
              </div>

              ${data.province ? `
              <div class="field">
                <span class="field-label">Provincia:</span>
                <span class="field-value">${data.province}</span>
              </div>
              ` : ''}

              ${data.locality ? `
              <div class="field">
                <span class="field-label">Localidad:</span>
                <span class="field-value">${data.locality}</span>
              </div>
              ` : ''}

              <div class="footer">
                <p>Esta es una inscripción a la comunidad de Aliada. El formulario se completó el ${new Date().toLocaleString('es-AR')}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error enviando email:", error);
      // Si el error es de dominio no verificado, usar el dominio por defecto de Resend
      if (error.message?.includes("domain is not verified")) {
        console.log("Usando dominio por defecto de Resend...");
        return sendWithDefaultDomain(data);
      }
      throw error;
    }

    console.log("Email enviado exitosamente:", emailData);
    return { success: true, messageId: emailData.id };
  } catch (error) {
    console.error("Error en sendCommunityEmail:", error);
    throw error;
  }
}

async function sendWithDefaultDomain(data: {
  name: string;
  email: string;
  whatsapp: string;
  province?: string;
  locality?: string;
}) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aliada.as.legal@gmail.com",
      subject: "Nueva inscripción a la comunidad de Aliada",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background-color: #f9f9f9;
                border-radius: 8px;
                padding: 30px;
                border: 1px solid #e0e0e0;
              }
              h1 {
                color: #8B5A2B;
                font-size: 24px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 15px;
              }
              .field-label {
                font-weight: bold;
                color: #5D4037;
              }
              .field-value {
                color: #333;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>📧 Nueva inscripción a la comunidad de Aliada</h1>

              <div class="field">
                <span class="field-label">Nombre:</span>
                <span class="field-value">${data.name}</span>
              </div>

              <div class="field">
                <span class="field-label">Email:</span>
                <span class="field-value">${data.email}</span>
              </div>

              <div class="field">
                <span class="field-label">WhatsApp:</span>
                <span class="field-value">${data.whatsapp}</span>
              </div>

              ${data.province ? `
              <div class="field">
                <span class="field-label">Provincia:</span>
                <span class="field-value">${data.province}</span>
              </div>
              ` : ''}

              ${data.locality ? `
              <div class="field">
                <span class="field-label">Localidad:</span>
                <span class="field-value">${data.locality}</span>
              </div>
              ` : ''}

              <div class="footer">
                <p>Esta es una inscripción a la comunidad de Aliada. El formulario se completó el ${new Date().toLocaleString('es-AR')}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error enviando email con dominio por defecto:", error);
      throw error;
    }

    console.log("Email enviado exitosamente con dominio por defecto:", emailData);
    return { success: true, messageId: emailData.id, usingDefaultDomain: true };
  } catch (error) {
    console.error("Error en sendWithDefaultDomain:", error);
    throw error;
  }
}
