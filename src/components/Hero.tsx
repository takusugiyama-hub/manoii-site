import Image from "next/image";
import "@/styles/hero.css";

export default function Hero() {
  return (
    <section className="manoii-world">
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
            今あるものを活かし、自然の働きに目を向けながら、
            <br className="manoii-desktop-only" />
            人と自然のあいだにある心地よい「間」を探しています。
          </p>
        </div>
      </div>
    </section>
  );
}
