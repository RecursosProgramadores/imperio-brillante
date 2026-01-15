import { useState, useEffect } from "react";
import { Wheat, Timer, Sparkles, RefreshCw, Wind, Box, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import trans1 from "@/assets/transformacion1.jpg";
import trans2 from "@/assets/transformacion2.jpg";
import trans3 from "@/assets/transformacion3.jpg";
import anejo1 from "@/assets/anejo1 (1).jpg";
import anejo2 from "@/assets/anejo2.jpg";
import anejo3 from "@/assets/anejo3.jpg";

const WHATSAPP_BASE = "https://wa.me/51999999999?text=";

const services = [
  {
    id: "transformacion1",
    title: "Transformación de Arroz Cáscara",
    description: "Procesamos su arroz cáscara con tecnología de punta para obtener el máximo rendimiento de grano entero.",
    icon: Wheat,
    images: [trans1, trans2, trans3],
    features: [
      {
        icon: Timer,
        title: "Secado Industrial",
        description: "Control preciso de temperatura y humedad para preservar la calidad del grano."
      },
      {
        icon: Sparkles,
        title: "Pilado de Arroz",
        description: "Proceso optimizado que maximiza el rendimiento de grano entero."
      },
      {
        icon: RefreshCw,
        title: "Selectado",
        description: "Clasificación rigurosa por tamaño y calidad."
      }
    ],
    whatsappMessage: "Hola, quiero información sobre el servicio de Transformación de Arroz Cáscara"
  },
  {
    id: "anejo1",
    title: "Añejado de Arroz",
    description: "Servicio de valor agregado que incrementa significativamente la calidad y el precio de su arroz.",
    icon: Wind,
    images: [anejo1, anejo2, anejo3],
    features: [
      {
        icon: Box,
        title: "Almacenamiento Controlado",
        description: "Condiciones óptimas de temperatura y ventilación."
      },
      {
        icon: Sparkles,
        title: "Mejor Cocción",
        description: "El arroz añejo absorbe menos agua, queda más suelto."
      },
      {
        icon: Timer,
        title: "Mayor Rendimiento",
        description: "Cada kilo de arroz añejo rinde más porciones."
      }
    ],
    whatsappMessage: "Hola, quiero información sobre el servicio de Añejado de Arroz"
  }
];

const MainCarouselItem = ({ service }: { service: typeof services[0] }) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50">
      {/* Image Carousel (Left) */}
      <div className="relative aspect-video lg:aspect-square overflow-hidden">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
          <CarouselContent>
            {service.images.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
                  <img
                    src={img}
                    alt={`${service.title} - ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content (Right) */}
      <div className="p-8 lg:p-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <service.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {service.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button asChild variant="default" size="lg" className="w-full md:w-auto h-14 px-8 text-lg font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar cotización
          </a>
        </Button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const currentDate = format(new Date(), "eeee, d 'de' MMMM 'de' yyyy", { locale: es });

  useEffect(() => {
    if (!mainApi) return;

    const interval = setInterval(() => {
      mainApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [mainApi]);

  return (
    <section id="servicios" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -u-translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Nuestros <span className="text-primary italic">Servicios</span> Premium
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
            Tecnología industrial y tradición molinera para optimizar cada grano.
          </p>
        </div>

        {/* Main Services Carousel */}
        <div className="relative px-4">
          <Carousel setApi={setMainApi} opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.id}>
                  <MainCarouselItem service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Custom Navigation (visible on desktop) */}
            <div className="hidden lg:block">
              <div className="absolute top-1/2 -left-16 -translate-y-1/2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => mainApi?.scrollPrev()}
                  className="rounded-full h-12 w-12 border-primary/20 hover:bg-primary hover:text-white transition-all shadow-md"
                >
                  <RefreshCw className="w-6 h-6 rotate-180" />
                </Button>
              </div>
              <div className="absolute top-1/2 -right-16 -translate-y-1/2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => mainApi?.scrollNext()}
                  className="rounded-full h-12 w-12 border-primary/20 hover:bg-primary hover:text-white transition-all shadow-md"
                >
                  <RefreshCw className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full max-w-lg mb-4" />
          <p className="text-xl md:text-2xl font-semibold text-foreground italic opacity-80">
            Molino Imperio – <span className="text-primary not-italic">Excelencia en cada etapa del proceso.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
