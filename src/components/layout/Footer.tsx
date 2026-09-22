import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Linkedin, Video, Youtube, Mail, ArrowUpRight, GraduationCap, ShieldCheck } from 'lucide-react';
import { SANTIAGO_INFO, getWhatsAppUrl } from '../../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Col 1 & 2: Identidad y Autoridad */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-950/40">
                SI
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Santiago Invierte
                </span>
                <p className="text-xs text-emerald-400 font-medium">
                  IA aplicada a productividad y decisiones
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Formación práctica, talleres y consultoría para profesionales, directivos e instituciones. 
              Enseñamos a sistematizar tareas y tomar mejores decisiones con IA generativa, sin necesidad de programar.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Por <strong>Santiago Zevallos</strong>: Economista PUCP • Magíster en Finanzas • Docente Universitario.
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SANTIAGO_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SANTIAGO_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SANTIAGO_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                title="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SANTIAGO_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                title="Correo Electrónico"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Cursos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Cursos Especializados
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/cursos" className="text-slate-400 hover:text-white transition-colors">
                  IA para Finanzas y Modelamiento
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-slate-400 hover:text-white transition-colors">
                  IA para Abogados y Contratos
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-slate-400 hover:text-white transition-colors">
                  IA para Gestión Pública
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-slate-400 hover:text-white transition-colors">
                  Automatizaciones sin Código
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1">
                  <span>Ver todos los cursos</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Soluciones */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Para Organizaciones
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">
                  Capacitación In-House
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">
                  Auditoría de Procesos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">
                  Implementación de Asistentes
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-slate-400 hover:text-white transition-colors">
                  Conferencias Ejecutivas
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Hola Santiago, me gustaría solicitar una propuesta formal para mi empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Solicitar reunión</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Recursos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Recursos & Enlaces
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/recursos" className="text-slate-400 hover:text-white transition-colors">
                  Plantillas de Prompts
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-slate-400 hover:text-white transition-colors">
                  Guías y Manuales en PDF
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-slate-400 hover:text-white transition-colors">
                  Credenciales de Santiago
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-400 hover:text-white transition-colors">
                  Canal de Contacto
                </Link>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Hola Santiago, me gustaría unirme a la comunidad de WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Comunidad de WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Santiago Invierte. Todos los derechos reservados. Lima, Perú.</p>
          <div className="flex items-center gap-6">
            <span>Enfoque Metodológico • Cero Código</span>
            <span>Respaldo PUCP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
