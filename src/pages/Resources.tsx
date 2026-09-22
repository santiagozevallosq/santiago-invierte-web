import React from 'react';
import { PromptShowcase } from '../components/interactive/PromptShowcase';
import { BookOpen, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const Resources: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Biblioteca práctica</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Recursos prácticos de Inteligencia Artificial
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Prompts, plantillas, guías y herramientas para aplicar IA en el trabajo, los negocios y el análisis. Pensado para usuarios no técnicos.
        </p>
      </section>

      {/* Visor de Prompts Interactivos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Plantillas para trabajar con IA
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            No son prompts aislados: son puntos de partida para resolver tareas concretas. Cópialos, adáptalos y conviértelos en parte de tu propio flujo de trabajo.
          </p>
        </div>

        <PromptShowcase />
      </section>

      {/* Comunidad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Comunidad</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-2">Únete a IA para Todos</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">Una comunidad para compartir herramientas, novedades, casos y recursos sobre Inteligencia Artificial aplicada de forma práctica.</p>
            <div className="flex flex-wrap gap-2 mt-5 text-xs text-slate-300">
              <span className="px-3 py-1.5 rounded-full border border-slate-700">Casos prácticos</span>
              <span className="px-3 py-1.5 rounded-full border border-slate-700">Nuevas herramientas</span>
              <span className="px-3 py-1.5 rounded-full border border-slate-700">Recursos y plantillas</span>
            </div>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href={getWhatsAppUrl("Hola Santiago, quiero conocer cómo unirme a la comunidad IA para Todos.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all">
              <MessageCircle className="w-4 h-4" />
              <span>Quiero unirme a la comunidad</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
