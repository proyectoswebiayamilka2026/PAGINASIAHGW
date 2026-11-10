import { Product, PRODUCTS, BlogPost, BLOG_POSTS } from '../data/hgwData';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  role: 'admin' | 'editor';
  status: 'approved' | 'pending' | 'rejected';
  createdAt: string;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const DEFAULT_USERS: UserAccount[] = [
  {
    id: 'usr-admin-yamilka',
    name: 'Yamilka Batista (Administrador)',
    email: 'info.yamilka@gmail.com',
    phone: '+507 6778-8375',
    password: 'Clavehgw507g@',
    role: 'admin',
    status: 'approved',
    createdAt: '2026-01-01',
  },
];

// Helper to safely access localStorage
const getItem = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

const setItem = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage error:', e);
  }
};

// 1. USER ACCOUNTS MANAGEMENT
export const getUsers = (): UserAccount[] => {
  const users = getItem<UserAccount[]>('hgw_users', []);
  if (!users || users.length === 0) {
    setItem('hgw_users', DEFAULT_USERS);
    return DEFAULT_USERS;
  }
  return users;
};

export const registerUser = (userData: { name: string; email: string; phone?: string; password?: string }): { success: boolean; message: string; user?: UserAccount } => {
  const users = getUsers();
  const emailClean = userData.email.toLowerCase().trim();

  if (users.some((u) => u.email.toLowerCase().trim() === emailClean)) {
    return { success: false, message: 'Ya existe una cuenta registrada con este correo electrónico.' };
  }

  const newUser: UserAccount = {
    id: `usr-${Date.now()}`,
    name: userData.name.trim(),
    email: emailClean,
    phone: userData.phone?.trim() || '',
    password: userData.password || '123456',
    role: 'editor',
    status: 'pending', // ADMIN MUST APPROVE
    createdAt: new Date().toISOString().split('T')[0],
  };

  const updated = [...users, newUser];
  setItem('hgw_users', updated);

  // Dispatch simulated email notification to admin (info.yamilka@gmail.com)
  const notifications = getItem<AdminNotification[]>('hgw_admin_notifications', []);
  const newNotif: AdminNotification = {
    id: `notif-${Date.now()}`,
    title: 'Nuevo Registro Pendiente',
    message: `Notificación enviada a info.yamilka@gmail.com: El usuario ${newUser.name} (${newUser.email}) solicita aprobación de cuenta.`,
    date: new Date().toLocaleString(),
    read: false,
  };
  setItem('hgw_admin_notifications', [newNotif, ...notifications]);

  return {
    success: true,
    message: 'Cuenta registrada con éxito. Se ha enviado una notificación por correo al Administrador (info.yamilka@gmail.com) para aprobar tu registro.',
    user: newUser,
  };
};

export const getAdminNotifications = (): AdminNotification[] => {
  return getItem<AdminNotification[]>('hgw_admin_notifications', []);
};

export const markNotificationRead = (id: string): void => {
  const notifs = getAdminNotifications();
  setItem('hgw_admin_notifications', notifs.map(n => n.id === id ? { ...n, read: true } : n));
};

export const updateUserStatus = (userId: string, newStatus: 'approved' | 'rejected'): boolean => {
  const users = getUsers();
  const updated = users.map((u) => (u.id === userId ? { ...u, status: newStatus } : u));
  setItem('hgw_users', updated);
  return true;
};

export const deleteUser = (userId: string): boolean => {
  const users = getUsers();
  const updated = users.filter((u) => u.id !== userId);
  setItem('hgw_users', updated);
  return true;
};

// 2. AUTHENTICATION SESSION
export const getActiveUser = (): UserAccount | null => {
  return getItem<UserAccount | null>('hgw_auth_user', null);
};

