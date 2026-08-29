import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ground from "@/components/Ground";
import Trace from "@/components/Trace";
import AboutIntro from "@/components/AboutIntro";
import ContactIntro from "@/components/ContactIntro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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