import React from 'react';
import { ShieldCheck, Award, Heart, Globe, Users, ArrowRight, CheckCircle2, Leaf, Phone } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      <SeoHead
        title={`Acerca de | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Conoce a Yamilka Batista, distribuidor independiente de HGW en Panamá. Descubre la historia de Health Green World, certificaciones GMP y nuestro compromiso con tu salud natural."
        path="/acerca-de"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold inline-block mb-4">
            Distribuidor Independiente HGW Panamá
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Pasión por la Salud Natural y el Desarrollo Humano
          </h1>
          <p className="mt-4 text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Conoce la trayectoria de <strong>Yamilka Batista</strong> y la visión global de <strong>Health Green World (HGW)</strong> para transformar vidas a través de la nutrición limpia y la bioenergía.
          </p>
        </div>
      </section>

      {/* Distributor Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-2xl border-4 border-emerald-800/30 bg-stone-900">
              <img
                src={DISTRIBUTOR_INFO.photo}
                alt="Yamilka Batista - Distribuidor Independiente HGW Santiago de Veraguas, Panamá"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Líder & Asesora de Bienestar
                </span>
                <h3 className="text-2xl font-bold mt-1">{DISTRIBUTOR_INFO.name}</h3>
                <p className="text-xs text-stone-300 mt-1">{DISTRIBUTOR_INFO.title}</p>
                <p className="text-[11px] text-emerald-300 mt-0.5">Santiago de Veraguas, República de Panamá</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Bienvenida Personal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                "Mi misión es brindarte soluciones de salud comprobadas y ayudarte a construir libertad financiera desde Santiago de Veraguas para todo Panamá."
              </h2>
            </div>

            <p className="text-[18px] text-stone-700 leading-relaxed">
              ¡Hola! Soy <strong>Yamilka Batista</strong>, distribuidora independiente de Health Green World en <strong>Santiago de Veraguas, Panamá</strong>. Inicié en HGW tras experimentar en carne propia el alivio y la vitalidad que proporcionan los productos con arándanos silvestres y la turmalina bioactiva.
            </p>

            <p className="text-[18px] text-stone-700 leading-relaxed">
              Hoy lidero una comunidad en constante crecimiento a lo largo de todo Panamá. Nos caracterizamos por un servicio honesto, envíos puntuales vía Servientrega en 24-48 horas, y una asesoría cálida tanto para quienes desean mejorar su salud como para emprendedores que buscan una fuente de ingresos real mediante el Plan de Ganancia Mutua 50-50.
            </p>

            {/* Quick credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-stone-900">Asesoría de Producto</h4>
                  <p className="text-[11px] text-stone-500">Recomendaciones personalizadas para tu salud.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-stone-900">Mentoría de Negocio</h4>
                  <p className="text-[11px] text-stone-500">Capacitación paso a paso en el Plan 50-50.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20conversar%20contigo%20acerca%20de%20los%20productos%20HGW`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Hablar con Yamilka Batista ({DISTRIBUTOR_INFO.phone})</span>
              </a>

              <button
                onClick={() => onNavigate('/contacto')}
                className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs border border-stone-300 transition-colors cursor-pointer"
              >
                Ver Datos de Contacto
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* About Health Green World (HGW) */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Trayectoria Global
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Health Green World: Más de dos décadas de ciencia botánica
            </h2>
            <p className="text-[18px] text-stone-700 mt-3 leading-relaxed">
              Fundada bajo el liderazgo de la <strong>Dra. Li Deming</strong>, científica destacada en biología marina y fitoterapia, HGW se ha consolidado como un referente mundial en la investigación de bioflavonoides y medicina herbolaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <Globe className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
              <h3 className="font-bold text-base text-stone-900">+50 Países</h3>
              <p className="text-xs text-stone-500 mt-1">Presencia consolidada en América Latina, Asia, Europa y África.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <Award className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
              <h3 className="font-bold text-base text-stone-900">Normas GMP</h3>
              <p className="text-xs text-stone-500 mt-1">Buenas Prácticas de Manufactura con estándares de grado farmacéutico.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <Leaf className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
              <h3 className="font-bold text-base text-stone-900">100% Ecológico</h3>
              <p className="text-xs text-stone-500 mt-1">Cosecha sustentable de arándanos silvestres y minerales puros.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <Users className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
              <h3 className="font-bold text-base text-stone-900">Millones de Vidas</h3>
              <p className="text-xs text-stone-500 mt-1">Familias beneficiadas con salud preventiva y libertad financiera.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Nuestra Misión</span>
            <h3 className="text-xl font-bold mt-2">Salud Integral y Prevención</h3>
            <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
              Promover una cultura de bienestar basada en la prevención y la nutrición celular, acercando a cada hogar panameño productos naturales libres de químicos sintéticos dañinos.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Nuestra Visión</span>
            <h3 className="text-xl font-bold mt-2">Empoderamiento Justo</h3>
            <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
              Ser el canal de distribución más confiable y ético de HGW en Panamá, donde cada socio cuente con las herramientas, capacitación y apoyo fraterno para alcanzar sus metas.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Nuestros Valores</span>
            <h3 className="text-xl font-bold mt-2">Transparencia & Servicio</h3>
            <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
              Honestidad en cada recomendación, cumplimiento estricto en los tiempos de despacho y el compromiso de enseñar el Plan 50-50 sin falsas promesas.
            </p>
          </div>
        </div>
      </section>

      {/* Official Legal Disclaimer Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-stone-100 border border-stone-300 text-xs text-stone-600 leading-relaxed">
          <p className="font-bold text-stone-800 mb-1">Aviso Legal y Descargo de Responsabilidad:</p>
          <p>{DISTRIBUTOR_INFO.disclaimer}</p>
        </div>
      </section>
    </div>
  );
};