export const loginUser = (email: string, password?: string): { success: boolean; message: string; user?: UserAccount } => {
  const users = getUsers();
  const emailClean = email.toLowerCase().trim();
  const found = users.find((u) => u.email.toLowerCase().trim() === emailClean);

  if (!found) {
    return { success: false, message: 'No existe ninguna cuenta registrada con este correo.' };
  }

  if (password && found.password && found.password !== password) {
    return { success: false, message: 'La contraseña ingresada es incorrecta.' };
  }

  if (found.status === 'pending') {
    return {
      success: false,
      message: 'Tu cuenta está PENDIENTE DE APROBACIÓN por el Administrador. Notifica a Yamilka Batista para que active tu acceso.',
    };
  }

  if (found.status === 'rejected') {
    return {
      success: false,
      message: 'Tu cuenta ha sido rechazada por el Administrador. Contacta a soporte para más detalles.',
    };
  }

  setItem('hgw_auth_user', found);
  return { success: true, message: `¡Bienvenido, ${found.name}!`, user: found };
};

export const logoutUser = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('hgw_auth_user');
  }
};

// 3. PRODUCTS PERSISTENCE
export const getStoredProducts = (): Product[] => {
  const custom = getItem<Product[]>('hgw_custom_products', []);
  const deletedIds = getItem<string[]>('hgw_deleted_products', []);

  // Merge default products with custom additions/overrides
  const activeDefaults = PRODUCTS.filter((p) => !deletedIds.includes(p.id));
  
  // Custom products override or append
  const customMap = new Map(custom.map((p) => [p.id, p]));
  const merged = activeDefaults.map((p) => customMap.get(p.id) || p);

  // Add brand new custom products that were not in default PRODUCTS
  custom.forEach((cp) => {
    if (!merged.some((p) => p.id === cp.id) && !deletedIds.includes(cp.id)) {
      merged.unshift(cp);
    }
  });

  return merged;
};

export const saveProduct = (product: Product): boolean => {
  const custom = getItem<Product[]>('hgw_custom_products', []);
  const exists = custom.findIndex((p) => p.id === product.id);

  let updated: Product[];
  if (exists >= 0) {
    updated = custom.map((p) => (p.id === product.id ? product : p));
  } else {
    updated = [product, ...custom];
  }

  setItem('hgw_custom_products', updated);
  return true;
};

export const deleteStoredProduct = (productId: string): boolean => {
  // Add to deletedIds list
  const deletedIds = getItem<string[]>('hgw_deleted_products', []);
  if (!deletedIds.includes(productId)) {
    setItem('hgw_deleted_products', [...deletedIds, productId]);
  }

  // Also remove from custom
  const custom = getItem<Product[]>('hgw_custom_products', []);
  setItem('hgw_custom_products', custom.filter((p) => p.id !== productId));
  return true;
};

// 4. ARTICLES & NEWS PERSISTENCE
export const getStoredArticles = (): BlogPost[] => {
  const custom = getItem<BlogPost[]>('hgw_custom_articles', []);
  const deletedIds = getItem<string[]>('hgw_deleted_articles', []);

  const activeDefaults = BLOG_POSTS.filter((p) => !deletedIds.includes(p.id));
  const customMap = new Map(custom.map((a) => [a.id, a]));

  const merged = activeDefaults.map((a) => customMap.get(a.id) || a);

  custom.forEach((ca) => {
    if (!merged.some((a) => a.id === ca.id) && !deletedIds.includes(ca.id)) {
      merged.unshift(ca);
    }
  });

  return merged;
};

export const saveArticle = (article: BlogPost): boolean => {
  const custom = getItem<BlogPost[]>('hgw_custom_articles', []);
  const exists = custom.findIndex((a) => a.id === article.id);

  let updated: BlogPost[];
  if (exists >= 0) {
    updated = custom.map((a) => (a.id === article.id ? article : a));
  } else {
    updated = [article, ...custom];
  }

  setItem('hgw_custom_articles', updated);
  return true;
};

export const deleteStoredArticle = (articleId: string): boolean => {
  const deletedIds = getItem<string[]>('hgw_deleted_articles', []);
  if (!deletedIds.includes(articleId)) {
    setItem('hgw_deleted_articles', [...deletedIds, articleId]);
  }

  const custom = getItem<BlogPost[]>('hgw_custom_articles', []);
  setItem('hgw_custom_articles', custom.filter((a) => a.id !== articleId));
  return true;
};
