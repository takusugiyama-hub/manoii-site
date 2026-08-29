import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/trace-house.css";

export const metadata: Metadata = {
  title: "あるもので、家をつくる | やったこと | まのいいりょうし",
  description:
    "友人が手に入れた古民家を、あるものを生かしながら二年近くかけて少しずつ改修した記録です。",
};

const imageBase = "/images/trace/old-house";

export default function OldHouseTracePage() {
  return (
    <main className="trace-house">
      <Header />

      {/* ========================================
          HERO
      ======================================== */}

      <section className="trace-house__hero">
        <div className="trace-house__hero-inner">
          <p className="trace-house__eyebrow">TRACE—04</p>
          <p className="trace-house__category">家と暮らし</p>

          <h1 className="trace-house__heading">
            あるもので、家をつくる
          </h1>

          <p className="trace-house__intro">
            友人が手に入れた、大きな古民家。
            <br />
            二年近くかけて、少しずつ住まいをつくってきました。
          </p>
        </div>
      </section>

      {/* ========================================
          PROLOGUE
      ======================================== */}

      <section className="trace-house__lead">
        <div className="trace-house__wide-inner trace-house__lead-layout">
          <div className="trace-house__lead-copy">
            <p>
              家主と友人たちで、できるところから解体し、
              二年近くかけて、少しずつ住まいをつくってきました。
            </p>

            <p>
              家主は木に関わる仕事をしていて、
              この家には、いろいろなところから集まってきた木材や廃材がありました。
            </p>

            <p>
              必要なところには新しい材料も使います。
              けれど、使えるものがあれば、まずそれを見てみる。
            </p>

            <p>
              長さも、厚みも、かたちも違う材料を、
              削ったり、切ったり、組み合わせたりしながら、
              その場所に納めていきます。
            </p>

            <p>
              完成を思い描きながら、
              目の前にあるものに合わせてつくる。
            </p>

            <p className="trace-house__lead-key">
              まのいいりょうしのこだわりのひとつ、「あるもんでする」。
            </p>

            <p>そんな古民家の改修です。</p>
          </div>

          <figure className="trace-house__lead-image">
            <Image
              src={`${imageBase}/house-exterior.jpg`}
              alt="改修した古民家の外観"
              width={4032}
              height={3024}
              priority
              className="trace-house__image"
            />
          </figure>
        </div>
      </section>

      {/* ========================================
          01 / DEMOLITION
      ======================================== */}

      <section className="trace-house__story trace-house__story--demolition">
        <div className="trace-house__wide-inner">
          <p className="trace-house__step">01</p>

          <div className="trace-house__split trace-house__split--copy-left">
            <div className="trace-house__copy">
              <h2 className="trace-house__title">
                自分たちで、ほどく
              </h2>

              <div className="trace-house__body">
                <p>はじまりは、解体から。</p>

                <p>
                  家主と友人たちで、できるところは自分たちの手で。
                  壁を落とし、床をはがし、これからの暮らしに必要なものを残しながら、
                  家を少しずつほどいていきました。
                </p>

                <p>
                  壊してみると、見えてくるものがあります。
                </p>

                <p>
                  隠れていた柱や梁。これまでの増改築の跡。床の下の土。
                </p>

                <p>
                  いったん大きく開いた家の中に、
                  ここから、新しい暮らしをつくっていきます。
                </p>
              </div>
            </div>

            <figure className="trace-house__demolition-image">
              <Image
                src={`${imageBase}/demolition-03.jpg`}
                alt="解体後の古民家の室内"
                width={4032}
                height={3024}
                className="trace-house__image"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ========================================
          02 / WATER
      ======================================== */}

      <section className="trace-house__story trace-house__story--water">
        <div className="trace-house__wide-inner">
          <p className="trace-house__step">02</p>

          <div className="trace-house__split trace-house__split--image-left">
            <figure className="trace-house__water-image">
              <Image
                src={`${imageBase}/subfloor-water.jpg`}
                alt="水が残る改修当初の床下"
                width={4032}
                height={3024}
                className="trace-house__image"
              />
            </figure>

            <div className="trace-house__copy">
              <h2 className="trace-house__title">
                家のまわりから
              </h2>

              <div className="trace-house__body">
                <p>
                  改修を始めたころ、雨が降ると、
                  床下は水びたしになっていました。
                </p>

                <p>
                  この家が建ってから、長い時間が経っています。
                </p>

                <p>
                  その間には増築や改築があり、
                  家のまわりでも、護岸工事や土地の開発など、
                  さまざまな変化がありました。
                </p>

                <p>
                  その積み重ねのなかで、
                  水の動きも変わってきたのかもしれません。
                </p>

                <p>
                  家の中をつくるのと並行して、
                  まずは、家のまわりの水の動きに手を入れました。
                </p>

                <p>
                  家の背後に雨落ちをつくる。
                  縦穴を掘る。焼き杭を打ち、炭を敷く。
                  家のまわりに溝をつくる。
                </p>

                <p>
                  雨樋も外し、
                  屋根から落ちる雨を地面で受けるようにしました。
                </p>

                <p>それから、およそ一年。</p>

                <p>
                  床下の水びたしと、ぬかるみはなくなりました。
                </p>

                <p>
                  掘ってみると、今も水は出てきます。
                </p>

                <p>
                  だから、これで終わりとはせず、
                  これからも様子を見ていきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          03 / IMAGINE
      ======================================== */}

      <section className="trace-house__story trace-house__story--imagine">
        <div className="trace-house__wide-inner">
          <p className="trace-house__step">03</p>

          <div className="trace-house__imagine-layout">
            <div className="trace-house__copy">
              <h2 className="trace-house__title">
                まだない部屋を思い描く
              </h2>

              <div className="trace-house__body">
                <p>床も壁もない、大きな空間。</p>

                <p>
                  ここに、これからの暮らしを思い描きます。
                </p>

                <p>
                  どこでご飯をつくるのか。
                  どこで火を焚くのか。
                  どこに座って、どこを歩くのか。
                </p>

                <p>
                  もともとある柱や梁。
                  家の中に集まっている材料。
                </p>

                <p>
                  実際の場所に立って、それらを見ながら、
                  ひとつずつ考えていきました。
                </p>

                <p>まず、床ができる。</p>

                <p>壁ができる。</p>

                <p>
                  少しずつ場所が分かれ、
                  何もなかった空間に、暮らしの輪郭が現れてきます。
                </p>
              </div>
            </div>

            <div className="trace-house__imagine-images">
              {/* まだ何もない空間 */}
              <figure>
                <Image
                  src={`${imageBase}/future-room.jpg`}
                  alt="これから部屋をつくっていく改修途中の室内"
                  width={4032}
                  height={3024}
                  className="trace-house__imagine-image"
                />
              </figure>

              {/* 壁の下地と、この家にもともとあった建具 */}
              <figure>
                <Image
                  src={`${imageBase}/wall-framing.jpg`}
                  alt="壁の下地と再利用する既存の建具"
                  width={3024}
                  height={4032}
                  className="trace-house__imagine-image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          04 / MATERIALS
      ======================================== */}

      <section className="trace-house__story trace-house__story--materials">
        <div className="trace-house__wide-inner">
          <p className="trace-house__step">04</p>

          <div className="trace-house__materials-layout">
            <div className="trace-house__copy">
              <h2 className="trace-house__title">
                あるもので、つくる
              </h2>

              <div className="trace-house__body">
                <p>
                  この家には、たくさんの材料があります。
                </p>

                <p>
                  家主が集めてきた木。
                  どこかで役目を終えた材。
                  この家にもともとあったもの。
                </p>

                <p>
                  もちろん、すべてがちょうどよく揃っているわけではありません。
                </p>

                <p>
                  長さも違う。厚みも違う。反っているものもある。
                </p>

                <p>だから、まず材料を見る。</p>

                <p>これは、どこに使えるだろう。</p>

                <p>
                  測って、削って、切って。
                  ときには組み合わせて。
                </p>

                <p>
                  材料を決められた寸法に合わせるだけではなく、
                  目の前にある材料に合わせて、
                  つくり方のほうを考えることもあります。
                </p>

                <p>
                  既存の階段も、もう一度使いました。
                  古い建具にも、新しい場所をつくりました。
                </p>

                <p>「あるもんでする」。</p>

                <p>
                  この家では、それがごく自然なつくり方になりました。
                </p>
              </div>
            </div>

