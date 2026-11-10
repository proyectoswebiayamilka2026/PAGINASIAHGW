import React, { useState } from 'react';
import { Star, Plus, Eye, Check } from 'lucide-react';
import { Product } from '../data/hgwData';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Safe fallback SVG image if external image fails
  const fallbackImage = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f1f5f9"/><text x="50%" y="45%" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23047857">HGW Panamá</text><text x="50%" y="55%" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%2364748b">${encodeURIComponent(product.name)}</text></svg>`;

  const productUrl = `/producto/${product.id}`;

  const handleClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    onSelect(product);
  };

  return (
    <a
      href={productUrl}
      onClick={handleClick}
      className="group bg-white rounded-2xl border border-stone-200/90 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative text-left no-underline block min-w-0"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square sm:aspect-4/3 bg-white p-3.5 overflow-hidden flex items-center justify-center border-b border-stone-100">
        <img
          src={imgError ? fallbackImage : product.image}
          alt={product.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="bg-emerald-700 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              {product.tag}
            </span>
          )}
          {product.status === 'coming-soon' && (
            <span className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm animate-pulse">
              Próximamente
            </span>
          )}
          <span className="bg-stone-900/80 backdrop-blur-xs text-stone-200 text-[10px] font-medium px-2 py-0.5 rounded-md">
            {product.categoryLabel}
          </span>
        </div>

        {/* Availability Badge */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-stone-200 flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${product.inStock !== false ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          <span className={product.inStock !== false ? 'text-emerald-800' : 'text-amber-800'}>
            {product.inStock !== false ? 'En Stock' : 'Agotado'}
          </span>
        </div>
      </div>

      {/* Product Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs font-semibold text-stone-700">{product.rating.toFixed(1)}</span>
            <span className="text-xs text-stone-400">({product.reviewsCount})</span>
          </div>

          {/* Name */}
          <h3 className="font-bold text-stone-900 text-base leading-snug group-hover:text-emerald-800 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Excerpt */}
          <p className="text-sm text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Actions Row */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-stone-400 block font-medium">Precio Público</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-emerald-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-stone-500 font-medium">USD</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className="p-2 rounded-xl text-stone-500 group-hover:text-stone-900 group-hover:bg-stone-100 transition-colors border border-stone-200"
              title="Ver página de producto"
            >
              <Eye className="w-4 h-4" />
            </span>

            <button
              type="button"
              onClick={handleAdd}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                added
                  ? 'bg-emerald-800 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Añadido</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Pedir</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};
