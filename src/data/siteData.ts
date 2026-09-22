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
    id: "analizar-documento",
    title: "Analiza un documento y encuentra lo importante",
    category: "Productividad",
    description: "Convierte un PDF, Word o texto extenso en hallazgos, pendientes, riesgos y preguntas útiles.",
    tags: ["Documentos", "Análisis", "Productividad"],
    prompt: `Actúa como un analista profesional. Voy a adjuntar un documento.

Primero identifica qué tipo de documento es, su objetivo y su estructura. Luego:
1. Resume las ideas principales sin inventar información.
2. Identifica datos, acuerdos, fechas, cifras o elementos relevantes.
3. Señala riesgos, vacíos, contradicciones o puntos que requieren verificación.
4. Formula preguntas que ayuden a profundizar el análisis.
5. Presenta al final una síntesis ejecutiva con los 5 hallazgos más importantes.

Si una información no aparece en el documento, indícalo expresamente. No completes vacíos con supuestos.`
  },
  {
    id: "analizar-excel",
    title: "Descubre qué puedes analizar en tu Excel",
    category: "Análisis y decisiones",
    description: "Carga una hoja de cálculo y convierte sus variables en KPIs, comparaciones y preguntas de negocio.",
    tags: ["Excel", "KPIs", "Datos"],
    prompt: `Analiza el archivo Excel que voy a adjuntar. Antes de realizar cálculos, identifica:
1. Qué información contiene la base.
2. Cuáles son las variables disponibles y qué representa cada una.
3. Qué indicadores o KPIs relevantes podrían calcularse.
4. Qué tendencias, comparaciones, rankings o segmentos sería útil analizar.
5. Qué preguntas de negocio pueden responderse con estos datos.

Luego propón un plan de análisis priorizado. No inventes variables que no existan en el archivo y señala cualquier problema de calidad de datos que detectes.`
  },
  {
    id: "dashboard-ia",
    title: "Diseña un dashboard a partir de tus datos",
    category: "Análisis y decisiones",
    description: "Transforma el análisis de una base en una propuesta clara de KPIs, gráficos, filtros e insights.",
    tags: ["Dashboard", "Visualización", "KPIs"],
    prompt: `A partir del análisis de la base de datos que acabas de realizar, diseña la estructura de un dashboard interactivo.

Define:
1. Los KPIs principales que deberían mostrarse.
2. Los gráficos más adecuados y qué pregunta responde cada uno.
3. Los filtros que debería utilizar el usuario.
4. Las comparaciones, rankings o segmentaciones más relevantes.
5. Los insights que el dashboard debería ayudar a identificar.

Organiza la propuesta por secciones y prioriza claridad y utilidad para la toma de decisiones. No construyas todavía el dashboard.`
  },
  {
    id: "brief-web",
    title: "Crea el brief de una página web",
    category: "Negocios",
    description: "Ordena la información de un negocio para convertirla en una instrucción reutilizable para crear su web con IA.",
    tags: ["Web", "Brief", "Negocios"],
    prompt: `Actúa como consultor de negocios y diseñador UX/UI. Ayúdame a preparar un brief para crear una página web con Inteligencia Artificial.

Primero hazme las preguntas necesarias para recopilar, como mínimo:
- nombre y descripción del negocio;
- público objetivo;
- productos o servicios;
- propuesta de valor;
- datos de contacto;
- redes sociales;
- llamadas a la acción;
- identidad visual disponible;
- páginas de referencia;
- secciones que debería tener la web.

Haz las preguntas de forma ordenada y sencilla. Cuando responda, organiza toda la información en un brief limpio, completo y listo para guardar como archivo TXT y utilizar en una herramienta de creación web con IA.`
  },
  {
    id: "presentacion-ia",
    title: "Convierte información en una presentación",
    category: "Comunicación",
    description: "Pasa de un documento o conjunto de ideas a una estructura narrativa clara para una presentación.",
    tags: ["Presentaciones", "Storytelling", "Comunicación"],
    prompt: `Actúa como experto en presentaciones ejecutivas y storytelling. A partir de la información que voy a proporcionar:

1. Identifica el objetivo principal de la presentación y la audiencia.
2. Define el mensaje central que debería recordar la audiencia.
3. Propón una secuencia narrativa clara.
4. Diseña una estructura de diapositivas indicando para cada una: título, mensaje principal y contenido visual recomendado.
5. Reduce texto innecesario y prioriza ideas que puedan explicarse visualmente.

No inventes cifras ni evidencia. Si falta información importante, indícala antes de incorporarla.`
  },
  {
    id: "asistente-ia",
    title: "Diseña un asistente para una tarea",
    category: "Automatización",
    description: "Convierte una tarea recurrente en la ficha inicial de un asistente de IA especializado.",
    tags: ["Asistentes", "Flujos", "Productividad"],
    prompt: `Quiero diseñar un asistente de IA para una tarea recurrente de mi trabajo.

Hazme preguntas para identificar:
1. Qué tarea quiero resolver.
2. Quién utilizará el asistente.
3. Qué información recibirá como entrada.
4. Qué resultado debería entregar.
5. Qué reglas, criterios o restricciones debe respetar.
6. Qué documentos o ejemplos podrían servirle como referencia.
7. Qué errores debería evitar.

Después de mis respuestas, crea una ficha del asistente con: objetivo, usuario, entradas, proceso esperado, formato de salida, reglas y ejemplos de uso.`
  },
  {
    id: "avatar-realista",
    title: "Crea un avatar realista y consistente",
    category: "Contenido visual",
    description: "Plantilla para definir un personaje realista que pueda reutilizarse de forma consistente en imágenes y contenido.",
    tags: ["Avatar", "Imágenes", "Marca"],
    prompt: `Actúa como director creativo especializado en personajes realistas generados con IA.

Quiero crear un avatar original y consistente para utilizarlo en contenido visual. Primero pregúntame por:
- edad aproximada;
- género o apariencia deseada;
- rasgos del rostro;
- tono de piel;
- cabello;
- vestimenta;
- estilo y personalidad;
- profesión o contexto de uso;
- tipo de iluminación;
- fondo habitual;
- encuadres que necesitaré.

Después crea una FICHA MAESTRA DEL AVATAR que incluya:
1. Descripción física detallada.
2. Vestimenta principal y alternativas.
3. Expresión y lenguaje corporal.
4. Estilo fotográfico e iluminación.
5. Prompt maestro reutilizable.
6. Variantes para rostro frontal, perfil, tres cuartos y medio cuerpo.
7. Elementos que deben mantenerse constantes entre imágenes.

El resultado debe buscar apariencia fotográfica natural y coherencia visual, evitando copiar la identidad de una persona real específica.`
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