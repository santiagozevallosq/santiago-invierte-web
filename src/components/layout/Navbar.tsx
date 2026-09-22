import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/siteData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 md:bg-white/60 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              SI
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-slate-950 tracking-tight group-hover:text-emerald-700 transition-colors">
                  Santiago Invierte
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  IA Aplicada
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Productividad & Decisiones
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 shadow-xs backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white text-emerald-800 font-bold shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={getWhatsAppUrl("Hola Santiago, vi tu página web y quiero consultarte sobre tus programas de IA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/20 hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Directo</span>
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && <Sparkles className="w-4 h-4 text-emerald-600" />}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={getWhatsAppUrl("Hola Santiago, vi tu página web y quiero consultarte sobre tus programas de IA.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Escríbeme por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
