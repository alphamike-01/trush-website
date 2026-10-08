import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trushlegal.com";

  const staticPages = [
    "",
    "/about",
    "/practice-areas",
    "/revenue-law",
    "/land-disputes",
    "/title-verification",
    "/title-clearance",
    "/revenue-record-entry",
    "/legal-documentation",
    "/property-search",
    "/banking-services",
    "/legal-opinion",
    "/articles",
    "/contact",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  try {
    const articles = await prisma.article.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });

    const articlePages = articles.map((art) => ({
      url: `${baseUrl}/articles/${art.slug}`,
      lastModified: art.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...articlePages];
  } catch {
    return staticPages;
  }
}
