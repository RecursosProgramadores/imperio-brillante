import { CheckCircle, Shield, Award, TrendingUp } from "lucide-react";
import industrialMill from "@/assets/industrial-mill.webp";

const features = [
  {
    icon: CheckCircle,
    title: "Control en cada etapa",
    description: "Monitoreamos y ajustamos cada fase del proceso para garantizar resultados óptimos."
  },
  {
    icon: Shield,
    title: "Manejo técnico especializado",
    description: "Equipo capacitado con años de experiencia en procesamiento de arroz."
  },
  {
    icon: Award,
    title: "Compromiso con la calidad",
    description: "Estándares rigurosos que garantizan la excelencia en cada grano procesado."
  },
  {
    icon: TrendingUp,
    title: "Adaptación por lote",
    description: "Ajustamos nuestros procesos según las características específicas de cada lote."
  }
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={industrialMill}
              alt="Planta industrial Molino Imperio"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold">+15</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Molino Imperio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos una empresa especializada en el procesamiento integral de arroz, 
              con un enfoque en el manejo técnico que respeta las propiedades naturales 
              del grano. Nuestro compromiso es ofrecer servicios de transformación y 
              añejado que maximicen el valor de cada lote, adaptándonos a las necesidades 
              específicas de productores y comercializadores.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
