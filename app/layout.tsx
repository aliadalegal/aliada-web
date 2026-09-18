import type { Metadata, Viewport } from "next";
import { Great_Vibes, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aliada · Derecho Consciente y empoderamiento para mujeres",
  description:
    "El primer ecosistema de Derecho Consciente del NOA. Educación, acompañamiento y representación legal para mujeres: claridad, estrategia y una comunidad que te sostiene. Agendá tu consulta.",
  keywords: [
    "derecho de familia",
    "abogada mujeres",
    "divorcio",
    "cuota alimentaria",
    "derecho consciente",
    "Aliada",
    "Salta",
    "Jujuy",
  ],
  openGraph: {
    title: "Aliada · Derecho Consciente y empoderamiento para mujeres",
    description:
      "Claridad, estrategia y acompañamiento legal para mujeres. Dejá de ir a ciegas: agendá tu consulta.",
    type: "website",
    locale: "es_AR",
    siteName: "Aliada",
  },
};

export const viewport: Viewport = {
  themeColor: "#7d4a3f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#contenido" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
