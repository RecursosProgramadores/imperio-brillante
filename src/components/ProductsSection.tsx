import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import riceGrains from "@/assets/costalazul.png";
import riceSack from "@/assets/costalnaranja.png";
import riceSackNew from "@/assets/saconu.png";

const WHATSAPP_LINK = "https://wa.me/51933897123?text=Hola,%20quiero%20comprar%20o%20cotizar%20Arroz%20Añejo%20Altomonte";

const benefits = [
  {
    emoji: "🥇",
    title: "Calidad y sabor",
    description: "El arroz que transforma tus comidas."
  },
  {
    emoji: "🌱",
    title: "Nutrición y salud",
    description: "Nutrición de verdad, directo a tu mesa."
  },
  {
    emoji: "⚖️",
    title: "Sostenibilidad y origen",
    description: "Cultivado con respeto por la tierra y la comunidad."
  },
  {
    emoji: "🍽️",
    title: "Para cocineros y restaurantes",
    description: "Consistencia profesional, resultado impecable."
  },
  {
    emoji: "💼",
    title: "Valor para distribuidores",
    description: "Preferencia sostenida al consumidor final."
  }
];

const ProductsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  const productImages = [
    { src: riceSackNew, alt: "Saco de Arroz Molino Imperio", hasBadge: true },
    { src: riceSack, alt: "Saco de Arroz Alto Monte Naranja", hasBadge: true },
    { src: riceGrains, alt: "Saco de Arroz Alto Monte Azul", hasBadge: true },
  ];

  return (
    <section id="productos" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-primary/10 text-primary font-semibold rounded-full text-xs md:text-sm mb-3 md:mb-4">
            Producto Premium
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Arroz Añejo Alto Monte
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Calidad superior que no se endurece y mantiene el grano suelto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images Carousel */}
          <div className="relative order-2 lg:order-1 w-full max-w-[500px] mx-auto lg:mx-0">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative p-4 md:p-8 flex items-center justify-center min-h-[350px] md:min-h-[500px]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={cn(
                          "w-full h-auto object-contain transition-transform duration-500",
                          image.hasBadge ? "scale-105" : "scale-100"
                        )}
                        style={{
                          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))"
                        }}
                      />
                      {image.hasBadge && (
                        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-primary text-white px-5 py-2 md:px-6 md:py-3 rounded-2xl shadow-xl border-4 border-white transform rotate-3 z-10">
                          <span className="text-xl md:text-2xl font-black">49</span>
                          <span className="text-xs md:text-sm font-bold ml-1 uppercase">KG</span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {productImages.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    current === i ? "bg-primary w-6" : "bg-primary/20"
                  )}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-2">
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                Origen en los valles de Ucayali
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                Arroz cultivado en los fertiles valles de Ucayali y seleccionado mediante procesos controlados.
                Grano uniforme con excelente comportamiento en coccion: queda graneado y estable.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 gap-3 md:gap-4 mb-8 md:mb-10 w-full max-w-2xl">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-all border border-transparent hover:border-primary/20 text-left"
                >
                  <span className="text-2xl flex-shrink-0 bg-white shadow-sm w-12 h-12 flex items-center justify-center rounded-lg">{benefit.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">
                      {benefit.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button asChild variant="default" size="xl" className="w-full md:w-auto h-14 md:h-14 shadow-lg active:scale-95">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotizar Arroz por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