<div className="trace-house__materials-gallery">
  {/* 集められた古材・廃材 */}
  <figure className="trace-house__materials-main">
    <Image
      src={`${imageBase}/salvaged-wood-01.jpg`}
      alt="古民家の改修に使う古材や廃材"
      width={4032}
      height={3024}
      className="trace-house__image"
    />
  </figure>

  {/* 形や寸法の異なる材料 */}
  <figure>
    <Image
      src={`${imageBase}/salvaged-wood-02.jpg`}
      alt="改修に使うさまざまな形の木材"
      width={3024}
      height={4032}
      className="trace-house__image"
    />
  </figure>

  {/* この家にあった階段の再利用 */}
  <figure>
    <Image
      src={`${imageBase}/stairs-01.jpg`}
      alt="再利用する既存の階段"
      width={3024}
      height={4032}
      className="trace-house__image"
    />
  </figure>
</div>
          </div>
        </div>
      </section>

{/* ========================================
    05 / EARTH WALL
======================================== */}

<section className="trace-house__story trace-house__story--wall">
  <div className="trace-house__wide-inner">
    <div className="trace-house__section-copy">
      <p className="trace-house__step">05</p>

      <h2 className="trace-house__title">
        この家の土で、壁をつくる
      </h2>

      <div className="trace-house__body">
        <p>
          解体すると、木だけでなく、
          たくさんの土も出てきます。
        </p>

        <p>
          その土も、捨てずに使いました。
        </p>

        <p>
          土を集め、藁を混ぜ、練る。
        </p>

        <p>
          壁には下地をつくり、
          そこへ土を塗っていきます。
        </p>

        <p>
          もともとこの家の一部だった土が、
          かたちを変えて、またこの家の一部になる。
        </p>

        <p>
          古いものをそのまま残すだけではなく、
          一度ほどいて、もう一度、別の役目をつくる。
        </p>

        <p>
          この家の中では、
          そんなことがあちこちで起きています。
        </p>
      </div>
    </div>

    {/* 土壁づくりの工程写真 */}
    <div className="trace-house__process trace-house__process--wall">
      <figure>
        <Image
          src={`${imageBase}/earth-wall-straw.jpg`}
          alt="土壁の土に藁を混ぜている様子"
          width={4032}
          height={3024}
          className="trace-house__image"
        />
      </figure>

      <figure>
        <Image
          src={`${imageBase}/earth-wall-mixing.jpg`}
          alt="土壁の土を練っている様子"
          width={4032}
          height={3024}
          className="trace-house__image"
        />
      </figure>

      <figure>
        <Image
          src={`${imageBase}/earth-wall-plaster-01.jpg`}
          alt="この家の土を壁に塗っている様子"
          width={3024}
          height={4032}
          className="trace-house__image"
        />
      </figure>
    </div>
  </div>
