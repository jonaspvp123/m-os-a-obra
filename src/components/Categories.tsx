import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Wrench, Plug, Paintbrush, ShieldCheck, ArrowUpRight, CheckCircle, Smartphone } from "lucide-react";
import { PRODUCT_CATEGORIES, STORE_CONTACT } from "../types";

export default function Categories() {
  const [activeTab, setActiveTab] = useState<string>("eletricas");

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-primary" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-brand-primary" />;
      case "Plug":
        return <Plug className="w-6 h-6 text-brand-primary" />;
      case "Paintbrush":
        return <Paintbrush className="w-6 h-6 text-brand-primary" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-primary" />;
    }
  };

  const getWhatsAppMessageUrl = (categoryTitle: string, item?: string) => {
    const text = item
      ? `Olá, gostaria de saber se vocês têm em estoque o produto "${item}" da categoria de ${categoryTitle}.`
      : `Olá, gostaria de solicitar um orçamento para itens de ${categoryTitle}.`;
    return `${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="categorias" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-brand-primary uppercase">
            Nosso Catálogo Especializado
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Variedade Completa para o seu Projeto
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          <p className="font-sans text-gray-600 leading-relaxed font-light">
            Trabalhamos com uma grande diversidade de materiais para reforma e construção civil. Selecione abaixo a categoria para explorar nossos produtos mais procurados.
          </p>
        </div>

        {/* Tab Buttons (Responsive Horizontal Scroll for Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none snap-x justify-start md:justify-center gap-2 sm:gap-4 -mx-4 px-4 sm:mx-0">
          {PRODUCT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-display font-bold text-sm tracking-wide whitespace-nowrap snap-center transition-all duration-300 focus:outline-none cursor-pointer ${
                activeTab === category.id
                  ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/20 border border-brand-dark"
                  : "bg-white text-brand-charcoal hover:bg-gray-100 border border-gray-200"
              }`}
              id={`tab-btn-${category.id}`}
            >
              <span className="p-1 rounded-lg bg-white/10">
                {getIcon(category.iconName)}
              </span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content Display with beautiful layout & transition */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden" id="category-tab-content">
          {PRODUCT_CATEGORIES.map((category) => {
            if (category.id !== activeTab) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left side Image / Background showcase */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
                  
                  {/* Floating description on image for mobile viewports */}
                  <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                    <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Mãos à Obra</span>
                    <h3 className="font-display font-bold text-xl mt-1">{category.title}</h3>
                  </div>
                </div>

                {/* Right side details / interactive checklists */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-brand-light border border-gray-200">
                        {getIcon(category.iconName)}
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-charcoal">
                        {category.title}
                      </h3>
                    </div>

                    <p className="font-sans text-gray-600 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="h-[1px] bg-gray-100 my-6" />

                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-sm text-brand-dark tracking-wider uppercase">
                        Produtos Mais Procurados / Em Destaque:
                      </h4>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={`product-list-${category.id}`}>
                        {category.popularItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 group">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <a
                              href={getWhatsAppMessageUrl(category.title, item)}
                              target="_blank"
                              rel="noreferrer"
                              className="font-sans text-sm text-brand-charcoal hover:text-brand-primary hover:underline transition-all duration-200"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
                    <a
                      href={getWhatsAppMessageUrl(category.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm tracking-wider rounded-xl transition-all duration-300 shadow-md shadow-brand-primary/15"
                      id={`category-whatsapp-btn-${category.id}`}
                    >
                      <Smartphone className="w-4 h-4 fill-current" />
                      Consultar Estoque Completo no WhatsApp
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
