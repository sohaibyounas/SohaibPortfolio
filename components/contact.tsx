"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-border bg-background py-16 sm:py-24 lg:py-32 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: CTA */}
          <div>
            <SectionReveal>
              <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mb-4 sm:mb-6 font-display text-display-lg font-bold text-foreground"
              >
                Have a product{" "}
                <br className="hidden sm:inline" />
                <span className="text-muted-foreground">worth building?</span>
              </h2>
              <p className="mb-8 sm:mb-10 max-w-full sm:max-w-sm text-sm sm:text-base text-muted-foreground">
                Let&apos;s create something fast, useful and memorable. I&apos;m
                currently available for full-time roles and freelance projects.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <a
                  href="https://linkedin.com/in/sohaib-younas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border p-3.5 sm:p-4 transition-all hover:border-foreground/20 hover:bg-muted"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="font-mono text-xs text-muted-foreground truncate">
                      linkedin.com/in/sohaib-younas
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="mailto:sohaibyounas24@gmail.com"
                  className="group flex items-center gap-3 rounded-xl border border-border p-3.5 sm:p-4 transition-all hover:border-foreground/20 hover:bg-muted"
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">Email Me</p>
                    <p className="font-mono text-xs text-muted-foreground truncate">sohaibyounas24@gmail.com</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Right: Form */}
          <SectionReveal delay={0.2} direction="left">
            <div className="rounded-2xl border border-border bg-card p-4 xs:p-6 sm:p-8">
              <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
                Start a Conversation
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-mono text-xs text-muted-foreground"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    {...register("name")}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-mono text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-mono text-xs text-muted-foreground"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-mono text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-xs text-muted-foreground"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    {...register("message")}
                    className="w-full resize-none rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_hsl(142_70%_45%/0.3)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-4 w-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-400"
                    >
                      <CheckCircle size={16} />
                      Message sent! I&apos;ll get back to you within 24 hours.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try emailing me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
