import type {
  Education,
  Experience,
  FeaturedProject,
  MetricStat,
  Profile,
  TechDomain,
} from "./types";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://tamagolabs.com.br");

export const profile: Profile = {
  name: "Bruno Fukumori",
  role: "Engenheiro de Software Sênior | Fullstack",
  email: "brunofukumori@gmail.com",
  phone: "+55 11 99622-7088",
  whatsappUrl: "https://wa.me/5511996227088",
  linkedin: "https://www.linkedin.com/in/bfukumori/",
  github: "https://github.com/bfukumori",
  about:
    "Especialista em ecossistemas modernos (Node.js/Next.js, React/Vite e React Native/Expo). Experiência comprovada em portais de saúde atendendo mais de 2 milhões de vidas e governança corporativa no mercado financeiro.",
  avatarUrl: "/profile.jpg",
  heroCardTags: [
    "Javascript",
    "Typescript",
    "Node.js",
    "React",
    "React Native",
    "NestJS",
    "Next.js",
    "Expo",
  ],
};

export const metricStats: MetricStat[] = [
  {
    id: "impact",
    value: "+2.000.000",
    label: "Vidas impactadas em produção",
    gradientClass: "from-cyan-400 via-sky-300 to-blue-400",
  },
  {
    id: "experience",
    value: "10+ Anos",
    label: "Rigor analítico + Execução Tech",
    gradientClass: "from-blue-400 via-indigo-300 to-sky-300",
  },
  {
    id: "cicd",
    value: "-67.5%",
    label: "Tempo em Pipelines (CI/CD)",
    gradientClass: "from-emerald-400 via-teal-300 to-cyan-400",
  },
  {
    id: "stack",
    value: "Fullstack",
    label: "Mobile Cross-Platform & Backend",
    gradientClass: "from-indigo-400 via-purple-300 to-cyan-400",
  },
];

