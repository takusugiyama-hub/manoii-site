"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwRTD5tx7O5V3-ZhugnjF3lA_OOdxjbfVh4fbAA8vCf5BavmkQyKWJ79Uj6ooMgLHa-/exec";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? ""),
    };

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      form.reset();
      setSubmitState("sent");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="contact-name">お名前</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">メールアドレス</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={200} required />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-location">
          ご相談の場所
          <span>任意</span>
        </label>
        <input id="contact-location" name="location" type="text" maxLength={200} placeholder="例：鳥取県岩美町" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">相談したいこと</label>
        <textarea id="contact-message" name="message" rows={9} maxLength={5000} required />
        <p className="contact-form__hint">まとまっていなくても大丈夫です。今わかる範囲でお書きください。</p>
      </div>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="contact-website">ウェブサイト</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="contact-form__action">
        <button type="submit" disabled={submitState === "sending"}>
          {submitState === "sending" ? "送信しています…" : "相談内容を送る"}
        </button>
      </div>

      <div className="contact-form__status" aria-live="polite">
        {submitState === "sent" && (
          <p className="contact-form__status--sent">送信しました。内容を確認のうえ、折り返しご連絡します。</p>
        )}
        {submitState === "error" && (
          <p className="contact-form__status--error">
            送信できませんでした。お手数ですが、contact@manoii.jp までメールでご連絡ください。
          </p>
        )}
      </div>
    </form>
  );
}
