import { MetadataRoute } from "next";

const baseUrl = "https://byggforetag-i-stockholm.se";

const tjanster = ["badrumsrenovering", "koksrenovering", "tillbyggnad", "nybyggnation", "totalrenovering", "fasadrenovering", "takrenovering", "malning", "golv", "el", "vvs", "attefallshus"];
const omraden = ["sodermalm", "ostermalm", "norrmalm", "kungsholmen", "vasastan", "solna", "nacka", "lidingo", "taby", "huddinge", "bromma", "enskede"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/tjanster`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/stadsdelar`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/guider`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/hitta-expert`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/om-oss`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
  ];

  const tjanstPages = tjanster.map((slug) => ({
    url: `${baseUrl}/tjanster/${slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8,
  }));

  const omradPages = omraden.map((slug) => ({
    url: `${baseUrl}/stadsdelar/${slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7,
  }));

  return [...staticPages, ...tjanstPages, ...omradPages];
}
