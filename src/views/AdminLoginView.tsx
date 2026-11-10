import React, { useState } from 'react';
import { Lock, Mail, User, Phone, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react';
import { loginUser, registerUser, UserAccount } from '../services/storeService';
import { DISTRIBUTOR_INFO } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

interface AdminLoginViewProps {
  onLoginSuccess: (user: UserAccount) => void;
  onNavigate: (path: string) => void;
}

export const AdminLoginView: React.FC<AdminLoginViewProps> = ({ onLoginSuccess, onNavigate }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  // Login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register fields
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const res = loginUser(email, password);
    if (res.success && res.user) {
      setMessage({ text: res.message, type: 'success' });
      setTimeout(() => {
        onLoginSuccess(res.user!);
        onNavigate('/admin');
      }, 700);
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!regName || !regEmail) {
      setMessage({ text: 'Por favor completa todos los campos requeridos.', type: 'error' });
      return;
    }

    const res = registerUser({
      name: regName,
      email: regEmail,
      phone: regPhone,
      password: regPassword || '123456',
    });

    if (res.success) {
      setMessage({ text: res.message, type: 'success' });
      // Reset form
      setRegName('');
      setRegEmail('');
      setRegPhone('');
      setRegPassword('');
    } else {
      setMessage({ text: res.message, type: 'error' });
    }
  };

  const handleUseDemoAdmin = () => {
    setEmail('info.yamilka@gmail.com');
    setPassword('admin');
  };

  return (
    <div className="min-h-[80vh] py-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto flex flex-col justify-center">
      <SeoHead
        title="Acceso Administrativo | HGW Santiago de Veraguas"
        description="Portal de acceso exclusivo para administradores y editores de HGW Santiago de Veraguas, Panamá."
        path="/admin/login"
      />

      {/* Main Container Card */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
        
        {/* Header with Photo & Branding */}
        <div className="p-8 bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-400 shrink-0 bg-stone-900 shadow-md">
            <img
              src={DISTRIBUTOR_INFO.photo}
              alt="Yamilka Batista"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              Panel Administrativo
            </span>
            <h1 className="text-2xl font-bold tracking-tight">HGW Santiago de Veraguas</h1>
            <p className="text-xs text-emerald-100/90 mt-0.5">
              Gestión de productos, noticias y actividades oficiales
            </p>
          </div>
        </div>

        {/* Tab Selector: Iniciar Sesión vs Crear Cuenta */}
        <div className="flex border-b border-stone-200 bg-stone-50">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setMessage(null);
            }}
            className={`flex-1 py-4 text-center font-bold text-sm transition-colors cursor-pointer border-b-2 ${
              mode === 'login'
                ? 'border-emerald-700 text-emerald-900 bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setMessage(null);
            }}
            className={`flex-1 py-4 text-center font-bold text-sm transition-colors cursor-pointer border-b-2 ${
              mode === 'register'
                ? 'border-emerald-700 text-emerald-900 bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Crear Cuenta (Requiere Aprobación)
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8 space-y-6">
          
          {/* Feedback Alert */}
          {message && (
            <div
              className={`p-4 rounded-2xl flex items-start gap-3 text-sm leading-relaxed ${
                message.type === 'success'
                  ? 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                  : 'bg-red-50 text-red-950 border border-red-200'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <div>{message.text}</div>
            </div>
          )}

          {mode === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ej. info.yamilka@gmail.com o tu correo"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 mt-6"
              >
                <span>Acceder al Panel Administrativo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Registration Form */
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Aprobación Obligatoria:</strong> Toda cuenta nueva se crea en estado <em>Pendiente</em>. El Administrador (Yamilka Batista) debe aprobar tu registro antes de que puedas publicar o editar productos.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="ej. María González"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="maria@ejemplo.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Teléfono / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    placeholder="+507 6700-0000"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Contraseña Deseada
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Crea una contraseña segura"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-hidden focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                <span>Solicitar Registro de Cuenta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Footer Navigation Back to Store */}
          <div className="pt-4 border-t border-stone-200 text-center">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-xs text-stone-500 hover:text-stone-900 underline cursor-pointer"
            >
              Volver a la página principal de la tienda
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
