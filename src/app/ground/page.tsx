import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/ground-page.css";

export const metadata: Metadata = {
  title: "できること | まのいいりょうし",
  description:
    "土地と水、庭と草木、家と暮らし。まのいいりょうしができることをご紹介します。",
};

const landExamples = [
  "土地の環境改善",
  "水はけ・ぬかるみの改善",
  "道や駐車場づくり",
  "排水・小さな造成",
  "斜面や竹藪・草藪の整備",
];

const gardenExamples = [
  "庭づくり・植栽",
  "剪定・庭の管理",
  "樹勢回復・植え替え",
  "植栽マウンドづくり",
  "大きくなった木の仕事",
];

const houseExamples = [
  "古材・廃材を活かした改修",
  "土壁や内装の仕事",
  "ウッドデッキ",
  "水まわり",
  "小さな修繕や暮らしの工作",
  "五右衛門風呂制作",
];

function ExampleList({ items }: { items: string[] }) {
  return (
    <ul className="ground-page__examples">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function GroundPage() {
  return (
    <main className="ground-page">
      <Header />

      <section className="ground-page__hero">
        <div className="ground-page__hero-inner">
          <p className="ground-page__eyebrow">GROUND</p>
          <h1 className="ground-page__heading">できること</h1>
          <p className="ground-page__intro">
            土地のこと、庭のこと、家のこと。
            <br />
            暮らしのまわりにあるものを、ひとつずつ見ながら仕事をしています。
          </p>
        </div>
      </section>

<section id="land-water" className="ground-page__chapter ground-page__chapter--land">
  <div className="ground-page__chapter-inner ground-page__land-inner">

    {/* 上段：説明 + 代表写真 */}
    <div className="ground-page__land-intro">
      <div className="ground-page__copy">
        <p className="ground-page__number">GROUND-01</p>

        <h2 className="ground-page__title">
          土地と水
        </h2>

        <p className="ground-page__lead">
          水と空気の流れを見ながら、土地を整える。
        </p>

        <div className="ground-page__body">
          <p>
            水がたまる。土が硬くなる。木が弱る。斜面が崩れる。
            土地にあらわれる変化には、水や空気の流れが関わっていることがあります。
          </p>

          <p>
            目の前の症状だけを見るのではなく、
            水がどこから来て、どこへ向かっているのか。
            地形や土の状態、その場所で起きていることを見ながら、
            水と空気が動ける道をつくります。
          </p>
        </div>

        <ExampleList items={landExamples} />
      </div>

      <figure className="ground-page__land-main">
        <Image
          src="/images/ground/land-water-slope-work.jpg"
          alt="家の裏手の法面で、段切りと水の浸透施工を行っている様子"
          width={1536}
          height={2048}
          priority
          className="ground-page__land-main-image"
        />
      </figure>
    </div>

    {/* 下段：4つの施工写真 */}
    <div className="ground-page__land-gallery">

      <figure className="ground-page__land-gallery-item">
        <Image
          src="/images/ground/land-water-slope-after.jpg"
          alt="施工後の法面と通路"
          width={1536}
          height={2048}
          className="ground-page__land-gallery-image"
        />
        <figcaption>
          <strong>斜面の環境改善</strong>
          <span>
            水が土中へ浸透する道をつくり、
            管理しやすい通路も生まれました。
          </span>
        </figcaption>
      </figure>

      <figure className="ground-page__land-gallery-item">
        <Image
          src="/images/ground/land-water-shrine.jpg"
          alt="神社の駐車場で埋まっていたU字溝を掘り起こしている様子"
          width={2048}
          height={1536}
          className="ground-page__land-gallery-image"
        />
        <figcaption>
          <strong>神社の環境改善</strong>
          <span>
            埋まっていたU字溝を活かし、
            土中の水と空気の流れをつくる。
          </span>
        </figcaption>
      </figure>

      <figure className="ground-page__land-gallery-item">
        <Image
          src="/images/ground/land-water-parking.jpg"
          alt="呼吸する駐車場で、グリ石の間に落ち葉を詰めている様子"
          width={1536}
          height={2048}
          className="ground-page__land-gallery-image"
        />
        <figcaption>
          <strong>呼吸する駐車場</strong>
          <span>
            グリ石を小端立てて敷き詰め、できた空間に落ち葉を入れ込みます。
          </span>
        </figcaption>
      </figure>

      <figure className="ground-page__land-gallery-item">
        <Image
          src="/images/ground/land-water-stone-path.jpg"
          alt="水が集まる場所に手を入れ、歩ける石畳にした施工例"
          width={2048}
          height={1536}
          className="ground-page__land-gallery-image"
        />
        <figcaption>
          <strong>水の集まる場所に、もう一度</strong>
          <span>
            水の動きを見ながら手を入れ直し、
            最後は歩ける石畳に。
          </span>
        </figcaption>
      </figure>

    </div>

  </div>
</section>

      <section id="garden-plants" className="ground-page__chapter ground-page__chapter--garden">
  <div className="ground-page__chapter-inner ground-page__garden-inner">

    {/* 上段：イラスト + 説明 */}
    <div className="ground-page__garden-intro">
      <figure className="ground-page__garden-main">
        <Image
          src="/images/ground/manoiiniwa.png"
          alt="家と木々が育つ庭を描いたイラスト"
          width={602}
          height={526}
          className="ground-page__garden-illustration"
        />
      </figure>

      <div className="ground-page__copy">
        <p className="ground-page__number">GROUND-02</p>

        <h2 className="ground-page__title">
          庭と草木
        </h2>

        <p className="ground-page__lead">
          庭をつくる。木を植える。育っていく場所に手を入れる。
        </p>

        <div className="ground-page__body">
          <p>
            木も土も、その場所で呼吸をしながら変わり続けています。
            雨が土へ入り、草木が育ち、落ち葉や微生物の働きがまた次の土をつくる。
            そんな循環が少しずつ育っていく庭を考えます。
          </p>

          <p>
            新しく庭をつくるところから、今ある一本の木の相談まで。
            完成した瞬間だけではなく、その先の時間も気にしながら手を入れます。
          </p>
        </div>

        <ExampleList items={gardenExamples} />
      </div>
    </div>

    {/* 下段：施工例 4枚 */}
    <div className="ground-page__garden-gallery">

      {/* 1. 樹勢回復 BEFORE */}
      <figure className="ground-page__garden-gallery-item">
        <Image
          src="/images/ground/garden-tree-before.jpg"
          alt="樹勢回復処置前の金木犀"
          width={1536}
          height={2048}
          className="ground-page__garden-gallery-image"
        />
        <figcaption>
          <strong>樹勢回復 ― 処置前</strong>
          <span>
            葉をほとんどつけなくなっていた金木犀。
            木だけでなく、足元の土の環境から見直しました。
          </span>
        </figcaption>
      </figure>

      {/* 2. 樹勢回復 AFTER */}
      <figure className="ground-page__garden-gallery-item">
        <Image
          src="/images/ground/garden-tree-after.jpg"
          alt="樹勢回復処置後、葉を茂らせた金木犀"
          width={1536}
          height={2048}
          className="ground-page__garden-gallery-image"
        />
        <figcaption>
          <strong>樹勢回復 ― 処置後</strong>
          <span>
            溝と縦穴をつくり、水と空気の巡りを促す。
            やがて、驚くほど葉をつけるようになりました。
          </span>
        </figcaption>
      </figure>

      {/* 3. 森を目指す庭 */}
      <figure className="ground-page__garden-gallery-item">
        <Image
          src="/images/ground/garden-forest.jpg"
          alt="将来森のようになることを目指してつくった庭"
          width={2048}
          height={1536}
          className="ground-page__garden-gallery-image"
        />
        <figcaption>
          <strong>森を目指す庭</strong>
          <span>
            固く締まった土地を深く起こし、
            水と空気の通り道をつくって植栽しました。
          </span>
        </figcaption>
      </figure>

      {/* 4. 剪定 */}
      <figure className="ground-page__garden-gallery-item">
        <Image
          src="/images/ground/garden-pruning.jpg"
          alt="庭木の剪定をしている様子"
          width={1536}
          height={2048}
          className="ground-page__garden-gallery-image"
        />
        <figcaption>
          <strong>庭に手を入れる</strong>
          <span>
            木の様子を見ながら、育った庭に手を入れる。
            ある日の剪定風景。まのいいガールズも一緒です。
          </span>
        </figcaption>
      </figure>

    </div>

  </div>
</section>

      <section
  id="home-life"
  className="ground-page__chapter ground-page__chapter--house"
>
        <div className="ground-page__chapter-inner">
          <div className="ground-page__visual ground-page__visual--house">
            <Image
              src="/images/ground/manoiiie.png"
              alt="古材や土壁などを活かした家まわりの施工例"
              width={779}
              height={781}
              className="ground-page__house-image"
            />
          </div>

          <div className="ground-page__copy">
            <p className="ground-page__number">GROUND-03</p>
            <h2 className="ground-page__title">家と暮らし</h2>
            <p className="ground-page__lead">
              そこにあるものを活かしながら、暮らしに合わせてつくる。
            </p>
            <div className="ground-page__body">
              <p>
                古材や廃材、使われなくなったものも、見方を変えるとまだ使えることがあります。
                新しくすることだけを答えにせず、今ある家や素材のよいところを残しながら、
                暮らしに合う形を探します。
              </p>
              <p>
                大きな改修だけでなく、ちょっとした不便を直したり、
                「こんなものがあったらいいな」を形にしたり。
                家のまわりのことなら、まずは話を聞かせてください。
              </p>
            </div>

            <ExampleList items={houseExamples} />
          </div>
        </div>
      </section>

      <section className="ground-page__attitude">
        <div className="ground-page__attitude-inner">
          <div className="ground-page__attitude-copy">
            <p className="ground-page__eyebrow">HOW WE WORK</p>
            <h2 className="ground-page__attitude-title">
              まず、その場所にあるものを見る。
            </h2>

            <div className="ground-page__attitude-body">
              <p>
                土地も、庭も、家も、それぞれ条件が違います。
                だから、決まった方法をそのまま当てはめるのではなく、
                その場所にあるもの、起きていること、そこで暮らす人のことから考えます。
              </p>
              <p>
                使えるものは使う。急がなくてもいいものは、少し待ってみる。
                手を入れすぎない方がよいところには、手を入れすぎない。
                そうやって、人と自然のあいだの心地よいところを探しています。
              </p>
            </div>
          </div>

          <div className="ground-page__tea">
            <Image
              src="/images/ground/manoiiochakai.png"
              alt="円卓を囲んで話をするまのいいお茶会のイラスト"
              width={500}
              height={489}
              className="ground-page__tea-image"
            />
            <p className="ground-page__tea-note">
              ときどき、環境や暮らしについて話す
              <br />
              「まのいいお茶会」もひらいています。
            </p>
          </div>
        </div>
      </section>

      <section className="ground-page__contact">
        <div className="ground-page__contact-inner">
          <p className="ground-page__contact-small">CONTACT</p>
          <h2 className="ground-page__contact-title">
            まずは、話してみるところから。
          </h2>
          <p className="ground-page__contact-text">
            何を頼めばいいのか、まだはっきりしていなくても大丈夫です。
            <br />
            土地や庭、家のことで気になっていることを聞かせてください。
          </p>
          <Link href="/contact" className="ground-page__contact-link">
            相談する
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
