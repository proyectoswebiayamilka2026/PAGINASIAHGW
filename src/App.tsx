import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { CatalogModal } from './components/CatalogModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ProductsView } from './views/ProductsView';
import { ProductDetailView } from './views/ProductDetailView';
import { CatalogView } from './views/CatalogView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';
import { AdminLoginView } from './views/AdminLoginView';
import { AdminDashboardView } from './views/AdminDashboardView';
import { Product } from './data/hgwData';
import { UserAccount, getActiveUser, logoutUser, getStoredProducts, getStoredArticles } from './services/storeService';
import { ArticleDetailView } from './views/ArticleDetailView';

export default function App() {
  // Current route synced with window.location.pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path && path !== '' ? path : '/';
    }
    return '/';
  });

  // Current logged in administrator/editor
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(() => getActiveUser());

  // Dynamic products list from localStorage + catalog
  const [productsList, setProductsList] = useState<Product[]>(() => getStoredProducts());

  const handleRefreshProducts = () => {
    setProductsList(getStoredProducts());
  };

  // State for Cart Drawer
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hgw_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // State for Catalog Modal
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hgw_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Content Protection: Disable right-click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Handle browser back/forward button navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`✓ "${product.name}" añadido al pedido`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Carrito vaciado');
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  // View router
  const renderView = () => {
    // Admin Login Route
    if (currentPath === '/admin/login' || currentPath === '/login') {
      return (
        <AdminLoginView
          onLoginSuccess={(user) => {
            setCurrentUser(user);
            showToast(`Sesión iniciada como ${user.name}`);
          }}
          onNavigate={handleNavigate}
        />
      );
    }

    // Admin Dashboard Route
    if (currentPath === '/admin') {
      if (!currentUser) {
        return (
          <AdminLoginView
            onLoginSuccess={(user) => {
              setCurrentUser(user);
              showToast(`Sesión iniciada como ${user.name}`);
            }}
            onNavigate={handleNavigate}
          />
        );
      }

      return (
        <AdminDashboardView
          currentUser={currentUser}
          onLogout={() => {
            logoutUser();
            setCurrentUser(null);
            showToast('Has cerrado sesión');
            handleNavigate('/');
          }}
          onNavigate={handleNavigate}
          onProductUpdated={handleRefreshProducts}
        />
      );
    }

    // Check if path is an individual article page: /articulo/:id or /blog/:id
    const articleMatch = currentPath.match(/^\/(?:articulo|blog)\/([^/?#]+)/);
    if (articleMatch) {
      const articleSlug = articleMatch[1];
      const articles = getStoredArticles();
      const article = articles.find((a) => a.id === articleSlug);
      if (article) {
        return <ArticleDetailView article={article} onNavigate={handleNavigate} />;
      }
      return (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Aviso de Navegación
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900">Artículo No Encontrado</h2>
          <p className="text-[18px] text-stone-600 max-w-md mx-auto leading-relaxed">
            El artículo solicitado "{articleSlug}" no existe en el blog o ha cambiado de enlace.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNavigate('/blog')}
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors cursor-pointer shadow-md"
            >
              Ver Todos los Artículos
            </button>
          </div>
        </div>
      );
    }

    // Check if path is an individual product page: /producto/:id or /productos/:id
    const productMatch = currentPath.match(/^\/producto[s]?\/([^/?#]+)/);
    if (productMatch) {
      const productSlug = productMatch[1];
      const product = productsList.find((p) => p.id === productSlug);
      if (product) {
        return (
          <ProductDetailView
            product={product}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        );
      }
      return (
        <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Aviso de Navegación
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900">Producto No Encontrado</h2>
          <p className="text-[18px] text-stone-600 max-w-md mx-auto leading-relaxed">
            El producto solicitado "{productSlug}" no existe en el catálogo actual o ha cambiado de enlace.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNavigate('/productos')}
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors cursor-pointer shadow-md"
            >
              Explorar Catálogo de Productos
            </button>
          </div>
        </div>
      );
    }

    switch (currentPath) {
      case '/acerca-de':
        return <AboutView onNavigate={handleNavigate} />;
      case '/servicios':
        return <ServicesView onNavigate={handleNavigate} />;
      case '/productos':
        return (
          <ProductsView
            onSelectProduct={(p) => handleNavigate(`/producto/${p.id}`)}
            onAddToCart={handleAddToCart}
            onOpenCatalog={() => setCatalogModalOpen(true)}
          />
        );
      case '/catalogo':
        return <CatalogView onNavigate={handleNavigate} />;
      case '/blog':
        return <BlogView onNavigate={handleNavigate} />;
      case '/contacto':
        return <ContactView />;
      case '/':
      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProduct={(p) => handleNavigate(`/producto/${p.id}`)}
            onAddToCart={handleAddToCart}
            onOpenCatalog={() => setCatalogModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-700 selection:text-white">
      {/* Dynamic Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-stone-700 animate-in fade-in slide-in-from-bottom-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenCatalog={() => setCatalogModalOpen(true)}
        currentUser={currentUser}
      />

      {/* Main Body View */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCatalog={() => setCatalogModalOpen(true)}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Catalog Flipbook Modal */}
      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        onNavigateToProducts={() => handleNavigate('/productos')}
        onNavigateToProduct={(path) => handleNavigate(path)}
      />

      {/* Global WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
