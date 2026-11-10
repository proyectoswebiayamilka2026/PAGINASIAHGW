import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, Percent, FileText, CheckCircle2, Play, Users, Star, Download, Phone, MapPin } from 'lucide-react';
import { DISTRIBUTOR_INFO, Product, CATALOG_CONFIG } from '../data/hgwData';
import { getStoredProducts, getStoredArticles } from '../services/storeService';
import { ProductCard } from '../components/ProductCard';
import { SeoHead } from '../components/SeoHead';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenCatalog: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenCatalog,
}) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [articlesList, setArticlesList] = useState<any[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const list = getStoredProducts();
    setProductsList(list);
    setArticlesList(getStoredArticles());

    // Shuffle and pick up to 8 random products
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    setFeaturedProducts(shuffled.slice(0, 8));
  }, []);

  return (
    <div className="space-y-20 pb-16">
      <SeoHead
        title={`Inicio | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Tienda oficial y distribución de productos Health Green World en Santiago de Veraguas y todo Panamá. Café con Ganoderma, Arándanos, Turmalina y Plan 50-50."
        path="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Distribuidor Independiente HGW Santiago de Veraguas · Yamilka Batista</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Salud Natural, Belleza & el Innovador{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                  Plan de Ganancia Mutua
                </span>
              </h1>

              <p className="text-[18px] sm:text-[19px] text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Descubre el catálogo de <strong>Health Green World en Santiago de Veraguas y Panamá</strong>. Suplementos de arándanos, café con Ganoderma, accesorios con turmalina emisora de aniones y la oportunidad de afiliarte con hasta un <strong>52% de descuento</strong>.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onNavigate('/productos')}
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explorar Tienda Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenCatalog}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 flex items-center gap-2 cursor-pointer backdrop-blur-xs"
                >
                  <FileText className="w-4 h-4 text-emerald-300" />
                  <span>Ver Catálogo PDF 2026</span>
                </button>

                <button
                  onClick={() => onNavigate('/servicios')}
                  className="px-6 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-emerald-200 font-semibold text-sm transition-all border border-emerald-900/80 flex items-center gap-2 cursor-pointer"
                >
                  <Percent className="w-4 h-4 text-emerald-400" />
                  <span>Plan de Negocio 50-50</span>
                </button>
              </div>

              {/* Quick Perks */}
              <div className="pt-6 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-emerald-200/90 text-left">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Servientrega 24-48h nacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Certificación GMP & Halal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Descuentos 30% a 52%</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-stone-900/90 rounded-3xl p-6 border border-emerald-600/30 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-stone-950 flex items-center justify-center border border-white/10">
                  <img
                    src={CATALOG_CONFIG.catalogCoverImage}
                    alt="Catálogo Oficial HGW Panamá 2026"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Catálogo Oficial 2026
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-semibold">Oportunidad de Afiliación</span>
                    <span className="text-stone-400">Código: Yamilka507</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Gana salud y genera ingresos con el Plan 50-50
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Mantenimiento mensual accesible de solo <strong>10 pts</strong> (~$20 USD). Gana en partes iguales con tu patrocinador.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href={CATALOG_CONFIG.priceListPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Listado de Precios (PDF)</span>
                    </a>
                    <a
                      href={DISTRIBUTOR_INFO.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>Afiliarme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & GUARANTEES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="border-r last:border-r-0 border-stone-100 p-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-900 block font-display">56+</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-700 mt-1 block">Productos en Catálogo</span>
            <span className="text-xs text-stone-400">Salud, belleza y nutrición</span>
          </div>

          <div className="border-r last:border-r-0 border-stone-100 p-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-900 block font-display">24-48h</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-700 mt-1 block">Envíos Servientrega</span>
            <span className="text-xs text-stone-400">A todas las provincias</span>
          </div>

          <div className="border-r last:border-r-0 border-stone-100 p-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-900 block font-display">50 - 50</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-700 mt-1 block">Ganancia Mutua</span>
            <span className="text-xs text-stone-400">Patrocinador y socio ganan igual</span>
          </div>

          <div className="p-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-900 block font-display">10 pts</span>
            <span className="text-xs sm:text-sm font-semibold text-stone-700 mt-1 block">Mantenimiento Mínimo</span>
            <span className="text-xs text-stone-400">Sin candados ni compras forzadas</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Selección Exclusiva
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Productos HGW Más Populares en Panamá
            </h2>
            <p className="text-sm text-stone-500 mt-1">
              Fórmulas naturales con Ganoderma, arándanos silvestres y minerales bioactivos.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('/productos')}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>Ver los 56 productos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* 4. THE THREE PILLARS OF HEALTH GREEN WORLD */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Ingredientes & Ciencia
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Los 3 Pilares Científicos de HGW
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Tecnología de extracción limpia y nanotecnología mineral aplicada al bienestar diario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Arándano Azul */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl mb-4">
                  🍇
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  El Poder del Arándano Azul
                </h3>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  Cosechados en bosques boreales no contaminados, los arándanos de HGW poseen la concentración más alta de antocianinas y pterostilbeno. Protegen la vista de la luz azul, refuerzan los capilares sanguíneos y frenan el estrés oxidativo celular.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-stone-100 text-xs font-semibold text-purple-900">
                Presente en: Berry Juice High VC, Lactiberry, Choco Blue, Caramelos
              </div>
            </div>

            {/* Pillar 2: Turmalina */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4">
                  💎
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  La Magia de la Turmalina Bioactiva
                </h3>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  Mineral piezoeléctrico que emite calor de infrarrojo lejano (FIR) y millones de aniones (iones negativos). Estimula la microcirculación, calma dolores articulares en cintura, cuello y rodillas, e inhibe bacterias en pastas dentales y toallas higiénicas.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-stone-100 text-xs font-semibold text-emerald-900">
                Presente en: Faja lumbar, protectores cervicales, toallas y jabones
              </div>
            </div>

            {/* Pillar 3: Ganoderma Lucidum */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-4">
                  🍄
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Hongo Ganoderma & Cordyceps
                </h3>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  Conocido milenariamente como el "Hongo de la Inmortalidad", modula el sistema inmune, reduce la inflamación y neutraliza la acidez en el café gourmet. Junto con el Cordyceps Sinensis, maximiza la oxigenación pulmonar y la energía mitocondrial.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-stone-100 text-xs font-semibold text-amber-900">
                Presente en: GANODERMA SOLUBLE COFFEE, Coffee Ceps, CHOCO GANO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VIDEO SHOWCASE / MULTIMEDIA EXPLAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Aprende en Video
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                ¿Qué es Health Green World y cómo funciona en Panamá?
              </h2>
              <p className="text-[18px] text-stone-300 leading-relaxed">
                Descubre en este video explicativo cómo la empresa fundada por la Dra. Li Deming ha expandido el bienestar a más de 50 naciones, con laboratorios de investigación propios y un modelo comercial justo de Ganancia Mutua 50-50.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20ver%20los%20videos%20informativos%20de%20HGW`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Solicitar Video Explicativo por WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate('/acerca-de')}
                  className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-xs border border-stone-700 transition-colors cursor-pointer"
                >
                  Conocer más acerca de HGW
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-stone-700 shadow-2xl bg-stone-950 flex items-center justify-center group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
                  alt="Presentación HGW Panamá"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute w-16 h-16 rounded-full bg-emerald-600 group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-xs text-white px-3 py-1 rounded-md">
                  Presentación Oficial HGW Panamá 2026
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BUSINESS CALLOUT: PLAN 50-50 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Oportunidad de Emprendimiento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Por qué el Plan de Ganancia Mutua HGW es Diferente?
            </h2>
            <p className="text-[18px] text-emerald-100 leading-relaxed">
              En los sistemas tradicionales, solo la cima gana. En HGW, <strong>el 50% de las comisiones de equipo se reparten en partes iguales</strong> entre patrocinador y socio, con solo 10 pts de activación mensual y sin degradación de rangos.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate('/servicios')}
              className="px-6 py-3.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-sm transition-colors shadow-md text-center cursor-pointer"
            >
              Ver los 7 Bonos HGW
            </button>
            <a
              href={DISTRIBUTOR_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors text-center shadow-md border border-emerald-400/30"
            >
              Afiliarse Ahora
            </a>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
            Experiencias Reales
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Lo que dicen nuestros clientes y distribuidores en Panamá
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-[17px] text-stone-700 italic leading-relaxed">
                "La faja lumbar de turmalina me cambió la vida. Trabajo todo el día sentada en una oficina en Ciudad de Panamá y los dolores de espalda desaparecieron a los 20 minutos de usarla. Además el envío por Servientrega llegó al día siguiente."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                MP
              </div>
              <div>
                <p className="font-bold text-xs text-stone-900">María Pérez</p>
                <p className="text-[11px] text-stone-400">San Francisco, Panamá</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-[17px] text-stone-700 italic leading-relaxed">
                "El café con Ganoderma y el té Pro Shaping Tea son insuperables. Tengo energía estable todo el día sin acidez estomacal. Yamilka me asesoró con mucha amabilidad y paciencia."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                CG
              </div>
              <div>
                <p className="font-bold text-xs text-stone-900">Carlos González</p>
                <p className="text-[11px] text-stone-400">David, Chiriquí</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-[17px] text-stone-700 italic leading-relaxed">
                "Me afilié con el paquete Master obteniendo el 52% de descuento. El bono de ganancia mutua realmente se cumple y los 10 pts mensuales son súper fáciles de mantener."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                LR
              </div>
              <div>
                <p className="font-bold text-xs text-stone-900">Lic. Roberto Chen</p>
                <p className="text-[11px] text-stone-400">La Chorrera, Panamá Oeste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST BLOG PREVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Blog & Salud Natural
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
              Artículos & Guías de Bienestar
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/blog')}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesList.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate('/blog')}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-16/9 overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-2">
                    <span className="text-emerald-700 font-semibold">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. DISTRIBUTOR SPOTLIGHT: YAMILKA BATISTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-600/30 bg-stone-900 relative">
              <img
                src={DISTRIBUTOR_INFO.photo}
                alt="Yamilka Batista - Distribuidor Independiente HGW Santiago de Veraguas"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>{DISTRIBUTOR_INFO.location}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              Atención Personalizada por {DISTRIBUTOR_INFO.name}
            </h2>
            <p className="text-[18px] text-stone-600 leading-relaxed">
              ¿Tienes dudas sobre la dosificación de los productos con arándanos, la faja de turmalina o cómo generar ingresos con el <strong>Plan de Ganancia Mutua 50-50</strong>? Contáctame directamente por WhatsApp y te asesoraré con gusto.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20asesoría%20sobre%20los%20productos%20HGW`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Chatear al {DISTRIBUTOR_INFO.phone}</span>
              </a>
              <button
                onClick={() => onNavigate('/acerca-de')}
                className="px-6 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs border border-stone-300 transition-colors cursor-pointer"
              >
                Conocer la Historia de Yamilka
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OFFICIAL DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-500 leading-relaxed">
          <p className="font-semibold text-stone-700 mb-1">Aviso Legal:</p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>
      </section>
    </div>
  );
};
