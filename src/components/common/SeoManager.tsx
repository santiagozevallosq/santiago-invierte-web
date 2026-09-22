import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://santiagozevallosq.github.io/santiago-invierte-web';

const SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Santiago Invierte — Inteligencia Artificial Aplicada',
    description: 'IA aplicada a productividad, negocios y toma de decisiones. Cursos, recursos y servicios prácticos para profesionales, emprendedores y organizaciones.'
  },
  '/cursos': {
    title: 'Cursos de Inteligencia Artificial Aplicada | Santiago Invierte',
    description: 'Cursos y talleres prácticos de IA para profesionales, emprendedores y organizaciones: productividad, análisis, páginas web, dashboards y asistentes sin programar.'
  },
  '/servicios': {
    title: 'Servicios de IA Aplicada para Organizaciones | Santiago Invierte',
    description: 'Capacitaciones, diagnóstico de oportunidades, asistentes sin código y charlas de Inteligencia Artificial aplicada para equipos y organizaciones.'
  },
  '/recursos': {
    title: 'Recursos Prácticos de Inteligencia Artificial | Santiago Invierte',
    description: 'Plantillas, prompts, guías y recursos para aplicar IA en documentos, análisis, negocios, contenido, páginas web y productividad.'
  },
  '/sobre-mi': {
    title: 'Sobre Santiago Zevallos | IA Aplicada',
    description: 'Conoce a Santiago Zevallos, economista, docente universitario y consultor enfocado en Inteligencia Artificial aplicada al trabajo, los negocios y la toma de decisiones.'
  },
  '/contacto': {
    title: 'Contacto | Santiago Invierte',
    description: 'Contacta a Santiago Zevallos para cursos, talleres, capacitaciones, conferencias y proyectos de Inteligencia Artificial aplicada.'
  }
};

const setMeta = (selector: string, attribute: string, value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!element) {
    element = selector.startsWith('link')
      ? document.createElement('link')
      : document.createElement('meta');

    if (selector.includes('canonical')) (element as HTMLLinkElement).rel = 'canonical';
    if (selector.includes('property=')) {
      const property = selector.match(/property="([^"]+)"/)?.[1];
      if (property) element.setAttribute('property', property);
    } else if (selector.includes('name=')) {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

export const SeoManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : '/';
    const seo = SEO[normalizedPath] ?? SEO['/'];
    const canonical = normalizedPath === '/' ? BASE_URL + '/' : BASE_URL + normalizedPath + '/';

    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
  }, [pathname]);

  return null;
};
