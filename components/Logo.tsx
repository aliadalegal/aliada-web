type LogoProps = {
  className?: string;
};

/** Marca gráfica: dos hojas enfrentadas, en eco del logo del plan de marca. */
export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M17.5 4.5C8.5 15 8.5 30.5 18.5 43"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M30.5 4.5C39.5 15 39.5 30.5 29.5 43"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M24 10c3.2 4.8 3.2 9.7 0 14.4-3.2-4.7-3.2-9.6 0-14.4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Logotipo completo: marca + palabra en caligrafía + lema. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 shrink-0 text-clay-700" />
      <span className="flex flex-col leading-none">
        <span className="font-script text-3xl text-cocoa-800">Aliada</span>
        {!compact && (
          <span className="mt-0.5 text-[0.65rem] font-semibold tracking-[0.22em] text-sage-600 uppercase">
            Derecho consciente
          </span>
        )}
      </span>
    </span>
  );
}
