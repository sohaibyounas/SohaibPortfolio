import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectCaseStudy } from "./case-study";

const PROJECTS_DATA = {
  alreem: {
    slug: "alreem",
    name: "Alreem",
    category: "Web Application",
    description:
      "A production-focused web application with modern responsive interfaces and API-driven functionality.",
    image: "/alreem.png",
    tech: ["React.js", "JavaScript", "REST APIs", "Responsive UI"],
    live: "https://alreems.netlify.app/",
    github: "https://github.com/sohaibyounas/Alreem",
    overview:
      "Alreem is a production-grade web application built to deliver smooth, responsive user experiences backed by reliable API-driven workflows and clean component architecture.",
    problem:
      "The client required an intuitive, modern interface capable of consuming multiple APIs while maintaining responsive layout consistency across varying screen resolutions.",
    solution:
      "Engineered an efficient React.js component structure with standardized API error handling, fluid CSS layouts, and intuitive navigation states.",
    role: "Frontend Developer responsible for architecture, responsive styling, and API integration.",
    challenges: [
      "Building a modular component hierarchy for effortless feature extension",
      "Ensuring rapid initial page loads and responsive behavior across mobile devices",
    ],
    learnings: [
      "Modular component design speeds up iteration and testing significantly",
      "Early API contract alignment prevents integration friction later on",
    ],
  },
  mixxer: {
    slug: "mixxer",
    name: "Mixxer",
    category: "Web Application",
    description:
      "A production-focused web application with modern responsive interfaces and API-driven functionality.",
    image: "/mixxer.png",
    tech: ["React.js", "JavaScript", "REST APIs", "Responsive UI", "CSS Modules"],
    live: "https://mixxerapp.vercel.app/",
    github: "https://github.com/sohaibyounas/MixxerApp",
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
    live: "https://dewis.netlify.app/",
    github: "https://github.com/sohaibyounas/DewisApp",
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
    live: "https://amexiofuse.netlify.app/",
    github: "https://github.com/sohaibyounas/Amexio-fuse",
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
  "next-merce": {
    slug: "next-merce",
    name: "Next Merce",
    category: "Web Application",
    description:
      "Full-stack E-Commerce store built with React.js and Next.js, featuring API integration and dynamic shopping cart capabilities.",
    image: "/next-merce.png",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript", "Tailwind CSS"],
    live: "https://nextmercee.netlify.app/",
    github: "https://github.com/sohaibyounas/NextMerce",
    overview:
      "Next Merce is a high-performance e-commerce platform designed for fast product discovery, seamless navigation, and real-time shopping cart management.",
    problem:
      "Traditional online stores suffer from slow page loads and sluggish cart operations, negatively impacting user conversion rates.",
    solution:
      "Leveraged Next.js Server Components and client-side optimistic state updates for near-instantaneous page transitions and immediate cart reflections.",
    role: "Sole developer responsible for full application design and implementation.",
    challenges: [
      "Optimizing dynamic product catalog filtering and search",
      "State synchronization between shopping cart drawer and checkout flow",
      "Ensuring responsive layout across diverse mobile viewports",
    ],
    learnings: [
      "Optimistic UI updates dramatically boost e-commerce user conversion",
      "Next.js App Router route handlers simplify API integrations",
    ],
  },
  blossend: {
    slug: "blossend",
    name: "Blossend",
    category: "Web Application",
    description:
      "Luxury floral and lifestyle application crafted with React.js, Next.js, and elegant responsive design principles.",
    image: "/blossend.png",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript", "Tailwind CSS"],
    live: "https://blossend.netlify.app/",
    github: "https://github.com/sohaibyounas/Blossend",
    overview:
      "Blossend offers an immersive digital showcase for high-end boutique products, prioritizing aesthetic elegance and fluid micro-interactions.",
    problem:
      "Client desired a digital brand experience that felt ultra-premium while keeping load times under 1 second.",
    solution:
      "Crafted custom CSS animations, optimized web font loading, and built modular UI components tailored to showcase high-resolution product imagery.",
    role: "Frontend Architect & Designer.",
    challenges: [
      "Balancing heavy image visuals with fast initial load speed",
      "Implementing custom fluid transitions across page routes",
    ],
    learnings: [
      "Subtle micro-animations significantly elevate perceived brand value",
      "Image optimization techniques (AVIF/WebP) are crucial for visual-heavy sites",
    ],
  },
  openpro: {
    slug: "openpro",
    name: "Open My Pro",
    category: "E-Commerce",
    description:
      "Enterprise-grade e-commerce & SaaS web application built with React.js and Next.js, featuring API integration.",
    image: "/openpro.png",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript", "Tailwind CSS"],
    live: "https://open-my-pro-alpha.vercel.app/",
    github: "https://github.com/sohaibyounas/OpenMyPro",
    overview:
      "Open My Pro is an all-in-one e-commerce management platform providing merchants with powerful dashboard tools and a clean customer-facing interface.",
    problem:
      "Merchants needed a cohesive interface to handle analytics, inventory, and storefront displays within a single unified web app.",
    solution:
      "Engineered a modular Next.js architecture with centralized state management, clean data tables, and an intuitive storefront navigation structure.",
    role: "Full-stack Frontend Lead.",
    challenges: [
      "Complex dashboard data visualization across device sizes",
      "Handling authentication and session states securely",
    ],
    learnings: [
      "Clean component separation accelerates feature iteration speed",
      "Designing flexible design tokens keeps complex dashboards cohesive",
    ],
  },
  taskflowpro: {
    slug: "taskflowpro",
    name: "Taskflow Pro",
    category: "Web Application",
    description:
      "Production task & project management application built with React.js, Next.js, and Supabase integration.",
    image: "/taskflowpro.png",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript", "Supabase"],
    live: "https://taskflow-sync.netlify.app/login",
    github: "https://github.com/sohaibyounas/TaskFlow-Pro",
    overview:
      "Taskflow Pro is a collaborative task management application offering kanban workflows, project tracking, and real-time sync.",
    problem:
      "Teams needed a lightweight, intuitive alternative to overly complex project management tools.",
    solution:
      "Integrated Supabase real-time subscriptions with a clean React drag-and-drop workflow interface.",
    role: "Lead Frontend Developer.",
    challenges: [
      "Real-time state synchronization across concurrent active users",
      "Drag and drop accessibility and responsive touch handling",
    ],
    learnings: [
      "Real-time web sockets require robust fallback reconnection handlers",
      "Clear feedback indicators are vital for asynchronous sync tasks",
    ],
  },
  uplift: {
    slug: "uplift",
    name: "Uplift",
    category: "Web Application",
    description:
      "A modern wellness and lifestyle publication platform featuring dynamic article categorization, fluid responsive layouts, and interactive newsletter integration.",
    image: "/uplift.png",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://uplift-blog-amber.vercel.app/",
    github: "https://github.com/sohaibyounas/Uplift-Blog",
    overview:
      "Uplift is a modern content and digital publication platform delivering health, wellness, and lifestyle articles with an engaging, interactive UI and fluid micro-animations.",
    problem:
      "Modern digital blogs need fast page loads, readable typography hierarchies, and dynamic category filtering without clunky full-page refreshes.",
    solution:
      "Developed using Next.js and Tailwind CSS with custom animated card transitions, newsletter subscription integration, and an ultra-clean mobile-first reading experience.",
    role: "Lead Frontend Developer & UI Designer.",
    challenges: [
      "Creating smooth, staggered content animations without slowing down paint times",
      "Structuring accessible and responsive layout grids across diverse mobile screen sizes",
    ],
    learnings: [
      "Clean visual hierarchy drastically improves reading engagement",
      "CSS Grid combined with Framer Motion creates captivating editorial layouts",
    ],
  },
  filesconvertor: {
    slug: "filesconvertor",
    name: "FileConvert Pro",
    category: "Web Application",
    description:
      "Professional in-browser file conversion tool with OCR capabilities. Supports DOCX, PDF, PPTX, and image formats with client-side processing and complete privacy.",
    image: "/filesconvertor.png",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "OCR", "Web Workers"],
    live: "https://filesconvertor.netlify.app/",
    github: "https://github.com/sohaibyounas/FilesConvertor",
    overview:
      "FileConvert Pro is a secure, browser-based document conversion utility featuring optical character recognition (OCR) that allows users to convert documents without uploading sensitive data to cloud servers.",
    problem:
      "Many online converters require uploading sensitive documents to third-party servers, posing serious privacy and security risks.",
    solution:
      "Built a client-side conversion engine using Web Workers and in-browser OCR parsing, guaranteeing 100% data privacy with zero server uploads.",
    role: "Full-stack Frontend Developer.",
    challenges: [
      "Handling heavy file parsing in the browser without freezing the UI thread",
      "Supporting drag-and-drop batch conversions with progress tracking and ZIP packaging",
    ],
    learnings: [
      "Web Workers are essential for heavy client-side computation in React",
      "Transparent client-side processing builds immense user trust",
    ],
  },
  codelearn: {
    slug: "codelearn",
    name: "CodeLearn",
    category: "Web Application",
    description:
      "Interactive full-stack engineering platform featuring an in-browser Monaco IDE sandbox, animated API and JWT request visualizers, progressive roadmaps, and AI-powered tutoring.",
    image: "/codelearn.png",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Monaco Editor", "AI SDK"],
    live: "https://codelearn-tech.netlify.app/",
    github: "https://github.com/sohaibyounas/ULearn",
    overview:
      "CodeLearn is a comprehensive full-stack learning platform engineered to help frontend developers transition seamlessly to backend engineering and systems architecture. It features an in-browser Monaco IDE with simulated Node.js stdout execution, interactive animated visualizers for REST APIs and JWT security, progressive skill trees, and an integrated AI tutor.",
    problem:
      "Backend concepts like the Node.js event loop, streams, and cryptographic JWT verification are notoriously abstract and difficult to grasp through static documentation, while complex local setups deter learners.",
    solution:
      "Engineered a zero-setup browser environment combining live code execution in Monaco Editor, interactive step-through visualizers for REST APIs and middleware, guided roadmaps, and context-aware AI tutoring.",
    role: "Lead Full-Stack Developer & UI Architect.",
    challenges: [
      "Integrating Monaco Editor in Next.js with client-side simulation of runtime outputs",
      "Designing interactive visualizers for asynchronous Node.js streams and event loop phases",
      "Managing multi-modal learning state and user progress with lightweight persistence",
    ],
    learnings: [
      "Interactive visualizations drastically reduce time-to-comprehension for system architecture",
      "Sandboxed in-browser playgrounds eliminate initial setup friction for aspiring engineers",
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
