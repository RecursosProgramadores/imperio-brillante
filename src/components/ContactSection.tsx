import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5193389123?text=Hola,%20quiero%20información%20sobre%20Molino%20Imperio";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Carretera Federico Basadre Km 12, Pucallpa, Ucayali, Perú"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+51 933 891 23"
  },
  {
    icon: Mail,
    title: "Emails",
    content: "molinoimperio@gmail.com / lidser.panduro@gmail.com"
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lunes a Sábado: 7:00 AM - 6:00 PM"
  }
];

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-primary/10 text-primary font-semibold rounded-full text-xs md:text-sm mb-3 md:mb-4">
            Contacto Directo
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos agregar valor a su producción de arroz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="order-2 lg:order-1">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary p-4 md:p-5 rounded-xl flex flex-row items-center gap-4 text-left border border-transparent hover:border-primary/20 transition-all shadow-sm"
                >
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-48 md:h-80 border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.134876885779!2d-74.5812646!3d-8.388392299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3bd5e1e53ebd3%3A0x4d1ccade129d3f13!2sMolino%20Imperio!5e0!3m2!1ses!2spe!4v1768244527595!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Molino Imperio"
              />
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="bg-[#0f5c2e] text-white rounded-3xl p-6 md:p-12 flex flex-col items-center md:items-start text-center md:text-left justify-center shadow-2xl order-1 lg:order-2">
            <div className="mb-6 md:mb-8 flex flex-col items-center md:items-start w-full">
              <div className="w-14 md:w-20 h-14 md:h-20 rounded-full bg-white/20 flex items-center justify-center mb-5 md:mb-8 animate-pulse">
                <svg className="w-8 md:w-10 h-8 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Atención rápida por WhatsApp
              </h3>
              <p className="text-white/80 text-base md:text-lg mb-2">
                Reciba respuesta inmediata. Nuestro equipo está listo para atender sus consultas.
              </p>
            </div>

            <Button
              asChild
              size="xl"
              className="w-full bg-white text-[#0f5c2e] hover:bg-white/90 h-14 md:h-16 text-lg font-bold shadow-xl active:scale-[0.97]"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chatear con un asesor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
