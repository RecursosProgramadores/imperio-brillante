import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, FileText, Scale, Globe, Bell, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
              <FileText className="w-4 h-4" />
              Documento Legal
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Términos y Condiciones de Uso
            </h1>
            <p className="text-lg text-muted-foreground">
              Molino Imperio / Altomonte — Procesamiento de Arroz Premium
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section className="bg-secondary/30 p-6 rounded-2xl border border-border/50">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                1. Introducción
              </h2>
              <p>
                Bienvenido al sitio web de <strong>Molino Imperio (o Altomonte)</strong>. Al acceder y utilizar este sitio, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios digitales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                2. Propiedad Intelectual
              </h2>
              <p>
                Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, fotografías, logotipos, imágenes y diseño gráfico, es propiedad exclusiva de <strong>Molino Imperio</strong> y está protegido por las leyes de propiedad intelectual vigentes en la República del Perú. Queda prohibida su reproducción total o parcial sin autorización previa por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                3. Uso del Sitio
              </h2>
              <p>
                El uso de este sitio web está permitido únicamente para fines informativos y de consulta personal. Está estrictamente prohibido:
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Copiar, modificar o distribuir contenido para fines comerciales.</li>
                <li>Utilizar el sitio de manera que pueda dañar, inutilizar o sobrecargar nuestros servidores.</li>
                <li>Intentar acceder de forma no autorizada a cualquier sección del sitio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-primary" />
                4. Responsabilidad
              </h2>
              <p>
                Si bien nos esforzamos por mantener la información actualizada y precisa, <strong>Molino Imperio</strong> no garantiza que el sitio esté libre de errores o interrupciones. No nos hacemos responsables por daños directos o indirectos derivados del uso o la imposibilidad de uso de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                5. Enlaces Externos
              </h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios de terceros (como redes sociales). <strong>Molino Imperio</strong> no tiene control sobre el contenido ni las políticas de dichos sitios, por lo que no asumimos responsabilidad alguna por ellos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Bell className="w-5 h-5 text-primary" />
                6. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio tras dichas modificaciones constituye la aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-primary" />
                7. Ley Aplicable y Jurisdicción
              </h2>
              <p>
                Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia derivada del uso de este sitio será sometida a la jurisdicción de los tribunales competentes en la ciudad de Lima, Perú.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                Contacto
              </h2>
              <p>
                Para cualquier duda o aclaración sobre estos términos, puede contactarnos directamente a través de nuestro canal de WhatsApp o mediante el correo electrónico institucional proporcionado en la sección de contacto.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
