import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, ShoppingBag, FileText, ArrowUpDown, X } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, Product, DISTRIBUTOR_INFO } from '../data/hgwData';
import { getStoredProducts } from '../services/storeService';
import { ProductCard } from '../components/ProductCard';
import { SeoHead } from '../components/SeoHead';

interface ProductsViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenCatalog: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onOpenCatalog,
}) => {
  const [allProducts, setAllProducts] = useState<Product[]>(() => getStoredProducts());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'stock' | 'rating'>('featured');

  useEffect(() => {
    setAllProducts(getStoredProducts());
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.fullDescription.toLowerCase().includes(q) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'stock') return (b.inStock !== false ? 1 : 0) - (a.inStock !== false ? 1 : 0);
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [allProducts, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-10 pb-20">
      <SeoHead
        title={`Productos | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Explora todos los 56 productos originales de Health Green World en Panamá. Café Ganoderma, Arándanos, Turmalina, Té adelgazante, Jabones y Suplementos."
        path="/productos"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold inline-block mb-3">
            Catálogo Completo Panamá · 56 Productos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Productos Health Green World
          </h1>
          <p className="mt-3 text-emerald-100 text-[18px] max-w-xl mx-auto leading-relaxed">
            Ingredientes 100% naturales, tecnología bioenergética y nutrición celular avanzada. Precios al público.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenCatalog}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>Ver Catálogo en Visor Digital Interactivo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre, ingrediente (arándanos, ganoderma, turmalina)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sorter */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-stone-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Ordenar productos"
                className="py-2.5 px-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium focus:outline-hidden focus:border-emerald-600 cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="stock">Disponibilidad: En Stock</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Calificados</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-stone-100">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>
            Mostrando <strong>{filteredProducts.length}</strong> de <strong>{allProducts.length}</strong> productos
          </span>
          {searchQuery && (
            <span>
              Filtrado por: "<strong>{searchQuery}</strong>"
            </span>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-stone-800 text-lg">No encontramos productos con ese término</h3>
            <p className="text-xs text-stone-500 mt-2">
              Prueba buscando términos generales como "café", "té", "turmalina", "crema" o "arándano".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </section>

      {/* Official Independent Distributor Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-stone-600 text-xs leading-relaxed">
          <p className="font-bold text-stone-800 mb-1">Aviso Legal y Descargo de Responsabilidad (Disclaimer Oficial):</p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>
      </section>
    </div>
  );
};
