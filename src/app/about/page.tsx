import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/about.css";

type AboutPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  sizes?: string;
};

function AboutPhoto({
  src,
  alt,
  className = "",
  position = "50% 50%",
  sizes = "(max-width: 800px) calc(100vw - 44px), 50vw",
}: AboutPhotoProps) {
  return (
    <figure className={`about__photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        sizes={sizes}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: position,
        }}
      />
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about">
        {/* HERO */}
        <section className="about__hero">
          <div className="about__hero-inner">
            <p className="about__eyebrow">about</p>
            <h1 className="about__heading">わたしたちのこと</h1>
            <p className="about__intro">
              自然から糧を得ること。
              <br />
              暮らし、手を動かしながら、考えてきたこと。
            </p>
          </div>
        </section>

        {/* PLACE */}
        <section className="about__section">
          <div className="about__wide">
            <AboutPhoto
              src="/images/about/winter-village.jpg"
              alt="雪の残る集落を籠を背負って歩く"
              className="about__photo--landscape"
              position="50% 58%"
              sizes="(max-width: 800px) calc(100vw - 44px), 1200px"
            />
          </div>

          <div className="about__story about__story--right">
            <div className="about__copy">
              <p>2017年、鳥取県岩美町に移住しました。</p>
              <p>
                ここに来る前から、
                <br />
                やってみたい暮らしがありました。
              </p>
              <p>
                山や海の近くで、
                <br />
                自然から食べるものを得ながら暮らすこと。
              </p>
              <p>
                そんな暮らしのできる場所を探して、
                <br />
                たどり着いたのが、
                <br />
                りょうこの実家にも近い、この小さな集落でした。
              </p>
            </div>
          </div>

          <div className="about__wide about__wide--home">
            <AboutPhoto
              src="/images/about/our-home.jpg"
              alt="山に囲まれた家の前で過ごす家族"
              className="about__photo--home"
              sizes="(max-width: 800px) calc(100vw - 44px), 900px"
            />
          </div>
        </section>

        {/* NATURE */}
        <section className="about__section about__section--soft">
          <div className="about__section-title">
            <p className="about__eyebrow">自然から、少し分けてもらう</p>
          </div>

          <div className="about__story">
            <div className="about__copy">
              <p>
                山に入って、山菜を採る。
                <br />
                木の実を拾う。
                <br />
                きのこを探す。
              </p>
              <p>海に潜って、魚を突く。</p>
              <p>
                山では獣の痕跡を探し、
                <br />
                罠を仕掛ける。
              </p>
              <p>
                何かを育てることよりも、
                <br />
                すでにそこにあるものを見つけることに、
                <br />
                わたしたちは惹かれました。
              </p>
              <p>
                でも、実際にやってみると、
                <br />
                自然から食べるものを得るのは、
                <br />
                思っていたよりずっと難しい。
              </p>
              <p>
                どこにあるのか。
                <br />
                いつ採れるのか。
              </p>
              <p>
                去年あった場所に、
                <br />
                今年もあるとは限らない。
              </p>
              <p>
                海に行っても、何も獲れない日がある。
                <br />
                獣はもちろん、こちらの都合では動いてくれません。
              </p>
              <p>自然から食べるものを得る。</p>
              <p>
                それだけで生をつないできた人たちは、
                <br />
                いったいどれだけ自然のことを
                <br />
                知っていたんだろう。
              </p>
              <p>「これって、弥生というより縄文なんじゃない？」</p>
              <p>
                そんなところから、
                <br />
                縄文のことを少しずつ調べるようになりました。
              </p>
            </div>

            <div className="about__photo-stack">
              <AboutPhoto src="/images/about/gathered-wild-plants.jpg" alt="木の板に並べた山菜" className="about__photo--nature-main" />
              <AboutPhoto src="/images/about/morel-in-the-woods.jpg" alt="山の地面に生えているアミガサタケ" className="about__photo--nature-morel" position="50% 58%" />
              <AboutPhoto src="/images/about/spearfishing-catch.jpg" alt="海に潜って突いた魚" className="about__photo--nature-fish" />
              <AboutPhoto src="/images/about/deer-and-trap.jpg" alt="山に仕掛けた罠と鹿" className="about__photo--nature-deer" position="50% 52%" />
            </div>
          </div>
        </section>

        {/* KANKANKODO */}
        <section className="about__kankankodo">
          <div className="about__kankankodo-inner">
            <p className="about__eyebrow about__eyebrow--light">感観考動</p>

            <div className="about__kankankodo-copy">
              <p>
                縄文の人たちは、
                <br />
                どんなふうに自然と向き合っていたんだろう。
              </p>
              <p>
                葉が落ちたあと、枝に残る葉痕。
                <br />
                土のこと。風のこと。
                <br />
                水のこと。草木のこと。
                <br />
                昼と夜、季節の移ろい。
              </p>
              <p>
                そんなことを考えているうちに、
                <br />
                そもそも自分たちは、
                <br />
                自然の何を感じ、何を観ているんだろう、
                <br />
                と思うようになりました。
              </p>
              <p>
                目に見えるものは、
                <br />
                自然のほんの一部です。
              </p>
              <p>
                草が一本、そこに生えている。
                <br />
                なぜそこなのかは、わからない。
              </p>
              <p>
                地面の下にある石や、水、土。
                <br />
                光や風、生きもの。
              </p>
              <p>
                いくつものものが関わりあって、
                <br />
                今、そこに生えているのかもしれません。
              </p>

              <div className="about__kankankodo-break">
                <p>何かが気になる。</p>
                <p>まず、感じる。</p>
                <p>
                  そこから観てみる。
                  <br />
                  考えてみる。
                  <br />
                  そして、動いてみる。
                </p>
                <p>
                  動いたことで、
                  <br />
                  それまで見えなかったものに気づくこともあります。
                </p>
                <p>
                  それでも、
                  <br />
                  わからないことは残ります。
                </p>
                <p>
                  自然のことを、
                  <br />
                  簡単に「こうだ」と決めない。
                </p>
                <p>
                  わからないことを残したまま、
                  <br />
                  また感じ、観て、考える。
                </p>
              </div>

              <div className="about__four-words" aria-label="感じる、観る、考える、動く">
                <div className="about__four-word"><span className="about__four-kanji">感</span><span className="about__four-title">感じる</span></div>
                <div className="about__four-word"><span className="about__four-kanji">観</span><span className="about__four-title">観る</span></div>
                <div className="about__four-word"><span className="about__four-kanji">考</span><span className="about__four-title">考える</span></div>
                <div className="about__four-word"><span className="about__four-kanji">動</span><span className="about__four-title">動く</span></div>
              </div>

              <div className="about__kankankodo-end">
                <p>
                  四つを並べて、
                  <br />
                  「感観考動」という言葉をつくりました。
                </p>
                <p>いつも、この順番になるわけではありません。</p>
                <p>
                  行ったり来たりしながら、
                  <br />
                  また感じ、観て、考える。
                </p>
                <p>今も大切にしている言葉です。</p>
              </div>
            </div>

            <div className="about__kankankodo-photos">
              <AboutPhoto src="/images/about/looking-up-at-tree.jpg" alt="杉の幹を根元から見上げる" className="about__photo--kankankodo-main" position="50% 48%" />
              <AboutPhoto src="/images/about/animal-track.jpg" alt="土の上に残った獣の痕跡" className="about__photo--kankankodo-detail" />
            </div>
          </div>
        </section>

        {/* LIFE / WORK */}
        <section className="about__section about__section--work">
          <div className="about__section-title"><p className="about__eyebrow">暮らしから、仕事へ</p></div>
          <div className="about__story">
            <div className="about__copy">
              <p>この場所で暮らしはじめてから、<br />自分たちで手を動かすことが増えました。</p>
              <p>山に水源を探し、<br />水を引く。</p>
              <p>家をなおす。</p>
              <p>どれも、最初からやり方を知っていたわけではありません。</p>
              <p>わからなければ調べる。<br />人に聞く。<br />教えてもらう。</p>
              <p>そして、自分たちでやってみる。</p>
              <p>やってみると、<br />また、わからないことが出てくる。</p>
              <p>そうやって少しずつ、<br />できることが増えていきました。</p>
              <p>暮らしのためにやっていたことと、<br />人から頼まれてやること。</p>
              <p>その境目も、いつの間にか<br />あまりはっきりしなくなりました。</p>
              <p>今は、<br />土地と水、庭と草木、家と暮らしに関わる仕事をしています。</p>
              <p>仕事になっても、<br />やっていることの根っこはあまり変わりません。</p>
            </div>
            <div className="about__work-photos">
              <AboutPhoto src="/images/about/mountain-water-source.jpg" alt="山の水源から水を引く" className="about__photo--water" />
              <AboutPhoto src="/images/about/repairing-the-floor.jpg" alt="家の床板を自分たちで加工する" className="about__photo--repair" />
            </div>
          </div>
          <div className="about__wide about__wide--work">
            <AboutPhoto src="/images/about/renovating-the-house.jpg" alt="古い家の構造を確かめながら改修する" className="about__photo--landscape" sizes="(max-width: 800px) calc(100vw - 44px), 1200px" />
          </div>
        </section>

        {/* NAME */}
        <section className="about__name">
          <div className="about__name-inner">
            <div className="about__copy">
              <p className="about__eyebrow">まのいいりょうし</p>
              <p>「まのいいりょうし」は、<br />子どものころに好きだった絵本の名前です。</p>
              <p>母親に何度も読んでもらった、<br />『まのいいりょうし』。</p>
              <p>猟師が、息子の七つのお祝いに<br />何か旨いものでも食わせてやろうと猟に出ると、<br />次から次へと獲物がとれる。</p>
              <p>そんな「まのいい」お話です。</p>
              <p>でも、この話のいちばん「まのいい」ところは、<br />たくさんの獲物がとれたその日が、<br />ちょうど息子のお祝いであったこと。</p>
              <p>家族だけでは食べきれないほどの獲物で<br />ご馳走をつくり、近所の人たちを呼んで、<br />みんなで盛大にお祝いをする。</p>
              <p>「まがいい」といえば、<br />運がいい、タイミングがいい、ということなのだと思います。</p>
              <p>でも、ただ自分にいいことが起きる、というだけでは、<br />少し違う。</p>
              <p>ひとつの出来事と、<br />もうひとつの出来事が出会って、<br />そこから次の何かが生まれる。</p>
              <p>人と人でも、<br />人とものでも、<br />人と土地でも。</p>
              <p>自分だけで次を決めるのではなく、<br />関わるものとの間で、<br />次の動きが決まっていく。</p>
              <p>こちらが何かをすると、何かが起きる。<br />それを受けて、こちらもまた動く。</p>
              <p>そういう関わりがつながって、<br />思ってもいなかったところへ<br />発展していくことがあります。</p>
              <p>そんなときに、</p>
              <p>「ああ、まがいいな」</p>
              <p>と思うのかもしれません。</p>
              <p>自分たちの名前を考えたとき、<br />そこまで考えていたわけではありません。</p>
              <p>ただ、好きだった絵本から、<br />名前をもらいました。</p>
              <div className="about__name-question">
                <p>「ま」って、なんなんだろう。</p>
                <p>今でも、よくわかりません。</p>
              </div>
              <p className="about__closing">でも、「まのいいりょうし」という名前は、<br />今のわたしたちにも、けっこう合っているようです。</p>
            </div>
            <AboutPhoto src="/images/about/manoii-ryoshi-book.jpg" alt="暮らしの場所に飾られた絵本『まのいいりょうし』" className="about__photo--book" position="50% 50%" />
          </div>
        </section>

        {/* PEOPLE */}
        <section className="about__people">
          <div className="about__people-inner">
            <div className="about__section-title about__people-title">
              <p className="about__eyebrow">わたしたち</p>
            </div>

            <div className="about__people-grid">
              <article className="about__person">
                <h2 className="about__person-name">すぎやまりょうこ</h2>
                <p className="about__person-text">
                  鳥取市出身。世界各地を旅したのち、造園の仕事へ。
                  <br />
                  2017年、家族で岩美町へ移住。
                  <br />
                  庭づくりや剪定、土地おこしなど、
                  <br />
                  自然と暮らしのあいだにある仕事をしています。
                </p>
                <p className="about__person-roles">
                  庭づくり / 剪定 / 土地おこし / お茶会 / イラスト
                </p>
              </article>

              <article className="about__person">
                <h2 className="about__person-name">風さん</h2>
                <p className="about__person-text">
                  千葉県浦安市出身。WEB、音楽、ものづくりなどを経て、
                  <br />
                  2017年に岩美町へ移住し、
                  <br />
                  「まのいいりょうし」を立ち上げる。
                  <br />
                  内装、外構、木工など、つくる仕事全般を担当。
                </p>
                <p className="about__person-roles">
                  内装 / 外構 / 木工 / 狩猟採集 / WEB / 音楽
                </p>
              </article>
            </div>

            <div className="about__girls">
              <h2 className="about__girls-title">まのいいガールズ</h2>
              <p className="about__girls-text">
                その他、いろいろなことを一緒に楽しむ仲間たちがいます！
              </p>
              <a
                href="https://note.com/kazehakase/m/m928bb64abb10"
                target="_blank"
                rel="noreferrer"
                className="about__girls-link"
              >
                まのいいりょうしのnoteマガジン
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
