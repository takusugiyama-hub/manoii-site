import BusinessStructuredData from "@/components/BusinessStructuredData";
import { withShareMetadata } from "@/lib/share-metadata";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ground from "@/components/Ground";
import Trace from "@/components/Trace";
import AboutIntro from "@/components/AboutIntro";
import ContactIntro from "@/components/ContactIntro";
import Footer from "@/components/Footer";

export const metadata = withShareMetadata({
  alternates: { canonical: "/" },
  title: "鳥取市・岩美町の土地の環境改善・庭づくり｜まのいいりょうし",
  description:
    "鳥取市・岩美町を中心に、水と空気の流れを整える土地の環境改善と、その場所に合った庭づくりに取り組んでいます。水はけやぬかるみ、木の元気がないといった困りごとから、庭づくりまでご相談ください。",
}, {"url": "/images/home/ground-garden.jpg", "width": 2000, "height": 1500, "alt": "まのいいりょうしの庭づくり"});

export default function Home() {
  return (
    <main>
      <BusinessStructuredData />
      <Header />
      <Hero />
      <Ground />
      <Trace />
      <AboutIntro />
      <ContactIntro />
      <Footer />
    </main>
  );
}