import { Download, Mail, MessageSquare } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactBanner() {
  return (
    <section id="contato" className="py-16">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800/90 bg-linear-to-b from-zinc-900/70 via-zinc-900/40 to-zinc-950/90 p-8 sm:p-12 lg:p-16 text-center backdrop-blur-md shadow-2xl">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
            Vamos Conversar?
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-4">
            Pronto para acelerar seus produtos e elevar a barra técnica do seu
            time.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mb-8 leading-relaxed">
            Aberto para posições sênior (CLT/PJ), consultorias e projetos com
            foco em liderança técnica fullstack.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3.5 text-sm shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all"
              aria-label={`Conversar no WhatsApp ${profile.phone}`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp: {profile.phone}</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-zinc-700/80 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 font-semibold px-6 py-3.5 text-sm transition-colors"
              aria-label={`Enviar email para ${profile.email}`}
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              <span>{profile.email}</span>
            </a>
          </div>

          {/* Quick CV Download Action */}
          <a
            href="/Resume_PT.pdf"
            download="Bruno_Fukumori_CV_PT.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold px-4 py-2 text-xs transition-colors mb-6"
            aria-label="Baixar Currículo em Português"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Baixar CV (PT-BR)</span>
          </a>

          {/* Availability Details */}
          <p className="text-xs text-zinc-500 font-medium">
            Disponível full-time em horário comercial • São Paulo, Brasil
            (UTC-3)
          </p>
        </div>
      </div>
    </section>
  );
}
