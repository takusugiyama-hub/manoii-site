import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/trace-shrine.css";

export const metadata: Metadata = {
  title: "鳥取東照宮 駐車場 | やったこと | まのいいりょうし",
  description:
    "倒木が目立つようになった鳥取東照宮。駐車場の山際で、逆U字溝、段切り、しがら組みを行い、土中環境の改善に取り組んだ記録です。",
};

export default function ShrineTracePage() {
  return (
    <main className="trace-shrine">
      <Header />

      {/* ========================================
          HERO
      ======================================== */}

      <section className="trace-shrine__hero">
        <div className="trace-shrine__hero-inner">
          <p className="trace-shrine__eyebrow">
            TRACE—03
          </p>

          <p className="trace-shrine__category">
            土地と水
          </p>

          <h1 className="trace-shrine__heading">
            鳥取東照宮
          </h1>

          <p className="trace-shrine__intro">
            倒木が目立つようになった鳥取東照宮。
            <br />
            駐車場の山際で、
            <br />
            土の中の環境に手を入れました。
          </p>
        </div>
      </section>


{/* ========================================
    01 / PURPOSE
======================================== */}

<section className="trace-shrine__story trace-shrine__story--purpose">
  <div className="trace-shrine__wide-inner">
    <p className="trace-shrine__step">
      01
    </p>

    <div className="trace-shrine__purpose-layout">
      <div className="trace-shrine__copy">
        <h2 className="trace-shrine__title">
          山（土地）の安定。
        </h2>

        <div className="trace-shrine__body">
          <p>
            鳥取東照宮では、近年、倒木が目立つようになっていました。
          </p>

          <p>
            施工したのは、神社の駐車場の山側。
            地面は固く締まり、水が染み込みにくい状態でした。
          </p>

          <p>
            目的は、「山（土地）の安定」。
          </p>

          <p>
            斜面を流れる雨水や土を受け止めること。
            固くなった地面の下に、
            水と空気が動ける余地をつくること。
          </p>

          <p>
            土の中の環境が少しでも変われば、と考え、
            作業を始めました。
          </p>
        </div>
      </div>

      <figure className="trace-shrine__purpose-image">
        <Image
          src="/images/trace/shrine/before.jpg"
          alt="施工前の鳥取東照宮駐車場の山際"
          width={3024}
          height={4032}
          priority
          className="trace-shrine__image"
        />
      </figure>
    </div>
  </div>
</section>

{/* ========================================
    02 / OLD U-DITCH
======================================== */}

<section className="trace-shrine__story trace-shrine__story--ditch">
  <div className="trace-shrine__wide-inner">
    <p className="trace-shrine__step">
      02
    </p>

    <div className="trace-shrine__ditch-layout">
      <figure className="trace-shrine__ditch-main">
        <Image
          src="/images/trace/shrine/digging-ditch.jpg"
          alt="埋もれていたU字溝を掘り起こしている様子"
          width={3024}
          height={4032}
          className="trace-shrine__image"
        />
      </figure>

      <div className="trace-shrine__copy">
        <h2 className="trace-shrine__title">
          埋もれていたU字溝。
        </h2>

        <div className="trace-shrine__body">
          <p>
            山側の際を掘っていくと、
            土の中から古いU字溝が現れました。
          </p>

          <p>
            いつからそこにあったのか。
            U字溝は完全に埋没し、
            本来の役割を果たせない状態になっていました。
          </p>

          <p>
            その下には路盤も敷き詰められていました。
            一度U字溝を掘り出し、
            路盤を撤去するところから始めます。
          </p>

          <p>
            掘り進めると、
            地中からはたくさんのゴミも出てきました。
          </p>
        </div>

        <figure className="trace-shrine__buried-waste">
          <Image
            src="/images/trace/shrine/buried-waste.jpg"
            alt="掘り起こした際に地中から出てきたゴミ"
            width={3024}
            height={4032}
            className="trace-shrine__image"
          />

          <figcaption className="trace-shrine__caption">
            地中から出てきたもの。
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>


{/* ========================================
    03 / REVERSE U-DITCH
======================================== */}

<section className="trace-shrine__story trace-shrine__story--reverse">
  <div className="trace-shrine__wide-inner">
    <p className="trace-shrine__step">
      03
    </p>

    <div className="trace-shrine__reverse-layout">
      <div className="trace-shrine__copy">
        <h2 className="trace-shrine__title">
          U字溝を、逆さに戻す。
        </h2>

        <div className="trace-shrine__body">
          <p>
            掘り出したU字溝は捨てずに、
            もう一度この場所で使います。
          </p>

          <p>
            路盤を取り除き、
            藁を絡めた焼き杭を打つ。
            古瓦を割って小端立てにし、
            落ち葉や枯枝を敷き詰める。
          </p>

          <p>
            その上から、
            U字溝を通常とは反対向きに伏せて戻します。
          </p>

          <p>
            水を集めて一方向へ流すためではなく、
            U字溝の内側に空洞を残し、
            地中に水と空気が動ける余地をつくるための施工です。
          </p>
        </div>
      </div>

      <div className="trace-shrine__reverse-gallery">
        <figure className="trace-shrine__reverse-main">
          <Image
            src="/images/trace/shrine/reverse-ditch-base.jpg"
            alt="山際に沿ってU字溝を掘り起こした施工箇所全体"
            width={4032}
            height={3024}
            className="trace-shrine__image"
          />
        </figure>

        <figure className="trace-shrine__reverse-detail">
          <Image
            src="/images/trace/shrine/roof-tiles.jpg"
            alt="古瓦を割って溝に小端立てしている様子"
            width={3024}
            height={4032}
            className="trace-shrine__image"
          />
        </figure>

        <figure className="trace-shrine__reverse-lower">
          <Image
            src="/images/trace/shrine/reverse-ditch-work.jpg"
            alt="逆U字溝の施工途中の溝"
            width={4032}
            height={3024}
            className="trace-shrine__image"
          />
        </figure>
      </div>
    </div>
  </div>
</section>


{/* ========================================
    04 / TERRACING
======================================== */}

<section className="trace-shrine__story trace-shrine__story--terrace">
  <div className="trace-shrine__wide-inner">
    <p className="trace-shrine__step">
      04
    </p>

    <div className="trace-shrine__terrace-layout">
      <figure className="trace-shrine__terrace-image">
        <Image
          src="/images/trace/shrine/terracing.jpg"
          alt="段切りした斜面に朽ちた竹を据え、生木の杭を打った様子"
          width={3024}
          height={4032}
          className="trace-shrine__image"
        />
      </figure>

      <div className="trace-shrine__copy">
        <h2 className="trace-shrine__title">
          斜面に、段をつくる。
        </h2>

        <div className="trace-shrine__body">
          <p>
            斜面では雨水も土も表面を流れていきやすいため、
            段切りをして、いったん受け止める場所をつくります。
          </p>

          <p>
            段切りしたところには朽ちた竹を据え、
            生木の杭を打ち込みました。
          </p>

          <p>
            この杭が、
            次に組んでいく「しがら」の受けになります。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ========================================
    05 / SHIGARA
======================================== */}

<section className="trace-shrine__story trace-shrine__story--shigara">
  <div className="trace-shrine__wide-inner">
    <p className="trace-shrine__step">
      05
    </p>

    <div className="trace-shrine__shigara-layout">
      <div className="trace-shrine__copy">
        <h2 className="trace-shrine__title">
          しがらを組む。
        </h2>

<div className="trace-shrine__body">
  <p>
    杭の間に剪定した枝を絡ませながら、
    「しがら」を組んでいきます。
  </p>

  <p>
    枝は一本一本、太さも曲がり方も違います。
    それぞれの形を見ながら、
    編むように組み合わせていく。
  </p>

  <p>
    土木の現場には、どうしても力仕事が多くなります。
    けれど、しがら組みは少し違いました。
  </p>

  <p>
    力の強さよりも、枝の形を見て、どう組み合わせるか。
    声をかけて集まってくれた人たちも、
    それぞれに枝を手に取り、しがらを組んでいきました。
  </p>

  <p>
    そうしてしっかり組み上がったしがらは、
    少しくらい力を加えても、
    びくともしないほど頑丈になります。
  </p>

  <p className="trace-shrine__shigara-turn">
    けれど、この頑丈さがずっと続くことを
    目指しているわけではありません。
  </p>

  <p>
    枝は時間とともに、ゆっくりと朽ちていきます。
    その間、背後の土を受け止めながら植物が育ち、
    やがて根がその役割を引き継いでいく。
  </p>

  <p>
    しがらが朽ちていくことも、
    この施工の一部です。
  </p>
</div>
      </div>

      <div className="trace-shrine__shigara-gallery">
        <figure className="trace-shrine__shigara-main">
          <Image
            src="/images/trace/shrine/shigara-work.jpg"
            alt="剪定枝を使ってしがらを組んでいる様子"
            width={4032}
            height={3024}
            className="trace-shrine__image"
          />
        </figure>

        <figure className="trace-shrine__shigara-detail">
          <Image
            src="/images/trace/shrine/shigara.jpg"
            alt="斜面に組まれたしがら"
            width={3024}
            height={4032}
            className="trace-shrine__image"
          />
        </figure>
      </div>
    </div>


  </div>
</section>


      {/* ========================================
          06 / AFTER WORK
      ======================================== */}

      <section className="trace-shrine__story trace-shrine__story--after">
        <div className="trace-shrine__wide-inner">
          <div className="trace-shrine__section-copy">
            <p className="trace-shrine__step">
              06
            </p>

            <h2 className="trace-shrine__title">
              三日間の作業を終えて。
            </h2>
          </div>

          <figure className="trace-shrine__after-main">
            <Image
              src="/images/trace/shrine/after.jpg"
              alt="施工を終えた鳥取東照宮駐車場の山際"
              width={4032}
              height={3024}
              className="trace-shrine__image"
            />
          </figure>

          <div className="trace-shrine__after-bottom">
            <div className="trace-shrine__body">
              <p>
                逆U字溝、段切り、しがら組み。
                三日間かけて、駐車場の環境改善と
                土地の安定を目指した施工を行いました。
              </p>

              <p>
                地面の下に手を入れる仕事なので、
                完成したあとに見える変化は大きくありません。
              </p>

              <p>
                ここから先は、
                この場所で起きていく変化を見ていきます。
              </p>
            </div>

            <figure className="trace-shrine__after-detail">
              <Image
                src="/images/trace/shrine/after-detail.jpg"
                alt="施工後の山際を駐車場に沿って見た様子"
                width={3024}
                height={4032}
                className="trace-shrine__image"
              />
            </figure>
          </div>
        </div>
      </section>


      {/* ========================================
          HALF A YEAR LATER
          半年後の写真が決まったら、このセクション内に追加する
      ======================================== */}

      <section className="trace-shrine__later">
        <div className="trace-shrine__later-inner">
          <p className="trace-shrine__later-eyebrow">
            HALF A YEAR LATER
          </p>

          <h2 className="trace-shrine__later-title">
            半年後。
          </h2>

          <div className="trace-shrine__later-images">
            <figure>
              <Image
                src="/images/trace/shrine/six-months-shigara.jpg"
                alt="施工から半年後、朽ちながら土を留めているしがら"
                width={3024}
                height={4032}
                className="trace-shrine__image"
              />
            </figure>

            <figure>
              <Image
                src="/images/trace/shrine/six-months-keyaki.jpg"
                alt="施工から半年後、逆U字溝を施したあたりに芽を出したケヤキの実生"
                width={3024}
                height={4032}
                className="trace-shrine__image"
              />
            </figure>
          </div>

          <div className="trace-shrine__later-copy">
            <div className="trace-shrine__body">
              <p>
                施工から半年後
              </p>

              <p>
                逆U字溝を施したあたりからは、
                たくさんのケヤキの実生が芽を出していました。
              </p>

              <p>
                しがらも、少しずつ朽ち始めていました。
              </p>

              <p>
                ケヤキの発芽がこの施工によるものだと
                言い切ることはできません。
                既存の木々や、地面の下で起きていることについても、
                施工前との違いをはっきり確認することはできません。
              </p>

              <p>
                ただ、施工した場所で起きている変化のひとつとして、
                これからも見ていきたいと思っています。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
          EPILOGUE
      ======================================== */}

      <section className="trace-shrine__epilogue">
        <div className="trace-shrine__epilogue-inner">
          <h2 className="trace-shrine__epilogue-title">
            土の中のこと。
          </h2>

          <div className="trace-shrine__epilogue-copy">
            <div className="trace-shrine__body">
              <p>
                土の中で、水がどう動いているのか。
                <br />
                空気がどこまで届いているのか。
                <br />
                木々の根がどう伸びていくのか。
              </p>

              <p>
                そのすべてを目で確認することはできません。
              </p>

              <p>
                今回の施工も、
                これをすれば土地が必ず良くなる、
                という「正解」を示すものではありません。
              </p>

              <p>
                土地を見て、今ある状態を考えて、
                できることを試してみる。
                <br />
                そして、その後をまた見る。
              </p>

              <p>
                すぐには答えの出ない変化も含めて、
                この場所をこれからも見ていきます。
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================
          CREDIT
      ======================================== */}

      <section className="trace-shrine__credit">
        <div className="trace-shrine__credit-inner">
          <p className="trace-shrine__credit-title">
            作業に力を貸してくれた人たち
          </p>

          <p className="trace-shrine__credit-text">
            コツコツ ／ とくさ屋、
            そしてたくさんの助っ人のみなさん。
            <br />
            ありがとうございました。
          </p>
        </div>
      </section>

      {/* ========================================
          BACK
      ======================================== */}

      <nav
        className="trace-shrine__back"
        aria-label="やったこと一覧へ戻る"
      >
        <Link
          href="/trace"
          className="trace-shrine__back-link"
        >
          <span aria-hidden="true">←</span>
          やったことへ戻る
        </Link>
      </nav>

      <Footer />
    </main>
  );
}
