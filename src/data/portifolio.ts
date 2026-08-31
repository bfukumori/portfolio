import type { Education, Experience, Profile, Project, Skill } from "./types";

export const profile: Profile = {
  name: "Bruno Fukumori",
  role: "Engenheiro de Software Sênior | Fullstack",
  location: "São Paulo, SP",
  email: "brunofukumori@gmail.com",
  phone: "+55 11 99622-7088",
  linkedin: "https://www.linkedin.com/in/bfukumori/",
  github: "https://github.com/bfukumori",
  about:
    "Engenheiro de Software Sênior especializado no ecossistema TypeScript. Desenho e implemento sistemas escaláveis, resilientes e de alta performance, desde arquiteturas distribuídas no backend até aplicações mobile cross-platform. Combino forte embasamento em Clean Architecture e boas práticas com uma visão analítica moldada por uma transição de carreira bem-sucedida da área da saúde para a tecnologia.",
};

export const skills: Skill[] = [
  {
    category: "Linguagens & Ecossistema",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Node.js", "Bun"],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "Vite",
      "React Native",
      "Expo",
      "React Query",
      "Zustand",
      "Tailwind",
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Express/Fastify",
      "REST API",
      "BFF (Backend For Frontend)",
      "Microservices",
      "Elysia",
    ],
  },
  {
    category: "Infraestrutura & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "GCP",
      "Azure DevOps",
      "CI/CD",
      "Turborepo",
      "Nx",
      "Github Actions",
    ],
  },
  {
    category: "Banco de Dados & Mensageria",
    items: ["SQL", "NoSQL", "Redis", "RabbitMQ", "BullMQ", "Kafka"],
  },
];

