import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logoBlanco from "@/assets/logoblanco.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_LINK = "https://wa.me/51933897123?text=Hola,%20quiero%20información%20sobre%20servicios%20de%20Molino%20Imperio";
const FACEBOOK_LINK = "https://www.facebook.com/ArrozAltoMonte";
const INSTAGRAM_LINK = "https://www.instagram.com/arroz.altomonte";
const TIKTOK_LINK = "https://www.tiktok.com/@arroz.altomonte";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  // Effect to handle scroll after navigation to home
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetHash = location.state.scrollTo;
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // Clear state to avoid scrolling again on manual refresh
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 bg-white shadow-sm"
    >
      {/* Top Bar */}
      <div className={`bg-[#0f5c2e] text-white transition-all duration-300 overflow-hidden ${isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-20 py-2 opacity-100"
        }`}>
        <div className="container-custom px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="mailto:ventas@molinoimperio.com" className="flex items-center gap-2 text-[10px] md:text-xs hover:text-white/80 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ventas@molinoimperio.com</span>
              <span className="sm:hidden">ventas</span>
            </a>
            <a href="tel:+51933897123" className="flex items-center gap-2 text-[10px] md:text-xs hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +51 933 897 123
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <TikTokIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom px-4 md:px-8 flex items-center justify-between py-2 md:py-3">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              scrollToSection("#inicio");
            }
          }}
          className="flex items-center gap-2"
        >
          <img src={logoBlanco} alt="Molino Imperio Logo" className="h-14 md:h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-lg font-medium transition-colors hover:text-primary text-black"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="default" size="lg">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-black font-medium py-2 hover:text-primary transition-colors border-b border-gray-100"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link
              to="/terms"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-500 hover:text-primary"
            >
              Términos y condiciones
            </Link>
            <Link
              to="/privacy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm text-gray-500 hover:text-primary"
            >
              Política de privacidad
            </Link>
          </div>
          <Button asChild variant="default" className="w-full">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contáctanos por WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
