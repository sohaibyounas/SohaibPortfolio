import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectCaseStudy } from "./case-study";
import { PROJECTS, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.name} — Sohaib Younas`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, alt: `${project.name} screenshot` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const slugs = getAllProjectSlugs();
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextProject = getProjectBySlug(nextSlug)!;

  return <ProjectCaseStudy project={project} nextProject={nextProject} />;
}
