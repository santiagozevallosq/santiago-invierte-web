import React from 'react';
import {
  Lightbulb,
  Linkedin,
  MessageCircle,
  Video,
  Youtube,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { SANTIAGO_INFO, getWhatsAppUrl } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-emerald-100 rounded-[2rem] rotate-2" />
              <img
                src="/santiago-invierte-web/santiago-zevallos-home.jpg"
                alt="Santiago Zevallos"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-3xl shadow-xl border border-slate-200"
              />
              <div className="relative -mt-6 mx-5 bg-slate-950 text-white rounded-2xl p-5 shadow-xl">
                <p className="text-sm font-bold">Santiago Zevallos</p>
                <p className="text-xs text-emerald-400 mt-1">IA aplicada a productividad, análisis y toma de decisiones.</p>
                <div className="flex gap-2 mt-4">
                  <a href={SANTIAGO_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700" title="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                  <a href={SANTIAGO_INFO.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700" title="YouTube"><Youtube className="w-4 h-4" /></a>
                  <a href={SANTIAGO_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700" title="TikTok"><Video className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-5">
              Sobre mí
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
              Hola, soy Santiago.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug mb-7">
              Economista, docente y consultor. Ayudo a profesionales y organizaciones a convertir la Inteligencia Artificial en una herramienta real de trabajo.
            </p>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Mi formación viene de la economía, las finanzas y el análisis de datos. Durante más de diez años he trabajado entre la docencia, la consultoría y el sector público, siempre alrededor de un mismo problema: <strong className="text-slate-900">cómo usar mejor la información para tomar mejores decisiones.</strong>
              </p>
              <p>
                Hoy incorporo la Inteligencia Artificial a ese mismo propósito. No la enseño desde la programación ni desde los “prompts mágicos”, sino desde situaciones reales: analizar un documento, preparar un informe, explorar datos, crear una presentación, diseñar un dashboard, automatizar una tarea o transformar una idea en un producto digital.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                Trayectoria
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
                <span><strong className="text-slate-950">Economista</strong></span>
                <span>Estudios de maestría en IA</span>
                <span>+10 años de experiencia</span>
                <span>Docente universitario</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Hola Santiago, leí tu perfil y me gustaría conversar sobre cómo aplicar IA en mi trabajo u organización.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Conversemos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-20 mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Mi historia con la IA</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-2 mb-5">De analizar información a enseñar nuevas formas de trabajar</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Mi acercamiento a la IA surgió de una pregunta muy práctica: <strong className="text-slate-900">¿cómo puedo hacer en menos tiempo y con mayor calidad el trabajo que ya realizo como economista, consultor y docente?</strong>
              </p>
              <p>
                Empecé utilizándola para investigar, analizar documentos, trabajar con datos, preparar clases y desarrollar materiales. Después comencé a convertir esos aprendizajes en cursos, talleres y soluciones para otros profesionales.
              </p>
              <p>
                Esa experiencia define mi enfoque actual: experimentar primero, entender qué funciona en una tarea real y después convertirlo en un método sencillo que otras personas puedan aplicar.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 sm:p-12">
          <div className="flex items-center gap-3 text-emerald-800 mb-4">
            <Lightbulb className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider">¿Por qué Santiago Invierte?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-950 mb-5">Un espacio para aprender, experimentar y aplicar.</h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mb-7">
            Santiago Invierte es mi espacio para compartir herramientas, cursos y experimentos sobre IA aplicada. Aquí encontrarás recursos para utilizar Inteligencia Artificial en productividad, análisis, creación de contenidos, negocios y toma de decisiones, explicados desde una perspectiva práctica y para personas que no necesitan saber programar.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-slate-800 mb-8">
            {['Cursos', 'Recursos prácticos', 'Herramientas', 'Consultoría'].map(x => (
              <span key={x} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-emerald-200">
                <BookOpen className="w-4 h-4 text-emerald-700" /> {x}
              </span>
            ))}
          </div>
          <a
            href={getWhatsAppUrl('Hola Santiago, quisiera conversar sobre cómo aplicar IA en mi trabajo u organización.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Hablemos de tu caso
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
