"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "@/styles/hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const updateHero = () => {
      const rect = hero.getBoundingClientRect();
      const scrollableDistance =
        hero.offsetHeight - window.innerHeight;

      const scrolled = Math.max(0, -rect.top);

      const progress =
        scrollableDistance > 0
          ? Math.min(1, scrolled / scrollableDistance)
          : 0;

      hero.style.setProperty(
        "--hero-progress",
        progress.toString()
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(updateHero);
    };

    updateHero();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="manoii-world"
    >
      <div className="manoii-world__window">
        <div className="manoii-world__position">
          <Image
            src="/images/home/manoii-world.webp"
            alt="家や木々、犬や鳥、地面の下の生き物までを描いた、まのいいりょうしの風景"
            width={2217}
            height={2507}
            priority
            unoptimized
            className="manoii-world__image"
          />
        </div>
      </div>

      <div className="manoii-world__message-position">
        <h1 className="manoii-world__message-main">
          <span>人と自然のあいだに、</span>
          <span>まのいい暮らしを探求する</span>
        </h1>
      </div>

      <div className="manoii-world__underground-message">
        <h2 className="manoii-world__underground-title">
          まのいいとは
        </h2>

        <div className="manoii-world__underground-text">
          <p>
            <strong>「ま」は、あいだ。</strong>
            <br />
            人と自然、人と人、ものともの。
            <br />
            そのあいだにある関係の、心地よいところを探す。
          </p>

          <p>
            あるものを活かし、
            <br className="manoii-mobile-only" />
            思いがけない巡り合わせを楽しむ。
          </p>

          <p>
            <strong>
              そんな「間」のいいことを、
              <br />
              私たちは、まのいいと呼んでいます。
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
