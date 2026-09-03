# Bruno Fukumori | Software Engineer Portfolio

Portfólio profissional focado na apresentação de estudos de caso arquiteturais, experiência de liderança técnica e domínio do ecossistema TypeScript. Desenvolvido com uma abordagem **KISS (Keep It Simple, Stupid)**, priorizando performance máxima, tipagem estrita e custo zero de infraestrutura.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)

---

## 🏗 Decisões de Arquitetura (ADRs)

* **Separação de Preocupações (Data-Driven UI):** Todo o conteúdo do portfólio (experiências, projetos, habilidades) está isolado em `src/data/portfolio.ts` através de interfaces TypeScript rigorosas. A camada de apresentação (componentes React) atua apenas como consumidora (View). Isso facilita atualizações e abre caminho para uma futura adoção de um CMS Headless.
* **Tooling Rigoroso:** Substituição da dupla Prettier + ESLint pelo **Biome**. Mais rápido e implementado nativamente em Rust, garantindo consistência de código sem overhead na esteira de CI.
* **Animações Não-Intrusivas:** Uso do `Framer Motion` focado na propriedade `whileInView`, renderizando transições suaves baseadas no scroll de forma declarativa e performática.

## 💻 Tech Stack

* **Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4 (Diretiva `@theme inline`)
* **Animações:** Framer Motion
* **Ícones:** Lucide React & Custom SVGs (Acessíveis via `role="img"` e `<title>`)
* **Gerenciador de Pacotes:** Bun
* **Linter & Formatter:** Biome

## 📂 Estrutura do Projeto

```text
├── public/                 # Arquivos estáticos (Resume_PT.pdf, Resume_EN.pdf)
├── src/
│   ├── app/                # Rotas do Next.js App Router (page.tsx, layout.tsx)
│   ├── components/         # Componentes React reutilizáveis (ProjectCard, SectionHeading)
│   └── data/               # Fonte da verdade do conteúdo (portfolio.ts com interfaces rígidas)
├── biome.json              # Configuração do Linter (com suporte a Tailwind v4)
└── next.config.ts          # Configuração do Next.js (React Compiler habilitado)