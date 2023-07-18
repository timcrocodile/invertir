import AboutSection from "@/components/aboutSection";
import CarouselSection from "@/components/carouselSection";
import DictionarySection from "@/components/dictionarySection";
import FaqSection from "@/components/faqSection";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import InfoSection from "@/components/infoSection";
import Navbar from "@/components/navbar";
import ServiceSection from "@/components/serviceSection";
import WordsSection from "@/components/wordsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <DictionarySection />
      <WordsSection />
      <CarouselSection />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
      <InfoSection />
      <Footer />
    </main>
  );
}
