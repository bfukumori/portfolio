export interface Profile {
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  linkedin: string;
  github: string;
  about: string;
  avatarUrl: string;
  heroCardTags: string[];
}

export interface MetricStat {
  id: string;
  value: string;
  label: string;
  gradientClass: string;
}

export interface TechDomain {
  id: string;
  title: string;
  iconName: "frontend" | "backend" | "database" | "engineering";
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  description: string[];
  technologies: string[];
}

export interface FeaturedProject {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  webUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  statusBadge?: string;
  isProduction?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}
