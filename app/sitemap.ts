import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = getAllProjectSlugs();

  const projects: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects,
  ];
}

