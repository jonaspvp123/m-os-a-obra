import { Phone, Instagram, Mail, MapPin, Clock, Wrench } from "lucide-react";
import { STORE_CONTACT } from "../types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-[#1C1C1C] text-gray-300 border-t border-gray-800">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-2" id="footer-logo">
              <div className="w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base leading-tight tracking-tight text-white">
                  MÃOS À OBRA
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] font-semibold text-brand-primary uppercase">
                  Ferragista
                </span>
              </div>
            </div>
            
            <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
              Desde 2021 servindo profissionais da construção civil, pintores, eletricistas, pedreiros e consumidores em Goiás com honestidade, simpatia e entrega garantida de qualidade.
            </p>

            <div className="flex gap-4">
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="WhatsApp Mãos À Obra"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
              <a
                href={STORE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Instagram Mãos À Obra"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${STORE_CONTACT.email}`}
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-brand-primary hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Email Mãos À Obra"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Contacts Column */}
          <div className="md:col-span-4 space-y-4 text-left" id="footer-contacts">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Contatos Rápidos
            </h4>
            <div className="w-10 h-0.5 bg-brand-primary rounded" />
            
            <ul className="space-y-3.5 font-sans text-sm">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-brand-primary shrink-0 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] uppercase font-bold">WhatsApp / Telefone</span>
                  <a
                    href={STORE_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-primary transition-colors text-white font-medium"
                  >
                    {STORE_CONTACT.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <Instagram className="w-5 h-5 text-brand-primary shrink-0 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] uppercase font-bold">Acompanhe pelo Instagram</span>
                  <a
                    href={STORE_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-primary transition-colors text-white font-medium"
                  >
                    {STORE_CONTACT.instagram}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-brand-primary shrink-0 group-hover:text-white transition-colors" />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] uppercase font-bold">Dúvidas ou Faturamento</span>
                  <a
                    href={`mailto:${STORE_CONTACT.email}`}
                    className="hover:text-brand-primary transition-colors text-white font-medium break-all"
                  >
                    {STORE_CONTACT.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Hours Column */}
          <div className="md:col-span-3 space-y-4 text-left" id="footer-schedule">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Horário e Local
            </h4>
            <div className="w-10 h-0.5 bg-brand-primary rounded" />
            
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-medium text-white">Segunda a Sexta:</p>
                  <p className="text-gray-400 text-xs text-light">08:00h às 18:00h</p>
                  <p className="font-medium text-white mt-1.5">Sábados:</p>
                  <p className="text-gray-400 text-xs text-light">08:00h às 13:00h</p>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <p className="font-semibold text-white">Goiânia - GO</p>
                  <p className="text-xs text-gray-400 font-light mt-0.5">Disponibilidade de entrega rápida em toda a região metropolitana.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright section */}
      <div className="border-t border-gray-850 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <p>© {currentYear} Ferragista Mãos À Obra. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Foco em Qualidade & Atendimento de Excelência</span>
          </p>
        </div>
      </div>
      
    </footer>
  );
}
