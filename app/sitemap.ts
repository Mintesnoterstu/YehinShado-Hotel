import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yehinshadohotel.com";
  const routes = ["", "/rooms", "/spa", "/dining", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-10-15"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
