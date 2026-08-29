import Image from "next/image";
import Link from "next/link";
import "@/styles/trace.css";

export default function Trace() {
  return (
    <section className="manoii-trace">
      <div className="manoii-trace__inner">

        <header className="manoii-trace__header">
          <h2 className="manoii-trace__heading">
            やったこと
          </h2>

          <p className="manoii-trace__lead">
            土地には、<br />
            それぞれの時間があります。
          </p>
        </header>


        <div className="manoii-trace__image-wrap">
          <Image
            src="/images/home/trace-main.jpg"
            alt="土地と向き合う時間"
            width={1477}
            height={370}
            className="manoii-trace__image"
          />
        </div>


        <div className="manoii-trace__body">

          <p className="manoii-trace__text">
            水の流れを整え、<br />
            草木を育て、<br />
            暮らしの場所を整えていく。
          </p>

          <p className="manoii-trace__text">
            これまで手を重ねてきた場所を、<br />
            少しずつ記録しています。
          </p>

        </div>


        <div className="manoii-trace__link">
          <Link href="/trace">
            やったことを見る →
          </Link>
        </div>

      </div>
    </section>
  );
}
