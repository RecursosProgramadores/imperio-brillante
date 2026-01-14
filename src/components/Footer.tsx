import { Facebook, Instagram, LucideIcon } from "lucide-react";

const TikTokIcon = () => (
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

  const footerLinks = [
    { label: "Política de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
    { label: "Libro de reclamaciones virtual", href: "#" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="inline-block mb-4"
            >
              <span className="text-2xl font-bold">
                Molino <span className="text-primary">Imperio</span>
              </span>
            </a>
            <p className="text-background/60 text-sm">
              © {currentYear} Molino Imperio. Todos los derechos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-background/60 text-sm hidden md:block">Síguenos:</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-background/80"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-background/10">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-background/70 hover:text-primary text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-background/50 text-sm text-center">
            Procesamiento de arroz de alta calidad en Ucayali, Perú
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
