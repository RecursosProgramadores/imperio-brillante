import { CheckCircle, Shield, Award, TrendingUp, Target, Eye } from "lucide-react";
import industrialMill from "@/assets/nosotros.jpeg";


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
    <section id="nosotros" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image and Experience */}
          <div className="relative order-2 lg:order-1 pt-8 lg:pt-0">
            <div className="relative">


              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-[10px] border-white">
                <img
                  src={industrialMill}
                  alt="Planta industrial Molino Imperio"
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Overlay Experience Badge - Lado Superior Derecho */}
              <div className="absolute -top-6 -right-4 md:-right-6 bg-primary text-white p-5 md:p-6 rounded-2xl shadow-xl z-30 border-4 border-white transform hover:scale-105 transition-all duration-300">
                <p className="text-4xl font-black mb-1 leading-none text-center">15+</p>
                <div className="space-y-0 text-center">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-90">Años de</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-90">Experiencia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: History, Mission & Vision */}
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-full text-xs uppercase tracking-widest mb-4">
                Nosotros
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                Molino <span className="text-primary italic">Imperio</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Somos una empresa molinera pionera en la region Ucayali,
                referente en el procesamiento integral de arroz,
                enfocada en un manejo tecnico que preserva la esencia
                natural del grano. Nuestra pasión por la excelencia nos
                permite transformar cada cosecha en un producto de valor
                excepcional para agricultores y mercados exigentes.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-primary/60">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Target className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Misión</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Procesar arroz de calidad mediante procesos industriales eficientes y responsables,
                  brindando a nuestros clientes un producto confiable y competitivo, contribuyendo
                  al desarrollo agrícola de nuestra región.
                </p>
              </div>

              <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-primary/60">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Eye className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Visión</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ser un molino referente nacional, reconocido por la calidad superior,
                  transparencia e innovación constante, creciendo de la mano con nuestros
                  agricultores, clientes y colaboradores.
                </p>
              </div>
            </div>

            {/* Features List (Moved here) */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
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
