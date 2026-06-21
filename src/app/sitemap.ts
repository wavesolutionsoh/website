import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const baseUrl = "https://website-red-one-65.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/why-wave", "/approach", "/industries", "/services", "/contact"];
  const serviceRoutes = siteConfig.services.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
