import React, { useState } from 'react';
import { Clock, TrendingUp, Sparkles, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

export const TimeSavingsCalculator: React.FC = () => {
  const [sector, setSector] = useState<'profesional' | 'legal' | 'finanzas' | 'operaciones'>('profesional');
  const [docHours, setDocHours] = useState<number>(8);
  const [dataHours, setDataHours] = useState<number>(6);
  const [commHours, setCommHours] = useState<number>(4);

  // Cálculos de ahorro basados en el método probado (reducción promedio del 65% en tareas mecánicas)
  const totalWeeklyHours = docHours + dataHours + commHours;
  const weeklySavedHours = Math.round((docHours * 0.7) + (dataHours * 0.65) + (commHours * 0.6));
  const yearlySavedHours = weeklySavedHours * 48; // 48 semanas laborales
  const workingDaysSaved = Math.round(yearlySavedHours / 8);

  const sectorLabels = {
    profesional: 'Profesionales y Consultores',
    legal: 'Legal y Gestión Pública',
    finanzas: 'Economía y Finanzas',
    operaciones: 'Administración y Operaciones'
  };

  const whatsappMessage = `Hola Santiago, usé la calculadora de tu web en el sector ${sectorLabels[sector]}. Estimo que mi equipo/yo podríamos ahorrar aprox. ${weeklySavedHours} horas a la semana (${yearlySavedHours} hrs/año). Me gustaría conocer cómo aplicar tu metodología.`;

  return (
    <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
      {/* Glow ambiental luminoso */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Simulador de Impacto Real</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
            ¿Cuántas horas pierdes cada semana en tareas repetitivas?
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            Mueve los controles según tu rutina de trabajo y calcula el tiempo recuperable aplicando flujos estructurados de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Columna Izquierda: Controles y Sliders */}
          <div className="lg:col-span-7 space-y-6 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200">
            
            {/* Selector de Sector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Selecciona tu especialidad o sector:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'profesional', label: 'Consultoría' },
                  { id: 'legal', label: 'Legal / Estado' },
                  { id: 'finanzas', label: 'Finanzas' },
                  { id: 'operaciones', label: 'Operaciones' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSector(item.id as any)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      sector === item.id
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/20'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Documentos e Informes */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-800 font-semibold">Lectura y redacción de informes o documentos</span>
                <span className="font-bold text-emerald-700">{docHours} h / semana</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={docHours}
                onChange={(e) => setDocHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <p className="text-[11px] text-slate-500">
                Resumir PDFs densos, contratos, memorandos, propuestas técnicas.
              </p>
            </div>

            {/* Slider 2: Datos y Hojas de Cálculo */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-800 font-semibold">Limpieza, cruce y análisis de tablas / Excel</span>
                <span className="font-bold text-emerald-700">{dataHours} h / semana</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={dataHours}
                onChange={(e) => setDataHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <p className="text-[11px] text-slate-500">
                Consolidar reportes de ventas, costos, ratios o métricas de gestión.
              </p>
            </div>

            {/* Slider 3: Comunicaciones y Minutas */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-800 font-semibold">Correos repetitivos, actas y coordinación</span>
                <span className="font-bold text-emerald-700">{commHours} h / semana</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                value={commHours}
                onChange={(e) => setCommHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <p className="text-[11px] text-slate-500">
                Redactar minutas de reunión, responder consultas frecuentes, circulares.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Resultados */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-200/90 flex flex-col justify-between h-full space-y-6 shadow-sm">
            
            <div>
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Tiempo Recuperable Estimado</span>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight">
                  {weeklySavedHours}h
                </span>
                <span className="text-slate-600 text-sm font-semibold">
                  ahorradas cada semana
                </span>
              </div>

              <div className="mt-6 space-y-3 pt-4 border-t border-emerald-200/80">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Total al año recuperable:</span>
                  <span className="font-black text-slate-950 text-base">~{yearlySavedHours} horas</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Equivalente en jornadas laborales:</span>
                  <span className="font-bold text-emerald-800 text-base">{workingDaysSaved} días completos</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>No necesitas programar, solo el método analítico correcto.</span>
              </div>

              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quiero recuperar estas {weeklySavedHours}h</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
