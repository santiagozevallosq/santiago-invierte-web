import React, { useState } from 'react';
import { COURSES, Course, getWhatsAppUrl } from '../data/siteData';
import { CheckCircle2, Clock, Users, BookOpen, MessageCircle, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Cursos' },
    { id: 'profesionales', label: 'Profesionales' },
    { id: 'negocios', label: 'Negocios & Ventas' },
    { id: 'publico', label: 'Gestión Pública' },
    { id: 'administracion', label: 'Administradores' },
    { id: 'inmobiliario', label: 'Inmobiliario' }
  ];

  const filteredCourses = selectedCategory === 'todos' 
    ? COURSES 
    : COURSES.filter(c => c.category === selectedCategory);

  const faqs = [
    {
      q: "¿Necesito saber de programación o tener conocimientos técnicos?",
      a: "No. Absolutamente ningún curso requiere programar. Todas las sesiones se desarrollan con herramientas accesibles de lenguaje natural, estructuración de instrucciones y aplicaciones no-code directas."
    },
    {
      q: "¿Cómo son las clases y cuál es la modalidad?",
      a: "Las clases son 100% prácticas y en vivo (con grabaciones disponibles). Se trabaja directamente sobre documentos, archivos y casos reales que los mismos alumnos traen al taller."
    },
    {
      q: "¿Se entregan materiales y plantillas?",
      a: "Sí. Cada participante recibe acceso a la biblioteca de prompts estructurados, grabaciones de las sesiones y guías paso a paso para uso continuo sin depender del docente."
    },
    {
      q: "¿Se pueden tomar los cursos de manera corporativa para mi equipo?",
      a: "Sí, todos los programas pueden adaptarse como talleres in-company exclusivos para tu empresa, adaptando los ejercicios a la documentación confidencial de tu organización."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Formación Práctica en Vivo</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Cursos y Talleres de IA Aplicada
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Aprende a integrar la inteligencia artificial a tu trabajo cotidiano con método, rigor y enfoque en resultados tangibles.
        </p>

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
                      Convocatoria
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">
                      Próxima Fecha & Inscripción
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Grupos reducidos para garantizar interacción y corrección de casos en vivo.
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Modalidad:</span>
                        <strong className="text-slate-900">Online en vivo + Grabaciones</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Docente:</span>
                        <strong className="text-slate-900">Santiago Zevallos (PUCP)</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Materiales:</span>
                        <strong className="text-slate-900">Acceso vitalicio a prompts</strong>
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
