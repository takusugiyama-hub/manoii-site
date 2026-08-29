import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/trace-alot.css";

export const metadata: Metadata = {
  title: "A lotの庭 | やったこと | まのいいりょうし",
  description:
    "「将来、森のような庭にしたい」というところから始まった、A lotの庭づくりの記録です。",
};

export default function AlotTracePage() {
  return (
    <main className="trace-alot">
      <Header />

      {/* ========================================
          HERO
      ======================================== */}

      <section className="trace-alot__hero">
        <div className="trace-alot__hero-inner">
          <p className="trace-alot__eyebrow">
            TRACE—02
          </p>

          <p className="trace-alot__category">
            庭と草木
          </p>

          <h1 className="trace-alot__heading">
            A lotの庭
          </h1>

          <p className="trace-alot__intro">
            新しい場所で開店することになった、
            <br />
            ケーキとカフェのお店 A lot。
            <br />
            「将来、森のような庭にしたい」というところから、
            <br />
            この庭づくりは始まりました。
          </p>

          <p className="trace-alot__date">
            2022.04 — 05
          </p>
        </div>
      </section>


      {/* ========================================
          01 BEFORE
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--before">
        <div className="trace-alot__wide-inner">
          <div className="trace-alot__section-copy">
            <p className="trace-alot__step">
              01
            </p>

            <h2 className="trace-alot__title">
              森のような庭。
            </h2>

            <div className="trace-alot__body">
              <p>
                森の小道を抜けると、
                その先にケーキ屋さんがある。
              </p>

              <p>
                そんな景色を思い描いて、
                庭づくりが始まりました。
              </p>

              <p>
                もともとの地面は、
                砕石が混じり、固く締まった状態。
              </p>

              <p>
                木を植える前に、
                まず、この場所の土から考えることにしました。
              </p>
            </div>
          </div>

          <figure className="trace-alot__before-image">
            <Image
              src="/images/trace/alot/before.jpg"
              alt="施工前のA lotの庭"
              width={1600}
              height={1200}
              priority
              className="trace-alot__image"
            />
          </figure>
        </div>
      </section>


      {/* ========================================
          02 WATER & AIR
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--drainage">
        <div className="trace-alot__wide-inner">
          <div className="trace-alot__section-copy">
            <p className="trace-alot__step">
              02
            </p>

            <h2 className="trace-alot__title">
              水と空気の道をつくる。
            </h2>

            <div className="trace-alot__body">
              <p>
                最初につくったのは、
                地面の下の道。
              </p>

              <p>
                溝を掘り、U字溝を逆向きに据えて、
                水と空気が流れる空間をつくります。
              </p>

              <p>
                水をただ外へ逃がすのではなく、
                土の中にも巡っていける余地を残す。
              </p>

              <p>
                木を植えるより前に、
                まず地面が動ける状態をつくっていきます。
              </p>
            </div>
          </div>

          <div className="trace-alot__drainage-images">
            <figure>
              <Image
                src="/images/trace/alot/drainage-trench.jpg"
                alt="暗渠のために掘った溝"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/alot/underground-drain.jpg"
                alt="逆向きに据えたU字溝"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>
          </div>
        </div>
      </section>


      {/* ========================================
          03 APPROACH
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--approach">
        <div className="trace-alot__wide-inner">
          <div className="trace-alot__section-copy">
            <p className="trace-alot__step">
              03
            </p>

            <h2 className="trace-alot__title">
              土を叩いて、道をつくる。
            </h2>

            <div className="trace-alot__body">
              <p>
                暗渠の上には、
                お店へつながるポーチとアプローチを。
              </p>

              <p>
                真砂土に石灰とホワイトセメント、
                骨材として藁を混ぜます。
              </p>

              <p>
                コテできれいにならすのではなく、
                土間叩きの要領で仕上げました。
              </p>

              <p>
                少し不揃いな表情が、
                この場所には似合う。
              </p>

              <p>
                いつか木々が育ったら、
                森の小道を抜けて
                お店へ向かうように。
              </p>
            </div>
          </div>

          <div className="trace-alot__approach-images">
            <figure>
              <Image
                src="/images/trace/alot/approach-mixing.jpg"
                alt="アプローチの材料を混ぜている様子"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/alot/approach-tamping.jpg"
                alt="土間叩きの要領でアプローチを施工している様子"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/alot/approach-finished.jpg"
                alt="仕上がったポーチとアプローチ"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>
          </div>
        </div>
      </section>


      {/* ========================================
          04 PARKING
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--parking">
        <div className="trace-alot__story-inner">
          <div className="trace-alot__copy">
            <p className="trace-alot__step">
              04
            </p>

            <h2 className="trace-alot__title">
              呼吸する駐車場。
            </h2>

            <div className="trace-alot__body">
              <p>
                駐車場も、
                強く転圧して固めるのではなく、
                水と空気が動ける地面に。
              </p>

              <p>
                石や木を使いながら、
                車の荷重を受け止める下地をつくります。
              </p>

              <p>
                車が乗れることと、
                地面を塞がないこと。
                その両方が成り立つ場所を考えました。
              </p>
            </div>

            <Link
              href="/trace/land-water/parking"
              className="trace-alot__related-link"
            >
              呼吸する駐車場について
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <figure className="trace-alot__parking-image">
            <Image
              src="/images/trace/alot/parking-work.jpg"
              alt="A lotの呼吸する駐車場の施工"
              width={1600}
              height={1200}
              className="trace-alot__image"
            />
          </figure>
        </div>
      </section>


      {/* ========================================
          05 FOREST SOIL
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--soil">
        <div className="trace-alot__wide-inner">
          <div className="trace-alot__section-copy">
            <p className="trace-alot__step">
              05
            </p>

            <h2 className="trace-alot__title">
              山の土をつくる。
            </h2>

            <div className="trace-alot__body">
              <p>
                森のような庭にするなら、
                地面の中も、できるだけ山のように。
              </p>

              <p>
                ポーチとアプローチのまわりを深く掘り、
                朽木や石、落ち葉などを
                層にして重ねていきます。
              </p>

              <p>
                山では、倒れた木も落ち葉も、
                やがて次の土になっていきます。
              </p>

              <p>
                そんな環境を地面の中につくり、
                その上に植栽のためのマウンドをつくります。
              </p>
            </div>
          </div>

          <div className="trace-alot__soil-images">
            <figure>
              <Image
                src="/images/trace/alot/soil-digging.jpg"
                alt="植栽部分を深く掘っている様子"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/alot/forest-soil-log.jpg"
                alt="地中に朽木を入れている様子"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>
          </div>

          <div className="trace-alot__soil-images trace-alot__soil-images--second">
            <figure>
              <Image
                src="/images/trace/alot/forest-soil-layer.jpg"
                alt="朽木や石、落ち葉などを重ねた地中の層"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/alot/planting-mound.jpg"
                alt="植栽のためにつくられたマウンド"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>
          </div>
        </div>
      </section>


      {/* ========================================
          06 CONCRETE
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--concrete">
        <div className="trace-alot__wide-inner">
          <div className="trace-alot__section-copy">
            <p className="trace-alot__step">
              06
            </p>

            <h2 className="trace-alot__title">
              コンクリートの下にも、呼吸を。
            </h2>

            <div className="trace-alot__body">
              <p>
                駐車場へつながる車の道には、
                コンクリートが必要でした。
              </p>

              <p>
                でも、一面をそのまま
                コンクリートで覆ってしまえば、
                その下の土は呼吸ができません。
              </p>

              <p>
                下の土を活かしたまま
                土間打ちできる下地をつくり、
                最後は洗い出しで仕上げました。
              </p>
            </div>
          </div>

          <div className="trace-alot__concrete-images">
            <figure>
              <Image
                src="/images/trace/alot/concrete-approach-base.jpg"
                alt="土を活かすためにつくった車用アプローチの下地"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/alot/concrete-approach-finished.jpg"
                alt="洗い出しで仕上げた車用アプローチ"
                width={1600}
                height={1200}
                className="trace-alot__image"
              />
            </figure>
          </div>
        </div>
      </section>


      {/* ========================================
          07 PLANTING
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--planting">
        <div className="trace-alot__story-inner">
          <div className="trace-alot__copy">
            <p className="trace-alot__step">
              07
            </p>

            <h2 className="trace-alot__title">
              木を植える。
            </h2>

            <div className="trace-alot__body">
              <p>
                地面をつくり、
                道をつくり、
                最後に木々を植えていきます。
              </p>

              <p>
                庭の完成というより、
                ここから始まるための植栽です。
              </p>
            </div>
          </div>

          <figure className="trace-alot__planting-image">
            <Image
              src="/images/trace/alot/planting.jpg"
              alt="A lotの庭に木々を植えている様子"
              width={1600}
              height={1200}
              className="trace-alot__image"
            />
          </figure>
        </div>
      </section>


      {/* ========================================
          SYMBOL TREE
      ======================================== */}

      <section className="trace-alot__story trace-alot__story--tree">
        <div className="trace-alot__story-inner">
          <figure className="trace-alot__tree-image">
            <Image
              src="/images/trace/alot/fu-tree.jpg"
              alt="植えた当時のシンボルツリーのフウ"
              width={1200}
              height={1200}
              className="trace-alot__image"
            />
          </figure>

          <div className="trace-alot__copy">
            <h2 className="trace-alot__title">
              シンボルツリーは、フウ。
            </h2>

            <div className="trace-alot__body">
              <p>
                森のような庭の中心になる木として、
                一本のフウを植えました。
              </p>

              <p>
                まだ若いこの木も、
                庭と一緒に、
                これから育っていきます。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
          COMPLETE
      ======================================== */}

      <section className="trace-alot__complete">
        <div className="trace-alot__complete-inner">
          <div className="trace-alot__complete-heading">
            <h2 className="trace-alot__title">
              ひとまず、人の仕事はここまで。
            </h2>
          </div>

          <figure className="trace-alot__complete-image">
            <Image
              src="/images/trace/alot/after.jpg"
              alt="施工後のA lotの庭"
              width={1600}
              height={1200}
              className="trace-alot__image"
            />
          </figure>

          <div className="trace-alot__credit">
            <p className="trace-alot__credit-title">
              庭づくりに力を貸してくれた人たち
            </p>

            <p className="trace-alot__credit-text">
              コツコツ ／ とくさ屋 ／ まのいいガールズ、
              そしてたくさんの助っ人のみなさん。
              <br />
              ありがとうございました。
            </p>
          </div>
        </div>
      </section>


      {/* ========================================
          08 LATER
      ======================================== */}

      <section className="trace-alot__later">
        <div className="trace-alot__later-inner">
          <div className="trace-alot__later-heading">
            <p className="trace-alot__step">
              08
            </p>

            <h2 className="trace-alot__title">
              それから。
            </h2>
          </div>

          <figure className="trace-alot__later-image">
            <Image
              src="/images/trace/alot/later.jpg"
              alt="時間が経ったA lotの庭"
              width={1600}
              height={1200}
              className="trace-alot__image"
            />
          </figure>

          <div className="trace-alot__later-copy">
            <div className="trace-alot__body">
              <p>
                草が生え、木が育ち、
                落ち葉が積もる。
              </p>

              <p>
                人がつくったものと、
                この場所で育ったものが、
                少しずつ混ざっていきます。
              </p>

              <p>
                森のような庭へ。
                <br />
                まだ、その途中です。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
          BACK
      ======================================== */}

      <nav
        className="trace-alot__back"
        aria-label="やったこと一覧へ戻る"
      >
        <Link
          href="/trace"
          className="trace-alot__back-link"
        >
          <span aria-hidden="true">←</span>
          やったことへ戻る
        </Link>
      </nav>

      <Footer />
    </main>
  );
}
