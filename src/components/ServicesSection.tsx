import { Wheat, Timer, Sparkles, RefreshCw, Wind, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_BASE = "https://wa.me/51999999999?text=";

const services = [
  {
    id: "transformacion",
    title: "Transformación de Arroz Cáscara",
    description: "Procesamos su arroz cáscara con tecnología de punta para obtener el máximo rendimiento de grano entero.",
    icon: Wheat,
    features: [
      {
        icon: Timer,
        title: "Secado Industrial",
        description: "Control preciso de temperatura y humedad para preservar la calidad del grano, evitando fisuras y daños estructurales."
      },
      {
        icon: Sparkles,
        title: "Pilado de Arroz",
        description: "Proceso optimizado que maximiza el rendimiento de grano entero y minimiza el quebrado, adaptándose a cada lote."
      },
      {
        icon: RefreshCw,
        title: "Selectado y Reproceso",
        description: "Clasificación rigurosa por tamaño y calidad. Reproceso de granos para cumplir los más altos estándares."
      }
    ],
    whatsappMessage: "Hola, quiero información sobre el servicio de Transformación de Arroz Cáscara"
  },
  {
    id: "añejado",
    title: "Añejado de Arroz",
    description: "Servicio de valor agregado que incrementa significativamente la calidad y el precio de su arroz.",
    icon: Wind,
    features: [
      {
        icon: Box,
        title: "Almacenamiento Controlado",
        description: "Condiciones óptimas de temperatura y ventilación que estabilizan la estructura del grano a lo largo del tiempo."
      },
      {
        icon: Sparkles,
        title: "Mejor Comportamiento en Cocción",
        description: "El arroz añejo absorbe menos agua, queda más suelto y firme. Ideal para restaurantes y cocina profesional."
      },
      {
        icon: Timer,
        title: "Mayor Rendimiento",
        description: "Al absorber menos agua, cada kilo de arroz añejo rinde más porciones, optimizando costos para distribuidores."
      }
    ],
    whatsappMessage: "Hola, quiero información sobre el servicio de Añejado de Arroz"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Nuestros Servicios de Transformación y Añejado
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Procesos industriales que respetan el grano y optimizan su valor comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-2xl p-5 md:p-8 card-hover flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Service Header */}
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 md:w-7 h-6 md:h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-4 md:space-y-4 mb-6 md:mb-8 w-full">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-10 md:h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 md:w-5 h-5 md:h-5 text-primary" />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-none">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild variant="default" size="lg" className="w-full md:w-auto h-12 md:h-12">
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Solicitar cotización
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl font-medium text-foreground">
            Molino Imperio – <span className="text-primary">Procesos industriales que respetan el grano y optimizan su valor.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
