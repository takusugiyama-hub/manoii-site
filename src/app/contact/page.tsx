import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "相談する | まのいいりょうし",
  description: "庭のこと、土地のこと、家のこと。まだ形になっていないことも、まずはお聞かせください。",
};

const consultationExamples = [
  {
    number: "01",
    title: "土地と水",
    text: "水の流れや土地の使い方、外まわりの困りごと。まずは、その場所を一緒に見ていきます。",
  },
  {
    number: "02",
    title: "庭と草木",
    text: "庭をつくりたい、今ある庭を見直したい、草木との付き合い方を考えたい。",
  },
  {
    number: "03",
    title: "家と暮らし",
    text: "古い家の手入れや、小さな修繕、暮らしに合わせた空間のつくり方について。",
  },
];

const process = [
  ["01", "相談する", "まずはフォームから、今考えていることをお聞かせください。"],
  ["02", "話してみる", "メールや電話でお話しし、必要に応じて現地へ伺います。"],
  ["03", "一緒に考える", "場所を観ながら、できることや進め方を整理します。"],
  ["04", "手を動かす", "内容と費用をご確認いただいてから、仕事を始めます。"],
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-page__hero">
          <div className="contact-page__inner contact-page__hero-inner">
            <p className="contact-page__eyebrow">contact</p>
            <h1>相談する</h1>
            <div className="contact-page__lead">
              <p>庭のこと、土地のこと、家のこと。</p>
              <p>
                まだ何をどうしたらいいのかわからないことでも、
                <br />
                まずはお話を聞かせてください。
              </p>
            </div>
            <a className="contact-page__jump" href="#contact-form">
              相談内容を送る <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section id="contact-form" className="contact-page__form-section">
          <div className="contact-page__form-layout">
            <div className="contact-page__form-intro">
              <p className="contact-page__eyebrow">form</p>
              <h2>どんなことでも、<br />まずはお聞かせください。</h2>
              <p>
                内容を確認して、数日以内にご連絡します。
                <br />
                お急ぎの場合も、その旨をお書き添えください。
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="contact-page__examples">
          <div className="contact-page__inner">
            <p className="contact-page__eyebrow">できること</p>
            <h2>こんなことを相談できます</h2>
            <div className="contact-page__example-grid">
              {consultationExamples.map((item) => (
                <article key={item.number} className="contact-page__example">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-page__process">
          <div className="contact-page__inner">
            <p className="contact-page__eyebrow">process</p>
            <h2>相談から仕事まで</h2>
            <ol className="contact-page__process-list">
              {process.map(([number, title, text]) => (
                <li key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact-page__mail">
          <div className="contact-page__inner">
            <p>フォームを使わず、メールでもご相談いただけます。</p>
            <a href="mailto:contact@manoii.jp">contact@manoii.jp</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
