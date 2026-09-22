import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  GraduationCap, 
  Building2, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';
import { AuthoritySection } from '../components/home/AuthoritySection';
import { TimeSavingsCalculator } from '../components/interactive/TimeSavingsCalculator';
import { AnalyticalArtifact } from '../components/home/AnalyticalArtifact';

export const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      {/* 1. HERO SECTION EDITORIAL (SIN CLICHÉS DE IA) */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Sello Editorial en lugar del pill badge pulsante */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-mono tracking-wider uppercase">
              <span>MÉTODO ANALÍTICO APLICADO</span>
              <span className="text-slate-300">•</span>
              <span>ECONOMÍA & FINANZAS PUCP</span>
              <span className="text-slate-300">•</span>
              <span>CERO CÓDIGO</span>
            </div>

            {/* Titular Principal de Autor */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Deja de jugar con prompts improvisados.{' '}
              <span className="text-emerald-800 underline decoration-emerald-300 decoration-wavy decoration-2">
                Aprende a auditar documentos, modelar datos y ahorrar horas con rigor.
              </span>
            </h1>

            {/* Subtítulo con opinión y claridad */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Formación ejecutiva y consultoría para profesionales, despachos y gerencias que no programan. 
              Enfoque metodológico guiado por un Economista y Magíster en Finanzas.
            </p>

            {/* Acciones Principales */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/cursos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-sm hover:translate-y-[-1px] transition-all"
              >
                <span>Ver los 5 Programas de Formación</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl("Hola Santiago, me gustaría solicitar una reunión de diagnóstico para mi organización.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-sm hover:translate-y-[-1px] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>IA para Organizaciones</span>
              </a>
            </div>

            {/* Marcadores de rigor en lugar de checks verdes clónicos */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">— 01.</span>
                <span>Sobre tus expedientes y documentos reales</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">— 02.</span>
                <span>Sin tecnicismos de programación</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">— 03.</span>
                <span>Respaldo y cátedra PUCP</span>
              </div>
            </div>

          </div>

          {/* ARTEFACTO VISUAL TANGIBLE (HOJA DE TRABAJO ANALÍTICA) */}
          <AnalyticalArtifact />

        </div>
      </section>

      {/* 2. SECCIÓN DE AUTORIDAD: DOSSIER ACADÉMICO SANTIAGO ZEVALLOS */}
      <AuthoritySection />

      {/* 3. SIMULADOR DE IMPACTO HORARIO */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mb-10">
          <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">
            <span>03 // SIMULADOR FINANCIERO DE PRODUCTIVIDAD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Auditoría de Tiempo Recuperable
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
            Calcula el costo de oportunidad de las horas manuales que hoy pierdes en lectura, consolidación de datos y redacción rutinaria.
          </p>
        </div>

        <TimeSavingsCalculator />
      </section>

      {/* 4. MODALIDADES DE TRABAJO (HUB EDITORIAL) */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">
              <span>04 // MODALIDADES DE INTERVENCIÓN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              ¿Cómo trabajar con Santiago Invierte?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Dos alternativas claras según el alcance: capacitación individual intensiva o consultoría institucional in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Modalidad 1: Profesionales */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:border-slate-400 transition-all group">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-600 uppercase">
                    VÍA 01 // INDIVIDUAL & GRUPOS ABIERTOS
                  </span>
                  <GraduationCap className="w-5 h-5 text-emerald-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-950 group-hover:text-emerald-800 transition-colors">
                    Para Profesionales y Especialistas
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Talleres intensivos diseñados para abogados, economistas, contadores y consultores independientes que necesitan automatizar tareas analíticas sin programar una sola línea de código.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-sans">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-emerald-800 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>5 programas especializados:</strong> Finanzas, Legal, Gestión Pública, Contratos y Minutas.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-emerald-800 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Casos de estudio propios:</strong> Traes los documentos de tu oficina a clase.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-emerald-800 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Biblioteca de plantillas:</strong> Prompts auditados y certificados por Santiago Zevallos.</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/cursos"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Explorar Catálogo de Cursos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl("Hola Santiago, me gustaría recibir el calendario de los próximos cursos para profesionales.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Consultar Convocatorias</span>
                </a>
              </div>
            </div>

            {/* Modalidad 2: Organizaciones */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:border-slate-400 transition-all group">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs font-mono font-bold text-slate-600 uppercase">
                    VÍA 02 // EMPRESAS & SECTOR PÚBLICO
                  </span>
                  <Building2 className="w-5 h-5 text-slate-700" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-950 group-hover:text-slate-800 transition-colors">
                    Para Empresas e Instituciones
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Diagnóstico operativo, diseño de protocolos de seguridad y programas cerrados in-house para elevar la productividad de equipos directivos sin poner en riesgo la confidencialidad.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-sans">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-slate-900 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Auditoría de cuellos de botella:</strong> Mapeo de flujos repetitivos por gerencia.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-slate-900 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Gobernanza y confidencialidad:</strong> Protocolos para evitar fugas de datos sensibles.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-slate-900 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Transferencia en 30 a 60 días:</strong> Autonomía de tu personal sin generar dependencia.</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/servicios"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Ver Servicios Institucionales</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl("Hola Santiago, me gustaría solicitar una videollamada de diagnóstico para mi empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Reunión de Diagnóstico</span>
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center text-xs font-mono text-slate-500">
            <span>¿Buscas material de consulta libre? </span>
            <Link to="/recursos" className="font-bold text-emerald-800 hover:underline">
              Explora las guías metodológicas y plantillas en PDF ➔
            </Link>
          </div>

        </div>
      </section>

      {/* 5. CIERRE EDITORIAL: COMUNIDAD DE PRÁCTICA */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>COMUNIDAD PROFESIONAL • ACCESO LIBRE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Aprender IA no es coleccionar herramientas, es aprender a trabajar con método.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Súmate a nuestra comunidad de profesionales en WhatsApp donde compartimos desgloses de casos reales, análisis de estados financieros y novedades sin tecnicismos.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl("Hola Santiago, me gustaría unirme gratis a la comunidad de WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 text-slate-950" />
                <span>Unirme a la Comunidad de WhatsApp</span>
              </a>

              <Link
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-sm border border-slate-700 transition-colors"
              >
                <span>Consultar por asesoría privada</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
