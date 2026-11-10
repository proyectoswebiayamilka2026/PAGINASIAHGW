import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Truck, ExternalLink, Heart } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../data/hgwData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCatalog: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCatalog }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Trust & Guarantee Banner */}
      <div className="bg-stone-950/80 border-b border-stone-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center shrink-0 text-emerald-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Envíos a todo Panamá</p>
              <p className="text-stone-400 text-xs">Entregas de 24 a 48 horas mediante Servientrega</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center shrink-0 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Garantía de Calidad GMP</p>
              <p className="text-stone-400 text-xs">Ingredientes 100% naturales certificados internacionalmente</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center shrink-0 text-emerald-400">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Distribuidor Autorizado</p>
              <p className="text-stone-400 text-xs">Atención personalizada por Yamilka Batista</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-lg">
                HGW
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">{DISTRIBUTOR_INFO.pageTitle}</h4>
                <p className="text-xs text-emerald-400">Salud, Belleza & Bienestar Natural</p>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Portal informativo y comercial de Health Green World en Santiago de Veraguas y toda la República de Panamá. Nutrición celular, arándanos silvestres, turmalina bioactiva y el Plan de Ganancia Mutua 50-50.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <span className="inline-block px-3 py-1 bg-stone-800 text-emerald-400 text-xs rounded-md font-medium border border-stone-700">
                Patrocinador Oficial: {DISTRIBUTOR_INFO.sponsorUsername}
              </span>
              <a
                href={DISTRIBUTOR_INFO.officialOnlineStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-400 hover:text-emerald-300 underline inline-flex items-center gap-1"
              >
                <span>Tienda Oficial HGW Online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Secciones del Sitio
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/acerca-de')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Acerca de Yamilka Batista
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/servicios')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Plan de Ganancia Mutua (50-50)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/productos')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Tienda & Catálogo de Productos
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalog}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Visor de Catálogo Digital (PDF)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/blog')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Artículos, Noticias & Actividades
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contacto')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-stone-300"
                >
                  Contacto & Envíos Panamá
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800">
                <button
                  onClick={() => handleNav('/admin/login')}
                  className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1 font-semibold"
                >
                  <span>Panel Administrativo (Solo Admins)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Atención & Envíos
            </h5>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-xs text-white">Oficina Principal:</p>
                  <p className="text-[11px] leading-tight">{DISTRIBUTOR_INFO.officeAddress}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[10px] text-stone-500 font-bold uppercase">Compras y Afiliaciones:</p>
                  <a
                    href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20hacer%20un%20pedido`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block font-bold text-xs"
                  >
                    {DISTRIBUTOR_INFO.activeDistributorContact}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-1 border-t border-stone-800">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">{DISTRIBUTOR_INFO.shippingInfo}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Affiliate Callout */}
          <div className="bg-stone-800/80 rounded-xl p-5 border border-stone-700/60 space-y-3">
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              ¿Deseas Emprender con HGW?
            </h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              Afíliate con 30% a 52% de descuento en todos los productos y gana comisiones con el revolucionario Plan 50-50.
            </p>
            <a
              href={DISTRIBUTOR_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-xs"
            >
              <span>Registrarse como Distribuidor</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Mandatory Official Disclaimer Box */}
        <div className="mt-12 p-5 rounded-2xl bg-stone-950/70 border border-stone-800 text-xs text-stone-400 leading-relaxed space-y-2">
          <p className="font-semibold text-stone-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Aviso Legal / Disclaimer Oficial:
          </p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-stone-800 text-xs text-stone-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} {DISTRIBUTOR_INFO.pageTitle}. Contacto: <strong>{DISTRIBUTOR_INFO.name}</strong> — Distribuidor Independiente HGW.
          </p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Comprometidos con el bienestar natural en Veraguas y Panamá</span>
            <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
