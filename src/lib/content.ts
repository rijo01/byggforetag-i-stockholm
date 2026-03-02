import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface ContentMeta {
  slug: string;
  title?: string;
  name?: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  type: string;
  priceRange?: string;
  timeline?: string;
  buildingTypes?: string;
  category?: string;
  relatedServices?: string[];
  relatedDistricts?: string[];
  relatedGuides?: string[];
  publishedAt: string;
  updatedAt: string;
  faq?: { question: string; answer: string }[];
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

function getFilesFromDir(dir: string): ContentItem[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];

  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(fullDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        meta: { ...data, slug: data.slug || filename.replace(/\.mdx?$/, "") } as ContentMeta,
        content,
      };
    })
    .sort((a, b) => (a.meta.publishedAt > b.meta.publishedAt ? -1 : 1));
}

function getFileBySlug(dir: string, slug: string): ContentItem | null {
  const files = getFilesFromDir(dir);
  return files.find((f) => f.meta.slug === slug) || null;
}

// Tjänster
export function getAllTjanster(): ContentItem[] {
  return getFilesFromDir("tjanster");
}

export function getTjanstBySlug(slug: string): ContentItem | null {
  return getFileBySlug("tjanster", slug);
}

// Stadsdelar
export function getAllStadsdelar(): ContentItem[] {
  return getFilesFromDir("stadsdelar");
}

export function getStadsdelBySlug(slug: string): ContentItem | null {
  return getFileBySlug("stadsdelar", slug);
}

// Guider
export function getAllGuider(): ContentItem[] {
  return getFilesFromDir("guider");
}

export function getGuideBySlug(slug: string): ContentItem | null {
  return getFileBySlug("guider", slug);
}

// Blogg
export function getAllBlogg(): ContentItem[] {
  return getFilesFromDir("blogg");
}

export function getBloggBySlug(slug: string): ContentItem | null {
  return getFileBySlug("blogg", slug);
}

// All content for sitemap
export function getAllContent(): ContentItem[] {
  return [
    ...getAllTjanster(),
    ...getAllStadsdelar(),
    ...getAllGuider(),
    ...getAllBlogg(),
  ];
}
