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
          <span>土地を整え、木を育て、</span>
          <span>暮らしをつくる。</span>
        </h1>
      </div>

      <div className="manoii-world__underground-message">
        <h2 className="manoii-world__underground-title">
          まのいいりょうしの仕事
        </h2>

        <div className="manoii-world__underground-text">
          <p>
            鳥取県岩美町を拠点に、土地の環境改善、庭づくり、剪定や樹勢回復、家まわりの仕事をしています。
          </p>

          <p>
            水がたまる。木が弱る。庭をどうにかしたい。
          </p>

          <p>
            そんな困りごとにも、まずはその場所で何が起きているのかをよく見ることから始めます。
          </p>

          <p>
            今あるものを活かし、自然の働きに目を向けながら、人と自然のあいだにある心地よい「間」を探しています。
          </p>
        </div>
      </div>
    </section>
  );
}
