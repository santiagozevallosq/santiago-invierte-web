import React, { useState } from 'react';
import { MessageCircle, MapPin, Send, Linkedin, Youtube, Video, Clock } from 'lucide-react';
import { SANTIAGO_INFO, getWhatsAppUrl } from '../data/siteData';

export const Contact: React.FC = () => {
  const [interest, setInterest] = useState<string>('Cursos y talleres');
  const [name, setName] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const compiledMessage = `Hola Santiago, mi nombre es ${name || 'un visitante de tu web'}${company ? ` y trabajo en ${company}` : ''}.
Estoy interesado en: ${interest}.
${message ? `Consulta: ${message}` : 'Me gustaría recibir más información.'}`;

    window.open(getWhatsAppUrl(compiledMessage), '_blank');
  };

  return (
    <div className="pt-28 pb-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Contacto</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Conversemos
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Si quieres conocer mis cursos, organizar una capacitación o explorar cómo aplicar IA en tu trabajo u organización, escríbeme.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gradient-to-br from-emerald-950 to-slate-950 rounded-3xl p-7 text-white border border-emerald-500/30 shadow-xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-3">
                Canal directo
              </span>

              <h2 className="text-2xl font-bold mb-3">
                Escríbeme por WhatsApp
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Para consultas sobre cursos, capacitaciones, charlas o proyectos de IA aplicada.
              </p>

              <a
                href={getWhatsAppUrl('Hola Santiago, vi tu página web y quisiera hacerte una consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+51 937 334 227</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Lima, Perú</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Atención virtual para otros países.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Horario de atención</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Lunes a sábado · Hora de Perú</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    También puedes encontrarme en
                  </p>

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
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Consulta rápida
              </span>

              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Cuéntame qué necesitas
              </h2>

              <p className="text-sm text-slate-600 mb-6">
                Completa estos datos y se abrirá WhatsApp con tu consulta lista para enviar.
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    ¿En qué estás interesado?
                  </label>

                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="Cursos y talleres">Cursos y talleres</option>
                    <option value="Capacitación para organizaciones">Capacitación para organizaciones</option>
                    <option value="Charlas y conferencias">Charlas y conferencias</option>
                    <option value="Consultoría y proyectos con IA">Consultoría y proyectos con IA</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Tu nombre
                    </label>

                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Carlos"
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Empresa o cargo (opcional)
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
                    Mensaje
                  </label>

                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntame brevemente en qué te puedo ayudar."
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
