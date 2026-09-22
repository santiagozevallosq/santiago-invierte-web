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
    title: "Capacitaciones y Talleres In-Company",
    badge: "Formación de Equipos",
    shortDesc: "Programas diseñados a la medida de tu organización con ejercicios prácticos sobre las tareas y documentos reales de tu equipo.",
    fullDesc: "No enseñamos teoría abstracta ni prompts genéricos de internet. Construimos el taller directamente sobre los archivos, formatos y dolores específicos de tu empresa para que al día siguiente cada participante aplique lo aprendido.",
    deliverables: [
      "Diagnóstico previo de necesidades del equipo",
      "Casos prácticos con formatos reales de la organización",
      "Repositorio privado de prompts y guías de uso",
      "Sesión de seguimiento y resolución de dudas"
    ],
    idealFor: "Empresas, estudios jurídicos, consultoras, aseguradoras y entidades financieras.",
    iconName: "Presentation"
  },
  {
    id: "diagnostico-oportunidades",
    title: "Diagnóstico de Oportunidades de IA",
    badge: "Consultoría Estratégica",
    shortDesc: "Revisión integral de tareas y procesos para identificar dónde la IA genera ahorro de tiempo medible y mejores decisiones.",
    fullDesc: "Antes de gastar dinero en software o suscripciones innecesarias, evaluamos tus procesos actuales para identificar los 3 o 4 puntos críticos donde la IA generará impacto visible en menos de 30 días.",
    deliverables: [
      "Matriz de priorización de procesos (Esfuerzo vs. Impacto)",
      "Estimación de horas de trabajo recuperables por colaborador",
      "Hoja de ruta tecnológica sin sobreingeniería",
      "Recomendación de herramientas accesibles y económicas"
    ],
    idealFor: "Dirección general, gerentes de operaciones y líderes de innovación.",
    iconName: "SearchCheck"
  },
  {
    id: "asistentes-flujos",
    title: "Diseño de Asistentes y Flujos sin Código",
    badge: "Soluciones Prácticas",
    shortDesc: "Construcción e implementación de asistentes personalizados y flujos repetibles sin necesidad de programar ni desarrollos costosos.",
    fullDesc: "Creamos asistentes especializados que conocen los manuales, formatos y políticas de tu organización para redactar documentos, responder consultas o estructurar datos en segundos.",
    deliverables: [
      "Asistentes entrenados con la documentación corporativa",
      "Plantillas estructuradas de prompts para el personal",
      "Manual de operación y buenas prácticas de uso",
      "Garantía de funcionamiento y afinamiento posterior"
    ],
    idealFor: "Equipos con tareas repetitivas de redacción, clasificación o atención de consultas.",
    iconName: "Cpu"
  },
  {
    id: "analisis-reportes",
    title: "IA para Análisis Económico, Financiero y Reportes",
    badge: "Decisiones Basadas en Datos",
    shortDesc: "Metodología para transformar hojas de cálculo complejas y datos dispersos en reportes claros y accionables para la alta dirección.",
    fullDesc: "Aprovecha la doble especialidad de Santiago (Economista y Magíster en Finanzas) para enseñar a tu equipo a cruzar información cualitativa y cuantitativa, preparar presentaciones de directorio y evitar errores comunes de interpretación.",
    deliverables: [
      "Estructuras de prompts para análisis financiero y de ratios",
      "Plantillas para conversión de datos en resúmenes ejecutivos",
      "Flujos de verificación cruzada para eliminar alucinaciones",
      "Formatos de presentación directa para directores"
    ],
    idealFor: "Gerencias financieras, áreas de control de gestión y analistas de negocios.",
    iconName: "BarChart3"
  },
  {
    id: "charlas-ejecutivas",
    title: "Charlas y Conferencias Ejecutivas",
    badge: "Visión Estratégica",
    shortDesc: "Sesiones de alto impacto para directores y comités de gerencia sobre el estado real de la IA y su aplicación sin mitos.",
    fullDesc: "Una sesión sin tecnicismos innecesarios que aterriza qué puede y qué no puede hacer la IA generativa hoy en los negocios, riesgos de ciberseguridad y propiedad intelectual, y cómo liderar la adopción en la empresa.",
    deliverables: [
      "Conferencia de 60 a 90 minutos en vivo (presencial o virtual)",
      "Espacio de preguntas directas y debate ejecutivo",
      "Resumen ejecutivo en PDF con recomendaciones clave"
    ],
    idealFor: "Directorios, comités ejecutivos, convenciones corporativas y universidades.",
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
    title: "Diagnosticar la Realidad",
    desc: "Analizamos las tareas diarias, dolores del equipo y cuellos de botella reales, sin imponer soluciones de moda."
  },
  {
    step: "02",
    title: "Identificar Alto Impacto",
    desc: "Priorizamos 2 o 3 procesos concretos donde la IA reduzca horas de trabajo de inmediato y con mínima fricción."
  },
  {
    step: "03",
    title: "Diseñar el Método y Prompts",
    desc: "Construimos plantillas, estructuras de verificación y flujos repetibles adaptados al vocabulario de tu empresa."
  },
  {
    step: "04",
    title: "Entrenamiento con Casos Reales",
    desc: "Capacitamos al personal trabajando sobre sus propios expedientes, tablas o informes, no sobre teoría estéril."
  },
  {
    step: "05",
    title: "Autonomía Garantizada",
    desc: "Entregamos bibliotecas de prompts, guías y criterios de verificación para que el equipo no dependa de consultores."
  }
];
