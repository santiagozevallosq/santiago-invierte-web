import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  FileText,
  Globe2,
  MessageCircle,
  Presentation,
  Sparkles,
  Users
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

type Audience = 'profesional' | 'emprendedor' | 'equipo' | 'publico';
type Level = 1 | 2 | 3;
type OpportunityKey = 'documentos' | 'datos' | 'comunicacion' | 'digital' | 'procesos';

const audienceOptions: Array<{ id: Audience; label: string; icon: React.ElementType }> = [
  { id: 'profesional', label: 'Profesional', icon: Briefcase },
  { id: 'emprendedor', label: 'Emprendedor', icon: Globe2 },
  { id: 'equipo', label: 'Empresa / equipo', icon: Users },
  { id: 'publico', label: 'Sector público', icon: Building2 }
];

const opportunityMeta: Record<OpportunityKey, {
  title: string;
  question: string;
  examples: string;
  icon: React.ElementType;
  recommendation: string;
}> = {
  documentos: {
    title: 'Documentos e información',
    question: '¿Con qué frecuencia lees, resumes, comparas o redactas documentos?',
    examples: 'PDF, informes, normativa, propuestas, actas o transcripciones.',
    icon: FileText,
    recommendation: 'Empieza usando IA para resumir, comparar y estructurar documentos. Luego convierte ese proceso en una plantilla o asistente reutilizable.'
  },
  datos: {
    title: 'Datos y análisis',
    question: '¿Con qué frecuencia trabajas con Excel, indicadores, reportes o bases de datos?',
    examples: 'KPIs, dashboards, cruces de información, tendencias e insights.',
    icon: BarChart3,
    recommendation: 'Empieza utilizando IA para explorar bases, identificar KPIs y construir análisis o dashboards antes de avanzar hacia automatizaciones más complejas.'
  },
  comunicacion: {
    title: 'Comunicación y presentaciones',
    question: '¿Con qué frecuencia preparas presentaciones, correos, informes o contenido?',
    examples: 'Slides, storytelling, redacción ejecutiva y piezas de comunicación.',
    icon: Presentation,
    recommendation: 'Empieza estructurando mensajes, presentaciones y documentos con IA, usando un flujo que pase de información bruta a un entregable claro y verificable.'
  },
  digital: {
    title: 'Creación digital',
    question: '¿Necesitas crear páginas web, dashboards, imágenes o prototipos?',
    examples: 'Webs, visualizaciones, flyers, simuladores y prototipos sin código.',
    icon: Globe2,
    recommendation: 'Empieza convirtiendo información de tu negocio o proyecto en un brief estructurado y úsalo para construir una web, dashboard o prototipo sin programar.'
  },
  procesos: {
    title: 'Procesos y asistentes',
    question: '¿Tienes tareas que repites con frecuencia y podrían estandarizarse?',
    examples: 'GPTs, Gems, proyectos, flujos, Skills y asistentes especializados.',
    icon: Bot,
    recommendation: 'Empieza identificando una tarea repetitiva, documenta sus pasos y conviértela en un flujo reutilizable antes de delegarla a un asistente o agente.'
  }
};

const levelLabels: Record<Level, string> = {
  1: 'Bajo',
  2: 'Medio',
  3: 'Alto'
};

export const TimeSavingsCalculator: React.FC = () => {
  const [audience, setAudience] = useState<Audience>('profesional');
  const [scores, setScores] = useState<Record<OpportunityKey, Level>>({
    documentos: 2,
    datos: 2,
    comunicacion: 2,
    digital: 1,
    procesos: 1
  });

  const ranking = useMemo(() => {
    return (Object.keys(scores) as OpportunityKey[])
      .map((key) => ({ key, score: scores[key] }))
      .sort((a, b) => b.score - a.score);
  }, [scores]);

  const top = ranking[0];
  const second = ranking[1];
  const third = ranking[2];
  const totalScore = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const opportunityLevel = totalScore >= 13 ? 'MUY ALTA' : totalScore >= 10 ? 'ALTA' : totalScore >= 7 ? 'MEDIA' : 'INICIAL';

  const audienceLabel = audienceOptions.find((item) => item.id === audience)?.label ?? 'Profesional';
  const whatsappMessage =
    'Hola Santiago, hice el diagnóstico de oportunidades con IA de tu web. Mi perfil es ' +
    audienceLabel +
    ' y mi principal oportunidad está en ' +
    opportunityMeta[top.key].title +
    '. Me gustaría conocer cómo empezar a aplicarlo.';

  const updateScore = (key: OpportunityKey, level: Level) => {
    setScores((current) => ({ ...current, [key]: level }));
  };

  return (
    <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Diagnóstico de oportunidades con IA</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
            ¿Dónde puede ayudarte más la Inteligencia Artificial en tu trabajo?
          </h3>

          <p className="text-slate-600 text-sm mt-3">
            Evalúa las tareas que realizas con mayor frecuencia y descubre en qué áreas puedes empezar a aplicar IA de manera práctica, sin programar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-7 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. ¿Cuál describe mejor tu contexto?
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {audienceOptions.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setAudience(id)}
                    className={`px-3 py-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1.5 min-h-[74px] ${
                      audience === id
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/20'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Evalúa tus tareas
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Marca Alto cuando la actividad sea frecuente, importante o te consuma bastante tiempo.
                </p>
              </div>

              <div className="space-y-4">
                {(Object.keys(opportunityMeta) as OpportunityKey[]).map((key) => {
                  const item = opportunityMeta[key];
                  const Icon = item.icon;

                  return (
                    <div key={key} className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                          <p className="text-xs text-slate-700 mt-1 leading-relaxed">{item.question}</p>
                          <p className="text-[11px] text-slate-500 mt-1">{item.examples}</p>

                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {([1, 2, 3] as Level[]).map((level) => (
                              <button
                                key={level}
                                type="button"
                                onClick={() => updateScore(key, level)}
                                className={`py-2 rounded-lg text-xs font-bold transition-all ${
                                  scores[key] === level
                                    ? 'bg-slate-950 text-white'
                                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                {levelLabels[level]}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-200/90 shadow-sm lg:sticky lg:top-28">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Tu diagnóstico
            </div>

            <div className="mt-3">
              <span className="text-xs text-slate-500 uppercase tracking-wider">Oportunidad de uso de IA</span>
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight mt-1">
                {opportunityLevel}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-emerald-200/80">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mayor potencial</span>
              <h4 className="text-xl font-black text-emerald-900 mt-1">
                {opportunityMeta[top.key].title}
              </h4>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-sm gap-4">
                <span className="text-slate-600">Segunda oportunidad</span>
                <span className="font-bold text-slate-950 text-right">{opportunityMeta[second.key].title}</span>
              </div>
              <div className="flex items-center justify-between text-sm gap-4">
                <span className="text-slate-600">Tercera oportunidad</span>
                <span className="font-bold text-slate-950 text-right">{opportunityMeta[third.key].title}</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/80 border border-emerald-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Empieza por aquí
              </span>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                {opportunityMeta[top.key].recommendation}
              </p>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-slate-950 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                Tu siguiente evolución
              </span>
              <p className="text-sm font-bold mt-2 leading-relaxed">
                Problema → Información → IA → Resultado → Sistema reutilizable
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              <Link
                to="/cursos"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm transition-all"
              >
                <span>Ver cursos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar con Santiago</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">
              Este diagnóstico orienta posibles áreas de aplicación según tus respuestas. No estima horas ni porcentajes de ahorro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
