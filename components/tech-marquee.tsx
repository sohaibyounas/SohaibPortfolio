import * as React from "react";

interface TechItemData {
  name: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItemData[] = [
  {
    name: "CSS",
    icon: (
      <svg
        className="h-6 w-6 rounded-md shadow-sm"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#1572B6" />
        <text
          x="12"
          y="15.5"
          fill="white"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          CSS
        </text>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <svg
        className="h-6 w-6 rounded-md shadow-sm"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path
          d="M7 6h5.2c1.7 0 2.8.8 2.8 2.1 0 1-.6 1.7-1.5 1.9 1.2.3 1.9 1.1 1.9 2.3 0 1.5-1.2 2.4-3.1 2.4H7V6zm2.4 3.6h2.5c.6 0 1-.3 1-.8 0-.6-.4-.9-1.1-.9H9.4v1.7zm0 3.4h2.7c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1H9.4v2z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: "Vite",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M21.5 4.2L12.9 22.8c-.3.7-1.3.7-1.6 0L3.1 5.3c-.4-.8.3-1.6 1.1-1.4l8.2 2.1 7.9-2.4c.8-.3 1.6.5 1.2 1.4z"
          fill="url(#viteGradient)"
        />
        <path
          d="M14.6 3.4l-4.5 9.1h3.1l-2.6 7.4 6.7-10.8h-3.3l1.8-5.7h-1.2z"
          fill="#FFD62E"
        />
        <defs>
          <linearGradient
            id="viteGradient"
            x1="4"
            y1="3"
            x2="20"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <rect
          x="12"
          y="1.5"
          width="14.8"
          height="14.8"
          rx="2.6"
          transform="rotate(45 12 1.5)"
          fill="#F05032"
        />
        <circle cx="9.2" cy="12" r="1.5" fill="white" />
        <circle cx="14.8" cy="9.2" r="1.5" fill="white" />
        <circle cx="14.8" cy="14.8" r="1.5" fill="white" />
        <path
          d="M9.2 12h3.2v2.8m0-2.8v-2.8h2.4"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "React.js",
    icon: (
      <svg className="h-6 w-6" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.83 17.632l-6.33-8.15v8.15H9.6V6.368h2.16l6.23 8.04V6.368h1.84v11.264h-2z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        className="h-6 w-6 rounded-md shadow-sm"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#3178C6" />
        <path
          d="M11.5 9H6.5v2h1.5v7h2v-7h1.5V9zm4 4.5c0-.8-.6-1.3-1.7-1.7l-.6-.2c-.5-.2-.7-.4-.7-.7 0-.4.3-.6.8-.6.6 0 1.1.3 1.2.8h1.8c-.2-1.3-1.3-2.1-3-2.1-1.7 0-2.8.9-2.8 2.3 0 .9.6 1.4 1.7 1.8l.6.2c.6.2.8.4.8.8 0 .4-.4.7-.9.7-.7 0-1.2-.4-1.3-1H9.8c.1 1.4 1.3 2.3 3.1 2.3 1.8 0 3-1 3-2.3z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        className="h-6 w-6 rounded-md shadow-sm"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#F7DF1E" />
        <path
          d="M7 16.5c.4.7 1.1 1.1 2 1.1 1.1 0 1.9-.7 1.9-2.2v-5.4H9v5.4c0 .5-.2.8-.7.8-.4 0-.7-.3-.9-.7L7 16.5zm8.5-.1c.6.9 1.5 1.4 2.7 1.4 1.5 0 2.5-.8 2.5-2.1 0-1.2-.8-1.7-2.1-2.2l-.5-.2c-.7-.3-1-.5-1-1 0-.4.3-.7.9-.7.6 0 1 .3 1.2.8l1.6-.9c-.5-1.1-1.5-1.7-2.8-1.7-1.6 0-2.6.9-2.6 2.1 0 1.1.7 1.7 1.9 2.2l.5.2c.8.3 1.2.6 1.2 1.1 0 .5-.4.8-1.1.8-.8 0-1.3-.4-1.6-1.1l-1.8.6z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: "React Query",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF4154" />
        <circle cx="12" cy="12" r="6" fill="#FFE600" />
        <circle cx="12" cy="12" r="3" fill="#FF4154" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#5FA04E" />
        <path
          d="M12 4.4L4.8 8.6v6.8L12 19.6l7.2-4.2V8.6L12 4.4z"
          fill="#18181b"
        />
        <path d="M12 7l4.5 2.6v5.2L12 17.4l-4.5-2.6V9.6L12 7z" fill="#5FA04E" />
      </svg>
    ),
  },
  {
    name: "Material UI",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M0 6.136L11.968 13.048V24L0 17.088V6.136z" fill="#007FFF" />
        <path
          d="M12.032 13.048L24 6.136V17.088L12.032 24V13.048z"
          fill="#0059B2"
        />
        <path
          d="M12 0L23.968 6.912L12 13.824L0.032 6.912L12 0z"
          fill="#007FFF"
        />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
  },
  {
    name: "Zod",
    icon: (
      <svg
        className="h-6 w-6 rounded-md shadow-sm"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect width="24" height="24" rx="5" fill="#3068B7" />
        <path
          d="M7 7h10l-7 10h7"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function TechCard({ item }: { item: TechItemData }) {
  return (
    <div className="group flex shrink-0 items-center gap-3.5 rounded-2xl border border-border/80 bg-card/75 dark:bg-[#0c101a] dark:border-white/10 px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm hover:border-foreground/30 dark:hover:border-white/25 hover:bg-card dark:hover:bg-[#111726] hover:-translate-y-0.5 transition-all duration-200 select-none cursor-default">
      <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
        {item.icon}
      </div>
      <span className="font-sans text-sm sm:text-base font-semibold text-foreground/95 tracking-tight">
        {item.name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section
      id="marquee"
      className="border-y border-border bg-background py-8 sm:py-12 overflow-hidden"
    >
      <div className="container mx-auto mb-6 sm:mb-8">
        <p className="max-w-xl text-sm leading-relaxed text-foreground sm:text-base">
          Focused on building products where performance, usability and
          engineering quality meet.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-1">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-3.5 sm:gap-4 whitespace-nowrap items-center py-2">
            {doubled.map((item, i) => (
              <TechCard key={`tech-${item.name}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
