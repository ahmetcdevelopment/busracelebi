import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/hakkimizda", "/calisma-alanlari", "/makaleler", "/iletisim"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  return [
    ...staticRoutes,
    ...practiceAreas.map((a) => ({ url: `${site.url}/calisma-alanlari/${a.slug}`, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${site.url}/makaleler/${a.slug}`, lastModified: a.date, priority: 0.6 })),
  ];
}
