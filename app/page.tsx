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

export default function Home() {
  const [loaderDone, setLoaderDone] = React.useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <CustomCursor />
      {loaderDone && (
        <>
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
      )}
    </>
  );
}
