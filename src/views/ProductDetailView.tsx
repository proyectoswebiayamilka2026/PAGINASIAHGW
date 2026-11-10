import React, { useState } from 'react';
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  MessageCircle,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  Copy,
  CheckCheck,
  ExternalLink,
  ChevronRight,
  Plus,
  Minus,
  Heart,
  Package,
  Layers,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';
import { Product, PRODUCTS, DISTRIBUTOR_INFO } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';
import { ProductCard } from '../components/ProductCard';
import { FormattedDescription } from '../components/FormattedDescription';

interface ProductDetailViewProps {
  product: Product;
  onNavigate: (path: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onNavigate,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'descripcion' | 'beneficios' | 'ingredientes' | 'uso' | 'envios'>('descripcion');
  const [imgError, setImgError] = useState(false);

  // Safe fallback SVG image if external image fails
  const fallbackImage = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23f1f5f9"/><text x="50%" y="45%" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="%23047857">HGW Panamá</text><text x="50%" y="55%" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%2364748b">${encodeURIComponent(product.name)}</text></svg>`;

  const handleCopyLink = () => {
    const fullUrl = window.location.href;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Yamilka, deseo ordenar *${quantity} unidad(es)* de *${product.name}* ($${(product.price * quantity).toFixed(2)} USD). ¿Cómo coordinamos el pago por Yappy/Banco General y envío por Servientrega?`
    );
    window.open(`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=${text}`, '_blank');
  };

  // Find related products in same category or fallback to top products
  const relatedProducts = PRODUCTS
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const fallbackRelated = relatedProducts.length < 4
    ? PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4)
    : relatedProducts;

  // Schema.org Structured Data JSON-LD for rich product indexing
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [product.image],
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: 'Health Green World (HGW)',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Person',
        name: DISTRIBUTOR_INFO.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
    },
  };

  return (
    <div className="space-y-12 pb-24">
      <SeoHead
        title={`${product.name} | ${DISTRIBUTOR_INFO.pageTitle}`}
        description={`${product.shortDescription.slice(0, 155)}... Precio oficial: $${product.price.toFixed(2)} USD. Envío Servientrega a todo Panamá.`}
        path={`/producto/${product.id}`}
        ogImage={product.image}
      />

      {/* JSON-LD Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-stone-500">
            <li>
              <button
                onClick={() => onNavigate('/')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Inicio
              </button>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </li>
            <li>
              <button
                onClick={() => onNavigate('/productos')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Productos
              </button>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </li>
            <li className="text-stone-400">{product.categoryLabel}</li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </li>
            <li className="font-semibold text-emerald-950 truncate max-w-xs sm:max-w-md">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Product Visuals & Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-6 sm:p-10 flex items-center justify-center relative overflow-hidden min-h-[380px] sm:min-h-[480px]">
              
              {/* Category & Tag badges */}
              <div className="absolute top-5 left-5 z-10 flex flex-col gap-2">
                <span className="bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.categoryLabel}
                </span>
                {product.tag && (
                  <span className="bg-stone-900 text-amber-300 text-xs font-semibold px-3 py-0.5 rounded-md shadow-xs">
                    ★ {product.tag}
                  </span>
                )}
              </div>

              {/* Availability Badge */}
              <div className="absolute top-5 right-5 z-10 bg-white/95 backdrop-blur-xs font-bold text-xs px-3 py-1.5 rounded-full shadow-xs border border-stone-200 flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${product.inStock !== false ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                <span className={product.inStock !== false ? 'text-emerald-900 font-extrabold' : 'text-amber-900 font-bold'}>
                  {product.inStock !== false ? '● En Stock (Disponible)' : '○ Agotado'}
                </span>
              </div>

              {/* Main Product Image */}
              <img
                src={imgError ? fallbackImage : product.image}
                alt={product.name}
                onError={() => setImgError(true)}
                className="w-full h-full max-h-[420px] object-contain object-center transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Quick Share / Copy URL Tool */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-stone-100 rounded-2xl border border-stone-200 text-xs">
              <span className="text-stone-600 font-medium text-center sm:text-left">
                Enlace directo y permanente para compartir:
              </span>
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold border border-stone-300 shadow-xs flex items-center gap-2 transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">¡Enlace Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-500" />
                    <span>Copiar Enlace del Producto</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust and Delivery Guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 flex items-center gap-3">
                <Truck className="w-6 h-6 text-emerald-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-stone-900">Envíos Servientrega</h4>
                  <p className="text-[11px] text-stone-500">24 a 48h a todo Panamá</p>
                </div>
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-xs text-stone-900">100% Original HGW</h4>
                  <p className="text-[11px] text-stone-500">Certificación GMP / Halal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details, Pricing & Purchase Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Title & Star Reviews */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-sm font-bold text-stone-800">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-stone-400">({product.reviewsCount} reseñas verificadas en Panamá)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Precio Público:
                </span>
                <span className="text-3xl sm:text-4xl font-black text-emerald-950">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm font-semibold text-stone-600">USD</span>
                <span className="ml-auto text-xs font-bold px-3 py-1 rounded-md bg-white text-emerald-800 border border-emerald-300 shadow-2xs flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${product.inStock !== false ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  <span>{product.inStock !== false ? 'Disponible para Entrega' : 'Bajo Pedido'}</span>
                </span>
              </div>
            </div>

            {/* Short Excerpt / Description Paragraph (18px typography as requested) */}
            <p className="text-[18px] text-stone-700 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Quantity Selector & Add to Cart / WhatsApp buttons */}
            <div className="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                
                {/* Quantity */}
                <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                    aria-label="Disminuir cantidad"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 font-bold text-stone-900 text-base">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    added
                      ? 'bg-emerald-900 text-white'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-300" />
                      <span>¡Añadido al Carrito!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Añadir al Carrito (${(product.price * quantity).toFixed(2)} USD)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Ordering */}
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Pedir por WhatsApp a Yamilka Batista ({DISTRIBUTOR_INFO.phone})</span>
              </button>

              {/* Affiliate link notice */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">¿Quieres comprar con hasta 52% de descuento?</span>
                <a
                  href={DISTRIBUTOR_INFO.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-900 underline inline-flex items-center gap-1"
                >
                  <span>Afiliarme a HGW</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Distributor Attribution Box */}
            <div className="p-4 rounded-2xl bg-stone-100/90 border border-stone-200 text-xs text-stone-600 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-emerald-500 shrink-0 bg-stone-200">
                  <img
                    src={DISTRIBUTOR_INFO.photo}
                    alt={DISTRIBUTOR_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-sm">{DISTRIBUTOR_INFO.name}</p>
                  <p className="text-emerald-800 font-semibold">{DISTRIBUTOR_INFO.title}</p>
                  <p className="text-stone-500 text-[11px]">{DISTRIBUTOR_INFO.location}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 space-y-1">
                <p>
                  <strong>Patrocinador Oficial:</strong>{' '}
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-stone-200 font-bold text-emerald-800">
                    {DISTRIBUTOR_INFO.sponsorUsername}
                  </span>
                </p>
                <p>
                  WhatsApp directo: <a href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">{DISTRIBUTOR_INFO.phone}</a>
                </p>
                <p>
                  Tienda Oficial HGW Online:{' '}
                  <a
                    href={DISTRIBUTOR_INFO.officialOnlineStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-900 font-semibold underline inline-flex items-center gap-1"
                  >
                    <span>Ver en healthgreenworld.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
                <p className="text-[11px] text-stone-500 pt-1">
                  Aceptamos Yappy de Banco General, transferencias ACH y depósito directo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Deep-Dive Specifications & Details Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
          
          {/* Tab Navigation Header */}
          <div className="flex border-b border-stone-200 overflow-x-auto bg-stone-50/70 scrollbar-none">
            <button
              onClick={() => setActiveTab('descripcion')}
              className={`py-4 px-6 text-sm font-bold whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeTab === 'descripcion'
                  ? 'border-emerald-700 text-emerald-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              Descripción Detallada
            </button>

            <button
              onClick={() => setActiveTab('beneficios')}
              className={`py-4 px-6 text-sm font-bold whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeTab === 'beneficios'
                  ? 'border-emerald-700 text-emerald-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              Beneficios Clave ({product.benefits.length})
            </button>

            <button
              onClick={() => setActiveTab('ingredientes')}
              className={`py-4 px-6 text-sm font-bold whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeTab === 'ingredientes'
                  ? 'border-emerald-700 text-emerald-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              Ingredientes & Componentes
            </button>

            <button
              onClick={() => setActiveTab('uso')}
              className={`py-4 px-6 text-sm font-bold whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeTab === 'uso'
                  ? 'border-emerald-700 text-emerald-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              Modo de Uso
            </button>

            <button
              onClick={() => setActiveTab('envios')}
              className={`py-4 px-6 text-sm font-bold whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
                activeTab === 'envios'
                  ? 'border-emerald-700 text-emerald-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              Envíos y Pagos Panamá
            </button>
          </div>

          {/* Tab Body Content */}
          <div className="p-6 sm:p-10">
            {activeTab === 'descripcion' && (
              <div className="space-y-4 max-w-4xl">
                <h3 className="text-xl font-bold text-stone-900">
                  Acerca de {product.name}
                </h3>
                {/* Rich Formatted Description with Subtitles, Paragraphs, and Bullets */}
                <FormattedDescription description={product.fullDescription} />
              </div>
            )}

            {activeTab === 'beneficios' && (
              <div className="space-y-4 max-w-4xl">
                <h3 className="text-xl font-bold text-stone-900 mb-6">
                  Beneficios Principales de {product.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-emerald-700" />
                      </div>
                      <p className="text-[17px] text-stone-800 leading-snug">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ingredientes' && (
              <div className="space-y-4 max-w-4xl">
                <h3 className="text-xl font-bold text-stone-900 mb-4">
                  Componentes & Fórmulas Activas
                </h3>
                <p className="text-[18px] text-stone-700 leading-relaxed mb-6">
                  Health Green World utiliza extractos botánicos de alta pureza y nanotecnología mineral libre de químicos nocivos:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-stone-800 font-medium"
                    >
                      <p className="text-[17px] text-stone-800 leading-snug">
                        {ing}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'uso' && (
              <div className="space-y-4 max-w-4xl">
                <h3 className="text-xl font-bold text-stone-900 mb-4">
                  Recomendaciones de Uso y Aplicación
                </h3>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200">
                  <p className="text-[18px] text-stone-800 leading-relaxed">
                    {product.usage}
                  </p>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700" />
                  <span>
                    Conservar en un lugar fresco y seco, lejos de la luz solar directa. Mantener fuera del alcance de los niños pequeños.
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'envios' && (
              <div className="space-y-6 max-w-4xl">
                <h3 className="text-xl font-bold text-stone-900">
                  Métodos de Entrega y Formas de Pago en Panamá
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <Truck className="w-7 h-7 text-emerald-700 mb-2" />
                    <h4 className="font-bold text-stone-900 text-base">Envíos por Servientrega</h4>
                    <p className="text-[17px] text-stone-700 leading-relaxed">
                      Llegamos a Ciudad de Panamá, Panamá Oeste, Chiriquí, Coclé, Veraguas, Herrera, Los Santos y Colón en un lapso de 24 a 48 horas hábiles con número de rastreo.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <Sparkles className="w-7 h-7 text-emerald-700 mb-2" />
                    <h4 className="font-bold text-stone-900 text-base">Pagos Seguros Inmediatos</h4>
                    <p className="text-[17px] text-stone-700 leading-relaxed">
                      Aceptamos Yappy de Banco General, transferencias ACH de cualquier banco local y depósito bancario directo.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-base">¿Deseas atención personalizada?</h4>
                    <p className="text-xs text-emerald-200">
                      Escríbenos directamente a WhatsApp y coordinamos tu pedido al instante.
                    </p>
                  </div>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs transition-colors shrink-0 cursor-pointer"
                  >
                    Chatear por WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Related Products Carousel / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              También te puede interesar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Otros Productos de {product.categoryLabel}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/productos')}
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            <span>Ver todo el catálogo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fallbackRelated.map((relProd) => (
            <ProductCard
              key={relProd.id}
              product={relProd}
              onSelect={(p) => onNavigate(`/producto/${p.id}`)}
              onAddToCart={(p) => onAddToCart(p, 1)}
            />
          ))}
        </div>
      </section>

      {/* Official Independent Distributor Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-stone-600 text-xs leading-relaxed">
          <p className="font-bold text-stone-800 mb-1">Aviso Legal y Descargo de Responsabilidad (Disclaimer Oficial):</p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>
      </section>

      {/* Back to Products CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">
              ¿Buscabas otro producto de Health Green World?
            </h3>
            <p className="text-sm text-stone-400">
              Explora nuestra colección completa de productos para salud, belleza y bienestar.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/productos')}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer shrink-0 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Tienda de Productos</span>
          </button>
        </div>
      </section>

    </div>
  );
};
