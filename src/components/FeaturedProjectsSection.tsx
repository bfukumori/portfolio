"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppleIcon } from "@/components/AppleIcon";
import { GithubIcon } from "@/components/GithubIcon";
import { PlayStoreIcon } from "@/components/PlayStoreIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredProjects, profile } from "@/data/portfolio";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projectTranslations = t.projects.items as Record<
    string,
    {
      categoryTag: string;
      title: string;
      description: string;
      statusBadge?: string;
    }
  >;

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-project-card]",
    );
    if (!cards.length) return;

    if (maxScroll > 0 && scrollLeft >= maxScroll - 20) {
      setActiveIndex(cards.length - 1);
      return;
    }

    const containerLeft = container.getBoundingClientRect().left;
    let closestIndex = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const diff = Math.abs(card.getBoundingClientRect().left - containerLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateScrollState();

    const handleScroll = () => {
      window.requestAnimationFrame(updateScrollState);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateScrollState]);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-project-card]",
    );
    const card = cards[index];
    if (!card) return;

    const containerLeft = container.getBoundingClientRect().left;
    const cardLeft = card.getBoundingClientRect().left;
    const targetScrollLeft = container.scrollLeft + (cardLeft - containerLeft);

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-project-card]");
    const cardWidth = card?.offsetWidth ?? 340;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (container.scrollLeft <= 10) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>("[data-project-card]");
    const cardWidth = card?.offsetWidth ?? 340;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projetos"
      className="py-16"
      aria-roledescription="carousel"
      aria-label={t.projects.sectionTitle}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-zinc-800/80 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            {t.projects.sectionEyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight">
            {t.projects.sectionTitle}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-cyan-300 transition-colors"
          >
            <span>{t.projects.viewGithub}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 border-l border-zinc-800/80 pl-4">
            <span className="text-xs font-mono text-zinc-500 mr-1 select-none">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(featuredProjects.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-cyan-300 transition-all active:scale-95 cursor-pointer shadow-xs"
              aria-label={t.projects.prevSlide}
              title={t.projects.prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-cyan-300 transition-all active:scale-95 cursor-pointer shadow-xs"
              aria-label={t.projects.nextSlide}
              title={t.projects.nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 no-scrollbar rounded-2xl"
      >
        {featuredProjects.map((project) => {
          const translated = projectTranslations[project.id];
          const categoryTag = translated?.categoryTag ?? project.categoryTag;
          const title = translated?.title ?? project.title;
          const description = translated?.description ?? project.description;
          const statusBadge = translated?.statusBadge ?? project.statusBadge;

          return (
            <div
              key={project.id}
              data-project-card
              className="w-[86vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col"
            >
              <article className="group relative flex flex-1 flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-xs transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/70">
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-cyan-400/90 font-mono tracking-wide">
                      {categoryTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-100 mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {description}
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
                  {statusBadge && (
                    <div className="mb-3">
                      {project.isProduction ? (
                        <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          <span>{statusBadge}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-zinc-500 font-mono">
                          {statusBadge}
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
                        aria-label={`Acessar portal web de ${title}`}
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
                        aria-label={`Baixar aplicativo ${title} na Apple App Store`}
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
                        aria-label={`Baixar aplicativo ${title} no Google Play Store`}
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
                        aria-label={`Ver repositório de ${title} no GitHub`}
                      >
                        <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {featuredProjects.map((project, idx) => {
          const isActive = activeIndex === idx;
          const translated = projectTranslations[project.id];
          const title = translated?.title ?? project.title;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-8 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Navegar para ${title}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>
    </section>
  );
}
