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

          <p className="manoii-ground__lead">
            土地のこと、庭のこと、家のこと。
            <br />
            暮らしのまわりの、いろいろな仕事をしています。
          </p>
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
      </div>
    </section>
  );
}
