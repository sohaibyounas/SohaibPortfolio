"use client";

import * as React from "react";
import { Loader } from "@/components/loader";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { SelectedWork } from "@/components/selected-work";
import { Philosophy } from "@/components/philosophy";
import { TechStack } from "@/components/tech-stack";
import { Terminal } from "@/components/terminal";
import { Metrics } from "@/components/metrics";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { smoothScrollTo } from "@/lib/utils";

export default function Home() {
  const [loaderDone, setLoaderDone] = React.useState(false);

  React.useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        setTimeout(() => {
          smoothScrollTo(window.location.hash);
        }, 120);
      }
    };

    if (loaderDone) {
      handleHashScroll();
      window.addEventListener("hashchange", handleHashScroll);
      return () => window.removeEventListener("hashchange", handleHashScroll);
    }
  }, [loaderDone]);

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <SelectedWork />
        <Philosophy />
        <TechStack />
        <Terminal />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
