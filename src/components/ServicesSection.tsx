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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios de Transformación y Añejado
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Procesos industriales que respetan el grano y optimizan su valor comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-2xl p-6 md:p-8 card-hover"
            >
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button asChild variant="default" size="lg" className="w-full">
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar este servicio por WhatsApp
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
