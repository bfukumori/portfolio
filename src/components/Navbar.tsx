"use client";

import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/portfolio";

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Brand / Left */}
        <Link
          href="#sobre"
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-700/80 bg-zinc-900 shrink-0">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={40}
              height={40}
              priority
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight group-hover:text-cyan-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline-block">
              {t.hero.tagline}
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-300"
          aria-label={t.navbar.ariaLabel}
        >
          <a
            href="#sobre"
            className="px-3 py-2 rounded-lg hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            {t.navbar.about}
          </a>
          <a
            href="#trajetoria"
            className="px-3 py-2 rounded-lg hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            {t.navbar.trajectory}
          </a>
          <a
            href="#projetos"
            className="px-3 py-2 rounded-lg hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            {t.navbar.projects}
          </a>
          <a
            href="#stack"
            className="px-3 py-2 rounded-lg hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            {t.navbar.stack}
          </a>
          <a
            href="#contato"
            className="px-3 py-2 rounded-lg hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            {t.navbar.contact}
          </a>
        </nav>

        {/* Right CTA / Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Availability Badge */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>{t.navbar.availability}</span>
          </div>

          {/* Language Switcher */}
          <fieldset
            className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900/80 p-0.5"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => setLocale("pt")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md transition-all ${
                locale === "pt"
                  ? "bg-zinc-800 text-white border border-zinc-700/60 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-label="Português"
              aria-pressed={locale === "pt"}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md transition-all ${
                locale === "en"
                  ? "bg-zinc-800 text-white border border-zinc-700/60 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-label="English"
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </fieldset>

          {/* WhatsApp CTA */}
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-2 text-xs sm:text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
            aria-label="Conversar no WhatsApp"
          >
            <MessageSquare className="h-4 w-4" />
            <span>{t.navbar.whatsapp}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
