import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, FileText, Sparkles, ChevronRight, Shield, UserCheck, LogIn } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../data/hgwData';
import { UserAccount } from '../services/storeService';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCatalog: () => void;
  currentUser?: UserAccount | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenCatalog,
  currentUser,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Acerca de', path: '/acerca-de' },
    { label: 'Servicios & Negocio', path: '/servicios' },
    { label: 'Productos', path: '/productos' },
    { label: 'Catálogo Digital', path: '/catalogo' },
    { label: 'Artículos', path: '/blog' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-emerald-200">Santiago de Veraguas · Envíos nacionales 24-48h vía Servientrega</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-300">
            <span className="hidden sm:inline">Horario de Oficina: {DISTRIBUTOR_INFO.officeHours}</span>
            <a
              href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20deseo%20información%20sobre%20los%20productos%20HGW`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-emerald-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {DISTRIBUTOR_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo Zone */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left group cursor-pointer focus:outline-hidden"
            aria-label="Inicio HGW"
          >
            <div className="h-14 w-auto max-w-[220px] rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden relative p-1">
              <img
                src="/assets/aistudio/logo_hgw_largo_ae3211c9.png"
                alt="Logo HGW Yamilka"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-emerald-700 bg-emerald-50 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Admin Access + Catalog Quick Button + Cart + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavClick(currentUser ? '/admin' : '/admin/login')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all border cursor-pointer ${
                currentPath.startsWith('/admin')
                  ? 'bg-stone-900 text-white border-stone-800 shadow-xs'
                  : currentUser
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-200'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200'
              }`}
              title={currentUser ? `Conectado como ${currentUser.name}` : 'Acceso Administrativo'}
            >
              {currentUser ? (
                <>
                  <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="hidden xl:inline">Panel Admin</span>
                </>
              ) : (
                <>
                  <Shield className="w-3.5 h-3.5 text-stone-600" />
                  <span className="hidden xl:inline">Admin</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenCatalog}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Ver Catálogo</span>
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer border border-stone-200"
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="w-5 h-5 text-stone-800" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer border border-stone-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="space-y-1">
              {navLinks.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-semibold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                );
              })}

              <button
                onClick={() => handleNavClick(currentUser ? '/admin' : '/admin/login')}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg text-left transition-colors bg-stone-100 text-stone-900 mt-2"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>{currentUser ? `Panel Admin (${currentUser.name})` : 'Acceso Administradores'}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 space-y-2">
              <button
                onClick={() => {
                  onOpenCatalog();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 font-medium text-sm border border-emerald-200"
              >
                <FileText className="w-4 h-4" />
                <span>Abrir Catálogo Digital Interactivo</span>
              </button>

              <a
                href={DISTRIBUTOR_INFO.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 text-white font-medium text-sm hover:bg-emerald-800 transition-colors shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Afiliarse a HGW con Yamilka Batista</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
