import { MetadataRoute } from "next";
import { getAllTjanster, getAllStadsdelar, getAllGuider, getAllBlogg } from "@/lib/content";

const BASE_URL = "https://byggforetag-i-stockholm.se";

function safeDate(dateStr?: string): Date {
  if (!dateStr) return new Date();
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const tjanster = getAllTjanster().map((t) => ({
    url: `${BASE_URL}/tjanster/${t.meta.slug}`,
    lastModified: safeDate(t.meta.updatedAt || t.meta.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const stadsdelar = getAllStadsdelar().map((s) => ({
    url: `${BASE_URL}/stadsdelar/${s.meta.slug}`,
    lastModified: safeDate(s.meta.updatedAt || s.meta.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guider = getAllGuider().map((g) => ({
    url: `${BASE_URL}/guider/${g.meta.slug}`,
    lastModified: safeDate(g.meta.updatedAt || g.meta.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogg = getAllBlogg().map((b) => ({
    url: `${BASE_URL}/blogg/${b.meta.slug}`,
    lastModified: safeDate(b.meta.updatedAt || b.meta.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/tjanster`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/stadsdelar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/guider`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/hitta-expert`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/om-oss`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    ...tjanster,
    ...stadsdelar,
    ...guider,
    ...blogg,
  ];
}
