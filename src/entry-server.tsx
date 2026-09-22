import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppContent, SITE_BASENAME } from './App';

export function render(pathname: string) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const location = SITE_BASENAME + (path === '/' ? '/' : path);

  return renderToString(
    <StaticRouter basename={SITE_BASENAME} location={location}>
      <AppContent />
    </StaticRouter>
  );
}
