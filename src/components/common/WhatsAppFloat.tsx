import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover contextual */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200 text-slate-800">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                SZ
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Santiago Zevallos</h5>
                <p className="text-[10px] text-emerald-600 font-medium">En línea para consultas</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            Hola 👋 ¿Tienes dudas sobre cuál curso o servicio se adapta a tu perfil o a tu empresa? Escríbeme directamente.
          </p>

          <a
            href={getWhatsAppUrl("Hola Santiago, tengo una duda sobre tus cursos y servicios de IA.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-md shadow-emerald-950/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Abrir chat de WhatsApp</span>
          </a>
        </div>
      )}

      {/* Botón Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/30 hover:scale-110 transition-all focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-slate-900" />
      </button>

    </div>
  );
};
