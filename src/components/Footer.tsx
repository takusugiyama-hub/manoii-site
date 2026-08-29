import Link from "next/link";
import "@/styles/footer.css";

const INSTAGRAM_URL =
  "https://www.instagram.com/manoiiryoshi/";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__left">
            <Link
              href="/"
              className="site-footer__brand"
            >
              まのいいりょうし
            </Link>
          </div>

          <div className="site-footer__right">
            <nav
              className="site-footer__nav"
              aria-label="フッターナビゲーション"
            >
              <div className="site-footer__nav-column">
                <Link href="/ground">
                  できること
                </Link>

                <Link href="/trace">
                  やったこと
                </Link>
              </div>

              <div className="site-footer__nav-column">
                <Link href="/about">
                  わたしたちのこと
                </Link>

                <Link href="/contact">
                  相談する
                </Link>
              </div>
            </nav>

            <div className="site-footer__social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <small className="site-footer__copyright">
            © manoii
          </small>
        </div>
      </div>
    </footer>
  );
}