</section>

{/* ========================================
    06 / WORKSHOP
======================================== */}

<section className="trace-house__story trace-house__story--workshop">
  <div className="trace-house__wide-inner">
    <div className="trace-house__section-copy">
      <p className="trace-house__step">06</p>

      <h2 className="trace-house__title">
        土から、仕事場をつくる
      </h2>

      <div className="trace-house__body">
        <p>
          もともと部屋だった場所の床を外し、
          家主が仕事に使える、広い土間をつくりました。
        </p>

        <p>
          下地には焼き杭を打ち、石を入れ、
          小端立てにする。
        </p>

        <p>
          瓦も、自分たちで砕いて使いました。
        </p>

        <p>
          そして、ここでも使ったのは、この家の土です。
        </p>

        <p>
          穴を掘ったときに出た土。
          屋根に残っていた土。
          解体によって出てきた土。
        </p>

        <p>
          集めた土をふるい、固まりを崩して、
          土間に使えるようにしていきます。
        </p>

        <p>
          この準備に、ずいぶん時間がかかりました。
        </p>

        <p>
          土間は二層にして、
          少しずつ叩いて締めていきました。
        </p>

        <p>乾けば、ひびも入ります。</p>

        <p>
          そこには、細かくふるった土を入れて補修する。
        </p>

        <p>
          傷んだところがあれば、また直す。
        </p>

        <p>
          使いながら、手を入れながら、
          この土間も少しずつ育っていきます。
        </p>
      </div>
    </div>

    {/* 土間ができていくまでの工程 */}
    <div className="trace-house__process trace-house__process--workshop">
      {/* 01 / 床を外した、もとの場所 */}
      <figure>
        <Image
          src={`${imageBase}/workshop-before.jpg`}
          alt="床を外し、土間をつくる前の仕事場"
          width={4032}
          height={3024}
          className="trace-house__workshop-image"
        />
      </figure>

      {/* 02 / 石や瓦を使った下地 */}
      <figure>
        <Image
          src={`${imageBase}/workshop-base.jpg`}
          alt="石や瓦を使って土間の下地をつくる様子"
          width={3024}
          height={4032}
          className="trace-house__workshop-image"
        />
      </figure>

      {/* 03 / この家から出た土をふるう */}
      <figure>
        <Image
          src={`${imageBase}/workshop-soil-prep.jpg`}
          alt="この家から出た土をふるって準備する様子"
          width={4032}
          height={3024}
          className="trace-house__workshop-image"
        />
      </figure>

      {/* 04 / 土を入れて叩く */}
      <figure>
        <Image
          src={`${imageBase}/workshop-tataki.jpg`}
          alt="土を入れ、叩いて土間をつくる様子"
          width={4032}
          height={3024}
          className="trace-house__workshop-image"
        />
      </figure>

      {/* 05 / できあがった叩きの土間 */}
      <figure>
        <Image
          src={`${imageBase}/workshop-finished.jpg`}
          alt="できあがった叩きの土間"
          width={3024}
          height={4032}
          className="trace-house__workshop-image"
        />
      </figure>
    </div>
  </div>
