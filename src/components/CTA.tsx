import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ClipboardList, Plus, Trash2, Send, Check, Sparkles, Smartphone, ShieldCheck } from "lucide-react";
import { STORE_CONTACT } from "../types";

interface BudgetItem {
  name: string;
  quantity: number;
}

export default function CTA() {
  const [items, setItems] = useState<BudgetItem[]>([]);
  const [customItem, setCustomItem] = useState("");
  const [customQuantity, setCustomQuantity] = useState(1);
  const [userName, setUserName] = useState("");
  const [isSent, setIsSent] = useState(false);

  // Suggested starter products to make it easy for users to tap and add
  const suggestions = [
    "Cabo Flexível 2.5mm (Rolo)",
    "Fita Isolante 20 metros",
    "Furadeira de Impacto Profissional",
    "Lâmpada LED Bull 9W",
    "Disjuntor DIN 20A",
    "Rolo de Lã Antigota",
    "Parafuso Autobrocante (Cento)",
    "Bucha de Nylon nº 8",
  ];

  const addItem = (name: string, qty: number = 1) => {
    if (!name.trim()) return;
    
    // Check if item already exists, if so update quantity
    const existingIndex = items.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (existingIndex > -1) {
      const updated = [...items];
      updated[existingIndex].quantity += qty;
      setItems(updated);
    } else {
      setItems([...items, { name: name.trim(), quantity: qty }]);
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customItem.trim()) {
      addItem(customItem.trim(), customQuantity);
      setCustomItem("");
      setCustomQuantity(1);
    }
  };

  const getWhatsAppURL = () => {
    let text = `*Solicitação de Orçamento - Ferragista Mãos À Obra*\n`;
    if (userName.trim()) {
      text += `*Cliente:* ${userName.trim()}\n`;
    }
    text += `*Canal:* Website Institucional\n\n`;
    text += `*Lista de Materiais Solicitados:*\n`;

    if (items.length > 0) {
      items.forEach((item, index) => {
        text += `${index + 1}. *${item.name}* (Quantidade: ${item.quantity}x)\n`;
      });
    } else {
      text += `_Estou entrando em contato pelo site para solicitar um orçamento de materiais diversos._\n`;
    }

    text += `\n*Aguardando retorno para fechar os itens! Obrigado.*`;
    
    return `${STORE_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 2000);
  };

  return (
    <section
      id="orcamento"
      className="py-24 bg-gradient-to-br from-brand-charcoal via-slate-900 to-brand-dark text-white relative overflow-hidden"
    >
      {/* Visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="cta-builder-root">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Text / Info column */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-yellow-400 font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="w-3 h-3 fill-current" />
                Orçamento Sem Compromisso
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
                Faça sua Lista e Nós Cotamos para Você!
              </h2>
              <p className="font-sans text-gray-300 leading-relaxed font-light text-base sm:text-lg">
                Esqueça a burocracia. Monte a lista de ferragens ou materiais que você precisa utilizando nosso simulador rápido ou nos envie uma mensagem direta. Respondemos com os melhores preços nos minutos seguintes!
              </p>
            </div>

            {/* Quick value props list */}
            <ul className="space-y-3.5 text-left max-w-sm mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Separação ágil de materiais de obra</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Preços altamente imbatíveis para atacado</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Atendimento humanizado via WhatsApp</span>
              </li>
            </ul>

            {/* Quick raw contact column card */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <span className="font-sans text-[10px] text-slate-400 uppercase font-semibold">Prefere ligar ou enviar áudio?</span>
                <p className="font-display font-bold text-lg text-white">{STORE_CONTACT.phone}</p>
              </div>
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-green-500 hover:bg-green-600 rounded-xl text-white shadow-lg shadow-green-500/25 shrink-0 transition-colors cursor-pointer"
              >
                <Smartphone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Right Interactive Simulator Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl text-brand-charcoal border border-gray-100 shadow-2xl p-6 sm:p-8" id="quote-card-box">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-150 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-charcoal">Simulador de Lista</h3>
                  <p className="font-sans text-xs text-gray-500">Adicione os produtos para orçamento rápido</p>
                </div>
              </div>
              {items.length > 0 && (
                <button
                  onClick={() => setItems([])}
                  className="px-3 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Limpar tudo
                </button>
              )}
            </div>

            {/* Step 1: Client Name Input */}
            <div className="py-4">
              <label htmlFor="user-name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                Seu Nome (Opcional):
              </label>
              <input
                type="text"
                id="user-name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: João da Silva (Eletricista)"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-brand-primary placeholder:text-gray-400 transition-colors"
              />
            </div>

            {/* Quick Add Suggestions Board */}
            <div className="py-2">
              <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                Produtos sugeridos (clique para adicionar):
              </span>
              <div className="flex flex-wrap gap-2 max-h-[110px] overflow-y-auto pr-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => addItem(suggestion, 1)}
                    className="px-3 py-1.5 bg-gray-50 hover:bg-brand-primary/10 hover:text-brand-primary rounded-lg border border-gray-200 text-xs font-medium text-brand-charcoal transition-all text-left flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3 shrink-0" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Manual Item Form */}
            <form onSubmit={handleAddCustom} className="grid grid-cols-12 gap-3 py-4 border-t border-b border-gray-100 my-4 items-end">
              <div className="col-span-12 sm:col-span-7">
                <label htmlFor="custom-item" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                  Digitar Outro Item:
                </label>
                <input
                  type="text"
                  id="custom-item"
                  value={customItem}
                  onChange={(e) => setCustomItem(e.target.value)}
                  placeholder="Ex: Conector de torção, Fio cobre..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-brand-primary placeholder:text-gray-400 transition-colors"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="custom-quantity" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                  Qtd:
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setCustomQuantity(Math.max(1, customQuantity - 1))}
                    className="px-3 py-3 hover:bg-gray-50 text-gray-400 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-display font-semibold text-sm">
                    {customQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCustomQuantity(customQuantity + 1)}
                    className="px-3 py-3 hover:bg-gray-50 text-gray-400 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-charcoal hover:bg-brand-primary text-white font-bold rounded-xl flex items-center justify-center transition-all cursor-pointer"
                  title="Adicionar item"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Live Added Items List */}
            <div className="min-h-[120px] max-h-[220px] overflow-y-auto mb-6 pr-2">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center py-6 text-gray-400">
                    <ClipboardList className="w-8 h-8 text-slate-350 stroke-1 mb-2" />
                    <p className="font-sans text-xs">Sua lista está vazia. Clique nos itens acima ou digite para comecar.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.name + index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-150"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold flex items-center justify-center">
                            {item.quantity}x
                          </span>
                          <span className="font-sans text-sm font-semibold text-brand-charcoal">
                            {item.name}
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* SEND SUBMIT BUTTON */}
            <a
              href={getWhatsAppURL()}
              onClick={handleSend}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/35 transition-all text-base tracking-wider cursor-pointer"
              id="submit-budget-whatsapp"
            >
              <Send className="w-5 h-5 fill-current" />
              {items.length > 0 ? "Enviar Lista via WhatsApp" : "Enviar Mensagem pelo WhatsApp"}
            </a>

            <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-gray-400">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Conexão direta e segura ao WhatsApp da Ferragista Mãos À Obra.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
