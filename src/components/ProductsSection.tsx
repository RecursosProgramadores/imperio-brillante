import { Button } from "@/components/ui/button";
import riceGrains from "@/assets/costalazul.png";
import riceSack from "@/assets/costalnaranja.png";

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
  return (
    <section id="productos" className="section-padding bg-background">
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
            Calidad superior que no se endurece ni se apelmaza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={riceSack}
                  alt="Saco de Arroz Alto Monte 49KG"
                  className="rounded-2xl shadow-xl w-full h-auto sm:h-64 object-contain sm:object-cover border border-border/50"
                />
                <div className="bg-primary text-primary-foreground p-4 rounded-2xl text-center shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold">49</span>
                  <span className="text-base md:text-lg font-medium ml-1">KG</span>
                  <p className="text-xs md:text-sm opacity-90">Presentación al por mayor</p>
                </div>
              </div>
              <div className="hidden sm:block pt-8">
                <img
                  src={riceGrains}
                  alt="Granos de Arroz Alto Monte Premium"
                  className="rounded-2xl shadow-xl w-full h-auto sm:h-80 object-cover border border-border/50"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-2">
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                Origen en los valles de Ucayali
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                Arroz cultivado con prácticas responsables en los fértiles valles de Ucayali.
                Grano uniforme con excelente comportamiento en cocción: queda graneado y estable.
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
