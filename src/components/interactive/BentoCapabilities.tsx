import React from 'react';
import { FileSearch, BarChart3, MailCheck, Globe2, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BentoCapabilities: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      
      {/* Bento 1: Documentos y Expedientes (Spans 2 cols en Desktop) */}
      <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-navy-950 text-white rounded-3xl p-7 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileSearch className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
              Caso de Alto Impacto
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Análisis y Síntesis de Documentos Complejos
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-6">
            Aprende a procesar contratos, resoluciones, manuales técnicos y expedientes de 100+ páginas extrayendo de forma sistemática riesgos, obligaciones y plazos sin alucinaciones.
          </p>

          {/* Mini Mockup Visual */}
          <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800/90 text-xs font-mono text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
              <span>PROCESANDO: Expediente_Contrato_Consorcio.pdf (94 págs)</span>
              <span className="text-emerald-400 font-bold">100% Verificado</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Partes & Monto</span>
                <strong className="text-white">Consorcio Andino • S/ 4.2M</strong>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Cláusula Crítica</span>
                <strong className="text-amber-400">Penalidad diaria 1.5%</strong>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Próximo Hito</span>
                <strong className="text-emerald-400">30 de Octubre 2026</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
          <span className="text-slate-400">Ideal para abogados, directores, peritos y consultores</span>
          <Link to="/cursos#ia-profesionales" className="text-emerald-400 font-bold flex items-center gap-1 hover:underline">
            Ver curso aplicable <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Bento 2: Finanzas y Datos */}
      <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-4">
            <BarChart3 className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Datos a Decisiones
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Transforma tablas dispersas de Excel o bases de datos en narrativa analítica y ratios para el Directorio, fundamentado por un Economista.
          </p>

          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs space-y-1.5">
            <div className="flex justify-between font-semibold text-slate-800">
              <span>Margen Operativo</span>
              <span className="text-emerald-600">+18.4% vs 2025</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[72%]" />
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              "Reducción de costos por automatización de procesos internos."
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
          <Link to="/servicios" className="text-teal-700 font-bold flex items-center gap-1 hover:underline">
            Consultoría para empresas <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Bento 3: Comunicaciones & Actas */}
      <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-700 mb-4">
            <MailCheck className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Actas y Circulares en Minutos
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            De audios o notas caóticas de reuniones a actas formales con acuerdos, responsables y fechas límite de ejecución.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>Actas de juntas de propietarios y condominios</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>Gestión de cobranza con tono asertivo</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>Minutas ejecutivas de comités semanales</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
          <Link to="/cursos#ia-administradores-edificios" className="text-indigo-700 font-bold flex items-center gap-1 hover:underline">
            Ver taller especializado <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Bento 4: Páginas Web & Asistentes sin Programar (Spans 2 cols) */}
      <div className="md:col-span-2 bg-slate-100 rounded-3xl p-7 border border-slate-200 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              Sin Necesidad de Código
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Páginas Web y Asistentes Simples y Funcionales
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xl mb-4">
            Aprende a estructurar landing pages, páginas de servicios y asistentes con IA utilizando plataformas no-code y lenguaje natural estructurado. Pasa de una idea a una web funcional en cuestión de horas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Despliegue rápido para validar servicios</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Estructura optimizada para captar clientes</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
          <span className="text-slate-500">Ahorra miles de dólares en desarrollos innecesarios para validar proyectos</span>
          <Link to="/cursos#ia-negocios" className="text-slate-900 font-bold flex items-center gap-1 hover:underline">
            Explorar programa <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
};
