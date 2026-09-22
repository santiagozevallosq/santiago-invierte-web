import React from 'react';
import { PromptShowcase } from '../components/interactive/PromptShowcase';
import { BookOpen, Sparkles, Download, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const Resources: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Material Gratuito de Alto Valor</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Recursos, Guías y Plantillas de IA
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Herramientas prácticas, estructuras de prompts verificadas y guías metodológicas para aplicar en tu día a día.
        </p>
      </section>

      {/* Visor de Prompts Interactivos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Plantillas de Prompts Listas para Usar
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Copia el prompt directamente en tu portapapeles y pruébalo con tus propios documentos.
          </p>
        </div>

        <PromptShowcase />
      </section>

      {/* Guías Metodológicas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Guía Exclusiva para Descargar
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
                "Cómo pasar de prompts improvisados a un flujo de trabajo confiable"
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Un manual condensado de 15 páginas escrito por Santiago Zevallos donde aprenderás:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Las 4 capas de una instrucción profesional para evitar alucinaciones.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cómo cargar y analizar documentos extensos sin que la IA invente datos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Protocolo de verificación cruzada para informes legales y financieros.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hola Santiago, me gustaría solicitar la guía en PDF 'Cómo pasar de prompts improvisados a un flujo confiable'.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>Solicitar Guía en PDF por WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white border border-slate-800 space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">Comunidad Privada de WhatsApp</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Súmate a más de 300 profesionales que reciben semanalmente casos prácticos analizados, trucos de productividad y alertas de nuevas convocatorias.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hola Santiago, quiero unirme a la comunidad de profesionales de IA.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Unirme gratis a la comunidad</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
