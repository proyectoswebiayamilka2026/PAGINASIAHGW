import React, { useState } from 'react';
import { X, Check, Star, ShieldCheck, Sparkles, MessageCircle, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product, DISTRIBUTOR_INFO } from '../data/hgwData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [imgError, setImgError] = useState(false);
  const [activeTab, setActiveTab] = useState<'beneficios' | 'ingredientes' | 'uso'>('beneficios');

  if (!product) return null;

  const fallbackImage = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23f1f5f9"/><text x="50%" y="45%" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="%23047857">HGW Panamá</text><text x="50%" y="55%" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%2364748b">${encodeURIComponent(product.name)}</text></svg>`;

  const handleAddAndClose = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Yamilka, deseo ordenar *${quantity} unidad(es)* de *${product.name}* ($${(product.price * quantity).toFixed(2)} USD). ¿Cómo coordinamos el pago y envío por Servientrega?`
    );
    window.open(`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image */}
        <div className="md:w-5/12 bg-white p-6 relative shrink-0 min-h-[260px] md:min-h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
          <img
            src={imgError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full max-h-[340px] object-contain object-center"
          />
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
            <span className="bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              {product.categoryLabel}
            </span>
            {product.tag && (
              <span className="bg-stone-900/90 text-amber-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                ★ {product.tag}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Rating */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-xs text-stone-600">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-stone-900">{product.rating.toFixed(1)}</span>
                <span className="text-stone-400">({product.reviewsCount} reseñas verificadas)</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight leading-tight">
              {product.name}
            </h2>

            {/* Price Box */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm font-semibold text-stone-500">USD</span>
            </div>

            {/* Detailed Description */}
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Content Tabs */}
            <div className="mt-6">
              <div className="flex border-b border-stone-200 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('beneficios')}
                  className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === 'beneficios'
                      ? 'text-emerald-700 border-b-2 border-emerald-700'
                      : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Beneficios
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ingredientes')}
                  className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === 'ingredientes'
                      ? 'text-emerald-700 border-b-2 border-emerald-700'
                      : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Ingredientes
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('uso')}
                  className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === 'uso'
                      ? 'text-emerald-700 border-b-2 border-emerald-700'
                      : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Modo de Uso
                </button>
              </div>

              <div className="pt-3.5 text-xs text-stone-600">
                {activeTab === 'beneficios' && (
                  <ul className="space-y-2">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'ingredientes' && (
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                )}

                {activeTab === 'uso' && (
                  <p className="bg-stone-50 p-3 rounded-xl border border-stone-200 leading-relaxed text-stone-700">
                    {product.usage}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-5 border-t border-stone-200 space-y-3">
            <div className="flex items-center justify-between gap-4">
              {/* Quantity selector */}
              <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden bg-stone-50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 font-bold text-stone-800 text-sm">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to order cart */}
              <button
                type="button"
                onClick={handleAddAndClose}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors shadow-xs cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Añadir al Carrito (${(product.price * quantity).toFixed(2)})</span>
              </button>
            </div>

            {/* Quick WhatsApp checkout */}
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold text-xs border border-emerald-200 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Pedir directamente por WhatsApp a Yamilka Batista</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
