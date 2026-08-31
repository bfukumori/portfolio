import {
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  LayoutTemplate,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { JsonLd } from "@/components/JsonLd";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  education,
  experiences,
  profile,
  projects,
  skills,
} from "@/data/portifolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans pb-24">
      <JsonLd />
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Hero Section & About */}
        <section className="mb-24 flex flex-col items-start">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-zinc-100 to-zinc-400 mb-4">
            {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-emerald-400 mb-6">
            {profile.role}
          </h2>
          <p className="max-w-2xl text-lg text-zinc-300 leading-relaxed mb-8">
            {profile.about}
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center rounded-full bg-zinc-100 p-1">
              <a
                href="/Resume_PT.pdf"
                download="Bruno_Fukumori_CV_PT.pdf"
                className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-all hover:text-zinc-950 hover:bg-zinc-200/50"
                aria-label="Baixar Currículo em Português"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                CV (PT-BR)
              </a>
              <div className="h-4 w-px bg-zinc-400 mx-1" aria-hidden="true" />
              <a
                href="/Resume_EN.pdf"
                download="Bruno_Fukumori_CV_EN.pdf"
                className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-all hover:text-zinc-950 hover:bg-zinc-200/50"
                aria-label="Download Resume in English"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                CV (EN)
              </a>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
            >
              <LinkedinIcon
                aria-hidden="true"
                className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-[#0A66C2]"
              />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
            >
              <GithubIcon
                aria-hidden="true"
                className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-100"
              />
              GitHub
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <Code2 className="text-zinc-400" aria-hidden="true" />
            <SectionHeading title="Habilidades Técnicas" disableBorder />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={`skill-group-${idx}`}>
                <h3 className="text-sm font-medium text-zinc-200 mb-3 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={`skill-${idx}-${i}`}
                      className="text-sm font-medium text-zinc-300 px-3 py-1.5 bg-zinc-800/80 rounded-lg border border-zinc-700/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <Briefcase className="text-zinc-400" aria-hidden="true" />
            <SectionHeading title="Experiência Profissional" disableBorder />
          </div>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l border-zinc-800"
              >
                <div className="absolute w-3 h-3 bg-zinc-800 rounded-full left-[-6.5px] top-2 border-2 border-zinc-950" />
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-zinc-400 font-mono tracking-tight">
                    {exp.period}
                  </span>
                </header>
                <div className="text-lg font-medium text-emerald-400 mb-4">
                  {exp.company}
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <li
                      key={`${exp.id}-desc-${i}`}
                      className="text-zinc-300 leading-relaxed flex gap-2 text-base"
                    >
                      <span
                        className="text-emerald-500 shrink-0"
                        aria-hidden="true"
                      >
                        ▹
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={`${exp.id}-tech-${i}`}
                      className="text-xs font-mono text-zinc-300 px-2 py-1 bg-zinc-800 rounded-md border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <GraduationCap className="text-zinc-400" aria-hidden="true" />
            <SectionHeading title="Educação Acadêmica" disableBorder />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30"
              >
                <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-emerald-400 font-medium mb-4">
                  {edu.institution}
                </p>
                <span className="text-sm text-zinc-300 font-mono bg-zinc-800 px-2 py-1 rounded border border-zinc-700">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
            <LayoutTemplate className="text-zinc-400" aria-hidden="true" />
            <SectionHeading
              title="Estudos de Caso & Arquitetura"
              disableBorder
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">
              Vamos conversar?
            </h2>
            <p className="text-zinc-300 mb-8 max-w-lg">
              Estou sempre aberto a discutir novas oportunidades, arquiteturas
              escaláveis ou apenas trocar ideias sobre o ecossistema de
              engenharia de software.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700 transition-colors text-zinc-100"
              >
                <Mail className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                <span className="font-medium">{profile.email}</span>
              </a>

              <a
                href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700 transition-colors text-zinc-100"
              >
                <Phone
                  className="h-5 w-5 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="font-medium">{profile.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 mt-8 text-sm text-zinc-400 font-medium">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
