import { MetadataRoute } from "next";
import { toolsRegistry } from "@/config/toolsRegistry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolsatzero.com";

  // Map through the registry to generate a sitemap entry for every tool
  const toolUrls = toolsRegistry
    .filter((tool) => tool.isReady)
    .map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  // Hardcode the core static, category, comparison, and guide routes
  const staticPaths = [
    "", // Homepage
    "/best-browser-based-tools",
    "/best-pdf-tools",
    "/compare",
    "/guides",
    "/calculators",
    "/best-calculators",
    "/best-free-productivity-tools",
    "/best-image-conversion-tools",
    "/best-image-editing-tools",
    "/best-text-utilities",
    "/compare/csv-vs-excel",
    "/compare/json-vs-xml",
    "/compare/markdown-vs-html",
    "/compare/pdf-vs-docx",
    "/compare/png-vs-jpg",
    "/compare/webp-vs-png",
    "/developer-tools",
    "/faq",
    "/guides/how-to-calculate-emi",
    "/guides/how-to-convert-png-to-jpg",
    "/guides/how-to-merge-pdf",
    "/guides/json-formatter-explained",
    "/guides/what-is-bmi",
    "/image-tools",
    "/pdf-tools",
    "/privacy-policy",
    "/terms",
    "/text-tools",
    "/web-tools",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  return [...staticUrls, ...toolUrls];
}
