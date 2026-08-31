import { education, profile, siteUrl, skills } from "@/data/portifolio";

export function JsonLd() {
  const allSkills = skills.flatMap((group) => group.items);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        jobTitle: profile.role,
        description: profile.about,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        sameAs: [profile.linkedin, profile.github],
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        alumniOf: education.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu.institution,
        })),
        worksFor: {
          "@type": "Organization",
          name: "Hapvida NotreDame Intermédica",
        },
        knowsAbout: allSkills,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} | Portfólio`,
        description: `Portfólio de ${profile.name} - ${profile.role} especializado no ecossistema TypeScript, Node.js, React, Next.js, React Native e arquiteturas escaláveis.`,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `${profile.name} | ${profile.role}`,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