</section>

{/* ========================================
    07 / LIVING
    暮らしの場所をつくる
======================================== */}

<section className="trace-house__story trace-house__story--living">
  <div className="trace-house__wide-inner">
    <p className="trace-house__step">07</p>

    <div className="trace-house__living-layout">
      {/* テキスト */}
      <div className="trace-house__copy">
        <h2 className="trace-house__title">
          暮らしの場所をつくる
        </h2>

        <div className="trace-house__body">
          <p>
            長い改修のあいだ、
            家のあちこちで、いろいろなものをつくりました。
          </p>

          <p>リビングの床。</p>
          <p>玄関の小上がり。</p>
          <p>キッチン。</p>
          <p>薪ストーブを置く場所。</p>
          <p>浴室、脱衣場、トイレ。</p>

          <p>
            ひとつを完成させてから次へ進む、
            というわけでもありません。
          </p>

          <p>
            あちらをつくり、こちらを考え、
            材料が見つかれば、また戻る。
          </p>

          <p>
            家全体を行ったり来たりしながら、
            必要な場所が、ひとつずつできていきました。
          </p>

          <p>
            いつの間にか、
            「工事をしている場所」のなかに、
            人が暮らす場所が増えていきました。
          </p>
        </div>
      </div>

      {/* 完成した暮らしの場所 */}
      <div className="trace-house__living-grid">
  {/* キッチン */}
  <figure className="trace-house__living-wide">
    <Image
      src={`${imageBase}/kitchen-finished.jpg`}
      alt="完成したキッチン"
      width={4032}
      height={3024}
      className="trace-house__image"
    />
  </figure>

  {/* 薪ストーブ */}
  <figure>
    <Image
      src={`${imageBase}/wood-stove.jpg`}
      alt="薪ストーブを設置した場所"
      width={3024}
      height={4032}
      className="trace-house__image"
    />
  </figure>

  {/* 浴室 */}
  <figure>
    <Image
      src={`${imageBase}/bathroom.jpg`}
      alt="完成した浴室"
      width={3024}
      height={4032}
      className="trace-house__image"
    />
  </figure>

  {/* トイレ */}
  <figure>
    <Image
      src={`${imageBase}/toilet.jpg`}
      alt="完成したトイレ"
      width={3024}
      height={4032}
      className="trace-house__image"
    />
  </figure>
