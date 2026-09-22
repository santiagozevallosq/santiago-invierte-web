import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  FileText,
  BarChart3,
  Globe2,
  Presentation,
  Image as ImageIcon,
  Bot,
  GraduationCap,
  Building2,
  Users,
  Layers3,
  Workflow
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';
import { AuthoritySection } from '../components/home/AuthoritySection';
import { TimeSavingsCalculator } from '../components/interactive/TimeSavingsCalculator';
import { AnalyticalArtifact } from '../components/home/AnalyticalArtifact';

const outcomes = [
  { icon: FileText, title: 'Documentos → Informes', desc: 'Resume, compara y convierte documentos extensos en entregables claros y verificables.' },
  { icon: BarChart3, title: 'Excel → Dashboards', desc: 'Analiza bases de datos, identifica KPIs y conviértelas en visualizaciones útiles para decidir.' },
  { icon: Globe2, title: 'Idea → Página web', desc: 'Ordena la información del negocio, crea un brief y conviértelo en una web funcional sin programar.' },
  { icon: Presentation, title: 'Información → Presentación', desc: 'Sintetiza contenido complejo y transfórmalo en una narrativa visual para clases, reuniones o ventas.' },
  { icon: ImageIcon, title: 'Producto → Contenido', desc: 'Convierte fotos, ideas y mensajes en flyers, piezas visuales y videos para comunicar mejor.' },
  { icon: Bot, title: 'Proceso → Asistente IA', desc: 'Pasa de tareas repetitivas a GPTs, Gems, proyectos y flujos reutilizables con contexto propio.' }
];

const systemLevels = [
  { step: '01', title: 'Prompt', desc: 'Resolver bien una tarea puntual.' },
  { step: '02', title: 'Proyecto / GPT / Gem', desc: 'Dar contexto, reglas y conocimiento a un asistente especializado.' },
  { step: '03', title: 'Flujo / Skill', desc: 'Convertir buenas prácticas en un proceso repetible.' },
  { step: '04', title: 'Agente', desc: 'Delegar tareas completas con mayor autonomía y control.' }
];

export const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-20">

      {/* HERO */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-7">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-mono tracking-wider uppercase">
              <span>IA APLICADA</span>
              <span className="text-slate-300">•</span>
              <span>PRODUCTIVIDAD</span>
              <span className="text-slate-300">•</span>
              <span>NEGOCIOS</span>
              <span className="text-slate-300">•</span>
              <span>SIN CÓDIGO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Convierte la Inteligencia Artificial en{' '}
              <span className="text-emerald-800">resultados reales para tu trabajo y tu negocio.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Aprende a usar IA para analizar información, crear contenido, construir dashboards y páginas web,
              mejorar documentos y automatizar tareas, sin necesidad de programar.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono text-slate-500">
              <span>CASOS REALES Y APLICADOS</span>
              <span>HERRAMIENTAS ACTUALES</span>
              <span>METODOLOGÍA PRÁCTICA</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/cursos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-sm transition-all"
              >
                <span>Ver cursos y talleres</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl("Hola Santiago, me gustaría conocer las opciones de capacitación o implementación de IA para mi organización.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>IA para empresas</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ PUEDES CONSTRUIR */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">01 // RESULTADOS</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              No se trata de aprender herramientas. Se trata de construir resultados.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              La IA cobra valor cuando transforma información, tareas y problemas concretos en entregables que puedes usar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-950">{title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS / DEMOSTRACIONES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">02 // CASOS APLICADOS</div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            De una tarea cotidiana a un resultado concreto con IA
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Ejemplos de flujos que se trabajan en clases, demostraciones y proyectos prácticos.
          </p>
        </div>

        <AnalyticalArtifact />
      </section>

      {/* AUTORIDAD */}
      <AuthoritySection />

      {/* METODOLOGÍA */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">04 // METODOLOGÍA</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Problema → Información → IA → Resultado → Sistema reutilizable
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              El objetivo no es obtener una respuesta bonita una sola vez, sino construir una forma de trabajo que puedas repetir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              ['01', 'Problema real', 'Partimos de una tarea que hoy consume tiempo o genera fricción.'],
              ['02', 'Información', 'Ordenamos documentos, datos, contexto y restricciones.'],
              ['03', 'IA', 'Elegimos la herramienta y diseñamos una instrucción adecuada.'],
              ['04', 'Resultado', 'Construimos un entregable útil: informe, dashboard, web, contenido o análisis.'],
              ['05', 'Sistema', 'Documentamos el flujo para volverlo reutilizable y mejorarlo con el tiempo.']
            ].map(([n, title, desc]) => (
              <div key={n} className="bg-white p-5 rounded-2xl border border-slate-200">
                <span className="text-2xl font-black text-emerald-700 block">{n}</span>
                <h3 className="font-bold text-slate-950 mt-2">{title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMPTS A SISTEMAS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">05 // EVOLUCIÓN</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              De prompts aislados a sistemas de trabajo con IA
            </h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              A medida que avanzas, el valor deja de estar en escribir un mejor prompt y pasa a diseñar contexto,
              procesos y asistentes especializados.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {systemLevels.map((item) => (
              <div key={item.step} className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  {item.step === '04' ? <Bot className="w-5 h-5 text-emerald-700" /> : <Layers3 className="w-5 h-5 text-emerald-700" />}
                  <span className="text-xs font-mono font-bold text-slate-500">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO PUEDO AYUDARTE */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">06 // FORMAS DE TRABAJO</div>
            <h2 className="text-3xl sm:text-4xl font-black">¿Cómo puedo ayudarte?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900">
              <GraduationCap className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold">Aprende conmigo</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Cursos y talleres prácticos para profesionales, emprendedores y especialistas que quieren incorporar IA a su trabajo.
              </p>
              <Link to="/cursos" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-emerald-400">
                Ver formación <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900">
              <Building2 className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold">Capacita a tu equipo</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Programas in-company adaptados a tareas, documentos y necesidades reales de empresas e instituciones.
              </p>
              <Link to="/servicios" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-emerald-400">
                Ver servicios <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-7 rounded-2xl border border-slate-800 bg-slate-900">
              <Workflow className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold">Implementa IA</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Diseña asistentes, flujos y soluciones sin código para tareas concretas de análisis, comunicación y productividad.
              </p>
              <a
                href={getWhatsAppUrl("Hola Santiago, quiero conversar sobre una solución o flujo de IA para mi organización.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-emerald-400"
              >
                Conversar por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs font-mono tracking-widest text-emerald-800 uppercase mb-2">07 // HERRAMIENTA INTERACTIVA</div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            ¿Cuánto tiempo podrías recuperar utilizando IA?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Estima el costo de las horas que hoy dedicas a lectura, consolidación de información y redacción repetitiva.
          </p>
        </div>
        <TimeSavingsCalculator />
      </section>

      {/* COMUNIDAD */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>IA PARA TODOS • COMUNIDAD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black mt-5">
            Aprende, prueba y comparte nuevas formas de trabajar con IA.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mt-4">
            Únete a la comunidad IA para Todos y recibe casos prácticos, herramientas, novedades y recursos explicados sin tecnicismos.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hola Santiago, quiero unirme a la comunidad IA para Todos.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Unirme a IA para Todos</span>
            </a>
            <Link
              to="/recursos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700"
            >
              Explorar recursos gratuitos
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
