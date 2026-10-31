import type { Metadata } from "next";

type PageInfo = {
  title: string;
  description: string;
  alternates: { canonical: string };
};

type ShareImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export function withShareMetadata(
  page: PageInfo,
  image: ShareImage,
): Metadata {
  const absoluteImage = { ...image, url: new URL(image.url, "https://manoii.jp").href };

  return {
    ...page,
    openGraph: {
      title: page.title,
      description: page.description,
      url: new URL(page.alternates.canonical, "https://manoii.jp").href,
      siteName: "まのいいりょうし",
      locale: "ja_JP",
      type: "website",
      images: [absoluteImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [absoluteImage],
    },
  };
}
