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

          {/* Legal Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
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
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            Procesamiento de arroz de alta calidad en Ucayali, Perú
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
