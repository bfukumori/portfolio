export type Locale = "pt" | "en";

export const translations = {
  pt: {
    navbar: {
      about: "Sobre",
      trajectory: "Trajetória",
      projects: "Projetos",
      stack: "Stack",
      contact: "Contato",
      availability: "Disponível p/ novos projetos",
      whatsapp: "WhatsApp",
      ariaLabel: "Navegação Principal",
    },
    hero: {
      eyebrow: "ENGENHEIRO DE SOFTWARE SÊNIOR • TECNOLOGIA & PERFORMANCE",
      titlePrefix: "Transformando complexidade em produtos",
      titleHighlight: "rápidos, escaláveis",
      titleSuffix: "e lucrativos.",
      subtitle:
        "Especialista em ecossistemas modernos ({node}/{next}, {react} e {rn}). Experiência comprovada em portais de saúde atendendo mais de 2 milhões de vidas e governança corporativa no mercado financeiro.",
      downloadCv: "Baixar Currículo (PDF)",
      downloadCvAria: "Baixar Currículo em PDF",
      chat: "Conversar Direto",
      chatAria: "Conversar direto no WhatsApp",
      cvPtLabel: "PT-BR",
      cvEnLabel: "EN",
      cvPtAria: "Currículo em Português",
      cvEnAria: "Resume in English",
      locationDetails: "São Paulo, SP (Remoto / Híbrido)",
      experienceBadge: "10+ anos de Engenharia",
      tagline: "Senior Fullstack Engineer",
      cardSubtitle: "Tech Lead / Sênior",
    },
    metrics: {
      impact: "Vidas impactadas em produção",
      experience: "Rigor analítico + Execução Tech",
      cicd: "Tempo em Pipelines (CI/CD)",
      stack: "Mobile Cross-Platform & Backend",
    },
    experience: {
      sectionEyebrow: "Carreira & Histórico",
      sectionTitle: "Experiência Profissional",
      sectionSummary: "4 posições-chave • Foco em entregas",
      roles: {
        hapvida: {
          role: "Engenheiro de Software Sênior",
          period: "2024 — Presente",
          description: [
            "Desenvolvimento de Marketplace Mobile de saúde cross-platform utilizando React Native e Expo.",
            "Integração de biometria e desenho de esteiras automatizadas de CI/CD para deploy seguro em larga escala.",
          ],
        },
        ten: {
          role: "Desenvolvedor Fullstack Sênior",
          period: "2024 — 2024",
          description: [
            "Arquitetura de microsserviços orientada a eventos para governança corporativa e serviços de assembleias digitais no mercado de capitais.",
            "Criação de workers com NestJS e BullMQ para processamento assíncrono em conformidade com auditoria e compliance regulatório (CVM).",
          ],
        },
        wefit: {
          role: "Desenvolvedor Sênior",
          period: "2022 — 2024",
          description: [
            "Sustentação e evolução de portais de saúde multioperadora atendendo >2 milhões de usuários.",
            "Implementação de Internal Developer Portal (Backstage) acelerando novos serviços em 90% e refatoração de Dockerfiles gerando redução de 67% no tempo de CI/CD.",
          ],
        },
        einstein: {
          role: "Biomédico Pleno / Rigor Analítico",
          period: "2012 — 2022",
          description: [
            "Diagnóstico de precisão em exames de tomografia computadorizada e atuação na formação de pós-graduandos.",
            "Tolerância zero a falhas em casos clínicos críticos: pensamento sistêmico e metodologia científica que hoje ancoram a maturidade da minha engenharia de software.",
          ],
        },
      },
    },
    projects: {
      sectionEyebrow: "Cases de Impacto",
      sectionTitle: "Projetos em Destaque",
      viewGithub: "Ver todos no GitHub",
      items: {
        "marketplace-saude": {
          categoryTag: "Hapvida • Portal Web • Mobile",
          title: "Marketplace & Portal de Saúde",
          description:
            "Arquitetura de app mobile e portal para agendamento, telemedicina e consultas para mais de 2 milhões de vidas, com foco em 60fps em aparelhos de entrada e testes via E2E.",
          statusBadge: "Produção • +2M vidas ativas",
        },
        "scaffold-nestjs-api": {
          categoryTag: "NestJS • API • Template",
          title: "NestJS API Scaffold",
          description:
            "Template base de API corporativa em NestJS 12 (ESM) com PostgreSQL, Drizzle ORM, Redis e observabilidade completa com OpenTelemetry, Prometheus, Tempo e Loki.",
        },
        "monorepo-backoffice": {
          categoryTag: "Arquitetura Corporativa",
          title: "Monorepo & Backoffice",
          description:
            "Template desacoplado com Turborepo, pnpm workspaces, pacotes compartilhados de design system e observabilidade com OpenTelemetry e LGTM Stack (Loki, Grafana, Tempo, Prometheus).",
        },
      },
    },
    techStack: {
      sectionEyebrow: "Domínio Tecnológico",
      sectionTitle: "Stack Tecnológica",
      domains: {
        frontend: {
          title: "Frontend & Mobile",
          items: [
            "React & Next.js (App Router)",
            "React Native & Expo",
            "TypeScript (ESM & Strict)",
            "Tailwind CSS & Shadcn/UI",
            "TanStack Query & Zustand",
          ],
        },
        backend: {
          title: "Backend & APIs",
          items: [
            "Node.js & NestJS",
            "Fastify & Express",
            "REST APIs & GraphQL",
            "Microsserviços & BFF",
            "Docker & Containerização",
          ],
        },
        database: {
          title: "Dados & Mensageria",
          items: [
            "BullMQ & Background Jobs",
            "Redis (Cache & Concorrência)",
            "PostgreSQL & Prisma/TypeORM/Drizzle",
            "MongoDB & NoSQL",
            "RabbitMQ / Apache Kafka",
          ],
        },
        engineering: {
          title: "Engenharia & Práticas",
          items: [
            "Clean Code & Clean Arch",
            "Test-driven Assurance",
            "CI/CD (GitHub Actions)",
            "Vitest & Playwright",
            "SOLID & Design Patterns",
          ],
        },
      },
    },
    contact: {
      eyebrow: "Vamos Conversar?",
      title:
        "Pronto para acelerar seus produtos e elevar a barra técnica do seu time.",
      subtitle:
        "Aberto para posições sênior (CLT/PJ), consultorias e projetos com foco em liderança técnica fullstack.",
      whatsappAria: "Conversar no WhatsApp",
      emailAria: "Enviar email",
      downloadCv: "Baixar CV (PT-BR)",
      downloadCvAria: "Baixar Currículo em Português",
      availability:
        "Disponível full-time em horário comercial • São Paulo, Brasil (UTC-3)",
    },
    footer: {
      location: "São Paulo, SP - Remoto / Global",
      curriculumPt: "Currículo (PT)",
      curriculumEn: "CV (EN)",
    },
  },

  en: {
    navbar: {
      about: "About",
      trajectory: "Journey",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
      availability: "Open to new projects",
      whatsapp: "WhatsApp",
      ariaLabel: "Main Navigation",
    },
    hero: {
      eyebrow: "SENIOR SOFTWARE ENGINEER • TECHNOLOGY & PERFORMANCE",
      titlePrefix: "Turning complexity into",
      titleHighlight: "fast, scalable",
      titleSuffix: "and profitable products.",
      subtitle:
        "Specialist in modern ecosystems ({node}/{next}, {react} and {rn}). Proven track record in healthcare portals serving over 2 million lives and corporate governance in the financial market.",
      downloadCv: "Download Resume (PDF)",
      downloadCvAria: "Download Resume as PDF",
      chat: "Chat Now",
      chatAria: "Chat directly on WhatsApp",
      cvPtLabel: "PT-BR",
      cvEnLabel: "EN",
      cvPtAria: "Currículo em Português",
      cvEnAria: "Resume in English",
      locationDetails: "São Paulo, SP (Remote / Hybrid)",
      experienceBadge: "10+ Years of Engineering",
      tagline: "Senior Fullstack Engineer",
      cardSubtitle: "Tech Lead / Senior",
    },
    metrics: {
      impact: "Lives impacted in production",
      experience: "Analytical rigor + Tech execution",
      cicd: "Time in Pipelines (CI/CD)",
      stack: "Cross-Platform Mobile & Backend",
    },
    experience: {
      sectionEyebrow: "Career & History",
      sectionTitle: "Professional Experience",
      sectionSummary: "4 key positions • Delivery-focused",
      roles: {
        hapvida: {
          role: "Senior Software Engineer",
          period: "2024 — Present",
          description: [
            "Development of a cross-platform mobile health Marketplace using React Native and Expo.",
            "Biometrics integration and design of automated CI/CD pipelines for secure large-scale deployment.",
          ],
        },
        ten: {
          role: "Senior Fullstack Developer",
          period: "2024 — 2024",
          description: [
            "Event-driven microservices architecture for corporate governance and digital shareholder meeting services in the capital markets.",
            "Built async workers with NestJS and BullMQ for processing compliant with audit and regulatory requirements (CVM).",
          ],
        },
        wefit: {
          role: "Senior Developer",
          period: "2022 — 2024",
          description: [
            "Maintenance and evolution of multi-operator healthcare portals serving >2 million users.",
            "Implemented an Internal Developer Portal (Backstage) speeding up new services by 90% and refactored Dockerfiles reducing CI/CD time by 67%.",
          ],
        },
        einstein: {
          role: "Biomedical Scientist / Analytical Rigor",
          period: "2012 — 2022",
          description: [
            "Precision diagnostics in CT scan exams and graduate student training at a top-tier hospital.",
            "Zero-tolerance for errors in critical clinical cases: systemic thinking and scientific methodology that now anchor the maturity of my software engineering.",
          ],
        },
      },
    },
    projects: {
      sectionEyebrow: "Impact Cases",
      sectionTitle: "Featured Projects",
      viewGithub: "View all on GitHub",
      items: {
        "marketplace-saude": {
          categoryTag: "Hapvida • Web Portal • Mobile",
          title: "Health Marketplace & Portal",
          description:
            "Mobile app and portal architecture for scheduling, telemedicine and consultations for over 2 million lives, focused on 60fps on entry-level devices and E2E testing.",
          statusBadge: "Production • +2M active lives",
        },
        "scaffold-nestjs-api": {
          categoryTag: "NestJS • API • Template",
          title: "NestJS API Scaffold",
          description:
            "Corporate API base template in NestJS 12 (ESM) with PostgreSQL, Drizzle ORM, Redis and full observability via OpenTelemetry, Prometheus, Tempo and Loki.",
        },
        "monorepo-backoffice": {
          categoryTag: "Corporate Architecture",
          title: "Monorepo & Backoffice",
          description:
            "Decoupled template with Turborepo, pnpm workspaces, shared design system packages and observability with OpenTelemetry and LGTM Stack (Loki, Grafana, Tempo, Prometheus).",
        },
      },
    },
    techStack: {
      sectionEyebrow: "Technology Domain",
      sectionTitle: "Tech Stack",
      domains: {
        frontend: {
          title: "Frontend & Mobile",
          items: [
            "React & Next.js (App Router)",
            "React Native & Expo",
            "TypeScript (ESM & Strict)",
            "Tailwind CSS & Shadcn/UI",
            "TanStack Query & Zustand",
          ],
        },
        backend: {
          title: "Backend & APIs",
          items: [
            "Node.js & NestJS",
            "Fastify & Express",
            "REST APIs & GraphQL",
            "Microservices & BFF",
            "Docker & Containerization",
          ],
        },
        database: {
          title: "Data & Messaging",
          items: [
            "BullMQ & Background Jobs",
            "Redis (Cache & Concurrency)",
            "PostgreSQL & Prisma/TypeORM/Drizzle",
            "MongoDB & NoSQL",
            "RabbitMQ / Apache Kafka",
          ],
        },
        engineering: {
          title: "Engineering & Practices",
          items: [
            "Clean Code & Clean Arch",
            "Test-driven Assurance",
            "CI/CD (GitHub Actions)",
            "Vitest & Playwright",
            "SOLID & Design Patterns",
          ],
        },
      },
    },
    contact: {
      eyebrow: "Let's Talk?",
      title:
        "Ready to accelerate your products and raise the technical bar of your team.",
      subtitle:
        "Open to senior positions (full-time/contract), consulting and projects focused on fullstack technical leadership.",
      whatsappAria: "Chat on WhatsApp",
      emailAria: "Send email",
      downloadCv: "Download CV (EN)",
      downloadCvAria: "Download English Resume",
      availability:
        "Available full-time during business hours • São Paulo, Brazil (UTC-3)",
    },
    footer: {
      location: "São Paulo, SP - Remote / Global",
      curriculumPt: "Currículo (PT)",
      curriculumEn: "CV (EN)",
    },
  },
} as const;

export type Translations = typeof translations;
export type TranslationKey = keyof Translations;