export const experiences: Experience[] = [
  {
    id: "hapvida",
    role: "Engenheiro de Software Sênior",
    company: "Hapvida NotreDame Intermédica",
    period: "Outubro 2025 - Presente",
    description: [
      "Desenvolvimento de um aplicativo inovador de marketplace de serviços utilizando React Native e Expo, focado em entregar uma experiência fluida para usuários e provedores.",
      "Arquitetura e implementação de soluções escaláveis em ambientes mobile, garantindo performance e segurança na integração de APIs, sistemas de pagamento e autenticação.",
      "Adoção e disseminação de boas práticas de desenvolvimento, testes automatizados e pipelines de CI/CD.",
      "Atuação ativa na mentoria e suporte técnico para desenvolvedores juniores da equipe.",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "JavaScript", "CI/CD"],
  },
  {
    id: "ten",
    role: "Desenvolvedor Fullstack",
    company: "TEN",
    period: "Outubro 2025 - Fevereiro 2026",
    description: [
      "Desenvolvimento de soluções robustas de backend e frontend para garantir processos seguros de governança digital em assembleias virtuais para o mercado de capitais.",
      "Desenho e implementação de APIs utilizando Node.js e NestJS para suportar as funcionalidades core do negócio.",
      "Implementação de gerenciamento de filas e processamento distribuído com BullMQ, garantindo escalabilidade e confiabilidade na execução de tarefas.",
      "Construção de rotinas para extração, manipulação e gerenciamento seguro de arquivos e documentos de conformidade.",
    ],
    technologies: ["Node.js", "NestJS", "React", "BullMQ", "API Design"],
  },
  {
    id: "wefit",
    role: "Desenvolvedor Sênior",
    company: "Wefit",
    period: "Novembro 2022 - Outubro 2025",
    description: [
      "Desenvolvimento de portal web multioperadora para área da saúde (> 2 milhões de vidas), atuando em novas features, resolução de bugs e code reviews.",
      "Atuação no time de Arquitetura e Qualidade definindo ADRs e documentações de processos.",
      "Desenvolvimento de um Internal Developer Portal (IDP) utilizando Backstage, automatizando CI/CD e reduzindo o tempo de setup de novos projetos em mais de 90%.",
      "Otimização de imagens Docker com git submodules, reduzindo o tempo de build em mais de 50% (de 40 para 13 minutos).",
      "Arquitetura e desenvolvimento de BFFs para portal web de seguradora com NestJS, aplicando boas práticas de Clean Code.",
      "Integração de portal web utilizando arquitetura de Monorepo (Turborepo) e Next.js.",
      "Criação de POCs para microfrontends com módulos federados e testes automatizados com Playwright e Vitest.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Docker",
      "Backstage",
      "Playwright",
      "Vitest",
      "Turborepo",
    ],
  },
  {
    id: "einstein",
    role: "Biomédico Pleno",
    company: "Hospital Israelita Albert Einstein",
    period: "Maio 2012 - Novembro 2022",
    description: [
      "Responsável pela realização de exames de rotina no setor de tomografia computadorizada e otimização de protocolos médicos.",
      "Orientador do estágio de pós-graduação em imagem em tomografia, desenvolvendo habilidades de mentoria técnica.",
    ],
    technologies: [
      "Otimização de Processos",
      "Mentoria",
      "Análise de Dados Críticos",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "grindsense-backend",
    title: "GrindSense API",
    architecture: "TypeScript & Node.js",
    description:
      "API de backend desenvolvida para o projeto GrindSense (NEXT 2026 - FIAP). Otimizada para o armazenamento e processamento eficiente de dados biométricos e séries temporais.",
    metrics: ["Séries Temporais", "Processamento Biométrico", "TypeScript"],
    link: "https://github.com/bfukumori/grindsense-backend",
  },
  {
    id: "micro-app-architecture",
    title: "Micro App Architecture Demo",
    architecture: "TypeScript & Microfrontends",
    description:
      "Laboratório de arquitetura focado em modularidade e escalabilidade utilizando padrões de Micro-Apps (Microfrontends).",
    metrics: ["Escalabilidade Modular", "Desacoplamento", "Integração"],
    link: "https://github.com/bfukumori/micro-app-architecture-demo",
  },
  {
    id: "cpu-profiling",
    title: "Node.js CPU Profiling",
    architecture: "JavaScript & Node Inspector",
    description:
      "Projeto prático para o diagnóstico avançado de problemas de performance e gargalos de CPU em ambientes Node.js utilizando ferramentas de inspeção nativas.",
    metrics: [
      "Diagnóstico de Performance",
      "Observabilidade",
      "Troubleshooting",
    ],
    link: "https://github.com/bfukumori/cpu-profiling-example",
  },
  {
    id: "design-patterns",
    title: "Design Patterns",
    architecture: "Java & Orientação a Objetos",
    description:
      "Implementação prática dos principais padrões de projeto (Design Patterns) da Engenharia de Software, focando em Clean Architecture e princípios SOLID.",
    metrics: ["Boas Práticas", "SOLID", "Arquitetura Limpa"],
    link: "https://github.com/bfukumori/design-patterns",
  },
  {
    id: "data-structures",
    title: "Data Structures",
    architecture: "Java & Algoritmos",
    description:
      "Repositório focado na implementação detalhada e estudo aprofundado das principais estruturas de dados da ciência da computação.",
    metrics: [
      "Fundamentos de Engenharia",
      "Algoritmos Nativos",
      "Estudo de Complexidade",
    ],
    link: "https://github.com/bfukumori/data-structures",
  },
  {
    id: "marketplace-mobile",
    title: "Marketplace de Serviços Mobile na àrea da Saúde",
    architecture: "React Native, Expo & APIs Seguras",
    description:
      "Desenvolvimento e arquitetura de um aplicativo mobile focado em alta usabilidade, integrando sistemas complexos de agendamento e autenticação em tempo real.",
    metrics: [
      "Performance Mobile Otimizada",
      "Integração Segura de Agendamentos",
      "Pipeline CI/CD Automatizada",
    ],
  },
  {
    id: "digital-assemblies",
    title: "Plataforma de Governança Digital",
    architecture: "Node.js, NestJS & Processamento Assíncrono",
    description:
      "Sistema para assembleias virtuais do mercado de capitais utilizando filas robustas para processamento paralelo e manipulação segura de documentos.",
    metrics: [
      "Alta Confiabilidade com BullMQ",
      "Processamento Distribuído",
      "Conformidade e Segurança de Dados",
    ],
  },
  {
    id: "idp-backstage",
    title: "Internal Developer Portal (IDP)",
    architecture: "Backstage & Automação CI/CD",
    description:
      "Criação de templates de arquitetura padronizados para acelerar o desenvolvimento web e mobile em ambiente corporativo.",
    metrics: [
      "Redução de >90% no tempo de setup",
      "Padronização de arquitetura",
      "Automação de CI/CD pipeline",
    ],
  },
  {
    id: "docker-optimization",
    title: "Otimização de Pipeline de Build",
    architecture: "Docker & Git Submodules",
    description:
      "Refatoração e otimização de imagens Docker em uma aplicação de alta complexidade com múltiplos submódulos git.",
    metrics: [
      "Redução do tempo de build de 40 min para 13 min",
      "Diminuição de 50%+ em custos de esteira",
    ],
  },
  {
    id: "health-portal",
    title: "Portal de Saúde Multioperadora",
    architecture: "Microfrontends & BFF (NestJS)",
    description:
      "Implementação e sustentação de um portal de saúde crítico, integrando arquitetura de microfrontends e Backend for Frontend para orquestração de dados seguros.",
    metrics: [
      "Escala para >2 milhões de vidas",
      "Arquitetura Clean Code",
      "Testes end-to-end automatizados",
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
