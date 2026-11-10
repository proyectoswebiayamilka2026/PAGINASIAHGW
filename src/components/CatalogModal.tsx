import React, { useState } from 'react';
import { X, Download, ChevronLeft, ChevronRight, FileText, ExternalLink, Printer } from 'lucide-react';
import { PRODUCTS, DISTRIBUTOR_INFO, CATALOG_CONFIG } from '../data/hgwData';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToProducts: () => void;
  onNavigateToProduct?: (path: string) => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
  onNavigateToProducts,
  onNavigateToProduct,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  if (!isOpen) return null;

  const catalogPages = [
    {
      page: 1,
      title: 'Portada Oficial HGW Panamá 2026',
      subtitle: 'Health Green World · Catálogo General de Bienestar',
      content: (
        <div className="h-full flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white rounded-2xl relative overflow-hidden">
          <div className="md:w-1/2 h-full min-h-[260px] relative rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-stone-900">
            <img
              src={CATALOG_CONFIG.catalogCoverImage}
              alt="Catálogo Oficial HGW Panamá 2026"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider inline-block border border-emerald-400/30">
              Catálogo Oficial Panamá 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Health Green World Panamá
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
              Consulta todos los productos de nutrición, arándanos, turmalina, cuidado personal y el Plan de Ganancia Mutua 50-50.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={CATALOG_CONFIG.priceListPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Listado de Precios (PDF)</span>
              </a>
              <a
                href={CATALOG_CONFIG.catalogCoverImage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs inline-flex items-center justify-center gap-2 border border-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver Portada Catálogo HD</span>
              </a>
            </div>
            <div className="pt-4 border-t border-emerald-800 text-xs text-emerald-200">
              <p className="font-semibold text-white">{DISTRIBUTOR_INFO.title}</p>
              <p>{DISTRIBUTOR_INFO.name} · WhatsApp: {DISTRIBUTOR_INFO.phone}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      page: 2,
      title: 'Línea Café Gourmet & Bebidas Funcionales',
      subtitle: 'Nutrición en cada sorbo',
      content: (
        <div className="p-6 bg-stone-50 rounded-2xl h-full overflow-y-auto">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Sección 01</span>
            <h3 className="text-xl font-bold text-stone-900">Cafés Adaptógenos & Bebidas</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {PRODUCTS.filter((p) => p.category === 'alimentos')
              .slice(0, 6)
              .map((prod) => (
                <a
                  key={prod.id}
                  href={`/producto/${prod.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    if (onNavigateToProduct) onNavigateToProduct(`/producto/${prod.id}`);
                  }}
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex gap-3 items-center group cursor-pointer"
                >
                  <img src={prod.image} alt={prod.name} className="w-12 h-12 object-contain p-1 bg-white border border-stone-200 rounded-lg shrink-0" />
                  <div>
                    <h5 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">{prod.name}</h5>
                    <p className="text-stone-500 line-clamp-1">{prod.shortDescription}</p>
                    <div className="flex items-center gap-2 mt-1 font-bold text-emerald-800">
                      <span>${prod.price.toFixed(2)} USD</span>
                      
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      ),
    },
    {
      page: 3,
      title: 'Nutrición Celular & Suplementos',
      subtitle: 'Poder de los Arándanos & Colágeno',
      content: (
        <div className="p-6 bg-stone-50 rounded-2xl h-full overflow-y-auto">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Sección 02</span>
            <h3 className="text-xl font-bold text-stone-900">Arándanos Azules, Probióticos & Péptidos</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {PRODUCTS.filter((p) => p.category === 'suplementos').map((prod) => (
              <a
                key={prod.id}
                href={`/producto/${prod.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  if (onNavigateToProduct) onNavigateToProduct(`/producto/${prod.id}`);
                }}
                className="p-3 bg-white rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex gap-3 items-center group cursor-pointer"
              >
                <img src={prod.image} alt={prod.name} className="w-12 h-12 object-contain p-1 bg-white border border-stone-200 rounded-lg shrink-0" />
                <div>
                  <h5 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">{prod.name}</h5>
                  <p className="text-stone-500 line-clamp-1">{prod.shortDescription}</p>
                  <div className="flex items-center gap-2 mt-1 font-bold text-emerald-800">
                    <span>${prod.price.toFixed(2)} USD</span>
                    
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      page: 4,
      title: 'Línea Turmalina & Bioenergía',
      subtitle: 'Infrarrojo lejano y aniones',
      content: (
        <div className="p-6 bg-stone-50 rounded-2xl h-full overflow-y-auto">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Sección 03</span>
            <h3 className="text-xl font-bold text-stone-900">Protectores Térmicos y Ortopédicos</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {PRODUCTS.filter((p) => p.category === 'accesorios').map((prod) => (
              <a
                key={prod.id}
                href={`/producto/${prod.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  if (onNavigateToProduct) onNavigateToProduct(`/producto/${prod.id}`);
                }}
                className="p-3 bg-white rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex gap-3 items-center group cursor-pointer"
              >
                <img src={prod.image} alt={prod.name} className="w-12 h-12 object-contain p-1 bg-white border border-stone-200 rounded-lg shrink-0" />
                <div>
                  <h5 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">{prod.name}</h5>
                  <p className="text-stone-500 line-clamp-1">{prod.shortDescription}</p>
                  <div className="flex items-center gap-2 mt-1 font-bold text-emerald-800">
                    <span>${prod.price.toFixed(2)} USD</span>
                    
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ),
    },
    {
      page: 5,
      title: 'Cuidado Personal, Bucal & Femenino',
      subtitle: 'Jabones botánicos y toallas con aniones',
      content: (
        <div className="p-6 bg-stone-50 rounded-2xl h-full overflow-y-auto">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Sección 04</span>
            <h3 className="text-xl font-bold text-stone-900">Higiene, Pastas Dentales & Protección Íntima</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {PRODUCTS.filter((p) => p.category === 'cuidado-personal')
              .slice(0, 6)
              .map((prod) => (
                <a
                  key={prod.id}
                  href={`/producto/${prod.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    if (onNavigateToProduct) onNavigateToProduct(`/producto/${prod.id}`);
                  }}
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors flex gap-3 items-center group cursor-pointer"
                >
                  <img src={prod.image} alt={prod.name} className="w-12 h-12 object-contain p-1 bg-white border border-stone-200 rounded-lg shrink-0" />
                  <div>
                    <h5 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">{prod.name}</h5>
                    <p className="text-stone-500 line-clamp-1">{prod.shortDescription}</p>
                    <div className="flex items-center gap-2 mt-1 font-bold text-emerald-800">
                      <span>${prod.price.toFixed(2)} USD</span>
                      
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      ),
    },
    {
      page: 6,
      title: 'Lista de Precios Oficial & Afiliación',
      subtitle: 'Precios sugeridos en USD y información de membresías',
      content: (
        <div className="p-6 bg-stone-50 rounded-2xl h-full overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Resumen Oficial</span>
              <h3 className="text-xl font-bold text-stone-900">Membresías & Descuentos HGW</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-center">
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <span className="font-bold text-stone-800 text-xs block">Pre-Junior</span>
                <span className="text-emerald-700 font-extrabold text-sm">50 pts</span>
                <span className="text-[10px] text-stone-500 block">30% desc.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <span className="font-bold text-stone-800 text-xs block">Junior</span>
                <span className="text-emerald-700 font-extrabold text-sm">100 pts</span>
                <span className="text-[10px] text-stone-500 block">30% desc.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <span className="font-bold text-stone-800 text-xs block">Senior</span>
                <span className="text-emerald-700 font-extrabold text-sm">300 pts</span>
                <span className="text-[10px] text-stone-500 block">30% desc.</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300">
                <span className="font-bold text-emerald-950 text-xs block">Master</span>
                <span className="text-emerald-800 font-extrabold text-sm">600 pts</span>
                <span className="text-[10px] text-emerald-700 font-bold block">52% desc.</span>
              </div>
            </div>
            <div className="p-4 bg-emerald-900 text-emerald-50 rounded-xl text-xs space-y-1">
              <p className="font-bold text-white text-sm">¿Deseas activar tu membresía con descuento?</p>
              <p>Mantenimiento mensual de tan solo 10 pts (~$20 USD). Ganancias 50-50 sin límites.</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-wrap gap-2 justify-between items-center">
            <span className="text-xs text-stone-500 font-medium">Patrocinador: Yamilka507</span>
            <a
              href={DISTRIBUTOR_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Registrarse en Health Green World</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar of Viewer */}
        <div className="p-4 sm:px-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Catálogo Digital Interactivo HGW Panamá
              </h3>
              <p className="text-[11px] text-stone-400">
                Página {currentPage} de {totalPages} · {catalogPages[currentPage - 1].title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              title="Imprimir lista de precios"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              aria-label="Cerrar catálogo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Viewer Spreads */}
        <div className="flex-1 p-4 sm:p-6 overflow-hidden flex flex-col">
          <div className="flex-1 w-full h-full">
            {catalogPages[currentPage - 1].content}
          </div>
        </div>

        {/* Navigation & Action Footer */}
        <div className="p-4 sm:px-6 bg-white border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          {/* Paginator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-semibold text-stone-700 px-2">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick jump to product shop */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onNavigateToProducts();
              }}
              className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 transition-colors cursor-pointer"
            >
              Explorar Todos los {PRODUCTS.length} Productos
            </button>

            <a
              href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20el%20archivo%20PDF%20del%20Catálogo%20HGW%20Panamá`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Solicitar PDF por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
