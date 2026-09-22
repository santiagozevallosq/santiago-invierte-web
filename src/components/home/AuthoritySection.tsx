import React from 'react';
import { GraduationCap, TrendingUp, Award, BookOpen, Users, Cpu, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';
import { Link } from 'react-router-dom';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial con Numeración de Autor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">
              <span className="font-bold">02 // PERFIL & CÁTEDRA</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">SANTIAGO ZEVALLOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Economía, finanzas y criterio.{' '}
              <span className="text-slate-500 font-normal">La IA solo aporta la velocidad.</span>
            </h2>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-mono text-slate-600 block">
              RESPALDO ACADÉMICO PUCP
            </span>
            <span className="text-xs font-bold text-slate-900">
              Lima, Perú • Docencia Nacional e Internacional
            </span>
          </div>
        </div>

        {/* Retícula Asimétrica: Dossier del Consultor + Matriz Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Dossier y Filosofía de Cátedra */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Ficha Editorial de Autor */}
            <div className="bg-slate-50/90 rounded-2xl p-8 border border-slate-200 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                    Santiago Zevallos
                  </h3>
                  <p className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mt-1">
                    Economista PUCP • Magíster en Finanzas
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Docente Universitario & Consultor en Productividad con IA
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-bold text-base flex items-center justify-center shadow-xs">
                  SZ
                </div>
              </div>

              {/* Cita de Cátedra en Formato Editorial */}
              <div className="relative pt-4 border-t border-slate-200">
                <span className="text-4xl font-serif text-emerald-600 leading-none absolute -top-1 left-0 select-none">
                  “
                </span>
                <p className="pl-6 text-sm text-slate-700 leading-relaxed italic font-serif">
                  El 90% de las personas usa la IA como una máquina de escribir costosa para redactar correos más largos que nadie leerá. 
                  Nuestro objetivo es que la uses como un analista financiero junior: para auditar números, contrastar cláusulas y salir de la oficina a tu hora.
                </p>
                <span className="block text-right text-xs font-mono text-slate-600 mt-2">
                  — Santiago Zevallos, M.Fin.
                </span>
              </div>

              {/* Acciones del Dossier */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/sobre-mi"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition-colors"
                >
                  Ver trayectoria académica
                </Link>
                <a
                  href={getWhatsAppUrl("Hola Santiago, me gustaría agendar una reunión de diagnóstico para mi organización.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Diagnóstico Directo</span>
                </a>
              </div>
            </div>

            {/* Cifra de Oficio */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-3xl font-black text-slate-950 block">+10</span>
                <span className="text-xs font-mono text-slate-500 uppercase">Años de Ejercicio Profesional</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-3xl font-black text-emerald-800 block">100%</span>
                <span className="text-xs font-mono text-slate-500 uppercase">Casos Reales Sin Código</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Matriz Editorial de Credenciales (Líneas finas, no tarjetas) */}
          <div className="lg:col-span-7 space-y-6">
            
            <p className="text-base text-slate-700 leading-relaxed">
              La formación impartida no surge de tutoriales genéricos de internet, sino de la confluencia entre el 
              <strong> rigor analítico de la economía y las finanzas cuantitativas</strong> con las capacidades de los modelos de lenguaje de última generación.
            </p>

            <div className="divide-y divide-slate-200 border-y border-slate-200 mt-6">
              
              <div className="py-4 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-400 mt-1 shrink-0">01.</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Licenciado en Economía — Pontificia Universidad Católica del Perú (PUCP)
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Sólida formación cuantitativa en análisis econométrico, teoría de incentivos y modelamiento de escenarios bajo incertidumbre.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-400 mt-1 shrink-0">02.</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Magíster en Finanzas (M.Fin.)
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Especialización en mercados de capitales, estructuración de deuda, análisis de estados financieros y valoración de proyectos de inversión.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-400 mt-1 shrink-0">03.</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Estudios de Maestría en Inteligencia Artificial
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Especialización técnica continua en arquitectura de Large Language Models (LLMs), prompting estructurado y mitigación de alucinaciones documentales.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-400 mt-1 shrink-0">04.</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Docente Universitario de Pregrado y Posgrado
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Cátedra activa en facultades de ciencias económicas y empresariales, con metodología pedagógica orientada a resolver casos reales de los alumnos.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="text-xs font-mono font-bold text-slate-400 mt-1 shrink-0">05.</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">
                    Consultor de Productividad & Automatización sin Código
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Acompañamiento a firmas legales, áreas de administración, gerencias financieras y entidades públicas en la adopción segura de IA.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl("Hola Santiago, me gustaría coordinar una videollamada para mi organización.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-800 transition-colors"
              >
                <span>Solicitar credenciales completas o coordinar entrevista</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
