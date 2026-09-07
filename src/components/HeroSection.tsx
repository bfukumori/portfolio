import { Download, MapPin, MessageSquare, Sparkles } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="sobre" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{profile.heroEyebrow}</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.15] mb-6">
            {profile.heroTitle.prefix}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-300 to-teal-300">
              {profile.heroTitle.highlight}
            </span>{" "}
            {profile.heroTitle.suffix}
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
            Especialista em ecossistemas modernos (
            <strong className="text-zinc-100 font-semibold">
              Node.js/Next.js
            </strong>
            , <strong className="text-zinc-100 font-semibold">React</strong> e{" "}
            <strong className="text-zinc-100 font-semibold">
              React Native/Expo
            </strong>
            ). Experiência comprovada em portais de saúde atendendo mais de 2
            milhões de vidas e governança corporativa no mercado financeiro.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a
              href="/Resume_PT.pdf"
              download="Bruno_Fukumori_CV_PT.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 px-5 py-3 text-sm font-bold text-zinc-950 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
              aria-label="Baixar Currículo em PDF"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Baixar Currículo (PDF)</span>
            </a>

            {/* Language Selection */}
            <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900/80 p-1">
              <a
                href="/Resume_PT.pdf"
                download="Bruno_Fukumori_CV_PT.pdf"
                className="px-3 py-2 text-xs font-bold text-zinc-200 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Currículo em Português"
              >
                [PT-BR]
              </a>
              <span className="text-zinc-700 text-xs">|</span>
              <a
                href="/Resume_EN.pdf"
                download="Bruno_Fukumori_CV_EN.pdf"
                className="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Resume in English"
              >
                [EN]
              </a>
            </div>

            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900/80 hover:bg-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors"
              aria-label="Conversar direto no WhatsApp"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Conversar Direto</span>
            </a>
          </div>

          {/* Social Links & Location Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4 text-zinc-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
            >
              <GithubIcon className="h-4 w-4 text-zinc-400" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="h-4 w-4 text-zinc-500" />
              <span>{profile.locationDetails}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Showcase Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-r from-cyan-500/20 via-sky-500/10 to-emerald-500/20 blur-xl opacity-70" />

            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-950/90 p-4 sm:p-5 shadow-2xl">
              {/* Badge Top Right */}
              <div className="absolute top-6 right-6 z-20 rounded-full border border-cyan-500/30 bg-zinc-950/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-cyan-300 flex items-center gap-1.5 shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{profile.experienceBadge}</span>
              </div>

              {/* Profile Image with Next.js Optimization */}
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <Image
                  src={profile.avatarUrl}
                  alt={`Foto de ${profile.name} - ${profile.role}`}
                  width={500}
                  height={500}
                  priority
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 backdrop-blur-xs">
                <div className="flex flex-col mb-2.5">
                  <span className="text-base font-bold text-zinc-100">
                    {profile.name}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {profile.tagline} • Tech Lead / Sênior
                  </span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {profile.heroCardTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700/60 bg-zinc-800/70 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
