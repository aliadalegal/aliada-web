"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoFull } from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#guias", label: "Guías" },
  { href: "#historias", label: "Historias" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-blush-200 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-center gap-8 px-4 sm:px-6">
        <Link
          href="#inicio"
          className="rounded-lg"
          aria-label="Aliada — ir al inicio"
          onClick={() => setOpen(false)}
        >
          <LogoFull size={46} priority />
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-cocoa-700 transition-colors hover:bg-blush-100 hover:text-clay-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-lg p-2.5 text-cocoa-700 transition-colors hover:bg-blush-100 lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="border-t border-blush-200 bg-cream-50 px-4 pt-2 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-cocoa-800 transition-colors hover:bg-blush-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
