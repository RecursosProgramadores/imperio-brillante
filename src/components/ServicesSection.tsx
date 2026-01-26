import { useState, useEffect } from "react";
import { Wheat, Timer, Sparkles, RefreshCw, Wind, Box, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import trans1 from "@/assets/secadoraindustrial.jpeg";
import trans2 from "@/assets/plantapilado.jpeg";
import trans3 from "@/assets/MAquinasarrozpilado.jpg";
import trans4 from "@/assets/arrozcascara.jpeg";
import trans5 from "@/assets/arrozpilado.jpeg";
import anejo1 from "@/assets/Silosalmacenaje.jpeg";
import anejo2 from "@/assets/Almacenarrozcascara.jpeg";
import anejo3 from "@/assets/Anejadoras.jpeg";

const WHATSAPP_BASE = "https://wa.me/51933897123?text=";

const services = [
  {
    id: "transformacion1",
    title: "Transformación de Arroz Cáscara",
    description: "Procesamos su arroz cascara con procesos eficientes y cuidadosamente controlados para obtener el máximo rendimiento de grano entero.",
    icon: Wheat,
    images: [trans1, trans2, trans3, trans4, trans5],
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
    description: "Servicio de valor agregado al arroz pilado que incrementa significativamente la calidad y el precio de su arroz.",
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
        description: "El arroz añejo absorbe mas agua, queda más suelto y graneado."
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

const ServiceItem = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [api, setApi] = useState<CarouselApi>();
  const isReversed = index % 2 === 1;

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 transition-all duration-500 hover:shadow-primary/5">
      {/* Image Carousel */}
      <div className={`relative aspect-video lg:aspect-square overflow-hidden group ${isReversed ? "order-2 lg:order-2" : "order-1 lg:order-1"}`}>
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
          <CarouselContent>
            {service.images.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
                  <img
                    src={img}
                    alt={`${service.title} - ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-contain bg-black/5 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Inner arrows for images */}
        <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 lg:group-hover:opacity-100 transition-opacity z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollPrev()}
            className="rounded-full h-10 w-10 bg-black/20 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md transition-all active:scale-90"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollNext()}
            className="rounded-full h-10 w-10 bg-black/20 border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-md transition-all active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 lg:p-16 ${isReversed ? "order-1 lg:order-1" : "order-2 lg:order-2"}`}>
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
            <service.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {service.title}
          </h3>
        </div>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/30 border border-border/30 hover:border-primary/20 transition-colors group/feat">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover/feat:bg-primary group-hover/feat:text-white transition-all">
                <feature.icon className="w-5 h-5 text-primary group-hover/feat:text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button asChild variant="default" size="lg" className="w-full md:w-auto h-16 px-10 text-lg font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90">
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

        {/* Services List (Alternating) */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
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
