import React, { useState } from 'react';
import { COURSES, Course, getWhatsAppUrl } from '../data/siteData';
import { CheckCircle2, Clock, Users, BookOpen, MessageCircle, HelpCircle, FileSearch, Zap, Image, LayoutDashboard, Bot, Workflow } from 'lucide-react';

export const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'profesionales', label: 'Profesionales' },
    { id: 'negocios', label: 'Negocios' },
    { id: 'publico', label: 'Sector público' },
    { id: 'administracion', label: 'Administración' },
    { id: 'inmobiliario', label: 'Inmobiliario' }
  ];

  const filteredCourses = selectedCategory === 'todos' 
    ? COURSES 
    : COURSES.filter(c => c.category === selectedCategory);

  const faqs = [
    { q: "¿Necesito saber programación?", a: "No. Los programas están diseñados para usuarios no técnicos y se trabaja principalmente con lenguaje natural y herramientas accesibles." },
    { q: "¿Cómo se aprende en los cursos?", a: "El enfoque es aprender haciendo: cada tema se lleva a ejercicios, documentos, datos o situaciones similares a las que el participante encuentra en su trabajo o negocio." },
    { q: "¿Los programas tienen siempre la misma duración?", a: "No necesariamente. Algunos son talleres específicos y otros programas más amplios. También pueden adaptarse a las necesidades de una organización." },
    { q: "¿Se pueden realizar capacitaciones para equipos?", a: "Sí. Los contenidos pueden adaptarse a empresas e instituciones incorporando casos y tareas relevantes para el equipo." }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Formación práctica</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Cursos prácticos de Inteligencia Artificial
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Aprende utilizando casos reales y construye herramientas que puedas aplicar inmediatamente en tu trabajo o negocio. No necesitas saber programar.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs font-bold text-slate-700">
          <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">100 % práctico</span>
          <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">Para usuarios no técnicos</span>
          <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">Aprende haciendo</span>
        </div>

        {/* Filtro de Categorías */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Resultados prácticos</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-2">¿Qué puedes aprender a hacer con IA?</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { icon: FileSearch, title: 'Analizar información', text: 'Documentos, datos e investigaciones.' },
            { icon: Zap, title: 'Trabajar más rápido', text: 'Informes, correos y tareas repetitivas.' },
            { icon: Image, title: 'Crear contenido', text: 'Imágenes, flyers y presentaciones.' },
            { icon: LayoutDashboard, title: 'Construir herramientas', text: 'Webs, dashboards y simuladores.' },
            { icon: Bot, title: 'Crear asistentes', text: 'GPTs, Gems y asistentes especializados.' },
            { icon: Workflow, title: 'Automatizar tareas', text: 'Flujos sencillos sin programación.' }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-4 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3"><Icon className="w-4 h-4" /></div>
              <h3 className="text-sm font-bold text-slate-900">{title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lista de Cursos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              id={course.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Columna Principal */}
                <div className="lg:col-span-8 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {course.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {course.duration}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {course.targetAudience}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                      {course.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {course.fullDesc}
                    </p>
                  </div>

                  {/* Competencias Clave */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Habilidades y entregables prácticos:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {course.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Temario / Módulos */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Estructura del programa:
                    </h4>
                    <div className="space-y-2">
                      {course.modules.map((mod, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                          {mod}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Columna Lateral de Acción */}
                <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Información
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">
                      Consulta el programa
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Conoce el contenido, modalidad disponible y próxima edición.
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Modalidad:</span>
                        <strong className="text-slate-900">Consultar</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Docente:</span>
                        <strong className="text-slate-900">Santiago Zevallos (PUCP)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Materiales:</span>
                        <strong className="text-slate-900">Guías y recursos prácticos</strong>
                      </div>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hola Santiago, deseo consultar la próxima fecha y el precio del curso "${course.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dudas Habituales</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Preguntas Frecuentes sobre la Formación
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {faq.q}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
