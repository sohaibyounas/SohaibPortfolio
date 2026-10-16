import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectsArchive } from "@/components/projects-archive";

export const metadata: Metadata = {
  title: "Projects — Sohaib Younas",
  description:
    "Every production project by Sohaib Younas — React.js and Next.js web apps, SaaS products, dashboards and client websites.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <ProjectsArchive />
      </main>
      <Footer />
    </>
  );
}
