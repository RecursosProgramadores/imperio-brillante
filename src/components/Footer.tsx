import { Facebook, Instagram, LucideIcon, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoMolino from "@/assets/LogoMolino.jpg";
import libroReclamaciones from "@/assets/libroreclamaciones.jpeg";
import devLogo from "@/assets/logo.svg";
import { useLocation, useNavigate, Link } from "react-router-dom";

const TikTokIcon = () => (
// ... (rest of TikTokIcon)
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface SocialLink {
  icon: LucideIcon | React.FC;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/ArrozAltoMonte",
    label: "Facebook"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/arroz.altomonte",
    label: "Instagram"
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@arroz.altomonte",
    label: "TikTok"
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  const legalLinks = [
    { label: "Términos y condiciones", href: "/terms" },
    { label: "Política de privacidad", href: "/privacy" }
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
    } else {
      if (href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const DEV_WHATSAPP = "https://wa.me/51949992147?text=Hola%20Fly,%20vengo%20de%20Molino%20Imperio,%20estoy%20interesado%20en%20crear%20mi%20página%20web%20profesional";

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="inline-block"
            >
              <img src={logoMolino} alt="Molino Imperio Logo" className="h-20 w-auto rounded-lg" />
            </a>
            <p className="text-white/70 text-sm leading-relaxed">
              Especialistas en el procesamiento integral de arroz de alta calidad. 
              Transformamos arroz cáscara optimizando su valor con procesos técnicos avanzados.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Carr. Federico Basadre Km 12, Pucallpa</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+51 933 891 230</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contacto@molinoimperio.pe</span>
              </div>
            </div>
          </div>

          {/* Compliance Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <a 
              href="https://forms.gle/YaXB1nhvNkimJGUT7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img src={libroReclamaciones} alt="Libro de Reclamaciones" className="h-20 w-auto rounded-lg shadow-sm" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-white/60 text-xs md:text-sm">
            <p>© {currentYear} Molino Imperio. Todos los derechos reservados.</p>
            <span className="hidden md:inline">|</span>
            <nav className="flex items-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <a 
            href={DEV_WHATSAPP} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white/60 hover:text-white transition-colors text-sm md:text-base font-medium group"
          >
            <span>Desarrollado por</span>
            <img src={devLogo} alt="Developer Logo" className="h-7 md:h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
