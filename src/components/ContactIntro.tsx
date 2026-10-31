import Link from "next/link";
import "@/styles/contact-intro.css";

type ContactIntroProps = {
  description?: string;
  linkLabel?: string;
};

export default function ContactIntro({
  description = "庭のこと、土地のこと、家のこと。",
  linkLabel = "相談してみる",
}: ContactIntroProps) {
  return (
    <section className="manoii-contact-intro">
      <div className="manoii-contact-intro__inner">
        <h2 className="manoii-contact-intro__heading">
          相談する
        </h2>

        <div className="manoii-contact-intro__text">
          <p>
            {description}
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
            {linkLabel}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
