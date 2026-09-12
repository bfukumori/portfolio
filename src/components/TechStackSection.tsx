"use client";

import {
  CheckCircle2,
  Database,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TechStackSection() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "frontend":
        return <Smartphone className="h-5 w-5 text-cyan-400" />;
      case "backend":
        return <Server className="h-5 w-5 text-blue-400" />;
      case "database":
        return <Database className="h-5 w-5 text-teal-400" />;
      case "engineering":
        return <ShieldCheck className="h-5 w-5 text-indigo-400" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-cyan-400" />;
    }
  };

  const domainIds = ["frontend", "backend", "database", "engineering"] as const;

  const domainTranslations = t.techStack.domains as unknown as Record<
    string,
    { title: string; items: string[] }
  >;

  return (
    <section id="stack" className="py-16">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
          {t.techStack.sectionEyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight">
          {t.techStack.sectionTitle}
        </h2>
      </div>

      {/* 4 Domain Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {domainIds.map((id) => {
          const domain = domainTranslations[id];
          return (
            <div
              key={id}
              className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-xs transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/70"
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/60">
                <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50">
                  {getIcon(id)}
                </div>
                <h3 className="text-base font-bold text-zinc-100">
                  {domain.title}
                </h3>
              </div>

              {/* List of Technologies */}
              <ul className="space-y-3">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-mono"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
