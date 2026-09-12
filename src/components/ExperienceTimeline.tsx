"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/data/portfolio";

export function ExperienceTimeline() {
  const { t } = useLanguage();

  const roleTranslations = t.experience.roles as unknown as Record<
    string,
    { role: string; period: string; description: string[] }
  >;

  return (
    <section id="trajetoria" className="py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-zinc-800/80 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            {t.experience.sectionEyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight">
            {t.experience.sectionTitle}
          </h2>
        </div>
        <span className="text-xs sm:text-sm font-mono text-zinc-400">
          {t.experience.sectionSummary}
        </span>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/80 space-y-10">
        {experiences.map((exp) => {
          const translated = roleTranslations[exp.id];
          const role = translated?.role ?? exp.role;
          const period = translated?.period ?? exp.period;
          const description = translated?.description ?? exp.description;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Glowing Node */}
              <div
                className={`absolute -left-7.75 sm:-left-9.75 top-6 h-4 w-4 rounded-full border-2 border-zinc-950 transition-transform group-hover:scale-125 ${
                  exp.isCurrent
                    ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                    : "bg-zinc-700 group-hover:bg-cyan-400/80"
                }`}
              />

              {/* Experience Card */}
              <article className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-xs transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/70">
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 flex flex-wrap items-center gap-2">
                      <span>{role}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-cyan-300 font-semibold">
                        {exp.company}
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-mono font-medium border ${
                        exp.isCurrent
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                          : "bg-zinc-800/80 border-zinc-700/60 text-zinc-400"
                      }`}
                    >
                      {period}
                    </span>
                  </div>
                </div>

                {/* Description Bullet Points */}
                <div className="space-y-2.5 mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {description.map((item) => (
                    <p key={item} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-mono mt-1 text-xs">
                        ▹
                      </span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-1 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
