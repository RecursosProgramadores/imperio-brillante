import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/51999999999?text=Hola,%20quiero%20información%20sobre%20Molino%20Imperio";

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Carretera Federico Basadre Km 12, Pucallpa, Ucayali, Perú"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+51 999 999 999"
  },
  {
    icon: Mail,
    title: "Email",
    content: "ventas@molinoimperio.com"
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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos agregar valor a tu arroz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary p-4 rounded-xl flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248424.15867731658!2d-74.7016!3d-8.4077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a9351b18bdab21%3A0x8f87e789f46b6d5c!2sPucallpa%2C%20Ucayali%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1704912345678!5m2!1ses!2s"
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
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                La forma más rápida de contactarnos
              </h3>
              <p className="text-background/80 text-lg">
                Escríbenos por WhatsApp y recibe respuesta inmediata. 
                Nuestro equipo está listo para atender tus consultas sobre 
                servicios de procesamiento o compra de arroz Altomonte.
              </p>
            </div>

            <Button
              asChild
              size="xl"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </Button>

            <p className="text-center text-background/60 text-sm mt-4">
              Respuesta en menos de 2 horas en horario laboral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