</div>
    </div>
  </div>
</section>

      {/* ========================================
          08 / FINAL
      ======================================== */}

      <section className="trace-house__final">
        <div className="trace-house__final-inner">
          <div className="trace-house__final-copy">
            <p className="trace-house__step">08</p>

            <h2 className="trace-house__final-title">
              少しずつ、家になる
            </h2>

            <div className="trace-house__body">
              <p>
                解体したばかりのころには、
                まだ、ここでの暮らしは見えていませんでした。
              </p>

              <p>
                完成を思い描きながら、
                目の前にあるものを見る。
              </p>

              <p>
                これが使えそうなら、使ってみる。
              </p>

              <p>
                つくってみて、
                また次を考える。
              </p>

              <p>
                そんなことを繰り返して、二年近く。
              </p>

              <p>
                何もなかった大きな空間に床ができ、
                壁ができ、火を焚く場所ができ、
                ご飯をつくる場所ができました。
              </p>

              <p>
                少しずつ、家になっていきました。
              </p>

              <p>
                けれど、この家はこれで完成、
                というわけでもないのだと思います。
              </p>

              <p>
                暮らしながら直す。
                使いながら手を入れる。
              </p>

              <p>
                あるものを見つけて、
                また何かをつくる。
              </p>

              <p>
                この先も、この家は少しずつ変わっていきます。
              </p>
            </div>
          </div>

          <figure className="trace-house__final-main">
  <Image
    src={`${imageBase}/finished-room-01.jpg`}
    alt="改修後の古民家の室内"
    width={4032}
    height={3024}
    className="trace-house__image"
  />
</figure>

{/* ほぼ同じ方向から見た、施工初期と現在 */}
<div className="trace-house__final-bottom">
  {/* 施工初期 */}
  <figure>
    <Image
      src={`${imageBase}/demolition-02.jpg`}
      alt="改修初期の古民家の室内"
      width={4032}
      height={3024}
      className="trace-house__image"
    />
  </figure>

  {/* 現在 */}
  <figure>
    <Image
      src={`${imageBase}/finished-room-02.jpg`}
      alt="改修後の同じ場所の室内"
      width={4032}
      height={3024}
      className="trace-house__image"
    />
  </figure>
          </div>
        </div>
      </section>

      {/* ========================================
          BACK
      ======================================== */}

      <nav
        className="trace-house__back"
        aria-label="やったこと一覧へ戻る"
      >
        <Link
          href="/trace"
          className="trace-house__back-link"
        >
          <span aria-hidden="true">←</span>
          やったことへ戻る
        </Link>
      </nav>

      <Footer />
    </main>
  );
}