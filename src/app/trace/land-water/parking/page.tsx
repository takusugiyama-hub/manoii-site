import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/trace-parking.css";

export const metadata: Metadata = {
  title: "呼吸する駐車場 | やったこと | まのいいりょうし",
  description:
    "雨が降るとぬかるんでいた土地を、水と空気が動ける駐車場へ。呼吸する駐車場ができるまでの記録です。",
};

export default function ParkingTracePage() {
  return (
    <main className="trace-parking">
      <Header />

      {/* ========================================
          HERO
      ======================================== */}

      <section className="trace-parking__hero">
        <div className="trace-parking__hero-inner">
          <p className="trace-parking__eyebrow">
            TRACE—01
          </p>

          <p className="trace-parking__category">
            土地と水
          </p>

          <h1 className="trace-parking__heading">
            呼吸する駐車場
          </h1>

          <p className="trace-parking__intro">
            住宅街の、かつて家が建っていた場所。
            <br />
            雨が降るとぬかるんでしまう駐車場を、
            <br />
            水と空気が動ける場所につくり直しました。
          </p>
        </div>
      </section>


      {/* ========================================
          BEFORE
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--before">
        <div className="trace-parking__wide-inner">
          <div className="trace-parking__section-copy">
            <p className="trace-parking__step">
              01
            </p>

            <h2 className="trace-parking__title">
              雨が降ると、ぬかるむ。
            </h2>
          </div>

          <figure className="trace-parking__before-image">
            <Image
              src="/images/trace/parking/before.jpg"
              alt="施工前の駐車場"
              width={2048}
              height={1536}
              priority
              className="trace-parking__image"
            />
          </figure>

          <div className="trace-parking__before-copy">
            <div className="trace-parking__body">
              <p>
                ここは、かつて家が建っていた場所。
                家がなくなったあと、
                駐車場として使われていました。
              </p>

              <p>
                表面には真砂土が敷かれていましたが、
                雨が降ると水がたまり、
                足元はぬかるんでしまいます。
              </p>

              <p>
                もう一度その上を固めるのではなく、
                まず、この土地の中で
                何が起きているのかを見ることから始めました。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
          FIRST SKETCH
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--sketch">
        <div className="trace-parking__story-inner">
          <div className="trace-parking__copy">
            <p className="trace-parking__step">
              02
            </p>

            <h2 className="trace-parking__title">
              最初に描いたもの。
            </h2>

            <div className="trace-parking__body">
              <p>
                工事を始める前に描いた、最初のラフ。
              </p>

              <p>
                駐車場でありながら、木や草が育ち、
                水と空気が動く場所にできないか。
              </p>

              <p>
                まだ形になる前の、
                この仕事のはじまりです。
              </p>
            </div>
          </div>

          <figure className="trace-parking__sketch-image">
            <Image
              src="/images/trace/parking/first-sketch.jpg"
              alt="呼吸する駐車場をつくる前に描いた構想のラフスケッチ"
              width={1236}
              height={1248}
              className="trace-parking__image"
            />
          </figure>
        </div>
      </section>


      {/* ========================================
          DIG
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--dig">
        <div className="trace-parking__wide-inner">
          <div className="trace-parking__section-copy">
            <p className="trace-parking__step">
              03
            </p>

            <h2 className="trace-parking__title">
              掘ってみる。
            </h2>

            <div className="trace-parking__body">
              <p>
                真砂土の下から現れたのは、
                水分を含んだ粘土質の土。
              </p>

              <p>
                粘土層を越えて、さらに深く穴を掘ると、
                動けずにいた水が
                みるみる集まってきました。
              </p>
            </div>
          </div>

          <div className="trace-parking__digging-images">
            <figure>
              <Image
                src="/images/trace/parking/digging-soil.jpg"
                alt="真砂土の下の粘土質の層を掘り進めている様子"
                width={2048}
                height={1536}
                className="trace-parking__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/parking/digging-water.jpg"
                alt="掘った穴に水が集まっている様子"
                width={1536}
                height={2048}
                className="trace-parking__image"
              />
            </figure>
          </div>

          <p className="trace-parking__voice">
            水が動いた！動いた！
          </p>
        </div>
      </section>



      {/* ========================================
          WATER PATH
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--water">
        <div className="trace-parking__story-inner">
          <div className="trace-parking__copy">
            <p className="trace-parking__step">
              04
            </p>

            <h2 className="trace-parking__title">
              水の道をつくる。
            </h2>

            <div className="trace-parking__body">
              <p>
                水と空気が上下にも動けるように、
                溝を掘り、焼き杭を打つ。
              </p>

              <p>
                地面の下に、
                少しずつ水の道をつくっていきます。
              </p>

              <p>
                雨をできるだけ早く外へ捨てるのではなく、
                土の中へ入り、巡っていく余地を残します。
              </p>
            </div>
          </div>

          <figure className="trace-parking__water-image">
            <Image
              src="/images/trace/parking/water-path.jpg"
              alt="水と空気の通り道となる溝をつくっている様子"
              width={2048}
              height={1536}
              className="trace-parking__image"
            />
          </figure>
        </div>
      </section>


      {/* ========================================
          REUSE
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--reuse">
        <div className="trace-parking__story-inner">
          <figure className="trace-parking__reuse-image">
            <Image
              src="/images/trace/parking/concrete-rubble.jpg"
              alt="解体したコンクリート塀のコンガラ"
              width={2048}
              height={1536}
              className="trace-parking__image"
            />
          </figure>

          <div className="trace-parking__copy">
            <p className="trace-parking__step">
              05
            </p>

            <h2 className="trace-parking__title">
              あるものを使う。
            </h2>

            <div className="trace-parking__body">
              <p>
                ちょうど解体したコンクリート塀も、
                捨てずに次の資材へ。
              </p>

              <p>
                石やコンガラなど、
                そこにあるものを活かしながら、
                溝や下地をつくります。
              </p>

              <p>
                新しいものだけでつくるのではなく、
                ここにあったものが、
                またこの場所の一部になります。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
          STONE AND LEAVES
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--stone">
        <div className="trace-parking__wide-inner">
          <div className="trace-parking__section-copy">
            <p className="trace-parking__step">
              06
            </p>

            <h2 className="trace-parking__title">
              石と、落ち葉。
            </h2>

            <div className="trace-parking__body">
              <p>
                下地ができたら、
                石をひとつずつ小端立てにして並べます。
              </p>

              <p>
                石の隙間には、落ち葉を詰める。
                見えなくなる地面の下にも、
                水と空気、生きものが動ける余地を残します。
              </p>

              <p>
                車の重さを受けながらも、
                地面を一枚の硬い面にしてしまわない。
                水と空気が動ける隙間を残します。
              </p>
            </div>
          </div>

          <div className="trace-parking__stone-images">
            <figure>
              <Image
                src="/images/trace/parking/stone-base.jpg"
                alt="石を小端立てにして敷き詰めている駐車場の下地"
                width={2048}
                height={1536}
                className="trace-parking__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/parking/stones-and-leaves.jpg"
                alt="石の隙間に落ち葉を詰めている様子"
                width={1536}
                height={2048}
                className="trace-parking__image"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ========================================
          DAYS
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--hammer">
        <div className="trace-parking__story-inner">
          <div className="trace-parking__copy">
            <p className="trace-parking__step">
              07
            </p>

            <h2 className="trace-parking__title">
              何日も、石を叩く。
            </h2>

            <div className="trace-parking__body">
              <p>
                一般的な工法なら、
                2〜3日で終わる広さ。
              </p>

              <p>
                石をひとつずつ並べ、叩きながら、
                何日も作業は続きました。
              </p>

              <p className="trace-parking__thought">
                「ここまで手間をかける意味は何だろう」
                <br />
                「最後には見えなくなるんだけど」
              </p>

              <p>
                手間をかけることと、仕事としての効率。
                <br />
                自分たちが大切にしたいことと、
                現実とのあいだで、考え続けました。
              </p>
            </div>
          </div>

          <figure className="trace-parking__hammer-image">
            <Image
              src="/images/trace/parking/breaking-stones.jpg"
              alt="石を使った下地づくりを続ける作業風景"
              width={1536}
              height={2048}
              className="trace-parking__image"
            />
          </figure>
        </div>
      </section>



      {/* ========================================
          TEAM TURN
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--team">
        <div className="trace-parking__wide-inner">
          <div className="trace-parking__team-heading">
            <p className="trace-parking__step">
              08
            </p>

            <h2 className="trace-parking__title">
              そうだ、チームだ。
            </h2>
          </div>

          <div className="trace-parking__team-copy">
            <div className="trace-parking__body">
              <p>
                手間のかかる仕事なら、
                ひとりで抱え込む必要はない。
              </p>

              <p>
                いつの間にか、
                この現場にはいろいろな人が
                出入りするようになっていました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          TOGETHER
      ======================================== */}

      <section className="trace-parking__story trace-parking__story--everyone">
        <div className="trace-parking__wide-inner">
          <div className="trace-parking__section-copy">
            <p className="trace-parking__step">
              09
            </p>

            <h2 className="trace-parking__title">
              みんなでつくる。
            </h2>

            <div className="trace-parking__body">
              <p>
                施主さん夫婦も、助っ人も、
                まのいいガールズも。
              </p>

              <p>
                春休みには子どもたちも加わって、
                いつの間にか賑やかな現場になりました。
              </p>

              <p>
                石を運んだり、落ち葉を詰めたり。
                みんなで手を動かしながら、
                少しずつつくっていきました。
              </p>
            </div>
          </div>

          <div className="trace-parking__everyone-images">
            <figure>
              <Image
                src="/images/trace/parking/working-kids.jpg"
                alt="子どもたちも加わって作業している様子"
                width={2048}
                height={1536}
                className="trace-parking__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/parking/working-together.jpg"
                alt="一緒に石を扱いながら作業している様子"
                width={1536}
                height={2048}
                className="trace-parking__image"
              />
            </figure>
          </div>
        </div>
      </section>


      {/* ========================================
          COMPLETE
      ======================================== */}

      <section className="trace-parking__complete">
        <div className="trace-parking__complete-inner">
          <div className="trace-parking__complete-heading">
            <p className="trace-parking__step">
              10
            </p>

            <h2 className="trace-parking__title">
              呼吸する駐車場ができた。
            </h2>
          </div>

          <figure className="trace-parking__complete-main">
            <Image
              src="/images/trace/parking/after.jpg"
              alt="完成した呼吸する駐車場"
              width={2048}
              height={1536}
              className="trace-parking__image"
            />
          </figure>

          <div className="trace-parking__complete-bottom">
            <div className="trace-parking__complete-copy">
              <div className="trace-parking__body">
                <p>
                  表面を瓦砕石で仕上げると、
                  ここまでやってきた仕事のほとんどは、
                  地面の下に隠れてしまいます。
                </p>

                <p>
                  けれどその下には、
                  水の道があり、
                  石と落ち葉の隙間があり、
                  水と空気が動ける場所があります。
                </p>

                <p>
                  完成して見えなくなったあとも、
                  地面の中では、
                  この場所の営みが続いていきます。
                </p>
              </div>
            </div>
          </div>

          <blockquote className="trace-parking__quote">
            住宅街の中で、わずか一部でもこうして呼吸がある、
            <br />
            いとなみがある、命がある場所を点々と作っていけたら。
          </blockquote>

          <a
            href="https://www.instagram.com/p/DX1wgzjDxaO/"
            target="_blank"
            rel="noopener noreferrer"
            className="trace-parking__instagram"
          >
            Instagramで、この仕事の記録を見る
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>


      {/* ========================================
          BACK
      ======================================== */}

      <nav
        className="trace-parking__back"
        aria-label="やったこと一覧へ戻る"
      >
        <Link
          href="/trace"
          className="trace-parking__back-link"
        >
          <span aria-hidden="true">←</span>
          やったことへ戻る
        </Link>
      </nav>

      <Footer />
    </main>
  );
}
