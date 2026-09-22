export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'profesionales' | 'negocios' | 'publico' | 'inmobiliario' | 'administracion';
  tag: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  targetAudience: string;
  skills: string[];
  modules: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  prompt: string;
  tags: string[];
}

export const SANTIAGO_INFO = {
  name: "Santiago Zevallos",
  brand: "Santiago Invierte",
  title: "Economista PUCP • Especialista en IA Aplicada a Productividad y Decisiones",
  phone: "+51 937 334 227",
  phoneRaw: "51937334227",
  whatsappBase: "https://wa.me/51937334227",
  linkedin: "https://www.linkedin.com/in/santiago-zevallos-b6a29b44/",
  tiktok: "https://www.tiktok.com/@santiagoinvierte",
  youtube: "https://www.youtube.com/@santiago.invierte",
  email: "santiago.zevallosq@gmail.com",
  credentials: [
    {
      title: "Economista por la PUCP",
      detail: "Licenciado en Economía por la Pontificia Universidad Católica del Perú.",
      icon: "GraduationCap"
    },
    {
      title: "Magíster en Mercados Financieros",
      detail: "Formación de posgrado especializada en análisis financiero y de inversión.",
      icon: "TrendingUp"
    },
    {
      title: "Estudios de Maestría en IA",
      detail: "Formación de posgrado en curso orientada al rigor y aplicación práctica de la IA.",
      icon: "Cpu"
    },
    {
      title: "+10 Años de Experiencia",
      detail: "Trayectoria en el sector público y privado: análisis económico, proyectos y gestión.",
      icon: "Award"
    },
    {
      title: "Docente Universitario",
      detail: "Enseñanza en pregrado y posgrado con metodología aplicada y resolución de casos reales.",
      icon: "BookOpen"
    },
    {
      title: "Consultor Ejecutivo",
      detail: "Acompañamiento a empresas e instituciones en optimización de flujos y toma de decisiones.",
      icon: "Users"
    }
  ]
};

export function getWhatsAppUrl(message?: string): string {
  const defaultText = "Hola Santiago, vi tu página web y me gustaría conocer más sobre tus cursos y servicios de Inteligencia Artificial aplicada.";
  const text = message ? message : defaultText;
  return `https://wa.me/51937334227?text=${encodeURIComponent(text)}`;
}

