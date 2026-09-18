import Image from "next/image";

const LOGO_URL = "/marca/logo-aliada.png"; // logotipo completo (487×488)
const MARCA_URL = "/marca/marca-aliada.png"; // marca de las hojas (80×121)

/** Logotipo circular completo: marca + "Aliada" + "Derecho consciente". */
export function LogoFull({
  size = 48,
  priority = false,
  className,
}: {
  size?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={LOGO_URL}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}

/** Marca gráfica de las hojas, recortada del logo original. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={MARCA_URL}
      alt=""
      aria-hidden="true"
      width={80}
      height={121}
      className={className}
    />
  );
}
