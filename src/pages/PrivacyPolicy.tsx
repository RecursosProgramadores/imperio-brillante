import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, RefreshCw, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      <main className="pt-32 pb-16 px-4 md:px-8">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8 group">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Regresar al inicio
            </Link>
          </Button>

          {/* Header Title */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Protección de Datos
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Política de Privacidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Molino Imperio / Altomonte — Compromiso con su Seguridad
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section className="bg-secondary/30 p-6 rounded-2xl border border-border/50">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-primary" />
                Cumplimiento Legal
              </h2>
              <p>
                En <strong>Molino Imperio</strong> cumplimos estrictamente con lo establecido en la <strong>Ley N° 29733</strong> de Protección de Datos Personales en el Perú y su Reglamento. Su privacidad es nuestra prioridad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-primary" />
                1. Datos que recolectamos
              </h2>
              <p>
                Solo recolectamos datos personales cuando usted los proporciona voluntariamente para realizar consultas o cotizaciones. Estos datos pueden incluir:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Nombre completo</li>
                <li>Número de teléfono (WhatsApp)</li>
                <li>Correo electrónico</li>
              </ul>
              <p className="mt-3 italic text-sm">
                Nota: La comunicación vía WhatsApp implica el tratamiento de su número telefónico para fines de atención al cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Eye className="w-5 h-5 text-primary" />
                2. Finalidad del tratamiento
              </h2>
              <p>
                Los datos recolectados se utilizan exclusivamente para:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Responder a sus consultas y solicitudes de cotización de arroz.</li>
                <li>Brindar soporte técnico y atención comercial personalizada.</li>
                <li>Mejorar el contenido y funcionamiento de nuestro sitio web.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <UserCheck className="w-5 h-5 text-primary" />
                3. Comunicación a terceros
              </h2>
              <p>
                No compartimos, vendemos ni cedemos sus datos personales a terceros, salvo por obligación legal o con proveedores necesarios para la operatividad del sitio (ejemplo: servicios de hosting y correo), siempre bajo estándares de seguridad razonables.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                4. Derechos ARCO
              </h2>
              <p>
                De acuerdo a ley, usted puede ejercer sus derechos <strong>ARCO</strong> (Acceso, Rectificación, Cancelación y Oposición) sobre sus datos personales en cualquier momento. Para ejercer estos derechos, simplemente envíenos una solicitud vía WhatsApp o a nuestro correo electrónico institucional.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-primary" />
                5. Seguridad
              </h2>
              <p>
                Utilizamos medidas técnicas y organizativas razonables para proteger su información contra pérdida, robo o uso no autorizado. Sin embargo, recuerde que ningún método de transmisión por Internet es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Database className="w-5 h-5 text-primary" />
                6. Cookies
              </h2>
              <p>
                Este sitio puede utilizar cookies técnicas básicas para mejorar su navegación. Usted puede configurar su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <RefreshCw className="w-5 h-5 text-primary" />
                7. Cambios en la Política
              </h2>
              <p>
                Podemos actualizar esta política periódicamente para reflejar cambios en nuestras prácticas o requerimientos legales. Le recomendamos revisar este documento habitualmente.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                Contacto y Consultas
              </h2>
              <p>
                Para ejercer sus derechos o resolver cualquier duda sobre su privacidad, contáctenos directamente a través de los canales proporcionados en el sitio web de <strong>Molino Imperio</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
