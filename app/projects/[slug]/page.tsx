import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectCaseStudy } from "./case-study";

const PROJECTS_DATA = {
  mixxer: {
    slug: "mixxer",
    name: "Mixxer",
    category: "Web Application",
    description:
      "A production-focused web application with modern responsive interfaces and API-driven functionality.",
    image: "/mixxer.png",
    tech: ["React.js", "JavaScript", "REST APIs", "Responsive UI", "CSS Modules"],
    live: "#",
    github: "#",
    overview:
      "Mixxer is a full-featured web application designed for seamless user interaction and real-time data display. The project required building a highly responsive interface that connected to multiple REST API endpoints while maintaining a smooth user experience.",
    problem:
      "The client needed a scalable frontend that could handle dynamic data, complex state management, and a wide variety of screen sizes without sacrificing performance or usability.",
    solution:
      "I built a component-driven React application with clean state management, optimistic UI updates, and a mobile-first responsive design system. Every component was designed to be reusable and composable.",
    role: "Led the full frontend development from architecture decisions to final delivery.",
    challenges: [
      "Managing complex asynchronous data flows from multiple API endpoints",
      "Ensuring consistent performance across mobile and desktop",
      "Building a reusable component system from scratch",
    ],
    learnings: [
      "Importance of defining component contracts early",
      "API error handling patterns at scale",
      "Mobile-first design significantly reduces responsive design complexity",
    ],
  },
  dewis: {
    slug: "dewis",
    name: "Dewis",
    category: "Web Application",
    description:
      "A data-driven web platform built with React.js and integrated REST APIs.",
    image: "/dewis.png",
    tech: ["React.js", "JavaScript", "REST APIs", "Component Architecture", "Tailwind CSS"],
    live: "#",
    github: "#",
    overview:
      "Dewis is a data-centric platform that surfaces complex information in a clear, actionable interface. The focus was on data presentation, filtering, and a highly usable table/list UI.",
    problem:
      "Users needed a way to access, filter, and act on large datasets without feeling overwhelmed. The existing solution was cluttered and slow.",
    solution:
      "Rebuilt the interface using React with a focus on progressive disclosure, smart defaults, and fast perceived performance through skeleton loading and optimistic states.",
    role: "Frontend developer responsible for architecture, UI development, and API integration.",
    challenges: [
      "Handling large data sets efficiently without virtualisation libraries",
      "Designing clear data hierarchies that users can scan quickly",
      "Maintaining state coherence across complex filter interactions",
    ],
    learnings: [
      "Progressive disclosure is key for complex data UIs",
      "Skeleton loading improves perceived performance significantly",
      "Early collaboration with backend on API contract avoids rework",
    ],
  },
  amexio: {
    slug: "amexio",
    name: "AmeXio",
    category: "Web Application",
    description:
      "Enterprise-grade web application built with React.js and Next.js, featuring API integration and a scalable component system.",
    image: "/amexio.png",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
    overview:
      "AmeXio is an enterprise web application requiring a robust frontend architecture, type-safe integrations, and a polished user interface that reflects the professionalism of the business.",
    problem:
      "The organization needed a modern frontend to replace a legacy system, with SSR capabilities for SEO, tight TypeScript contracts, and a maintainable component library.",
    solution:
      "Built using Next.js for SSR and routing, TypeScript for type safety, and a custom design system. Every feature was developed with scalability and long-term maintainability in mind.",
    role: "Lead frontend developer — responsible for Next.js setup, architecture, TypeScript configuration, and all UI development.",
    challenges: [
      "Migrating existing logic to TypeScript without breaking changes",
      "Designing SSR pages that work without JavaScript (progressive enhancement)",
      "Building a component library that non-technical stakeholders can understand",
    ],
    learnings: [
      "TypeScript investment pays dividends within weeks on medium+ projects",
      "SSR requires careful thinking about hydration boundaries",
      "Component naming is a product decision, not just a code decision",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Sohaib Younas`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];

  if (!project) notFound();

  const slugs = Object.keys(PROJECTS_DATA);
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextProject = PROJECTS_DATA[nextSlug as keyof typeof PROJECTS_DATA];

  return <ProjectCaseStudy project={project} nextProject={nextProject} />;
}
