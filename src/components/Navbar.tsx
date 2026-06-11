import { useState, useEffect } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { STORE_CONTACT } from "../types";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Categorias", href: "#categorias" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Marcas", href: "#marcas" },
    { label: "Galeria", href: "#galeria" },
    { label: "Orçamento", href: "#orcamento" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 group focus:outline-none"
              id="navbar-logo"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/20 group-hover:bg-brand-dark transition-colors duration-200">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl leading-tight text-brand-dark tracking-tight">
                  MÃOS À OBRA
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-brand-primary uppercase">
                  Ferragista
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`font-sans font-medium text-sm transition-colors duration-200 hover:text-brand-primary ${
                    isScrolled ? "text-brand-charcoal" : "text-brand-charcoal md:text-white hover:md:text-yellow-400"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop WhatsApp Action Button */}
            <div className="hidden md:block">
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-primary text-brand-primary bg-white/10 hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/10 font-bold text-sm tracking-wide transition-all duration-300"
                id="navbar-whatsapp-cta"
              >
                <Phone className="w-4 h-4 fill-current" />
                {STORE_CONTACT.phone}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none ${
                  isScrolled
                    ? "text-brand-charcoal hover:bg-gray-100"
                    : "text-brand-charcoal md:text-white hover:bg-black/10"
                }`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-white border-b border-gray-100 shadow-xl md:hidden"
            id="mobile-nav-root"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="block px-4 py-3 rounded-xl font-medium text-brand-charcoal hover:bg-brand-light hover:text-brand-primary transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 px-4">
                <a
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all duration-300"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  WhatsApp: {STORE_CONTACT.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
