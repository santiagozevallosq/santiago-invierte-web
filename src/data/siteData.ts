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
    title: "IA para Profesionales y Ejecutivos",
    category: "profesionales",
    tag: "Más Popular",
    shortDesc: "Base práctica para incorporar IA generativa al trabajo diario: redacción ejecutiva, análisis de documentos densos y ahorro de horas semanales.",
    fullDesc: "Aprende a pasar de prompts sueltos a flujos de trabajo repetibles. Diseñado para abogados, analistas, consultores, auditores y profesionales que trabajan intensamente con textos, números y plazos ajustados.",
    duration: "4 sesiones prácticas (12 horas)",
    targetAudience: "Profesionales independientes, analistas, directivos y mandos medios que no programan.",
    skills: [
      "Redacción y estandarización de informes técnicos en minutos",
      "Lectura y extracción de conclusiones de documentos de 100+ páginas",
      "Depuración de datos y estructuración rápida de tablas",
      "Síntesis de reuniones y actas ejecutivas automáticas"
    ],
    modules: [
      "Módulo 1: Fundamentos y marco metodológico (más allá de ChatGPT básico)",
      "Módulo 2: Técnicas avanzadas de prompting analítico y contextual",
      "Módulo 3: Flujos de análisis documental, contratos y normativa",
      "Módulo 4: Automatización personal y sistematización de entregables"
    ],
    featured: true
  },
  {
    id: "ia-negocios",
    slug: "ia-para-negocios",
    title: "IA Aplicada a Negocios y Emprendimiento",
    category: "negocios",
    tag: "Enfoque Comercial",
    shortDesc: "Casos de uso reales para fundadores y equipos comerciales: creación de propuestas, atención a clientes, prospección y análisis de mercado.",
    fullDesc: "Optimiza la captación y fidelización de clientes usando herramientas de IA accesibles sin invertir en desarrollo de software a medida.",
    duration: "4 sesiones prácticas (10 horas)",
    targetAudience: "Emprendedores, gerentes comerciales, consultores de negocios y líderes de ventas.",
    skills: [
      "Generación de propuestas comerciales hiper-personalizadas",
      "Análisis de competidores y síntesis de estudios de mercado",
      "Respuestas y flujos de soporte y ventas asistidos por IA",
      "Creación consistente de contenido de marca y autoridad"
    ],
    modules: [
      "Módulo 1: Estrategia de IA en el embudo comercial",
      "Módulo 2: Elaboración de propuestas y cotizaciones persuasivas",
      "Módulo 3: Asistentes de prospección y análisis de datos de clientes",
      "Módulo 4: Creación ágil de presentaciones comerciales"
    ],
    featured: true
  },
  {
    id: "ia-gestion-publica",
    slug: "ia-para-gestion-publica",
    title: "IA para la Gestión Pública y Regulación",
    category: "publico",
    tag: "Sector Público",
    shortDesc: "Uso responsable, seguro y ético de IA en entidades del Estado: informes técnicos, expedientes, revisión de normativa y simplificación administrativa.",
    fullDesc: "Pensado específicamente para funcionarios y servidores públicos que gestionan grandes volúmenes de expedientes, informes técnicos y requerimientos de auditoría y control.",
    duration: "4 sesiones (12 horas)",
    targetAudience: "Funcionarios del Estado, asesores legales, especialistas en compras públicas y analistas de políticas.",
    skills: [
      "Revisión y comparación cruzada de bases, normas y resoluciones",
      "Estructuración rigurosa de informes técnicos y memorandos",
      "Buenas prácticas de privacidad de datos e integridad institucional",
      "Reducción del retraso en la atención de expedientes complejos"
    ],
    modules: [
      "Módulo 1: Marco de gobernanza, privacidad y uso ético en el Estado",
      "Módulo 2: Procesamiento masivo de expedientes y resoluciones",
      "Módulo 3: Elaboración de informes legales y técnicos",
      "Módulo 4: Indicadores y monitoreo de gestión pública con IA"
    ]
  },
  {
    id: "ia-administradores-edificios",
    slug: "ia-administradores-edificios",
    title: "IA para Administradores de Edificios y Condominios",
    category: "administracion",
    tag: "Especializado",
    shortDesc: "Comunicaciones claras con propietarios, actas de asamblea, análisis de presupuestos de mantenimiento y gestión documental sin fricción.",
    fullDesc: "Soluciona uno de los mayores dolores de la administración inmobiliaria: el tiempo excesivo invertido en responder correos repetitivos, armar convocatorias y redactar actas formales.",
    duration: "3 sesiones (8 horas)",
    targetAudience: "Empresas administradoras de edificios, juntas de propietarios y administradores independientes.",
    skills: [
      "Redacción inmediata de actas de asamblea y acuerdos",
      "Comunicaciones asertivas para gestión de cobranza y mora",
      "Comparativa rápida de cotizaciones de proveedores y contratistas",
      "Respuestas ordenadas a consultas vecinales frecuentes"
    ],
    modules: [
      "Módulo 1: Automatización de comunicaciones y circulares",
      "Módulo 2: Generación rápida de actas y reglamentos internos",
      "Módulo 3: Control presupuestal y comparativa de presupuestos"
    ]
  },
  {
    id: "ia-agentes-inmobiliarios",
    slug: "ia-agentes-inmobiliarios",
    title: "IA para Agentes y Brokers Inmobiliarios",
    category: "inmobiliario",
    tag: "Ventas & Real Estate",
    shortDesc: "Fichas descriptivas atractivas, análisis de comparables de mercado, seguimiento automatizado a clientes y presencia digital efectiva.",
    fullDesc: "Diferénciate en el mercado inmobiliario redactando descripciones de propiedades que realmente conviertan y respondiendo con velocidad a cada interesado.",
    duration: "3 sesiones (8 horas)",
    targetAudience: "Brokers, agentes independientes y promotores de proyectos inmobiliarios.",
    skills: [
      "Fichas técnicas y descripciones vendedoras para portales inmobiliarios",
      "Guiones personalizados de seguimiento a prospectos por WhatsApp",
      "Resumen de contratos de arrendamiento y compraventa",
      "Estrategia de contenido para redes sociales en minutos"
    ],
    modules: [
      "Módulo 1: Fichas atractivas y copywriting inmobiliario",
      "Módulo 2: Calificación de leads y guiones de venta",
      "Módulo 3: Análisis de precios de mercado con datos asistidos"
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
