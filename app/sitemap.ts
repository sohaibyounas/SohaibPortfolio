import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sohaib.dev", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://sohaib.dev/projects/mixxer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://sohaib.dev/projects/dewis", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://sohaib.dev/projects/amexio", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
