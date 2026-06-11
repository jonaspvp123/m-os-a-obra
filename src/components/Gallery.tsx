import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../types";
import { Eye, X, ChevronLeft, ChevronRight, Image } from "lucide-react";

export default function Gallery() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  // Get unique categories for filters
  const filterCategories = ["todos", "showroom", "produtos", "estrutura", "serviço"];

  // Filter items based on selected category
  const filteredItems = activeFilter === "todos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      const newIndex = selectedItemIndex === 0 ? GALLERY_ITEMS.length - 1 : selectedItemIndex - 1;
      setSelectedItemIndex(newIndex);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      const newIndex = selectedItemIndex === GALLERY_ITEMS.length - 1 ? 0 : selectedItemIndex + 1;
      setSelectedItemIndex(newIndex);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-brand-primary uppercase">
            Nossa Loja por Dentro
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Galeria do Nosso Showroom & Estoque
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full" />
          <p className="font-sans text-gray-600 leading-relaxed font-light">
            Conheça a organização, a variedade e a estrutura física da Ferragista Mãos À Obra. Nosso espaço é planejado para que você localize tudo com rapidez e facilidade.
          </p>
        </div>

        {/* Filter Categories Menu */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-filters">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-lg border transition-all duration-300 focus:outline-none cursor-pointer ${
                activeFilter === category
                  ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                  : "bg-white text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-brand-charcoal"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Dynamic Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              // Get absolute index in the parent list to coordinate lightbox navigation correctly
              const absoluteIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
              
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] border border-gray-100 shadow-sm"
                  onClick={() => setSelectedItemIndex(absoluteIndex)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550 ease-out"
                  />
                  
                  {/* Hover Overlay Visual Setup */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" id={`gitem-overlay-${item.id}`}>
                    <span className="text-yellow-400 font-display font-bold text-[10px] tracking-wider uppercase mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-display font-extrabold text-lg leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 font-sans text-xs mt-1 font-light flex items-center gap-1.5 pt-2">
                      <Eye className="w-4 h-4 text-brand-primary" /> Clique para ampliar foto
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* If filtered list is empty, display subtle message */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <Image className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            <p className="font-sans text-sm">Nenhuma foto encontrada para esta categoria no momento.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItemIndex(null)}
            id="gallery-lightbox-modal"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none z-50 transition-all cursor-pointer"
              aria-label="Save and Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left controller arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none z-50 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Large focused image box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center relative bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[selectedItemIndex].imageUrl}
                alt={GALLERY_ITEMS[selectedItemIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />
              
              <div className="text-center text-white mt-4 space-y-1">
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest font-display">
                  {GALLERY_ITEMS[selectedItemIndex].category}
                </span>
                <h4 className="font-display font-bold text-lg">
                  {GALLERY_ITEMS[selectedItemIndex].title}
                </h4>
                <p className="text-xs text-gray-400 font-sans">
                  {selectedItemIndex + 1} de {GALLERY_ITEMS.length} fotos
                </p>
              </div>
            </motion.div>

            {/* Right controller arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none z-50 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
