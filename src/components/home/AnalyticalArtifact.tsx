import React from 'react';
import { ArrowRight, BarChart3, Globe2, FileText, Image as ImageIcon } from 'lucide-react';

const CASES = [
  {
    icon: BarChart3,
    title: 'De Excel a un dashboard interactivo',
    input: 'Base de datos en Excel',
    process: 'Análisis de variables, KPIs, filtros y visualizaciones',
    output: 'Dashboard para explorar resultados y apoyar decisiones',
    tools: 'ChatGPT / Gemini / Gemini Canvas'
  },
  {
    icon: Globe2,
    title: 'De información dispersa a una página web',
    input: 'Información básica del negocio + referencias',
    process: 'Ordenamiento de contenido y generación de un brief estructurado',
    output: 'Página web funcional con propuesta de valor y CTA',
    tools: 'ChatGPT / Gemini / Lovable'
  },
  {
    icon: FileText,
    title: 'De documentos extensos a un informe ejecutivo',
    input: 'PDF, normativa, informe o transcripción',
    process: 'Lectura, extracción, contraste y organización de hallazgos',
    output: 'Resumen, matriz, informe o presentación reutilizable',
    tools: 'ChatGPT / Gemini / NotebookLM'
  },
  {
    icon: ImageIcon,
    title: 'De un producto a contenido visual',
    input: 'Foto del producto + información comercial',
    process: 'Definición del mensaje, pieza visual y variantes de contenido',
    output: 'Flyer, carrusel, imagen promocional o video breve',
    tools: 'ChatGPT / Gemini / Flow'
  }
];

export const AnalyticalArtifact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {CASES.map(({ icon: Icon, title, input, process, output, tools }) => (
        <div key={title} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Flujo práctico</span>
              <h3 className="text-lg font-bold text-slate-950 mt-1">{title}</h3>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">Entrada</span>
              <span className="text-slate-700">{input}</span>
            </div>
            <div className="flex justify-center text-slate-300"><ArrowRight className="w-4 h-4 rotate-90" /></div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">Proceso con IA</span>
              <span className="text-slate-700">{process}</span>
            </div>
            <div className="flex justify-center text-slate-300"><ArrowRight className="w-4 h-4 rotate-90" /></div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 block mb-1">Resultado</span>
              <span className="text-emerald-950">{output}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <strong className="text-slate-700">Herramientas:</strong> {tools}
          </div>
        </div>
      ))}
    </div>
  );
};
