"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { smoothScrollTo } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("#top");
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => {
      setIsScrolled(v > 30);
    });
    return unsub;
  }, [scrollY]);

  // Active section tracking
  React.useEffect(() => {
    const ids = ["top", "about", "stack", "work", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      if (href === "#top") {
        router.push("/");
      } else {
        router.push("/" + href);
      }
      return;
    }

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("#top");
    } else {
      smoothScrollTo(href);
    }
  };

  const isProjectPage = pathname.startsWith("/projects");
  const currentActive = isProjectPage
    ? "#work"
    : isScrolled
    ? activeSection || "#top"
    : "#top";

  return (
    <>
      {/* ─── Top Scroll Progress Bar (Line with project accent theme colors) ─── */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-[#30afff] via-[#92eeff] to-[#c4f7ca] shadow-[0_0_12px_rgba(48,175,255,0.85)] pointer-events-none"
      />

      {/* ─── Dynamic Header: Initial -> Scrolled Floating Card ─── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          isScrolled ? "top-3 sm:top-4 px-3 sm:px-6" : "top-0 px-0"
        }`}
      >
        <div
          className={`mx-auto flex h-16 items-center justify-between pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? "max-w-5xl lg:max-w-6xl rounded-2xl border border-white/10 dark:border-white/10 border-border/80 bg-background/85 dark:bg-[#0c101d]/90 backdrop-blur-xl shadow-2xl shadow-black/40 px-4 sm:px-6"
              : "container mx-auto px-4 sm:px-6 bg-transparent border-transparent"
          }`}
        >
          {/* Left: Original SOHAIB.DEV Logo */}
          <button
            onClick={() => scrollTo("#top")}
            className="font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase hover:text-accent transition-colors"
          >
            SOHAIB<span className="text-accent">.</span>DEV
          </button>

          {/* Desktop Nav Links */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentActive === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-muted/80 dark:bg-white/10 border border-border/60 dark:border-white/10 shadow-sm"
                      transition={{
                        type: "spring",
                        damping: 26,
                        stiffness: 350,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Theme Toggle + Restored Let's Talk CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => scrollTo("#contact")}
              className="hidden items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground sm:flex"
            >
              Let&apos;s Talk <ArrowUpRight size={14} />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-background pt-24 lg:hidden"
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full border-b border-border py-3.5 text-left font-display text-xl font-semibold text-foreground transition-colors hover:text-accent flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={() => scrollTo("#contact")}
                className="mt-8 w-full rounded-full bg-accent py-4 text-center text-base font-semibold text-accent-foreground"
              >
                Let&apos;s Talk ↗
              </motion.button>
            </nav>

            <div className="border-t border-border p-6 text-center font-mono text-xs text-muted-foreground">
              sohaib@dev ~ portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
