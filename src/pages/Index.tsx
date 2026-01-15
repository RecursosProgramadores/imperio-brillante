import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import bannerImage from "@/assets/portada-alto-monte.webp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        
        {/* Full-width Product Banner */}
        <section className="w-full overflow-hidden">
          <img 
            src={bannerImage} 
            alt="Arroz Altomonte Banner" 
            className="w-full h-auto object-cover"
          />
        </section>

        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
