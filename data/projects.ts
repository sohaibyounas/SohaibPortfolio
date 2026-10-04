export interface ProjectCard {
  slug: string;
  index: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
  color: string;
}

export interface ProjectCaseStudy extends ProjectCard {
  overview: string;
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  learnings: string[];
}

/**
 * All project data — single source of truth used by both the
 * homepage project cards and the individual case-study pages.
 */
export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "alreem",
    index: "01",
    name: "Alreem",
    category: "Web Application",
    description:
      "A production-focused web application with modern responsive interfaces and API-driven functionality. Built with emphasis on component architecture and user experience.",
    tech: ["React.js", "JavaScript", "REST APIs", "Responsive UI"],
    image: "/alreem.png",
    live: "https://alreems.netlify.app/",
    github: "https://github.com/sohaibyounas/Alreem",
    color: "#B9A863",
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
  {
    slug: "mixxer",
    index: "02",
    name: "Mixxer",
    category: "Web Application",
    description:
      "A production-focused web application with modern responsive interfaces and API-driven functionality. Built with emphasis on component architecture and user experience.",
    tech: ["React.js", "JavaScript", "REST APIs", "Responsive UI", "CSS Modules"],
    image: "/mixxer.png",
    live: "https://mixxerapp.vercel.app/",
    github: "https://github.com/sohaibyounas/MixxerApp",
    color: "#22c55e",
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
  {
    slug: "dewis",
    index: "03",
    name: "Dewis",
    category: "Web Application",
    description:
      "A data-driven web platform built with React.js and integrated REST APIs. Focused on delivering a smooth, performant user experience across all device sizes.",
    tech: ["React.js", "JavaScript", "REST APIs", "Component Architecture", "Tailwind CSS"],
    image: "/dewis.png",
    live: "https://dewis.netlify.app/",
    github: "https://github.com/sohaibyounas/DewisApp",
    color: "#3b82f6",
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
  {
    slug: "amexio",
    index: "04",
    name: "AmeXio",
    category: "Web Application",
    description:
      "Enterprise-grade web application built with React.js and Next.js, featuring API integration and a scalable component system.",
    tech: ["React.js", "Next.js", "API Integration", "TypeScript", "Tailwind CSS"],
    image: "/amexio.png",
    live: "https://amexiofuse.netlify.app/",
    github: "https://github.com/sohaibyounas/Amexio-fuse",
    color: "#a78bfa",
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
  {
    slug: "next-merce",
    index: "05",
    name: "Next Merce",
    category: "E-Commerce",
    description:
      "Modern e-commerce storefront featuring dynamic product catalogs, instant cart persistence, promotional banners, and streamlined checkout.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: "/next-merce.png",
    live: "https://nextmercee.netlify.app/",
    github: "https://github.com/sohaibyounas/NextMerce",
    color: "#f59e0b",
    overview:
      "Next Merce is a high-performance e-commerce platform designed for fast product discovery, seamless category navigation, and real-time shopping cart management.",
    problem:
      "Traditional online stores suffer from slow page loads and sluggish cart operations, negatively impacting user conversion rates and mobile shopping experience.",
    solution:
      "Leveraged Next.js Server Components and client-side optimistic state updates for near-instantaneous page transitions and immediate cart reflections with persistent local storage.",
    role: "Sole developer responsible for full application design, component hierarchy, and responsive implementation.",
    challenges: [
      "Optimizing dynamic product catalog filtering and search across categories",
      "State synchronization between shopping cart drawer and checkout flow",
      "Ensuring responsive layout across diverse mobile viewports and tablet devices",
    ],
    learnings: [
      "Optimistic UI updates dramatically boost e-commerce user conversion",
      "Next.js App Router route handlers simplify API integrations and state caching",
    ],
  },
  {
    slug: "blossend",
    index: "06",
    name: "Blossend",
    category: "Healthcare & Wellness",
    description:
      "Elite health, wellness, and medical professional discovery platform connecting clients with verified practitioners and bespoke care.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: "/blossend.png",
    live: "https://blossend.netlify.app/",
    github: "https://github.com/sohaibyounas/Blossend",
    color: "#ec4899",
    overview:
      "Blossend offers an immersive digital directory and booking experience for healthcare and wellness experts, prioritizing practitioner verification, specialty filtering, and fluid micro-interactions.",
    problem:
      "Clients needed a trustworthy, modern platform to find and connect with top-tier wellness practitioners without clunky directory interfaces or confusing scheduling flows.",
    solution:
      "Engineered an elegant, responsive interface with fast practitioner search, specialized practice categorizations, and interactive booking previews.",
    role: "Frontend Architect & UI Developer responsible for complete component structure and responsive styling.",
    challenges: [
      "Structuring multifaceted practitioner directory filters by practice and distance",
      "Balancing rich imagery and profile presentations with fast page load performance",
      "Designing a calming, luxury-inspired visual aesthetic aligned with wellness principles",
    ],
    learnings: [
      "Subtle micro-animations and typography hierarchy elevate user trust in healthcare applications",
      "Modular search filter state prevents unnecessary DOM repaints during rapid filtering",
    ],
  },
  {
    slug: "openpro",
    index: "07",
    name: "Open My Pro",
    category: "Professional Services SaaS",
    description:
      "Modern professional services marketplace and booking management platform featuring AI-powered tools, geo-distance filtering, and instant scheduling.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: "/openpro.png",
    live: "https://open-my-pro-alpha.vercel.app/",
    github: "https://github.com/sohaibyounas/OpenMyPro",
    color: "#8b5cf6",
    overview:
      "Open My Pro is an all-in-one professional services platform enabling clients to discover, filter by zip code radius and practice specialty, and connect directly with verified experts.",
    problem:
      "Service providers and clients needed a streamlined workflow to bridge discovery and appointment management without friction.",
    solution:
      "Engineered a responsive Next.js web application with radius-based distance filtering, practice category sorting, and interactive profile cards.",
    role: "Lead Frontend Engineer responsible for UI architecture, search filters, and responsive design.",
    challenges: [
      "Implementing multi-criteria search filtering including distance radius and practice domains",
      "Ensuring rapid initial load speed and fluid transitions on mobile devices",
      "Building accessible, reusable form controls for scheduling and inquiries",
    ],
    learnings: [
      "Client-side caching of filter parameters dramatically enhances perceived search responsiveness",
      "Clear visual indicators for verified professionals significantly increase user confidence",
    ],
  },
  {
    slug: "taskflowpro",
    index: "08",
    name: "Taskflow Pro",
    category: "Productivity & Workspace",
    description:
      "Agile workspace and sprint task management application featuring Kanban boards, Trello-inspired card synchronization, and Supabase authentication.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/taskflowpro.png",
    live: "https://taskflow-sync.netlify.app/",
    github: "https://github.com/sohaibyounas/TaskFlow-Pro",
    color: "#06b6d4",
    overview:
      "Taskflow Pro is a collaborative sprint and project management application providing engineering teams with Kanban boards, sprint card tracking, and one-click demo access.",
    problem:
      "Teams often find modern enterprise project management tools bloated, slow, and overly intricate for fast-paced agile development.",
    solution:
      "Built a focused, agile workspace interface powered by Supabase with instant demo authentication, real-time board updates, and intuitive card management.",
    role: "Lead Frontend Developer responsible for authentication flows, board UI, and responsive interaction design.",
    challenges: [
      "Implementing frictionless one-click demo credentials and Supabase auth workflows",
      "State synchronization for Kanban columns, sprint tags, and task state mutations",
      "Ensuring high responsiveness across touch and pointer devices",
    ],
    learnings: [
      "Streamlined demo credential auto-fill drastically improves user onboarding conversion",
      "Optimistic UI updates are essential for fluid Kanban board card movements",
    ],
  },
  {
    slug: "ecommerce-dashboard",
    index: "09",
    name: "E-Commerce Dashboard",
    category: "E-Commerce & SaaS",
    description:
      "Comprehensive enterprise management suite featuring real-time revenue analytics, order processing workflows, product inventory control, and customer metrics.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Analytics"],
    image: "/ecommerce-dashboard.png",
    live: "https://e-commerce-production-0a3a.up.railway.app/dashboard",
    github: "https://github.com/sohaibyounas/E-Commerce",
    color: "#38bdf8",
    overview:
      "E-Commerce Dashboard (EcomDash Pro) is a production-grade merchant management portal engineered to streamline multichannel sales, monitor real-time order workflows, track inventory levels, and visualize sales KPIs through responsive, interactive dashboards.",
    problem:
      "Online store operators struggle with fragmented systems for inventory, order fulfillment, and financial performance metrics, leading to operational delays and revenue leakage.",
    solution:
      "Engineered a unified, high-performance dashboard with modular data cards, dynamic sales trend visualizations, streamlined order fulfillment statuses, and responsive navigation across all devices.",
    role: "Full-Stack Frontend Developer responsible for dashboard architecture, data visualization interfaces, responsive layout systems, and API integration.",
    challenges: [
      "Designing real-time data visualizations and sales trend metrics that maintain high rendering performance",
      "Structuring complex state management for order filtering, inventory categorization, and notifications",
      "Building an intuitive, mobile-responsive layout for comprehensive data tables on compact screens",
    ],
    learnings: [
      "Modular data table architecture drastically simplifies filter and pagination state management",
      "Aggregating critical KPI metrics at the top level increases merchant operational efficiency",
      "Optimized chart rendering avoids redundant re-renders when updating streaming analytics data",
    ],
  },
  {
    slug: "uplift",
    index: "10",
    name: "Uplift",
    category: "Web Application",
    description:
      "A modern wellness and lifestyle publication platform featuring dynamic article categorization, fluid responsive layouts, and interactive newsletter integration.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/uplift.png",
    live: "https://uplift-blog-amber.vercel.app/",
    github: "https://github.com/sohaibyounas/Uplift-Blog",
    color: "#8EFF0A",
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
  {
    slug: "filesconvertor",
    index: "11",
    name: "FileConvert Pro",
    category: "Web Application",
    description:
      "Professional in-browser file conversion tool with OCR capabilities. Supports DOCX, PDF, PPTX, and image formats with client-side batch processing and complete privacy.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "OCR", "Web Workers"],
    image: "/filesconvertor.png",
    live: "https://filesconvertor.netlify.app/",
    github: "https://github.com/sohaibyounas/FilesConvertor",
    color: "#a855f7",
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
  {
    slug: "codelearn",
    index: "12",
    name: "CodeLearn",
    category: "Web Application",
    description:
      "Interactive full-stack engineering platform featuring an in-browser Monaco IDE sandbox, animated API and JWT request visualizers, progressive roadmaps, and AI-powered tutoring.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Monaco Editor", "AI SDK"],
    image: "/codelearn.png",
    live: "https://codelearn-tech.netlify.app/",
    github: "https://github.com/sohaibyounas/ULearn",
    color: "#6366f1",
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
];

/** Lookup a project by slug — used by [slug]/page.tsx */
export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** All slugs for generateStaticParams */
export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
