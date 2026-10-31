import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/ground",
    "/trace",
    "/contact",
    "/trace/land-water/parking",
    "/trace/land-water/shrine",
    "/trace/garden-plants/alot",
    "/trace/house-living/old-house",
  ];

  return paths.map((path) => ({ url: `https://manoii.jp${path}` }));
}
