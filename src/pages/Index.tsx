import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AlertBotSection from "@/components/AlertBotSection";
import WebSocketSection from "@/components/WebSocketSection";
import ApiSection from "@/components/ApiSection";
import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AlertBotSection />
      <WebSocketSection />
      <ApiSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
