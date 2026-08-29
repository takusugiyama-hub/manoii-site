import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/trace-page.css";

export const metadata: Metadata = {
  title: "やったこと | まのいいりょうし",
  description:
    "まのいいりょうしがこれまでに手がけてきた仕事の記録をご紹介します。",
};

const traces = [
  {
    category: "土地と水",
    title: "呼吸する駐車場",
    text: "雨が降るとぬかるんでいた土地を、水と空気が動ける駐車場へ。",
    image: "/images/trace/parking.jpg",
    alt: "呼吸する駐車場",
    href: "/trace/land-water/parking",
  },
  {
    category: "庭と草木",
    title: "A lotの庭",
    text: "「将来、森のような庭にしたい」というところから始まった庭づくり。",
    image: "/images/trace/alot.jpg",
    alt: "A lotの庭",
    href: "/trace/garden-plants/alot",
  },
  {
    category: "土地と水",
    title: "鳥取東照宮",
    text: "埋もれていた水の道を見直し、土地の環境を整える。",
    image: "/images/trace/toshogu.jpg",
    alt: "鳥取東照宮での環境改善",
    href: "/trace/land-water/shrine",
  },
  {
    category: "家と暮らし",
    title: "あるもので、家をつくる",
    text: "目の前にある材料を見ながら、二年近くかけて少しずつ家をつくる。",
    image: "/images/trace/old-house.jpg",
    alt: "古民家",
    href: "/trace/house-living/old-house",
  },
];

export default function TracePage() {
  return (
    <main className="trace-page">
      <Header />

      <section className="trace-page__hero">
        <div className="trace-page__hero-inner">
          <p className="trace-page__eyebrow">TRACE</p>

          <h1 className="trace-page__heading">
            やったこと
          </h1>

          <p className="trace-page__intro">
            これまでに手がけてきた仕事の中から、
            <br />
            いくつかの記録をご紹介します。
          </p>
        </div>
      </section>

      <section className="trace-page__list">
        <div className="trace-page__list-inner">
          {traces.map((trace, index) => (
            <article
              key={trace.title}
              className="trace-page__item"
            >
              <Link
                href={trace.href}
                className="trace-page__link"
              >
                <figure className="trace-page__image-wrap">
                  <Image
                    src={trace.image}
                    alt={trace.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    className="trace-page__image"
                  />
                </figure>

                <div className="trace-page__content">
                  <p className="trace-page__number">
                    TRACE-{String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="trace-page__category">
                    {trace.category}
                  </p>

                  <h2 className="trace-page__title">
                    {trace.title}
                  </h2>

                  <p className="trace-page__text">
                    {trace.text}
                  </p>

                  <span className="trace-page__more">
                    記録を見る →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
