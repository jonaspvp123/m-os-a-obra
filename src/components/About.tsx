import { Clock, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { STORE_CONTACT } from "../types";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Imagery Bento Box Grid */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl aspect-[4/5] shadow-md border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1521791136368-1a46827d0505?auto=format&fit=crop&w=600&q=80"
                    alt="Atendimento amigável e simpático ao cliente"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-brand-dark text-white rounded-2xl flex flex-col justify-between aspect-square shadow-lg shadow-brand-dark/15">
                  <HeartHandshake className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h4 className="font-display font-bold text-lg leading-tight">Simpatia Real</h4>
                    <p className="font-sans text-xs text-blue-100 mt-1">Atendimento humanizado de coração.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 bg-brand-light border border-gray-100 rounded-2xl flex flex-col justify-between aspect-square text-brand-charcoal shadow-sm">
                  <Clock className="w-8 h-8 text-brand-primary" />
                  <div>
                    <h4 className="font-display font-bold text-lg leading-tight">Desde 2021</h4>
                    <p className="font-sans text-xs text-gray-500 mt-1">Servindo Goiânia com orgulho e excelência.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl aspect-[4/5] shadow-md border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
                    alt="Estoque e produtos de reforma"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -z-10 -left-16 -bottom-16 w-64 h-64 rounded-full bg-brand-light blur-2xl opacity-80" />
          </div>

          {/* Right Column - Brand Story Narrative */}
          <div className="lg:col-span-7 space-y-8" id="about-content">
            <div className="space-y-4">
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-brand-primary uppercase">
                Quem Somos
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
                Ferragista Mãos À Obra: <br />
                História de Confiança e Dedicação
              </h2>
              <div className="w-16 h-1 bg-brand-primary rounded-full animate-pulse" />
            </div>

            <div className="space-y-6 font-sans text-gray-600 leading-relaxed text-base sm:text-lg font-light">
              <p>
                Nossa jornada começou em <strong className="font-medium text-brand-dark">{STORE_CONTACT.historyYear}</strong> com uma missão clara: descomplicar o dia a dia de quem constrói e reforma, unindo variedade de produtos e um atendimento próximo e parceiro.
              </p>
              <p>
                Sabemos que cada prego, parafuso ou fio elétrico tem uma importância crucial no sucesso de uma obra. Por isso, decidimos ir além da simples venda de ferragens. Nosso propósito é guiar nossos clientes para as melhores soluções técnicas, recomendando sempre o material mais adequado e durável.
              </p>
              <p>
                Tratamos cada cliente – seja ele um mestre de obras experiente, um eletricista independente ou um morador fazendo um reparo rápido aos finais de semana – com a mesma <strong className="font-medium text-brand-primary">simpatia, paciência e absoluto compromisso</strong> que nos transformou em um ponto de excelência confiável.
              </p>
            </div>

            {/* Brand Commitments Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100" id="about-features">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-charcoal text-base">Compromisso Supremo</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">Garantia de origem e durabilidade máxima em todas as linhas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-charcoal text-base">Agilidade Prática</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">Separação ágil dos seus produtos para economizar seu tempo precioso.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
