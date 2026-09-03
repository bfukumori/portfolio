import {
  education,
  experiences,
  profile,
  siteUrl,
  skills,
} from "@/data/portfolio";

export function JsonLd() {
  const allSkills = skills.flatMap((group) => group.items);
  const currentCompany =
    experiences.find((exp) => exp.period.toLowerCase().includes("presente"))
      ?.company || experiences[0]?.company;

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
        ...(currentCompany
          ? {
              worksFor: {
                "@type": "Organization",
                name: currentCompany,
              },
            }
          : {}),
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
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Padrão oficial do Next.js para script JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
