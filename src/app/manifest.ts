import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bruno Fukumori | Engenheiro de Software Sênior",
    short_name: "Bruno Fukumori",
    description:
      "Portfólio de Bruno Fukumori - Engenheiro de Software Sênior especializado no ecossistema TypeScript, Node.js, React, Next.js, React Native e arquiteturas escaláveis.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
