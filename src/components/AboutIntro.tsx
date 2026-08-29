import Image from "next/image";
import Link from "next/link";
import "@/styles/about-intro.css";

export default function AboutIntro() {
  return (
    <section className="manoii-about-intro">
      <div className="manoii-about-intro__inner">
        <div className="manoii-about-intro__image-wrap">
          <Image
            src="/images/home/about-iwami-sea.jpg"
            alt="夕暮れの岩美の海"
            fill
            sizes="(max-width: 800px) 100vw, 1180px"
            className="manoii-about-intro__image"
          />
        </div>

        <header className="manoii-about-intro__header">
          <h2 className="manoii-about-intro__heading">
            わたしたちのこと
          </h2>
        </header>

        <div className="manoii-about-intro__people">
          <article className="manoii-about-intro__person">
            <h3 className="manoii-about-intro__name">
              すぎやまりょうこ
            </h3>

            <p className="manoii-about-intro__text">
              鳥取市出身。世界各地を旅したのち、造園の仕事へ。
              2017年、家族で岩美町へ移住。
              庭づくりや剪定、土地おこしなど、
              自然と暮らしのあいだにある仕事をしています。
            </p>

            <p className="manoii-about-intro__roles">
              庭づくり / 剪定 / 土地おこし / お茶会 / イラスト
            </p>
          </article>

          <article className="manoii-about-intro__person">
            <h3 className="manoii-about-intro__name">
              風さん
            </h3>

            <p className="manoii-about-intro__text">
              千葉県浦安市出身。WEB、音楽、ものづくりなどを経て、
              2017年に岩美町へ移住し
              「まのいいりょうし」を立ち上げる。
              内装、外構、木工など、つくる仕事全般を担当。
            </p>

            <p className="manoii-about-intro__roles">
              内装 / 外構 / 木工 / 狩猟採集 / WEB / 音楽
            </p>
          </article>
        </div>

        <div className="manoii-about-intro__girls">
          <h3 className="manoii-about-intro__girls-title">
            まのいいガールズ
          </h3>

          <p className="manoii-about-intro__girls-text">
            その他、いろいろなことを一緒に楽しむ仲間たちがいます！
          </p>
        </div>

        <div className="manoii-about-intro__more">
          <Link
            href="/about"
            className="manoii-about-intro__more-link"
          >
            わたしたちのことをもう少し
          </Link>
        </div>
      </div>
    </section>
  );
}
