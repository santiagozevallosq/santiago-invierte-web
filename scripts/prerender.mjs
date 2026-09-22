import fs from 'node:fs/promises';
import path from 'node:path';
import { render } from '../dist-ssr/entry-server.js';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
const BASE_URL = 'https://santiagozevallosq.github.io/santiago-invierte-web';

const pages = [
  ['/', 'Santiago Invierte — Inteligencia Artificial Aplicada', 'IA aplicada a productividad, negocios y toma de decisiones. Cursos, recursos y servicios prácticos para profesionales, emprendedores y organizaciones.'],
  ['/cursos', 'Cursos de Inteligencia Artificial Aplicada | Santiago Invierte', 'Cursos y talleres prácticos de IA para profesionales, emprendedores y organizaciones: productividad, análisis, páginas web, dashboards y asistentes sin programar.'],
  ['/servicios', 'Servicios de IA Aplicada para Organizaciones | Santiago Invierte', 'Capacitaciones, diagnóstico de oportunidades, asistentes sin código y charlas de Inteligencia Artificial aplicada para equipos y organizaciones.'],
  ['/recursos', 'Recursos Prácticos de Inteligencia Artificial | Santiago Invierte', 'Plantillas, prompts, guías y recursos para aplicar IA en documentos, análisis, negocios, contenido, páginas web y productividad.'],
  ['/sobre-mi', 'Sobre Santiago Zevallos | IA Aplicada', 'Conoce a Santiago Zevallos, economista, docente universitario y consultor enfocado en Inteligencia Artificial aplicada al trabajo, los negocios y la toma de decisiones.'],
  ['/contacto', 'Contacto | Santiago Invierte', 'Contacta a Santiago Zevallos para cursos, talleres, capacitaciones, conferencias y proyectos de Inteligencia Artificial aplicada.']
];

const courseNames = [
  'IA para Profesionales',
  'IA para Negocios',
  'Creación de Páginas Web con IA para Negocios',
  'IA Aplicada al Análisis y Toma de Decisiones',
  'IA Aplicada a la Gestión Pública',
  'IA para Agentes Inmobiliarios',
  'IA para Administradores de Edificios y Condominios'
];

function structuredData(route, title, description, canonical) {
  const graph = [
    {
      '@type': 'Person',
      '@id': BASE_URL + '/#santiago-zevallos',
      name: 'Santiago Zevallos',
      jobTitle: 'Economista, docente universitario y consultor en Inteligencia Artificial aplicada',
      url: BASE_URL + '/',
      sameAs: [
        'https://www.linkedin.com/in/santiago-zevallos-b6a29b44/',
        'https://www.tiktok.com/@santiagoinvierte',
        'https://www.youtube.com/@santiago.invierte'
      ],
      knowsAbout: ['Inteligencia Artificial aplicada', 'Productividad', 'Análisis de datos', 'Negocios', 'Toma de decisiones']
    },
    {
      '@type': 'WebSite',
      '@id': BASE_URL + '/#website',
      name: 'Santiago Invierte',
      url: BASE_URL + '/',
      inLanguage: 'es-PE'
    },
    {
      '@type': route === '/cursos' ? 'CollectionPage' : 'WebPage',
      '@id': canonical + '#webpage',
      url: canonical,
      name: title,
      description,
      isPartOf: { '@id': BASE_URL + '/#website' },
      about: { '@id': BASE_URL + '/#santiago-zevallos' },
      inLanguage: 'es-PE',
      ...(route === '/cursos'
        ? {
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: courseNames.map((name, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name
              }))
            }
          }
        : {})
    }
  ];

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

for (const [route, title, description] of pages) {
  const canonical = route === '/' ? BASE_URL + '/' : BASE_URL + route + '/';
  const appHtml = render(route);

  let html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`);

  const headExtras = `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_PE" />
    <meta property="og:site_name" content="Santiago Invierte" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${BASE_URL}/santiago-zevallos-home.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${BASE_URL}/santiago-zevallos-home.jpg" />
    <script type="application/ld+json">${structuredData(route, title, description, canonical)}</script>
  `;

  html = html.replace('</head>', headExtras + '\n  </head>');

  const outputFile = route === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, route.slice(1), 'index.html');

  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, html, 'utf8');
}
