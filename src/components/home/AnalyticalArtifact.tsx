import React, { useState } from 'react';
import { FileText, ShieldAlert, ArrowRight, Eye, Check, Sparkles } from 'lucide-react';

interface CaseStudy {
  id: string;
  tabLabel: string;
  docTitle: string;
  docType: string;
  pages: string;
  excerpt: string;
  highlightedText: string;
  postHighlightText: string;
  findingBadge: string;
  findingNote: string;
  promptGenericoResult: string;
  metodoSantiagoResult: string;
  timeSaved: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'legal',
    tabLabel: 'Contratos & Expedientes',
    docTitle: 'Contrato de Arrendamiento Financiero y Servicios Corporativos',
    docType: 'PDF Legal • 42 Páginas',
    pages: 'Pág. 28 / Cláusula 19.3',
    excerpt: '...Las partes acuerdan que en caso de resolución anticipada imputable al Arrendatario antes del mes 24, ',
    highlightedText: 'se devengará una penalidad equivalente al 100% de las rentas insolutas remanentes más un recargo administrativo del 18.5% no compensable...',
    postHighlightText: ' sin perjuicio de las acciones indemnizatorias por daño ulterior...',
    findingBadge: 'Riesgo Financiero Crítico Oculto',
    findingNote: 'Penalidad desproporcionada que compromete el 35% del flujo operativo anual.',
    promptGenericoResult: 'ChatGPT genérico: Resumió el contrato diciendo que "es un acuerdo estándar de alquiler", omitiendo por completo el cálculo del recargo del 18.5%.',
    metodoSantiagoResult: 'Método Santiago Invierte: Auditoría cruzada con verificación de cláusulas leoninas, cálculo automático del pasivo contingente y cita exacta del folio.',
    timeSaved: 'Lectura manual: 4.5 horas ➔ Análisis con método: 4 minutos'
  },
  {
    id: 'finanzas',
    tabLabel: 'Balances & Reportes Excel',
    docTitle: 'Estados Financieros Auditados y Notas a los Estados Contables',
    docType: 'Reporte Trimestral • 68 Páginas + Anexos',
    pages: 'Nota 14: Deuda Financiera y Covenants',
    excerpt: '...El ratio Deuda Neta / EBITDA consolidado al cierre del ejercicio se ubicó en ',
    highlightedText: '3.45x, superando temporalmente el límite contractual pactado con el sindicato de bancos acreedores (máximo 3.0x)...',
    postHighlightText: ' sujeto a la obtención de una dispensa formal (waiver) antes del 31 de marzo...',
    findingBadge: 'Incumplimiento de Covenants Detectado',
    findingNote: 'Riesgo de aceleración de deuda por USD 2.4M si no se tramita la adenda.',
    promptGenericoResult: 'ChatGPT genérico: Calculó promedios sin revisar las notas al pie, concluyendo erróneamente que la empresa tenía solvencia plena.',
    metodoSantiagoResult: 'Método Santiago Invierte: Extracción estructurada de notas contables, conciliación de covenants y redacción de memorando para el Comité de Auditoría.',
    timeSaved: 'Consolidación manual: 6 horas ➔ Extracción con método: 7 minutos'
  },
  {
    id: 'gestion',
    tabLabel: 'Informes & Minutas Directivas',
    docTitle: 'Acta de Directorio y Plan Estratégico Multianual',
    docType: 'Minuta de Sesión Extraordinaria',
    pages: 'Acuerdo N° 04-2026',
    excerpt: '...Habiéndose debatido las tres alternativas para la expansión en provincias, el Directorio acordó ',
    highlightedText: 'aprobar la Opción B condicionada a no superar el CAPEX de USD 450,000 en la Fase 1...',
    postHighlightText: ' asignando la supervisión directa a la Gerencia de Administración con reporte quincenal...',
    findingBadge: 'Compromiso Directivo con Métrica y Plazo',
    findingNote: 'Asignación de responsabilidad ejecutable con fecha de primer entregable.',
    promptGenericoResult: 'ChatGPT genérico: Generó un texto inflado de 8 párrafos con clichés tipo "sinergias y liderazgo", sin listar los responsables ni montos asignados.',
    metodoSantiagoResult: 'Método Santiago Invierte: Matriz RACI sintetizada en 1 página con indicadores, fechas límite y borrador automático de correos para cada responsable.',
    timeSaved: 'Redacción manual: 2.5 horas ➔ Minuta ejecutiva: 3 minutos'
  }
];

export const AnalyticalArtifact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('legal');
  const currentCase = CASES.find((c) => c.id === activeTab) || CASES[0];

  return (
    <div className="my-12">
      
      {/* Selector de pestañas estilo editorial */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-600 mr-3 hidden sm:inline-block">
          DOCUMENTO EN REVISIÓN:
        </span>
        {CASES.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === item.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {item.tabLabel}
          </button>
        ))}
      </div>

      {/* Hoja de Trabajo Analítica */}
      <div className="bg-white rounded-2xl border border-slate-300/80 shadow-md overflow-hidden max-w-5xl mx-auto">
        
        {/* Cabecera del Documento de Trabajo */}
        <div className="bg-slate-100/90 px-6 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
              CASO DE ESTUDIO REAL
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-semibold text-slate-800">{currentCase.docTitle}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-[11px] font-mono">
            <span>{currentCase.docType}</span>
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">
              {currentCase.pages}
            </span>
          </div>
        </div>

        {/* Cuerpo: Documento anotado + Panel de contraste */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* Lado A: El Documento Original con Resaltado Analítico */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600">
                Fragmento Extraído del Expediente
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold">
                <ShieldAlert className="w-3 h-3 text-amber-700" />
                <span>{currentCase.findingBadge}</span>
              </span>
            </div>

            <div className="font-serif text-sm sm:text-base leading-relaxed text-slate-700 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative">
              <span className="text-slate-500">{currentCase.excerpt}</span>
              <mark className="bg-amber-100/90 text-amber-950 font-medium px-1 py-0.5 rounded border-b-2 border-amber-400">
                {currentCase.highlightedText}
              </mark>
              <span className="text-slate-500">{currentCase.postHighlightText}</span>

              {/* Nota al margen de auditoría */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs font-sans text-slate-600">
                <span className="font-mono text-emerald-800 font-bold text-[10px] uppercase shrink-0 mt-0.5">
                  [ANOTACIÓN SZ]:
                </span>
                <span className="italic">{currentCase.findingNote}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>{currentCase.timeSaved}</span>
            </div>
          </div>

          {/* Lado B: Comparativa de Rigor (Improvisar vs Método) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 block">
                Contraste de Método
              </span>

              {/* Lo que pasa con prompts genéricos */}
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-rose-900 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Sin método (Uso común de ChatGPT / Claude)</span>
                </div>
                <p className="text-rose-900/80 leading-relaxed font-sans text-xs">
                  {currentCase.promptGenericoResult}
                </p>
              </div>

              {/* Lo que se logra con el Método de Santiago */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Con Método Analítico Estructurado (Santiago Invierte)</span>
                </div>
                <p className="text-emerald-950/80 leading-relaxed font-sans text-xs">
                  {currentCase.metodoSantiagoResult}
                </p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <span className="text-[11px] font-mono text-slate-600">
                Validado en casos de consultoría real • Lima, Perú
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
