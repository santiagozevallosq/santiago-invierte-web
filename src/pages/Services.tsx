import React from 'react';
import { SERVICES, WORK_METHOD_STEPS, getWhatsAppUrl } from '../data/siteData';
import { 
  Building2, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Presentation, 
  SearchCheck, 
  Cpu, 
  BarChart3, 
  Sparkles, 
  Check, 
  Users 
} from 'lucide-react';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Presentation: <Presentation className="w-6 h-6 text-emerald-600" />,
    SearchCheck: <SearchCheck className="w-6 h-6 text-teal-600" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-600" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-emerald-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>Soluciones Corporativas & Institucionales</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          IA Aplicada para Organizaciones y Equipos
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Reduzca costos operativos, ahorre cientos de horas en tareas manuales y mejore la calidad del análisis directivo sin inversiones faraónicas de software.
        </p>
      </section>

      {/* Lista de Servicios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className={`bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 hover:shadow-xl transition-all ${
                index % 2 === 1 ? 'bg-slate-50/70' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Izquierda: Información */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      {iconMap[srv.iconName] || <Sparkles className="w-6 h-6 text-emerald-600" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                        {srv.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-xs sm:text-sm text-emerald-900 font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Ideal para:</strong> {srv.idealFor}</span>
                  </div>
                </div>

                {/* Columna Derecha: Entregables y CTA */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Entregables Garantizados:
                    </h4>
                    <div className="space-y-3">
                      {srv.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hola Santiago, me gustaría solicitar una propuesta formal para el servicio corporativo de "${srv.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Solicitar Propuesta para mi Empresa</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metodología de Consultoría - Paleta Luminosa */}
      <section className="bg-slate-50/80 text-slate-900 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
              Rigor Metodológico
            </span>
            <h3 className="text-3xl font-black text-slate-950 tracking-tight">
              Garantizamos adopción real sin generar dependencia
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Nuestro objetivo es que tu equipo adquiera autonomía metodológica en 30 a 60 días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORK_METHOD_STEPS.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all">
                <span className="text-2xl font-black text-emerald-600 block mb-2">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md max-w-3xl mx-auto text-center space-y-4">
            <h4 className="text-xl font-bold text-slate-950">
              ¿Quieres agendar un diagnóstico inicial sin compromiso?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Conversamos 20 minutos por videollamada para revisar tus procesos actuales y estimar el impacto en tiempo y costos.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hola Santiago, me gustaría coordinar una videollamada de diagnóstico para mi organización.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar diagnóstico por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
