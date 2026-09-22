import React from 'react';
import { MessageCircle, ArrowRight, GraduationCap, BookOpen, Briefcase, Cpu } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';
import { Link } from 'react-router-dom';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5">
            <div className="h-full min-h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="/santiago-invierte-web/santiago-zevallos-home.jpg"
                alt="Santiago Zevallos"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">
              02 // QUIÉN ESTÁ DETRÁS
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl">
              IA explicada desde el trabajo real, no desde la programación.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-3xl">
              Soy Santiago Zevallos, economista, docente universitario y consultor. Mi enfoque combina análisis,
              enseñanza y uso práctico de Inteligencia Artificial para ayudar a profesionales y organizaciones
              a trabajar mejor, producir mejores entregables y tomar decisiones con más información.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <GraduationCap className="w-5 h-5 text-emerald-700 mb-3" />
                <h3 className="font-bold text-slate-950">Economista</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Base analítica para interpretar datos, evaluar alternativas y estructurar problemas complejos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <BookOpen className="w-5 h-5 text-emerald-700 mb-3" />
                <h3 className="font-bold text-slate-950">Docente universitario</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Metodología orientada a explicar conceptos complejos de forma simple y aplicarlos mediante casos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Briefcase className="w-5 h-5 text-emerald-700 mb-3" />
                <h3 className="font-bold text-slate-950">Experiencia pública y privada</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Más de 10 años trabajando con análisis, proyectos, gestión, consultoría y toma de decisiones.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Cpu className="w-5 h-5 text-emerald-700 mb-3" />
                <h3 className="font-bold text-slate-950">IA aplicada y sin código</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Uso práctico de ChatGPT, Gemini, Claude y herramientas especializadas para resolver tareas reales.
                </p>
              </div>
            </div>

            <div className="mt-5 p-5 rounded-2xl border border-emerald-200 bg-emerald-50/60">
              <p className="text-sm text-emerald-950 leading-relaxed">
                <strong>Principio de trabajo:</strong> la herramienta cambia; la capacidad de identificar un problema,
                estructurar información, verificar resultados y convertirlos en un proceso reutilizable es lo que permanece.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/sobre-mi"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-bold"
              >
                Conocer mi trayectoria
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl("Hola Santiago, vi tu página y me gustaría conversar sobre un curso, taller o proyecto de IA aplicada.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                Conversar por WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
