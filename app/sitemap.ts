import type { MetadataRoute } from "next";

const BASE_URL = "https://sohaib.dev";

const PROJECT_SLUGS = [
  "mixxer",
  "dewis",
  "amexio",
  "next-merce",
  "blossend",
  "openpro",
  "taskflowpro",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projects: MetadataRoute.Sitemap = PROJECT_SLUGS.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects,
  ];
}
