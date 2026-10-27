import type { MetadataRoute } from "next";

// Mockup je záměrně mimo sitemapu, má noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://inkluem.zephyron.tech/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
