import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, Linkedin, Youtube, Video, Clock } from 'lucide-react';
import { SANTIAGO_INFO, getWhatsAppUrl } from '../data/siteData';

export const Contact: React.FC = () => {
  const [interest, setInterest] = useState<string>('cursos');
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const compiledMessage = `Hola Santiago, mi nombre es ${name || 'un visitante de tu web'}${company ? ` de la empresa/institución ${company}` : ''}.
Estoy interesado en: ${interest}.
Mensaje: ${message || 'Me gustaría recibir información sobre fechas, temarios y tarifas.'}`;

    window.open(getWhatsAppUrl(compiledMessage), '_blank');
  };

  return (
    <div className="pt-28 pb-20">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Hablemos de tus Objetivos con IA
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
          Atención personalizada sin robots ni intermediarios. Conversa directamente con Santiago Zevallos.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Columna Izquierda: Opciones Rápidas y Redes */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="bg-gradient-to-br from-emerald-950 to-slate-950 rounded-3xl p-8 text-white border border-emerald-500/30 shadow-xl space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                Canal más rápido (Respuesta en menos de 2h)
              </span>
              <h3 className="text-2xl font-bold">
                WhatsApp Oficial
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El medio más ágil para confirmar vacantes, solicitar cotizaciones corporativas o agendar una llamada.
              </p>
              
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hola Santiago, vi tu página web y quiero hacerte una consulta directa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+51 937 334 227</span>
                </a>
              </div>
            </div>

            {/* Detalles de Ubicación y Redes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Ubicación</h4>
                  <p className="text-xs text-slate-600">Lima, Perú (Atención remota a todo Latinoamérica y España)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Horario de Atención</h4>
                  <p className="text-xs text-slate-600">Lunes a Sábado: 8:30 am - 7:00 pm (Hora Perú GMT-5)</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                  Canales y Contenido
                </span>
                <div className="flex gap-2">
                  <a
                    href={SANTIAGO_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={SANTIAGO_INFO.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href={SANTIAGO_INFO.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    title="TikTok"
                  >
                    <Video className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Columna Derecha: Asistente Interactivo de Consulta */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Generador de Consulta Rápida
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Prepara tu mensaje para WhatsApp en 1 minuto
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Completa los datos y se abrirá tu WhatsApp con el mensaje estructurado para responderte con precisión.
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    ¿Cuál es tu principal interés?
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="Inscripción en Cursos y Talleres">Cursos y Talleres prácticos para mí</option>
                    <option value="Capacitación In-Company para mi Empresa">Capacitación In-Company para mi equipo</option>
                    <option value="Diagnóstico de Procesos con IA">Diagnóstico de Procesos de mi Organización</option>
                    <option value="Charla o Conferencia Ejecutiva">Charla o Conferencia Ejecutiva / Universitaria</option>
                    <option value="Comunidad y Recursos Gratuitos">Comunidad y Recursos Gratuitos</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Carlos Silva"
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Empresa o Cargo (Opcional)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ej: Gerente de Operaciones"
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Detalles de tu consulta
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos brevemente qué tareas o documentos te gustaría optimizar con IA..."
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por WhatsApp a Santiago Zevallos</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
