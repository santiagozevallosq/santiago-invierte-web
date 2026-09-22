import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { PROMPT_TEMPLATES } from '../../data/siteData';

export const PromptShowcase: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROMPT_TEMPLATES.map((tpl) => {
          const isCopied = copiedId === tpl.id;

          return (
            <div
              key={tpl.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="p-6">
                
                {/* Header de la tarjeta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {tpl.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <Terminal className="w-3 h-3" />
                    <span>Plantilla práctica</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {tpl.title}
                </h4>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {tpl.description}
                </p>

                {/* Caja de Código del Prompt */}
                <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 text-xs font-mono text-slate-300 relative group/code max-h-48 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-[11px] leading-relaxed text-slate-300">
                    {tpl.prompt}
                  </pre>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tpl.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer con botón de copiar */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {isCopied ? '¡Copiado con éxito!' : 'Copia y adapta a tu herramienta'}
                </span>
                
                <button
                  type="button"
                  onClick={() => handleCopy(tpl.id, tpl.prompt)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Prompt</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          );
        })}
      </div>


    </div>
  );
};
