import React from "react";
import { motion } from "motion/react";
import { Phone, ArrowRight, ShieldCheck, Star, Award, Sparkles } from "lucide-react";
import { STORE_CONTACT } from "../types";

export default function Hero() {
  const handleScrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#orcamento");
    if (element) {
      const offset = 80;
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
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-brand-charcoal via-slate-900 to-brand-dark overflow-hidden text-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/12 w-96 h-96 rounded-full bg-brand-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/12 w-96 h-96 rounded-full bg-yellow-500 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-yellow-400 font-semibold text-xs tracking-wider uppercase"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              Sua Loja Completa em Goiânia desde {STORE_CONTACT.historyYear}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-white">
                Mãos à Obra: Sua <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">
                  Ferragista Completa
                </span>
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Do alicerce ao acabamento. Oferecemos as melhores ferramentas, materiais elétricos e ferragens para pedreiros, eletricistas, pintores e quem ama colocar a mão na massa.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-ctas"
            >
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base tracking-wide shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                id="hero-cta-whatsapp"
              >
                <Phone className="w-5 h-5 fill-current" />
                Orçamento via WhatsApp
              </a>

              <a
                href="#orcamento"
                onClick={handleScrollToQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-base transition-all duration-200 group"
              >
                Simular Lista
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center lg:text-left max-w-lg mx-auto lg:mx-0"
              id="hero-metrics"
            >
              <div className="flex flex-col space-y-1">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-yellow-400">Desde '21</span>
                <span className="font-sans text-xs text-slate-400">Tradição & Confiança</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-yellow-400">100%</span>
                <span className="font-sans text-xs text-slate-400">Fidelidade e Retorno</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-yellow-400">Garantia</span>
                <span className="font-sans text-xs text-slate-400 font-light">As Melhores Marcas</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Card Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
              id="hero-media"
            >
              {/* Outer visual accent glow */}
              <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Image frame */}
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-900/60 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80"
                  alt="Ferramentas manuais e elétricas profissionais arrumadas de forma impecável"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating badges on top of image */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -right-4 top-1/4 p-4 rounded-2xl bg-brand-primary flex items-center gap-3 shadow-lg shadow-brand-primary/30 max-w-[200px]"
              >
                <div className="p-2 rounded-lg bg-white/20 text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans text-[10px] uppercase font-semibold text-white/80">Produtos</span>
                  <span className="font-display font-bold text-sm text-white">Qualidade Premium</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-4 bottom-1/4 p-4 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-md max-w-[220px]"
              >
                <div className="p-2 rounded-lg bg-yellow-500 text-brand-charcoal">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans text-[10px] uppercase font-semibold text-slate-400">Atendimento</span>
                  <span className="font-display font-bold text-sm text-white">Simpatia e Compromisso</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Wave shape transition helper */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
    </section>
  );
}
