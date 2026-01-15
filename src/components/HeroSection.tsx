import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import heroImage from "@/assets/plantain.webp";
import mobileHero from "@/assets/imagemovile.jpg";

const WHATSAPP_LINK = "https://wa.me/5193389123?text=Hola,%20quiero%20información%20sobre%20servicios%20de%20Molino%20Imperio";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#servicios");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0f5c2e]"
    >
      {/* Background for Desktop */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full pt-20 pb-12 md:py-40 flex flex-col items-center md:items-start md:flex-row md:justify-start px-6 md:pl-20">
        <div className="max-w-3xl text-center md:text-left flex flex-col items-center md:items-start">
          {/* Logo/Icon on Mobile */}
          <div className="flex md:hidden flex-col items-center mb-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <Mountain className="w-10 h-10 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-widest">MOLINO IMPERIO</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-slide-up drop-shadow-md">
            Nuestro imperio - Procesos. <br className="hidden md:block" />
            Procesos que respetan el arroz y optimizan su valor.
          </h1>
          
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Transformamos arroz cáscara en arroz de alta calidad. Especialistas en secado, pilado y arroz añejo Altomonte.
          </p>

          {/* Mobile Image - Foreground */}
          <div className="md:hidden w-full max-w-[280px] mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <img src={mobileHero} alt="Arroz Altomonte" className="w-full h-auto drop-shadow-2xl rounded-2xl" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up justify-center md:justify-start w-full sm:w-auto" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToServices}
              className="text-base md:text-lg bg-white text-[#0f5c2e] hover:bg-white/90 border-transparent h-14"
            >
              Conozca nuestros servicios
            </Button>
            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="text-base md:text-lg border-white text-white hover:bg-white/10 h-14"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-background/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