export const experiences: Experience[] = [
  {
    id: "hapvida",
    role: "Engenheiro de Software Sênior",
    company: "Hapvida NotreDame Intermédica",
    period: "2024 — Presente",
    isCurrent: true,
    description: [
      "Desenvolvimento de Marketplace Mobile de saúde cross-platform utilizando React Native e Expo.",
      "Integração de biometria e desenho de esteiras automatizadas de CI/CD para deploy seguro em larga escala.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "CI/CD Mobile",
      "Clean Architecture",
    ],
  },
  {
    id: "ten",
    role: "Desenvolvedor Fullstack Sênior",
    company: "TEN Tecnologia",
    period: "2024 — 2024",
    isCurrent: false,
    description: [
      "Arquitetura de microsserviços orientada a eventos para governança corporativa e serviços de assembleias digitais no mercado de capitais.",
      "Criação de workers com NestJS e BullMQ para processamento assíncrono em conformidade com auditoria e compliance regulatório (CVM).",
    ],
    technologies: ["Nest.js", "React", "BullMQ", "Redis", "PostgreSQL"],
  },
  {
    id: "wefit",
    role: "Desenvolvedor Sênior",
    company: "Wefit",
    period: "2022 — 2024",
    isCurrent: false,
    description: [
      "Sustentação e evolução de portais de saúde multioperadora atendendo >2 milhões de usuários.",
      "Implementação de Internal Developer Portal (Backstage) acelerando novos serviços em 90% e refatoração de Dockerfiles gerando redução de 67% no tempo de CI/CD.",
    ],
    technologies: [
      "Backstage",
      "Vite",
      "React",
      "Next.js",
      "Nest.js",
      "BFF Architecture",
      "Docker",
    ],
  },
  {
    id: "einstein",
    role: "Biomédico Pleno / Rigor Analítico",
    company: "Hospital Israelita Albert Einstein",
    period: "2012 — 2022",
    isCurrent: false,
    description: [
      "Diagnóstico de precisão em exames de tomografia computadorizada e atuação na formação de pós-graduandos.",
      "Tolerância zero a falhas em casos clínicos críticos: pensamento sistêmico e metodologia científica que hoje ancoram a maturidade da minha engenharia de software.",
    ],
    technologies: [
      "Rigor Científico",
      "Pensamento Crítico",
      "Metodologias Ágeis",
      "Zero-Tolerance for Error",
    ],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "marketplace-saude",
    categoryTag: "Hapvida • Portal Web • Mobile",
    title: "Marketplace & Portal de Saúde",
    description:
      "Arquitetura de app mobile e portal para agendamento, telemedicina e consultas para mais de 2 milhões de vidas, com foco em 60fps em aparelhos de entrada e testes via E2E.",
    tags: ["React", "React Native", "Vite", "Expo"],
    webUrl: "https://portal-beneficiario.hapvida.com.br/",
    appStoreUrl: "https://apps.apple.com/br/app/hapvida/id1550782810",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=br.com.hapvida.hapvida&hl=pt-BR",
    statusBadge: "Produção • +2M vidas ativas",
    isProduction: true,
  },
  {
    id: "scaffold-nestjs-api",
    categoryTag: "NestJS • API • Template",
    title: "NestJS API Scaffold",
    description:
      "Template base de API corporativa em NestJS 12 (ESM) com PostgreSQL, Drizzle ORM, Redis e observabilidade completa com OpenTelemetry, Prometheus, Tempo e Loki.",
    tags: [
      "NestJS",
      "Drizzle ORM",
      "OpenTelemetry",
      "Prometheus",
      "Tempo",
      "Loki",
      "Grafana",
      "PostgreSQL",
      "Redis",
      "Docker",
      "CI/CD",
      "Clean Architecture",
      "SOLID",
      "Design Patterns",
    ],
    githubUrl: "https://github.com/bfukumori/scaffold-nestjs-api",
    isProduction: false,
  },
  {
    id: "monorepo-backoffice",
    categoryTag: "Arquitetura Corporativa",
    title: "Monorepo & Backoffice",
    description:
      "Template desacoplado com Turborepo, pnpm workspaces, pacotes compartilhados de design system e observabilidade com OpenTelemetry e LGTM Stack (Loki, Grafana, Tempo, Prometheus).",
    tags: ["Turborepo", "OpenTelemetry", "Docker"],
    githubUrl: "https://github.com/bfukumori/monorepo-backoffice-example",
    isProduction: false,
  },
];

export const techDomains: TechDomain[] = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    iconName: "frontend",
    items: [
      "React & Next.js (App Router)",
      "React Native & Expo",
      "TypeScript (ESM & Strict)",
      "Tailwind CSS & Shadcn/UI",
      "TanStack Query & Zustand",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    iconName: "backend",
    items: [
      "Node.js & NestJS",
      "Fastify & Express",
      "REST APIs & GraphQL",
      "Microsserviços & BFF",
      "Docker & Containerização",
    ],
  },
  {
    id: "database",
    title: "Dados & Mensageria",
    iconName: "database",
    items: [
      "BullMQ & Background Jobs",
      "Redis (Cache & Concorrência)",
      "PostgreSQL & Prisma/TypeORM/Drizzle",
      "MongoDB & NoSQL",
      "RabbitMQ / Apache Kafka",
    ],
  },
  {
    id: "engineering",
    title: "Engenharia & Práticas",
    iconName: "engineering",
    items: [
      "Clean Code & Clean Arch",
      "Test-driven Assurance",
      "CI/CD (GitHub Actions)",
      "Vitest & Playwright",
      "SOLID & Design Patterns",
    ],
  },
];

export const education: Education[] = [
  {
    id: "fiap",
    degree: "Bacharelado em Engenharia de Software",
    institution: "FIAP",
    period: "2022 - Em andamento (Previsão: 2026)",
  },
  {
    id: "unifesp",
    degree: "Bacharelado em Biomedicina",
    institution: "Unifesp",
    period: "2007 - 2010",
  },
];
