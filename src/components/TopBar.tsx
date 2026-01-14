import { Facebook, Instagram, LucideIcon } from "lucide-react";

const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
    icon: () => <Facebook className="w-4 h-4" />,
    href: "https://www.facebook.com/ArrozAltoMonte",
    label: "Facebook"
  },
  {
    icon: () => <Instagram className="w-4 h-4" />,
    href: "https://www.instagram.com/arroz.altomonte",
    label: "Instagram"
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@arroz.altomonte",
    label: "TikTok"
  }
];

const TopBar = () => {
  return (
    <div className="bg-foreground text-background py-2">
      <div className="container-custom px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-background/80">
          <a href="mailto:molinoimperio@gmail.com" className="hover:text-primary transition-colors hidden sm:block">
            molinoimperio@gmail.com
          </a>
          <span className="hidden sm:block">|</span>
          <a href="tel:+5193389123" className="hover:text-primary transition-colors">
            +51 933 891 23
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-background/60 hidden md:block">Síguenos:</span>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={social.label}
            >
                <social.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
