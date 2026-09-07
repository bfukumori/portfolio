import { ArrowUpRight, Globe } from "lucide-react";
import { AppleIcon } from "@/components/AppleIcon";
import { GithubIcon } from "@/components/GithubIcon";
import { PlayStoreIcon } from "@/components/PlayStoreIcon";
import { featuredProjects, profile } from "@/data/portfolio";

export function FeaturedProjectsSection() {
  return (
    <section id="projetos" className="py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-zinc-800/80 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            Cases de Impacto
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Projetos em Destaque
          </h2>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-cyan-300 transition-colors"
        >
          <span>Ver todos no GitHub</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* 3 Featured Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => {
          return (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-xs transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/70"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-cyan-400/90 font-mono tracking-wide">
                    {project.categoryTag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-100 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 bg-zinc-800/60 px-2 py-1 text-[11px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Badge */}
                {project.statusBadge && (
                  <div className="mb-3">
                    {project.isProduction ? (
                      <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span>{project.statusBadge}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-zinc-500 font-mono">
                        {project.statusBadge}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Links (Web, App Store, Google Play, GitHub) */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800/60">
                  {project.webUrl && (
                    <a
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 px-2.5 py-1 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                      title="Acessar Web / Portal"
                      aria-label={`Acessar portal web de ${project.title}`}
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Web</span>
                    </a>
                  )}

                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/80 hover:bg-zinc-700 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                      title="Download na App Store (iOS)"
                      aria-label={`Baixar aplicativo ${project.title} na Apple App Store`}
                    >
                      <AppleIcon className="h-3.5 w-3.5 text-zinc-300" />
                      <span>App Store</span>
                    </a>
                  )}

                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/80 hover:bg-zinc-700 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                      title="Download no Google Play (Android)"
                      aria-label={`Baixar aplicativo ${project.title} no Google Play Store`}
                    >
                      <PlayStoreIcon className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Google Play</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-800/60 hover:bg-zinc-800 hover:border-zinc-700 px-2.5 py-1 text-xs font-semibold text-zinc-300 hover:text-cyan-300 transition-colors"
                      title="Ver repositório no GitHub"
                      aria-label={`Ver repositório de ${project.title} no GitHub`}
                    >
                      <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
