// ─── Portfolio Domain Types ───────────────────────────────────────────────

export interface ClientExperience {
  id: string;
  clientName: string;
  industry: string;
  projectType: string;
  summary: string;
  problem: string;
  solution: string;
  duration: string;
  toolsUsed: string[];
  keyResults: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  icon: string;
  accentColor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  problem: string;
  solution: string;
  features: string[];
  outcomes: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  learnings: string[];
  toolsUsed: string[];
  duration: string;
  icon: string;
}

export interface Service {
  id: string;
  number: string;
  icon: string;
  name: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  expertise: string[];
  gradientClass: string;
}

export interface NavLink {
  label: string;
  href: string;
}
