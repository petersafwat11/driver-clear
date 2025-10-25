import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";

export default function page() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
