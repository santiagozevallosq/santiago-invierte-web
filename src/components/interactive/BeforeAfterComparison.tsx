import React, { useState } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Zap, FileText, ArrowRight } from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'documentos' | 'datos' | 'comercial'>('documentos');

  const cases = {
    documentos: {
      title: "Análisis de Expedientes & Informes de 80 Páginas",
      before: {
        time: "4 a 6 horas",
        friction: "Lectura manual fragmentada, riesgo de pasar por alto penalidades o cláusulas críticas.",
        process: [
          "Pegar fragmentos sueltos en ChatGPT y recibir resúmenes superficiales",
          "Alucinaciones sobre cifras o fechas clave",
          "Redacción inconsistente que debe ser reescrita por completo"
        ],
        badge: "Uso Improvisado de IA"
      },
      after: {
        time: "15 a 20 minutos",
        friction: "Extracción estructurada con verificación punto por punto y matriz de riesgos lista para imprimir.",
        process: [
          "Flujo de prompting por capas (Estructura -> Extracción -> Validación)",
          "Matriz de obligaciones y penalidades categorizadas por urgencia",
          "Informe ejecutivo redactado con formato formal de directorio"
        ],
        badge: "Método Santiago Invierte"
      }
    },
    datos: {
      title: "Consolidación de Datos Financieros y Tablas",
      before: {
        time: "3 horas en Excel",
        friction: "Fórmulas rotas, limpieza manual celda por celda y fatiga visual tratando de interpretar anomalías.",
        process: [
          "Intentar que la IA adivine la estructura de datos sin contexto de negocio",
          "Cálculos erróneos por no entender la diferencia entre flujo y devengado",
          "Gráficos genéricos que no explican la toma de decisión"
        ],
        badge: "Uso Improvisado de IA"
      },
      after: {
        time: "10 minutos",
        friction: "Transformación inmediata de CSV/Excel desordenados en tablas limpias con insights económicos clave.",
        process: [
          "Instrucciones estandarizadas para evitar errores de redondeo o formato",
          "Identificación automática de anomalías y tendencias financieras",
          "Código en Python/Fórmulas generado para automatizar el cierre mensual"
        ],
        badge: "Método Santiago Invierte"
      }
    },
    comercial: {
      title: "Propuestas Comerciales y Negociaciones Complejas",
      before: {
        time: "2 días de redacción",
        friction: "Texto genérico que suena a plantilla, argumentos débiles y objeciones de precio sin anticipar.",
        process: [
          "Pedir 'redáctame una propuesta' y recibir párrafos vacíos y repetitivos",
          "Falta de enfoque en el dolor económico del cliente",
          "Pérdida de propuestas por no transmitir autoridad"
        ],
        badge: "Uso Improvisado de IA"
      },
      after: {
        time: "45 minutos",
        friction: "Propuesta de valor quirúrgica con desglose de ROI, objeciones refutadas y tono consultivo de alto nivel.",
        process: [
          "Estructura basada en persuasión analítica y economía del comportamiento",
          "Matriz de objeciones resueltas antes de la reunión de cierre",
          "Simulación de la contraparte para anticipar preguntas difíciles"
        ],
        badge: "Método Santiago Invierte"
      }
    }
  };

  const current = cases[activeTab];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
      
      {/* Selector de pestañas */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: 'documentos', label: '1. Expedientes y Contratos' },
          { id: 'datos', label: '2. Finanzas y Tablas Excel' },
          { id: 'comercial', label: '3. Propuestas y Negociación' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          {current.title}
        </h3>
      </div>

      {/* Comparativa Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* Antes: Sin método */}
        <div className="bg-rose-50/50 rounded-2xl p-6 sm:p-8 border border-rose-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                {current.before.badge}
              </span>
              <span className="text-xs font-semibold text-rose-700">
                Tiempo perdido: {current.before.time}
              </span>
            </div>

            <p className="text-sm font-semibold text-rose-950 mb-4">
              {current.before.friction}
            </p>

            <div className="space-y-3 pt-2">
              {current.before.process.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-rose-900/80">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-rose-200 text-center">
            <span className="text-xs font-semibold text-rose-800">
              Resultado: Frustración, retrabajo y desconfianza en la IA.
            </span>
          </div>
        </div>

        {/* Después: Con el Método Santiago Invierte */}
        <div className="bg-emerald-50/60 rounded-2xl p-6 sm:p-8 border-2 border-emerald-500/50 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white shadow-sm">
                {current.after.badge}
              </span>
              <span className="text-xs font-black text-emerald-800">
                Tiempo récord: {current.after.time}
              </span>
            </div>

            <p className="text-sm font-bold text-emerald-950 mb-4">
              {current.after.friction}
            </p>

            <div className="space-y-3 pt-2">
              {current.after.process.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-emerald-200/80 text-center">
            <span className="text-xs font-bold text-emerald-900">
              Resultado: Decisiones seguras, precisión ejecutiva y horas libres recuperadas.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