export const COURSES: Course[] = [
  {
    id: "ia-profesionales",
    slug: "ia-para-profesionales",
    title: "IA para Profesionales",
    category: "profesionales",
    tag: "Programa principal",
    shortDesc: "Incorpora la IA a tareas reales de oficina, análisis y comunicación sin necesidad de programar.",
    fullDesc: "Un programa práctico para profesionales que quieren utilizar la IA como asistente de trabajo: investigar, analizar documentos, redactar mejor, trabajar con datos, crear presentaciones y construir flujos reutilizables.",
    duration: "Programa práctico · 15–20 horas",
    targetAudience: "Profesionales y equipos no técnicos",
    skills: [
      "Analizar y resumir documentos extensos",
      "Redactar informes, correos y propuestas con mayor rapidez",
      "Trabajar con Excel, datos e información para obtener insights",
      "Crear presentaciones, asistentes y flujos de productividad"
    ],
    modules: [
      "Fundamentos de IA generativa y uso profesional",
      "Análisis y gestión de información",
      "Informes, redacción y comunicación profesional",
      "Datos, dashboards y apoyo a la toma de decisiones",
      "Automatización básica y asistentes personalizados"
    ],
    featured: true
  },
  {
    id: "ia-negocios",
    slug: "ia-para-negocios",
    title: "IA para Negocios",
    category: "negocios",
    tag: "Aprende construyendo",
    shortDesc: "Usa IA para crear contenido, analizar información y desarrollar herramientas digitales para tu negocio.",
    fullDesc: "Diseñado para emprendedores y profesionales que quieren pasar de usar un chatbot a construir resultados concretos: piezas visuales, contenido, páginas web, dashboards, asistentes y automatizaciones sencillas.",
    duration: "Programa práctico por módulos",
    targetAudience: "Emprendedores, profesionales independientes y pequeños negocios",
    skills: [
      "Crear imágenes, flyers y contenido para el negocio",
      "Diseñar páginas web con herramientas de IA",
      "Construir dashboards interactivos a partir de datos",
      "Crear asistentes y automatizaciones simples sin código"
    ],
    modules: [
      "IA para productividad y organización del negocio",
      "Creación de contenido, imágenes y comunicación",
      "Páginas web con IA",
      "Dashboards y análisis de información",
      "Asistentes personalizados y automatización"
    ],
    featured: true
  },
  {
    id: "web-ia-negocios",
    slug: "paginas-web-con-ia",
    title: "Creación de Páginas Web con IA para Negocios",
    category: "negocios",
    tag: "Taller especializado",
    shortDesc: "Convierte la información de tu negocio en una página web funcional utilizando IA, sin aprender programación.",
    fullDesc: "Taller paso a paso para organizar la información del negocio, definir referencias visuales, preparar un brief y utilizar herramientas de IA para construir y publicar una web con llamadas a la acción reales.",
    duration: "6 horas",
    targetAudience: "Emprendedores, profesionales independientes y pequeños negocios",
    skills: [
      "Organizar la información necesaria para una página web",
      "Crear un brief reutilizable para trabajar con IA",
      "Usar referencias visuales sin copiar otras marcas",
      "Construir y publicar una web con herramientas como Lovable y GitHub"
    ],
    modules: [
      "Paso 1: Información, objetivos y brief del negocio",
      "Paso 2: Referencias, estructura y experiencia de usuario",
      "Paso 3: Construcción de la web con IA",
      "Paso 4: Revisión, publicación y mejoras"
    ],
    featured: true
  },
  {
    id: "ia-analisis-decisiones",
    slug: "ia-analisis-decisiones",
    title: "IA Aplicada al Análisis y Toma de Decisiones",
    category: "profesionales",
    tag: "Análisis & Decisiones",
    shortDesc: "Combina IA, documentos y datos para transformar información dispersa en análisis útiles para decidir.",
    fullDesc: "Un programa conectado con el análisis económico, financiero y de gestión. El foco está en utilizar la IA para explorar información, formular preguntas, interpretar datos, generar insights y comunicar conclusiones de forma ejecutiva.",
    duration: "Formato adaptable",
    targetAudience: "Analistas, economistas, financieros, consultores y responsables de gestión",
    skills: [
      "Analizar documentos y fuentes de información",
      "Explorar bases de datos y hojas de cálculo con apoyo de IA",
      "Identificar KPIs, tendencias, comparaciones e insights",
      "Convertir análisis en dashboards y reportes ejecutivos"
    ],
    modules: [
      "Formulación de preguntas y análisis asistido por IA",
      "Documentos, datos y hojas de cálculo",
      "KPIs, insights y visualización",
      "Dashboards, reportes y comunicación para decisiones"
    ],
    featured: true
  },
  {
    id: "ia-gestion-publica",
    slug: "ia-para-gestion-publica",
    title: "IA Aplicada a la Gestión Pública",
    category: "publico",
    tag: "Programa especializado",
    shortDesc: "Aplicaciones prácticas de IA para documentos, análisis, productividad y gestión de información en el sector público.",
    fullDesc: "Formación adaptable para equipos del sector público que buscan incorporar IA de manera práctica en tareas de análisis documental, elaboración de informes, revisión de información y productividad.",
    duration: "Formato adaptable",
    targetAudience: "Funcionarios, especialistas y equipos del sector público",
    skills: [
      "Analizar normativa y documentos extensos",
      "Apoyar la elaboración y revisión de informes",
      "Organizar y comparar información de distintas fuentes",
      "Diseñar flujos de trabajo asistidos por IA"
    ],
    modules: [
      "Uso responsable de IA en el trabajo público",
      "Análisis documental y normativa",
      "Informes, síntesis y comunicación",
      "Productividad y flujos reutilizables"
    ]
  },
  {
    id: "ia-agentes-inmobiliarios",
    slug: "ia-agentes-inmobiliarios",
    title: "IA para Agentes Inmobiliarios",
    category: "inmobiliario",
    tag: "Programa especializado",
    shortDesc: "IA aplicada a contenido, fichas de propiedades, comunicación comercial y productividad inmobiliaria.",
    fullDesc: "Taller orientado a agentes que quieren utilizar IA para presentar mejor sus propiedades, producir contenido y acelerar tareas comerciales sin perder su estilo personal.",
    duration: "Formato adaptable",
    targetAudience: "Agentes, brokers y profesionales inmobiliarios",
    skills: [
      "Crear fichas y descripciones de propiedades",
      "Generar flyers y contenido visual",
      "Preparar mensajes y seguimiento comercial",
      "Organizar información y tareas con asistentes de IA"
    ],
    modules: [
      "Productividad del agente con IA",
      "Contenido y comunicación inmobiliaria",
      "Imágenes y piezas comerciales",
      "Asistentes y flujos de seguimiento"
    ]
  },
  {
    id: "ia-administradores-edificios",
    slug: "ia-administradores-edificios",
    title: "IA para Administradores de Edificios y Condominios",
    category: "administracion",
    tag: "Programa especializado",
    shortDesc: "Herramientas prácticas para comunicaciones, actas, documentos y tareas frecuentes de administración.",
    fullDesc: "Programa aplicado a situaciones cotidianas de la administración de edificios: redactar comunicaciones, estructurar actas, revisar documentos y organizar información utilizando IA.",
    duration: "Formato adaptable",
    targetAudience: "Administradores, juntas y empresas administradoras",
    skills: [
      "Redactar comunicados y respuestas",
      "Estructurar actas y acuerdos",
      "Comparar cotizaciones y documentos",
      "Crear asistentes para tareas recurrentes"
    ],
    modules: [
      "Fundamentos y productividad con IA",
      "Comunicaciones y documentos",
      "Análisis de información administrativa",
      "Asistentes y casos aplicados"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "capacitacion-in-company",
    title: "Capacitaciones y Talleres para Equipos",
    badge: "Formación aplicada",
    shortDesc: "Programas adaptados a las tareas, documentos y casos de cada organización.",
    fullDesc: "Diseño capacitaciones prácticas para que los equipos aprendan a utilizar IA en situaciones cercanas a su trabajo. El contenido puede adaptarse al sector, los perfiles de los participantes y las tareas que buscan mejorar.",
    deliverables: [
      "Diagnóstico de necesidades del equipo",
      "Casos basados en tareas reales",
      "Prompts y plantillas reutilizables",
      "Materiales de apoyo para continuar aplicando lo aprendido"
    ],
    idealFor: "Empresas, instituciones públicas, universidades y equipos profesionales.",
    iconName: "Presentation"
  },
  {
    id: "diagnostico-oportunidades",
    title: "Diagnóstico de Oportunidades con IA",
    badge: "Exploración y priorización",
    shortDesc: "Revisión de tareas y procesos para identificar dónde la IA puede aportar mayor valor.",
    fullDesc: "Antes de incorporar nuevas herramientas, revisamos cómo trabaja el equipo, qué tareas consumen más tiempo y dónde existen oportunidades concretas para utilizar IA. El resultado es una priorización práctica de posibles casos de uso y siguientes pasos.",
    deliverables: [
      "Mapa de tareas y procesos relevantes",
      "Identificación de oportunidades de uso de IA",
      "Priorización por impacto y facilidad de implementación",
      "Recomendación de herramientas y siguientes pasos"
    ],
    idealFor: "Equipos que quieren empezar a utilizar IA pero todavía no tienen claro por dónde comenzar.",
    iconName: "SearchCheck"
  },
  {
    id: "asistentes-flujos",
    title: "Diseño de Asistentes y Herramientas sin Código",
    badge: "Soluciones prácticas",
    shortDesc: "Prototipos y herramientas sencillas para convertir tareas repetitivas en flujos reutilizables.",
    fullDesc: "Diseño y acompaño la creación de soluciones prácticas sin necesidad de desarrollos complejos: asistentes personalizados, dashboards, herramientas internas, plantillas y flujos que ayuden al equipo a trabajar con mayor orden y consistencia.",
    deliverables: [
      "Asistentes personalizados según el caso de uso",
      "Dashboards o herramientas internas sencillas",
      "Plantillas y flujos de trabajo reutilizables",
      "Documentación básica para que el equipo pueda utilizarlos"
    ],
    idealFor: "Equipos que ya identificaron una tarea concreta que quieren mejorar o prototipar con IA.",
    iconName: "Cpu"
  },
  {
    id: "charlas-ejecutivas",
    title: "Charlas y Conferencias sobre IA Aplicada",
    badge: "Divulgación y sensibilización",
    shortDesc: "Sesiones claras y prácticas para acercar la IA a profesionales, equipos y organizaciones.",
    fullDesc: "Charlas diseñadas para explicar qué puede aportar hoy la IA, mostrar casos y demostraciones comprensibles y abrir una conversación sobre cómo utilizarla en el trabajo. El contenido se adapta al sector, audiencia y objetivo del evento.",
    deliverables: [
      "Charlas de 60 a 90 minutos",
      "Casos y demostraciones prácticas",
      "Espacio de preguntas y conversación",
      "Adaptación del contenido al sector o audiencia"
    ],
    idealFor: "Empresas, instituciones, universidades, asociaciones profesionales y eventos.",
    iconName: "Sparkles"
  }
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: "analisis-contratos",
    title: "Análisis y Detección de Riesgos en Contratos",
    category: "Legal y Negocios",
    description: "Extrae cláusulas críticas, plazos de renovación, penalidades y ambigüedades de cualquier contrato comercial.",
    tags: ["Contratos", "Riesgos", "Legal"],
    prompt: `Actúa como un analista legal y de riesgos comerciales senior. Revisa el siguiente contrato y genera un informe ejecutivo estructurado con:
1. Resumen de partes, objeto y vigencia.
2. Matriz de Obligaciones Críticas (Parte responsable | Plazo | Entregable).
3. Cláusulas de Alerta / Riesgo (Penalidades, resolución unilateral, arbitrajes).
4. Próximos hitos temporales y fechas límite.
5. Recomendaciones de redacción o advertencias de negociación.

Texto del contrato a evaluar:
[PEGAR_TEXTO_AQUÍ]`
  },
  {
    id: "sintesis-financiera",
    title: "Conversión de Estados Financieros a Resumen Ejecutivo",
    category: "Finanzas y Dirección",
    description: "Convierte números y balances fríos en una narrativa clara sobre liquidez, rentabilidad y alertas operativas para directores.",
    tags: ["Finanzas", "Ratios", "Directorio"],
    prompt: `Actúa como un CFO y Economista senior. Analiza los siguientes estados financieros y redacta un reporte ejecutivo para el Directorio:
1. Resumen en 3 bullets de la salud financiera del periodo.
2. Análisis de Liquidez y Solvencia (con interpretación clara del impacto en operaciones).
3. Márgenes y Rentabilidad (explicando variaciones relevantes respecto al periodo anterior).
4. Principales 3 riesgos financieros o de flujo de caja a vigilar.
5. Preguntas clave que el Directorio debería hacer a la gerencia de operaciones.

Datos financieros:
[PEGAR_TABLA_O_DATOS_AQUÍ]`
  },
  {
    id: "acta-reunion",
    title: "Estructuración de Acuerdos y Minutas de Reunión",
    category: "Productividad",
    description: "Transforma notas desordenadas o transcripciones de reuniones en un plan de acción formal y limpio.",
    tags: ["Reuniones", "Minutas", "Gestión"],
    prompt: `Actúa como un Director de Operaciones (COO). A partir de los siguientes apuntes desordenados de nuestra reunión, genera:
1. Objetivo y participantes de la sesión.
2. Principales temas discutidos y conclusiones acordadas.
3. Tabla de Compromisos y Acciones:
   | Tarea / Entregable | Responsable | Fecha Límite | Criterio de Éxito |
4. Temas pendientes que requieren otra sesión.

Apuntes de la reunión:
[PEGAR_NOTAS_AQUÍ]`
  }
];

export const WORK_METHOD_STEPS = [
  {
    step: "01",
    title: "Entender el problema",
    desc: "Revisamos qué tareas consumen tiempo, generan fricción o podrían realizarse mejor con apoyo de IA."
  },
  {
    step: "02",
    title: "Priorizar oportunidades",
    desc: "Elegimos los casos donde la IA puede aportar valor y que sean razonables de implementar."
  },
  {
    step: "03",
    title: "Prototipar una solución",
    desc: "Probamos una capacitación, asistente, plantilla, dashboard o flujo antes de complicar la solución."
  },
  {
    step: "04",
    title: "Aplicarlo con el equipo",
    desc: "Trabajamos con situaciones y materiales cercanos a la realidad de las personas que lo utilizarán."
  },
  {
    step: "05",
    title: "Dejar capacidad instalada",
    desc: "El equipo se queda con materiales, criterios y métodos que puede volver a utilizar."
  }
];