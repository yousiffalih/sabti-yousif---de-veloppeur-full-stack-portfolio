export type Theme = 'dark' | 'light';

export interface Skill {
  name: string;
  iconName: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'DevOps & Tools';
  proficiency: number; // 0-100
  level: 'Expert' | 'Advanced' | 'Intermediate';
  experienceYears: number;
  description: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  responseExample: Record<string, any>;
  latencyMs: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  architectureHighlights: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  apiEndpoints?: ApiEndpoint[];
  architectureDiagram?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  icon: string;
  skillsVerified: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

