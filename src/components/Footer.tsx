"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { profile } from "@/data/portfolio";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-900/90 py-8 mt-12 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div>
          <span>
            {profile.name} • {t.footer.location}
          </span>
        </div>

        <div className="flex items-center gap-4 font-medium">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href="/Resume_PT.pdf"
            download="Bruno_Fukumori_CV_PT.pdf"
            className="hover:text-zinc-300 transition-colors"
          >
            {t.footer.curriculumPt}
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href="/Resume_EN.pdf"
            download="Bruno_Fukumori_CV_EN.pdf"
            className="hover:text-zinc-300 transition-colors"
          >
            {t.footer.curriculumEn}
          </a>
        </div>
      </div>
    </footer>
  );
}
