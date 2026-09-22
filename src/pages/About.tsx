import React from 'react';
import { 
  GraduationCap, 
  TrendingUp, 
  Cpu, 
  Award, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Linkedin, 
  Youtube, 
  Video, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SANTIAGO_INFO, getWhatsAppUrl } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header & Perfil */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Foto Representativa / Tarjeta */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center relative z-10 space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 mx-auto flex items-center justify-center text-white text-4xl font-black shadow-xl shadow-emerald-950 border-4 border-slate-800">
                  SZ
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">
                    Santiago Zevallos
                  </h1>
                  <p className="text-sm font-semibold text-emerald-400 mt-1">
                    Economista PUCP • Magíster en Finanzas
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Docente Universitario & Especialista en IA Aplicada
                  </p>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={SANTIAGO_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={SANTIAGO_INFO.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={SANTIAGO_INFO.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="TikTok"
                  >
                    <Video className="w-4 h-4" />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    title="WhatsApp Directo"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <span>Lima, Perú • Docencia Nacional e Internacional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biografía y Enfoque */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              <span>Trayectoria & Filosofía</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              "No enseño IA desde la programación, sino desde el uso real y la toma de decisiones."
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Soy economista graduado de la <strong>Pontificia Universidad Católica del Perú (PUCP)</strong>, con una <strong>Maestría en Mercados Financieros</strong> y actualmente cursando estudios de <strong>Maestría en Inteligencia Artificial</strong>.
              </p>
              <p>
                A lo largo de más de 10 años de experiencia profesional en el sector público y privado, he liderado análisis económicos, evaluación de proyectos de inversión, gestión pública y análisis cuantitativo de datos.
              </p>
              <p>
                Cuando la Inteligencia Artificial generativa irrumpió en el mercado, noté una brecha gigantesca: la mayoría de capacitaciones se centraban en trucos superficiales de "prompts mágicos" o en tecnicismos de código incomprensibles para abogados, directores, funcionarios y analistas.
              </p>
              <p className="font-semibold text-slate-900">
                Mi enfoque es simple y riguroso: que la IA te ayude a trabajar mejor, ahorrar horas de desgaste mecánico y tomar decisiones fundamentadas, sin obligarte a aprender a programar.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hola Santiago, leí tu perfil y me gustaría coordinar una conversación.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar directamente por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Credenciales en Detalle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
            Respaldo Académico y Profesional
          </span>
          <h3 className="text-3xl font-extrabold text-slate-900">
            Formación Continua y Experiencia
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SANTIAGO_INFO.credentials.map((cred, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {cred.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {cred.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilares Pedagógicos */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Los 3 Principios de la Metodología
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3 text-sm">
                01
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Aprender Haciendo</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cada sesión se aplica sobre los documentos y tareas reales de los participantes. No hay ejercicios ficticios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3 text-sm">
                02
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Sin Código</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Herramientas intuitivas, lenguaje natural estructurado y flujos mantenibles por cualquier persona.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center mb-3 text-sm">
                03
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Con Método, No Suerte</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Estructuras repetibles que garantizan consistencia en los entregables y eliminan la improvisación.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
