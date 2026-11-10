import React from 'react';
import {
  Handshake,
  BadgeDollarSign,
  UserPlus,
  Users,
  Repeat,
  Award,
  Plane,
  CheckCircle2,
  ExternalLink,
  Truck,
  ArrowRight,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { COMPENSATION_BONUSES, MEMBERSHIP_PLANS, DISTRIBUTOR_INFO } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

interface ServicesViewProps {
  onNavigate: (path: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const bonusIcons: Record<string, React.ReactNode> = {
    BadgeDollarSign: <BadgeDollarSign className="w-6 h-6 text-emerald-600" />,
    UserPlus: <UserPlus className="w-6 h-6 text-emerald-600" />,
    Handshake: <Handshake className="w-6 h-6 text-emerald-600" />,
    Users: <Users className="w-6 h-6 text-emerald-600" />,
    Repeat: <Repeat className="w-6 h-6 text-emerald-600" />,
    Award: <Award className="w-6 h-6 text-emerald-600" />,
    Plane: <Plane className="w-6 h-6 text-emerald-600" />,
  };

  return (
    <div className="space-y-20 pb-20">
      <SeoHead
        title={`Servicios & Negocio | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Conoce el Plan de Ganancia Mutua 50-50 de HGW en Panamá. Descuentos de hasta 52%, mantenimiento mensual de solo 10 pts y 7 formas de generar ingresos con Yamilka Batista."
        path="/servicios"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold mb-4">
            <Handshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sistema Justo e Innovador de Compensación HGW</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">
            El Revolucionario Plan de Ganancia Mutua (50 - 50)
          </h1>
          <p className="mt-4 text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sin candados abusivos, sin pérdidas de rangos y con un consumo mensual accesible de solo <strong>10 pts (~$20 USD)</strong>. Construye un negocio sustentable en Panamá con el respaldo de Health Green World.
          </p>
        </div>
      </section>

      {/* Why Mutual Profit is different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                La Gran Diferencia
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                ¿Por qué el modelo tradicional fallaba y por qué HGW triunfa?
              </h2>
              <p className="text-[18px] text-stone-700 leading-relaxed">
                En el mercadeo en red tradicional, el patrocinador suele presionar a sus afiliados con compras obligatorias de cientos de dólares para cobrar comisiones. Si el nuevo socio no produce, ambos se frustran.
              </p>
              <p className="text-[18px] text-stone-700 leading-relaxed">
                <strong>En Health Green World rompimos ese paradigma:</strong> El bono de ganancia mutua establece que el patrocinador y el socio ganan exactamente el <strong>50% y 50%</strong> en igualdad de condiciones. Tu éxito es genuinamente el éxito de tu mentor, creando una sinergia de apoyo 100% colaborativo.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Mantenimiento de 10 pts:</strong> Solo compras lo que tu hogar consume habitualmente.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Rangos Vitalicios:</strong> Nunca bajas de rango ni pierdes tus porcentajes de ganancia.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Descuento del 52%:</strong> Máximo margen de reventa para el rango Master.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Puntos acumulables:</strong> Puedes ascender de rango pagando la diferencia de pts.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-2xl flex items-center justify-center mx-auto shadow-inner">
                50/50
              </div>
              <h3 className="font-bold text-lg text-stone-900">Alianza Ganancia Mutua</h3>
              <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                "Si tú ganas, yo gano. Trabajamos hombro a hombro para que recuperes tu inversión y generes ganancias desde tu primer mes."
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-stone-800">Yamilka Batista</p>
                <p className="text-[11px] text-stone-500">Patrocinador Oficial Panamá</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 7 Bonuses Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
            Múltiples Fuentes de Ingreso
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Los 7 Bonos del Plan de Compensación HGW
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Estructurado para recompensar tanto el esfuerzo de venta directa como la creación y formación de líderes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPENSATION_BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {bonusIcons[bonus.icon] || <Award className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Bono {bonus.id} · {bonus.percentage}
                  </span>
                </div>

                <h3 className="font-bold text-base text-stone-900 mb-1">
                  {bonus.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3">
                  {bonus.subtitle}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center text-[11px] text-stone-400">
                <span>Disponible según rango activo</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Tiers Comparison */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Escalera al Éxito
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Paquetes de Membresía HGW Panamá
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Puedes iniciar con cualquiera de estos paquetes e ir acumulando puntos para ascender hasta Master.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.rank}
                className={`rounded-2xl p-6 bg-white border flex flex-col justify-between transition-all ${
                  plan.recommended
                    ? 'border-emerald-600 ring-2 ring-emerald-600/20 shadow-xl relative'
                    : 'border-stone-200 shadow-xs'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                    Recomendado Máxima Rentabilidad
                  </div>
                )}

                <div>
                  <div className="text-center pb-4 border-b border-stone-100">
                    <h3 className="font-extrabold text-xl text-stone-900">{plan.rank}</h3>
                    <div className="mt-2 text-2xl font-black text-emerald-900 font-display">
                      {plan.points} pts
                    </div>
                    <span className="inline-block mt-1 text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800">
                      {plan.discount}
                    </span>
                    <p className="text-[11px] text-stone-400 mt-1">Inversión aprox: {plan.investmentApprox}</p>
                  </div>

                  <div className="py-4 space-y-2 text-xs">
                    <div className="text-[11px] text-stone-500 font-semibold uppercase tracking-wider mb-2">
                      Tope Diario: {plan.dailyCap}
                    </div>
                    {plan.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={DISTRIBUTOR_INFO.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                      plan.recommended
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                    }`}
                  >
                    <span>Elegir {plan.rank}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              ¿Cómo afiliarse como Distribuidor HGW en Panamá?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              El proceso se realiza en la plataforma global oficial de Health Green World en menos de 5 minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs">
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">1</span>
              <h4 className="font-bold text-white text-sm">Entra al Portal de Registro</h4>
              <p className="text-stone-300 leading-relaxed">
                Haz clic en nuestro enlace oficial de afiliación. Asegúrate de verificar que el campo de patrocinador muestre <strong>Yamilka507</strong>.
              </p>
            </div>

            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">2</span>
              <h4 className="font-bold text-white text-sm">Completa tus Datos</h4>
              <p className="text-stone-300 leading-relaxed">
                Ingresa tu nombre, cédula o pasaporte, correo electrónico y dirección en Panamá para la recepción de tus productos.
              </p>
            </div>

            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700 space-y-2">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">3</span>
              <h4 className="font-bold text-white text-sm">Selecciona tus Productos</h4>
              <p className="text-stone-300 leading-relaxed">
                Elige los productos a tu gusto hasta alcanzar los puntos de tu membresía elegida (50 pts, 100 pts, 300 pts o 600 pts).
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={DISTRIBUTOR_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span>Abrir Enlace de Registro con Yamilka507</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Logistics & Shipping Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Truck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-stone-900">
                Logística Confiable: Envíos Nacionales Servientrega
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-xl">
                Despachamos pedidos a todas las provincias de Panamá: Panamá Centro, Panamá Oeste, Colón, Coclé, Chiriquí, Herrera, Los Santos, Veraguas, Bocas del Toro y Darién. Entrega estimada en 24 a 48 horas con número de guía.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('/contacto')}
            className="shrink-0 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Consultar Tiempos de Envío
          </button>
        </div>
      </section>
    </div>
  );
};
