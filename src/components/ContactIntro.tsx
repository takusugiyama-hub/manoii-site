import Link from "next/link";
import "@/styles/contact-intro.css";

export default function ContactIntro() {
  return (
    <section className="manoii-contact-intro">
      <div className="manoii-contact-intro__inner">
        <h2 className="manoii-contact-intro__heading">
          相談する
        </h2>

        <div className="manoii-contact-intro__text">
          <p>
            庭のこと、土地のこと、家のこと。
          </p>

          <p>
            まだ何をどうしたらいいのかわからないことでも、
            <br className="manoii-contact-intro__desktop-break" />
            まずはお話を聞かせてください。
          </p>
        </div>

        <div className="manoii-contact-intro__action">
          <Link
            href="/contact"
            className="manoii-contact-intro__link"
          >
            相談してみる
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
