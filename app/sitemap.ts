import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolsatzero.com";

  // Get all active tool pages
  const toolUrls = tools
    .filter((tool) => tool.isReady)
    .map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  // Static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...toolUrls];
}
