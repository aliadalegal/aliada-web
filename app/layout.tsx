import type { Metadata, Viewport } from "next";
import { Caveat, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
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
      className={`${dmSans.variable} ${dmSerif.variable} ${caveat.variable} h-full antialiased`}
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
