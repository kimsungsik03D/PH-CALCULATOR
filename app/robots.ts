import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/app/widget",
    },
    sitemap: "https://ph-calculator-ll2s.vercel.app/sitemap.xml",
    host: "https://ph-calculator-ll2s.vercel.app",
  };
}
