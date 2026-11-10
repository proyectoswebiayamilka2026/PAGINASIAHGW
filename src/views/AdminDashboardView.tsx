import React, { useState, useEffect } from 'react';
import {
  Package,
  FileText,
  Users,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  XCircle,
  ExternalLink,
  LogOut,
  Save,
  Search,
  Sparkles,
  AlertTriangle,
  RefreshCw,
  Eye,
  Check,
  Calendar,
  Layers,
  Store
} from 'lucide-react';
import {
  UserAccount,
  getUsers,
  updateUserStatus,
  deleteUser,
  getStoredProducts,
  saveProduct,
  deleteStoredProduct,
  getStoredArticles,
  saveArticle,
  deleteStoredArticle,
  logoutUser
} from '../services/storeService';
import { Product, BlogPost, DISTRIBUTOR_INFO } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

interface AdminDashboardViewProps {
  currentUser: UserAccount;
  onLogout: () => void;
  onNavigate: (path: string) => void;
  onProductUpdated?: () => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  currentUser,
  onLogout,
  onNavigate,
  onProductUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'articles' | 'users'>('products');

  // Stored state
  const [products, setProducts] = useState<Product[]>([]);
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [users, setUsers] = useState<UserAccount[]>([]);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  // Product Form Modal state
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Article Form Modal state
  const [editingArticle, setEditingArticle] = useState<BlogPost | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  // Load all data
  const refreshData = () => {
    setProducts(getStoredProducts());
    setArticles(getStoredArticles());
    setUsers(getUsers());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const notify = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 1. PRODUCT HANDLERS
  const handleOpenAddProduct = () => {
    setEditingProduct({
      id: `prod-${Date.now()}`,
      name: '',
      category: 'alimentos',
      categoryLabel: 'Cafés, Té & Snacks',
      price: 20.0,
      inStock: true,
      rating: 5.0,
      reviewsCount: 1,
      tag: 'Nuevo',
      shortDescription: '',
      fullDescription: '',
      benefits: ['Fórmula 100% natural', 'Calidad certificada'],
      ingredients: ['Ingredientes naturales seleccionados'],
      usage: 'Consumir diariamente según la recomendación del empaque.',
      image: 'https://hgwpanama.com/wp-content/uploads/2026/10/Jabon-de-artemisa.jpeg',
      featured: false,
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (prod: Product) => {
    setEditingProduct({ ...prod });
    setIsProductModalOpen(true);
  };

  const handleSaveProductForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct || !editingProduct.name.trim()) return;

    // Ensure valid id/slug
    let slug = editingProduct.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (!slug) slug = `prod-${Date.now()}`;

    const updated = {
      ...editingProduct,
      id: slug,
      price: Number(editingProduct.price) || 0,
      inStock: editingProduct.inStock !== false,
    };

    saveProduct(updated);
    refreshData();
    setIsProductModalOpen(false);
    notify(`✓ Producto "${updated.name}" guardado permanentemente.`);
    if (onProductUpdated) onProductUpdated();
  };

  const handleDeleteProduct = (productId: string, productName: string) => {
    if (window.confirm(`¿Estás seguro de eliminar el producto "${productName}"?`)) {
      deleteStoredProduct(productId);
      refreshData();
      notify(`Producto "${productName}" eliminado.`);
      if (onProductUpdated) onProductUpdated();
    }
  };

  const handleToggleStock = (product: Product) => {
    const newStock = product.inStock === false;
    const updated = { ...product, inStock: newStock };
    saveProduct(updated);
    refreshData();
    notify(`Stock de "${product.name}": ${newStock ? 'En Stock' : 'Agotado'}`);
    if (onProductUpdated) onProductUpdated();
  };

  // 2. ARTICLE HANDLERS
  const handleOpenAddArticle = () => {
    setEditingArticle({
      id: `art-${Date.now()}`,
      title: '',
      slug: `noticia-${Date.now()}`,
      author: 'Yamilka Batista',
      authorPhoto: DISTRIBUTOR_INFO.photo,
      category: 'Actividades en Veraguas',
      date: new Date().toLocaleDateString('es-PA', { day: 'numeric', month: 'short', year: 'numeric' }),
      readTime: '3 min',
      excerpt: '',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      videoUrl: '',
      content: [''],
    });
    setIsArticleModalOpen(true);
  };

  const handleOpenEditArticle = (art: BlogPost) => {
    setEditingArticle({ ...art });
    setIsArticleModalOpen(true);
  };

  const handleSaveArticleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle || !editingArticle.title.trim()) return;

    const slug = editingArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const updated: BlogPost = {
      ...editingArticle,
      id: editingArticle.id || `art-${Date.now()}`,
      slug: slug || `noticia-${Date.now()}`,
    };

    saveArticle(updated);
    refreshData();
    setIsArticleModalOpen(false);
    notify(`✓ Artículo "${updated.title}" guardado permanentemente.`);
  };

