import Image from "next/image";
import Link from "next/link";
import "@/styles/ground.css";

const ground = [
  {
    title: "土地と水",
    text: "水と空気の流れを見ながら、土地を整える。道や駐車場、排水、小さな造成など。",
    image: "/images/home/ground-land.jpg",
    alt: "土地を整える仕事",
    href: "/ground#land-water",
  },
  {
    title: "庭と草木",
    text: "庭をつくり、木を植え、育っていく場所に手を入れる。剪定や管理、大きくなった木の仕事まで。",
    image: "/images/home/ground-garden.jpg",
    alt: "庭づくりの仕事",
    href: "/ground#garden-plants",
  },
  {
    title: "家と暮らし",
    text: "古いもの、そこにあるものを活かしながら、家をなおす。土壁、ウッドデッキ、小さな修繕や暮らしまわりの工作など。",
    image: "/images/home/ground-house.jpg",
    alt: "家をなおす仕事",
    href: "/ground#home-life",
  },
];

export default function Ground() {
  return (
    <section className="manoii-ground">
      <div className="manoii-ground__inner">
        <header className="manoii-ground__header">
          <h2 className="manoii-ground__heading">
            できること
          </h2>

          <div className="manoii-ground__lead">
            <p>
              岩美町を拠点に、水と空気の流れを整える<strong>土地の環境改善</strong>と、<strong>その場所に合った庭づくり</strong>に取り組んでいます。
            </p>
            <p>
              水はけやぬかるみ、木の元気がないといった困りごとから、庭をつくりたいというご相談まで、お聞かせください。
            </p>
          </div>
        </header>

        <div className="manoii-ground__grid">
          {ground.map((service) => (
            <article
              key={service.title}
              className="manoii-ground__item"
            >
              <Link
                href={service.href}
                className="manoii-ground__link"
              >
                <div className="manoii-ground__image-wrap">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className="manoii-ground__image"
                  />
                </div>

                <div className="manoii-ground__content">
                  <h3 className="manoii-ground__title">
                    {service.title}
                  </h3>

                  <p className="manoii-ground__text">
                    {service.text}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <p className="manoii-ground__area">
          対応地域：鳥取市・岩美町を中心とした鳥取県東部、兵庫県新温泉町。その他の地域もご相談ください。
        </p>
        <section
          className="manoii-ground__web"
          aria-labelledby="web-production-heading"
        >
          <h3 id="web-production-heading" className="manoii-ground__web-heading">
            Webサイト・Webアプリケーションの制作
          </h3>
          <p>
            まのいいりょうしでは、WebサイトやWebアプリケーションの設計・開発も行っています。
          </p>
          <p>
            Web制作を担当する風さん（杉山拓）は、以前IT企業でWebアプリケーションの開発やディレクションに従事していました。その経験を活かし、現在は米国の書店のWebサイト開発を手がけています。
          </p>
        </section>
      </div>
    </section>
  );
}
