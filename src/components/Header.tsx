"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/styles/header.css";

const INSTAGRAM_URL =
  "https://www.instagram.com/manoiiryoshi/";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        className="instagram-icon__dot"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={[
          "site-header",
          scrolled
            ? "site-header--scrolled"
            : "",
          menuOpen
            ? "site-header--menu-open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="site-header__inner">
          <Link
            href="/"
            className="site-header__brand"
            aria-label="まのいいりょうし ホーム"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo/manoii-logo.png"
              alt="まのいいりょうし"
              width={1000}
              height={324}
              priority
              className="site-header__logo"
            />
          </Link>

          <nav
            className="site-header__nav"
            aria-label="メインナビゲーション"
          >
            <Link href="/ground">
              できること
            </Link>

            <Link href="/trace">
              やったこと
            </Link>

            <Link href="/about">
              わたしたちのこと
            </Link>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="site-header__instagram"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <Link
              href="/contact"
              className="site-header__contact"
            >
              相談する
            </Link>
          </nav>

          <button
            type="button"
            className="site-header__menu"
            aria-label={
              menuOpen
                ? "メニューを閉じる"
                : "メニューを開く"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={[
          "mobile-menu",
          menuOpen
            ? "mobile-menu--open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav
          className="mobile-menu__nav"
          aria-label="モバイルナビゲーション"
        >
          <Link
            href="/ground"
            onClick={closeMenu}
          >
            できること
          </Link>

          <Link
            href="/trace"
            onClick={closeMenu}
          >
            やったこと
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
          >
            わたしたちのこと
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
          >
            相談する
          </Link>
        </nav>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mobile-menu__instagram"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>
    </>
  );
}