  const handleDeleteArticle = (articleId: string, title: string) => {
    if (window.confirm(`¿Estás seguro de eliminar la noticia/artículo "${title}"?`)) {
      deleteStoredArticle(articleId);
      refreshData();
      notify(`Artículo eliminado.`);
    }
  };

  // 3. USER MANAGEMENT HANDLERS
  const handleApproveUser = (userId: string, userName: string) => {
    updateUserStatus(userId, 'approved');
    refreshData();
    notify(`✓ Cuenta de "${userName}" APROBADA con éxito.`);
  };

  const handleRejectUser = (userId: string, userName: string) => {
    if (window.confirm(`¿Rechazar el acceso a ${userName}?`)) {
      updateUserStatus(userId, 'rejected');
      refreshData();
      notify(`Cuenta de "${userName}" rechazada.`);
    }
  };

  const handleDeleteUserAccount = (userId: string) => {
    if (window.confirm('¿Eliminar definitivamente este usuario?')) {
      deleteUser(userId);
      refreshData();
      notify('Usuario eliminado.');
    }
  };

  const filteredProducts = products.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    return !q || p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q);
  });

  const pendingUsers = users.filter((u) => u.status === 'pending');
  const approvedUsers = users.filter((u) => u.status === 'approved');

  return (
    <div className="min-h-screen bg-stone-100/60 pb-24">
      <SeoHead
        title="Panel de Administración | HGW Santiago de Veraguas"
        description="Panel de control para añadir productos, publicar noticias y aprobar usuarios de HGW Santiago de Veraguas."
        path="/admin"
      />

      {/* Floating feedback alert */}
      {feedback && (
        <div className="fixed top-6 right-6 z-50 bg-stone-900 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-2xl border border-emerald-500 animate-in fade-in flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Top Banner & Profile Bar */}
      <div className="bg-stone-900 text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-400 shrink-0 bg-stone-800">
              <img
                src={DISTRIBUTOR_INFO.photo}
                alt="Yamilka Batista"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {currentUser.role === 'admin' ? 'Administrador Oficial' : 'Editor Autorizado'}
                </span>
                <span className="text-xs text-stone-400">Santiago de Veraguas, Panamá</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {currentUser.name}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/')}
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-colors inline-flex items-center gap-1.5 border border-stone-700 cursor-pointer"
            >
              <Store className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ver Tienda Pública</span>
            </button>

            <button
              onClick={() => {
                logoutUser();
                onLogout();
                onNavigate('/');
              }}
              className="px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-bold transition-colors inline-flex items-center gap-1.5 border border-red-800 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Cerrar Sesión</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Admin Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl p-2 border border-stone-200 shadow-sm flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'products'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Productos ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Noticias & Actividades ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer relative ${
              activeTab === 'users'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Aprobación de Usuarios</span>
            {pendingUsers.length > 0 && (
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black text-[10px] animate-pulse">
                {pendingUsers.length} pendientes
              </span>
            )}
          </button>
        </div>

        {/* TAB 1: PRODUCTS MANAGEMENT */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar producto por nombre o categoría..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-emerald-600 shadow-xs"
                />
              </div>

              <button
                type="button"
                onClick={handleOpenAddProduct}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Añadir Producto Nuevo</span>
              </button>
            </div>

            {/* Products Table/Grid */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-4 px-6">Producto</th>
                      <th className="py-4 px-4">Categoría</th>
                      <th className="py-4 px-4">Precio (USD)</th>
                      <th className="py-4 px-4">Disponibilidad</th>
                      <th className="py-4 px-6 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredProducts.map((p) => {
                      const inStock = p.inStock !== false;
                      return (
                        <tr key={p.id} className="hover:bg-stone-50/60 transition-colors">
                          <td className="py-3 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 p-1 flex items-center justify-center shrink-0">
                                <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                              </div>
                              <div>
                                <h4 className="font-bold text-stone-900 leading-snug">{p.name}</h4>
                                <span className="text-[11px] text-stone-400">ID: {p.id}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-medium">
                              {p.categoryLabel}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-extrabold text-emerald-900">
                            ${p.price.toFixed(2)}
                          </td>
                          <td className="py-3 px-4">
                            <button
                              type="button"
                              onClick={() => handleToggleStock(p)}
                              className={`px-3 py-1 rounded-full font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer border ${
                                inStock
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                                  : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                              }`}
                              title="Clic para cambiar disponibilidad"
                            >
                              <span className={`w-2 h-2 rounded-full ${inStock ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                              <span>{inStock ? 'En Stock' : 'Agotado'}</span>
                            </button>
                          </td>
                          <td className="py-3 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <a
                                href={`/producto/${p.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                                title="Ver página individual del producto"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                              <button
                                type="button"
                                onClick={() => handleOpenEditProduct(p)}
                                className="p-2 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                                title="Editar producto"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteProduct(p.id, p.name)}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                title="Eliminar producto"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ARTICLES, NEWS & ACTIVITIES */}
        {activeTab === 'articles' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Noticias, Artículos & Actividades HGW
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Publica eventos en Santiago de Veraguas, capacitaciones y artículos de salud.
                </p>
              </div>

              <button
                type="button"
                onClick={handleOpenAddArticle}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center gap-2 shadow-sm transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Publicar Noticia o Actividad</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <div key={art.id} className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="aspect-16/9 bg-stone-100 overflow-hidden">
                      <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-stone-400">
                        <span className="font-bold text-emerald-800">{art.category}</span>
                        <span>{art.date}</span>
                      </div>
                      <h4 className="font-bold text-stone-900 text-base leading-snug">{art.title}</h4>
                      <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed">{art.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
                    <span className="text-[11px] text-stone-400">Por {art.author}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleOpenEditArticle(art)}
                        className="p-2 text-stone-600 hover:text-emerald-800 hover:bg-stone-100 rounded-lg cursor-pointer transition-colors"
                        title="Editar artículo"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteArticle(art.id, art.title)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
                        title="Eliminar artículo"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: USER APPROVAL MANAGEMENT */}
        {activeTab === 'users' && (
          <div className="space-y-8">
            
            {/* Pending Approvals Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Cuentas Pendientes de Aprobación
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Solo los usuarios aprobados por Yamilka Batista pueden ingresar al panel administrativo.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                  {pendingUsers.length} en espera
                </span>
              </div>

              {pendingUsers.length === 0 ? (
                <div className="py-8 text-center bg-stone-50 rounded-2xl border border-stone-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-stone-700 font-semibold text-sm">No hay registros pendientes en este momento.</p>
                  <p className="text-xs text-stone-400 mt-1">Todos los usuarios registrados han sido evaluados.</p>
                </div>
              ) : (
                <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
                  {pendingUsers.map((u) => (
                    <div key={u.id} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-amber-50/30">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">{u.name}</h4>
                        <div className="flex flex-wrap gap-3 text-xs text-stone-500 mt-1">
                          <span>Correo: <strong>{u.email}</strong></span>
                          {u.phone && <span>Tel: {u.phone}</span>}
                          <span>Registrado: {u.createdAt}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleApproveUser(u.id, u.name)}
                          className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Aprobar Cuenta</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRejectUser(u.id, u.name)}
                          className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-red-50 text-stone-600 hover:text-red-700 font-semibold text-xs transition-colors cursor-pointer border border-stone-200"
                        >
                          Rechazar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Approved Users List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-stone-900">
                Usuarios con Acceso Autorizado ({approvedUsers.length})
              </h3>

              <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden">
                {approvedUsers.map((u) => (
                  <div key={u.id} className="p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                        {u.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-xs text-stone-900">{u.name}</p>
                        <p className="text-[11px] text-stone-400">{u.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        {u.role === 'admin' ? 'Super Administrador' : 'Editor'}
                      </span>
                      {u.id !== currentUser.id && (
                        <button
                          type="button"
                          onClick={() => handleDeleteUserAccount(u.id)}
                          className="p-1.5 text-stone-400 hover:text-red-600 rounded-lg"
                          title="Eliminar usuario"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* MODAL 1: ADD / EDIT PRODUCT FORM */}
      {isProductModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
            
            <div className="p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base sm:text-lg">
                  {editingProduct.id.startsWith('prod-') ? 'Añadir Nuevo Producto' : 'Editar Producto'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="text-stone-400 hover:text-white p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProductForm} className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Nombre del Producto *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    placeholder="ej. Café Ganoderma HGW"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Categoría *</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => {
                      const cat = e.target.value as any;
                      const labels: Record<string, string> = {
                        alimentos: 'Alimentos',
                        'cuidado-personal': 'Cuidado personal',
                        accesorios: 'Accesorios funcionales',
                        equipos: 'Equipo',
                        licores: 'Licores',
                        suplementos: 'Suplementos',
                        'belleza-cosmeticos': 'Belleza y cosméticos',
                      };
                      setEditingProduct({
                        ...editingProduct,
                        category: cat,
                        categoryLabel: labels[cat] || 'General',
                      });
                    }}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 cursor-pointer"
                  >
                    <option value="alimentos">Alimentos</option>
                    <option value="cuidado-personal">Cuidado personal</option>
                    <option value="accesorios">Accesorios funcionales</option>
                    <option value="equipos">Equipo</option>
                    <option value="licores">Licores</option>
                    <option value="suplementos">Suplementos</option>
                    <option value="belleza-cosmeticos">Belleza y cosméticos</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Precio Público (USD) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })}
                    placeholder="20.00"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Disponibilidad en Stock *</label>
                  <select
                    value={editingProduct.inStock !== false ? 'yes' : 'no'}
                    onChange={(e) => setEditingProduct({ ...editingProduct, inStock: e.target.value === 'yes' })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 cursor-pointer"
                  >
                    <option value="yes">● En Stock (Disponible)</option>
                    <option value="no">○ Agotado / Sobre Pedido</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Etiqueta Especial (Opcional)</label>
                  <input
                    type="text"
                    value={editingProduct.tag || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, tag: e.target.value })}
                    placeholder="ej. Destacado, Nuevo"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">URL de la Imagen *</label>
                <div className="flex flex-col gap-2">
                  <input
                    type="url"
                    required={!editingProduct.image}
                    value={editingProduct.image}
                    onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                    placeholder="O pega una URL aquí..."
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, (url) => setEditingProduct({ ...editingProduct, image: url }))}
                    className="w-full text-xs text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Resumen / Descripción Corta *</label>
                <textarea
                  rows={2}
                  required
                  value={editingProduct.shortDescription}
                  onChange={(e) => setEditingProduct({ ...editingProduct, shortDescription: e.target.value })}
                  placeholder="Breve resumen de 1 a 2 oraciones para las tarjetas de producto..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  Descripción Detallada (Con subtítulos, párrafos y viñetas) *
                </label>
                <p className="text-xs text-stone-400 mb-1">
                  Puedes incluir subtítulos como "Beneficios:", "Modo de uso:", "Componentes:" y viñetas iniciando con "• ".
                </p>
                <textarea
                  rows={6}
                  required
                  value={editingProduct.fullDescription}
                  onChange={(e) => setEditingProduct({ ...editingProduct, fullDescription: e.target.value })}
                  placeholder="Escribe la descripción completa del producto..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Modo de Uso Sugerido</label>
                <textarea
                  rows={2}
                  value={editingProduct.usage}
                  onChange={(e) => setEditingProduct({ ...editingProduct, usage: e.target.value })}
                  placeholder="Consumir o aplicar diariamente..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar Producto en la Página</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* MODAL 2: ADD / EDIT ARTICLE FORM */}
      {isArticleModalOpen && editingArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col">
            
            <div className="p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base sm:text-lg">
                  {editingArticle.id.startsWith('art-') ? 'Publicar Nueva Noticia o Actividad' : 'Editar Noticia'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsArticleModalOpen(false)}
                className="text-stone-400 hover:text-white p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveArticleForm} className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Título de la Noticia o Actividad *</label>
                <input
                  type="text"
                  required
                  value={editingArticle.title}
                  onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                  placeholder="ej. Taller de Salud y Negocio en Santiago de Veraguas"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Categoría</label>
                  <input
                    type="text"
                    value={editingArticle.category}
                    onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                    placeholder="ej. Actividades Veraguas, Salud"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Autor</label>
                  <input
                    type="text"
                    value={editingArticle.author}
                    onChange={(e) => setEditingArticle({ ...editingArticle, author: e.target.value })}
                    placeholder="Yamilka Batista"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Fecha</label>
                  <input
                    type="text"
                    value={editingArticle.date}
                    onChange={(e) => setEditingArticle({ ...editingArticle, date: e.target.value })}
                    placeholder="10 nov 2026"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">URL de Imagen Destacada *</label>
                  <div className="flex flex-col gap-2">
                    <input
                      type="url"
                      required={!editingArticle.image}
                      value={editingArticle.image}
                      onChange={(e) => setEditingArticle({ ...editingArticle, image: e.target.value })}
                      placeholder="O pega una URL aquí..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, (url) => setEditingArticle({ ...editingArticle, image: url }))}
                      className="w-full text-xs text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">URL de Video (YouTube / MP4)</label>
                  <input
                    type="url"
                    value={editingArticle.videoUrl || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, videoUrl: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">URL de Foto de Perfil del Autor</label>
                <input
                  type="url"
                  value={editingArticle.authorPhoto || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, authorPhoto: e.target.value })}
                  placeholder="/assets/aistudio/... o URL de imagen"
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Resumen del Artículo *</label>
                <textarea
                  rows={2}
                  required
                  value={editingArticle.excerpt}
                  onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                  placeholder="Resumen introductorio que invita a leer..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Contenido Completo (Párrafos) *</label>
                <textarea
                  rows={8}
                  required
                  value={editingArticle.content.join('\n\n')}
                  onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value.split('\n\n').filter(Boolean) })}
                  placeholder="Escribe el cuerpo de la noticia. Separa los párrafos con un salto de línea doble..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900"
                />
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsArticleModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Publicar en la Página</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
