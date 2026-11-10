import React, { useState } from 'react';
import { FileText, Download, ChevronLeft, ChevronRight, Printer, ExternalLink, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, DISTRIBUTOR_INFO, CATALOG_CONFIG } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

interface CatalogViewProps {
  onNavigate: (path: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const catalogSections = [
    {
      page: 1,
      title: 'Portada Oficial HGW Panamá 2026',
      subtitle: 'Guía Integral de Salud, Nutrición y Bienestar',
      component: (
        <div className="h-full flex flex-col md:flex-row items-center gap-8 p-6 sm:p-10 bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white rounded-3xl relative overflow-hidden">
          <div className="md:w-1/2 h-full min-h-[300px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-stone-900 flex items-center justify-center">
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
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Health Green World Panamá
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
              Arándanos silvestres, tecnología de turmalina bioactiva, hongo Ganoderma Lucidum y el Plan de Ganancia Mutua 50-50.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={CATALOG_CONFIG.priceListPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Listado de Precios (PDF)</span>
              </a>

              <a
                href={CATALOG_CONFIG.catalogCoverImage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs inline-flex items-center justify-center gap-2 border border-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver Portada Catálogo HD</span>
              </a>
            </div>

            <div className="pt-6 border-t border-emerald-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-emerald-200">
              <div>
                <p className="font-bold text-white">{DISTRIBUTOR_INFO.name}</p>
                <p>{DISTRIBUTOR_INFO.title}</p>
              </div>
              <div className="sm:text-right">
                <p className="font-semibold text-white">Envíos Servientrega 24-48h</p>
                <p>WhatsApp: {DISTRIBUTOR_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      page: 2,
      title: 'Línea de Café Gourmet & Infusiones',
      subtitle: 'Nutrición en cada sorbo',
      component: (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-stone-200 h-full overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Capítulo 01</span>
            <h3 className="text-2xl font-bold text-stone-900">Cafés Adaptógenos & Bebidas</h3>
            <p className="text-xs text-stone-500 mt-1">Con extractos estandarizados de Ganoderma, Cordyceps y Ashwagandha.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {PRODUCTS.filter((p) => p.category === 'alimentos').slice(0, 8).map((prod) => (
              <a
                key={prod.id}
                href={`/producto/${prod.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/producto/${prod.id}`);
                }}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors flex gap-3 group"
              >
                <img src={prod.image} alt={prod.name} className="w-16 h-16 rounded-lg object-contain p-1 bg-white border border-stone-200 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors text-sm">{prod.name}</h4>
                  <p className="text-stone-500 line-clamp-2 mt-1">{prod.shortDescription}</p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/60 font-bold">
                    <span className="text-emerald-800 text-sm">${prod.price.toFixed(2)} USD</span>
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
      title: 'Nutrición Celular, Arándanos & Suplementos',
      subtitle: 'Antocianinas y péptidos bioactivos',
      component: (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-stone-200 h-full overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Capítulo 02</span>
            <h3 className="text-2xl font-bold text-stone-900">Arándanos Azules & Colágeno</h3>
            <p className="text-xs text-stone-500 mt-1">Potente escudo contra los radicales libres y el envejecimiento celular.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            {PRODUCTS.filter((p) => p.category === 'suplementos').map((prod) => (
              <a
                key={prod.id}
                href={`/producto/${prod.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/producto/${prod.id}`);
                }}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors flex gap-3 group"
              >
                <img src={prod.image} alt={prod.name} className="w-16 h-16 rounded-lg object-contain p-1 bg-white border border-stone-200 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors text-sm">{prod.name}</h4>
                  <p className="text-stone-500 line-clamp-2 mt-1">{prod.shortDescription}</p>
                  <div className="mt-2 pt-2 border-t border-stone-200/60 font-bold">
                    <span className="text-emerald-800 text-sm">${prod.price.toFixed(2)} USD</span>
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
      title: 'Turmalina Bioactiva & Higiene Personal',
      subtitle: 'Infrarrojo lejano y bienestar físico',
      component: (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-stone-200 h-full overflow-y-auto">
          <div className="mb-6 pb-4 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Capítulo 03</span>
            <h3 className="text-2xl font-bold text-stone-900">Turmalina, Higiene & Ortopedia</h3>
            <p className="text-xs text-stone-500 mt-1">Protectores térmicos lumbares, cervicales y pasteles dentales con aniones.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            {PRODUCTS.filter((p) => p.category === 'accesorios' || p.category === 'cuidado-personal').slice(0, 8).map((prod) => (
              <a
                key={prod.id}
                href={`/producto/${prod.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/producto/${prod.id}`);
                }}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors flex gap-3 group"
              >
                <img src={prod.image} alt={prod.name} className="w-16 h-16 rounded-lg object-contain p-1 bg-white border border-stone-200 shrink-0" />
                <div className="flex-1">
                  <h4 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors text-sm">{prod.name}</h4>
                  <p className="text-stone-500 line-clamp-2 mt-1">{prod.shortDescription}</p>
                  <div className="mt-2 pt-2 border-t border-stone-200/60 font-bold">
                    <span className="text-emerald-800 text-sm">${prod.price.toFixed(2)} USD</span>
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
      title: 'Lista de Precios Oficial Panamá & Afiliación',
      subtitle: 'Régimen de compras con descuento mayorista',
      component: (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-stone-200 h-full overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="mb-6 pb-4 border-b border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Tarifario 2026</span>
              <h3 className="text-2xl font-bold text-stone-900">Membresías de Distribuidor HGW</h3>
              <p className="text-xs text-stone-500 mt-1">Precios en Dólares Americanos (USD) para la República de Panamá.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-sm text-stone-900 block">Pre-Junior (50 pts)</span>
                <p className="text-stone-600 mt-1">30% de descuento. Tope diario de $50 USD. Inversión aprox $100-$120.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-sm text-stone-900 block">Junior (100 pts)</span>
                <p className="text-stone-600 mt-1">30% de descuento. Tope diario de $120 USD. Inversión aprox $200-$240.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-sm text-stone-900 block">Senior (300 pts)</span>
                <p className="text-stone-600 mt-1">30% de descuento. Tope diario de $360 USD. Inversión aprox $600-$650.</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300">
                <span className="font-bold text-sm text-emerald-950 block">Master (600 pts) ★ Rango Estrella</span>
                <p className="text-emerald-800 mt-1">52% de descuento vitalicio. Tope diario de $720 USD ($21,600/mes). Mantenimiento solo 10 pts.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <p className="font-bold text-white text-sm">¿Listo para ordenar o afiliarte?</p>
              <p className="text-stone-300">Patrocinador autorizado: Yamilka Batista (Usuario: Yamilka507)</p>
            </div>
            <a
              href={DISTRIBUTOR_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Afiliarse en la Web Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-10 pb-20">
      <SeoHead
        title={`Catálogo Digital | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Visualiza y descarga el catálogo oficial de productos HGW en Panamá. Lista de precios de suplementos, café Ganoderma, turmalina y membresías de afiliación."
        path="/catalogo"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold inline-block mb-3">
            Visor Digital Oficial
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Catálogo Interactivo HGW Panamá 2026
          </h1>
          <p className="mt-2 text-emerald-100 text-sm max-w-lg mx-auto">
            Pasa de página, consulta especificaciones y solicita la versión completa en PDF para imprimir.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('/productos')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Comprar Productos en la Tienda</span>
            </button>

            <a
              href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20solicito%20el%20archivo%20PDF%20del%20catálogo%20completo`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 inline-flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-300" />
              <span>Descargar PDF por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Flipbook Viewer Card */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden flex flex-col min-h-[640px]">
          
          {/* Top Bar */}
          <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-emerald-700" />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{catalogSections[currentPage - 1].title}</h4>
                <p className="text-[11px] text-stone-500">{catalogSections[currentPage - 1].subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
                title="Imprimir esta página"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Page Container */}
          <div className="p-4 sm:p-8 flex-1 flex flex-col">
            <div className="flex-1">
              {catalogSections[currentPage - 1].component}
            </div>
          </div>

          {/* Controls Footer */}
          <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 font-semibold text-xs hover:bg-stone-200 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            {/* Thumbnail dots */}
            <div className="flex items-center gap-2">
              {catalogSections.map((sec) => (
                <button
                  key={sec.page}
                  onClick={() => setCurrentPage(sec.page)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currentPage === sec.page
                      ? 'bg-emerald-700 text-white shadow-xs scale-110'
                      : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                  }`}
                >
                  {sec.page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 font-semibold text-xs hover:bg-stone-200 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
