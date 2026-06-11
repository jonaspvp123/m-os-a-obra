import { motion } from "motion/react";
import { PARTNER_BRANDS } from "../types";
import { Award, Star } from "lucide-react";

export default function Brands() {
  // Helper to map color borders on hover for each brand
  const getBrandDetails = (name: string) => {
    switch (name.toLowerCase()) {
      case "makita":
        return {
          color: "hover:border-teal-500 hover:shadow-teal-500/10",
          accentText: "Tecnologia Japonesa",
          bgText: "MAKITA",
          bgOverlay: "from-teal-650/5"
        };
      case "bosch":
        return {
          color: "hover:border-red-600 hover:shadow-red-600/10",
          accentText: "Inovação Alemã",
          bgText: "BOSCH",
          bgOverlay: "from-red-600/5"
        };
      case "dewalt":
        return {
          color: "hover:border-yellow-500 hover:shadow-yellow-500/10",
          accentText: "Trabalho Pesado",
          bgText: "DEWALT",
          bgOverlay: "from-yellow-500/5"
        };
      case "vonder":
        return {
          color: "hover:border-yellow-600 hover:shadow-yellow-600/10",
          accentText: "A Mais Completa",
          bgText: "VONDER",
          bgOverlay: "from-yellow-600/5"
        };
      case "tramontina":
        return {
          color: "hover:border-blue-600 hover:shadow-blue-600/10",
          accentText: "Tradição Brasileira",
          bgText: "TRAMONTINA",
          bgOverlay: "from-blue-600/5"
        };
      default:
        return {
          color: "hover:border-brand-primary hover:shadow-brand-primary/10",
          accentText: "Marca Premium",
          bgText: "PARCEIRO",
          bgOverlay: "from-brand-primary/5"
        };
    }
  };

  return (
    <section id="marcas" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-brand-primary uppercase">
            Garantia de Qualidade
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Marcas Líderes que Você Confia
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          <p className="font-sans text-gray-600 leading-relaxed font-light">
            Não brincamos com a sua segurança ou desempenho. Oferecemos exclusivamente produtos dos maiores fabricantes mundiais e nacionais reconhecidos pela extrema durabilidade.
          </p>
        </div>

        {/* Brands Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="brands-bento-grid">
          {PARTNER_BRANDS.map((brand) => {
            const details = getBrandDetails(brand.name);
            return (
              <motion.div
                key={brand.name}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-200 transition-all duration-300 shadow-sm ${details.color} group overflow-hidden cursor-default`}
              >
                {/* Large faint background text layout */}
                <div className="absolute -right-4 -bottom-4 font-display font-black text-6xl tracking-tighter opacity-[0.03] select-none group-hover:scale-105 transition-all duration-500">
                  {details.bgText}
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Brand Badge Label */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                      {details.accentText}
                    </span>
                    <Star className="w-4 h-4 text-yellow-400 opacity-60 group-hover:opacity-100 fill-current transition-opacity" />
                  </div>

                  {/* Brand Typography Title */}
                  <h3 className="font-display font-black text-2xl tracking-tighter text-brand-charcoal group-hover:text-brand-primary transition-colors">
                    {brand.name}
                  </h3>

                  {/* Brand Selling Focus */}
                  <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                    {brand.description}
                  </p>
                </div>

                {/* Arrow indicator at bottom */}
                <div className="flex items-center gap-1.5 pt-4 text-xs font-bold text-brand-primary group-hover:text-brand-dark transition-colors mt-auto relative z-10">
                  <Award className="w-4 h-4 text-yellow-500 shrink-0" />
                  <span>Revendedor Autorizado</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick assurance info */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-gray-100 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500 shrink-0">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
            Tem preferência por outra marca parceira? Nós conseguimos sob encomenda rápida para você. Fale diretamente com o consultor agora no WhatsApp!
          </p>
        </div>

      </div>
    </section>
  );
}
