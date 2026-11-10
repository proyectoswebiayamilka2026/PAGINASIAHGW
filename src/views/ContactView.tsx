import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Truck, Send, CheckCircle2, ChevronDown, ChevronUp, MessageCircle, ExternalLink } from 'lucide-react';
import { DISTRIBUTOR_INFO, FAQS } from '../data/hgwData';
import { SeoHead } from '../components/SeoHead';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: 'Panamá Centro',
    subject: 'informacion-productos',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted message through WhatsApp
    const text = encodeURIComponent(
      `👋 *NUEVA CONSULTA DESDE HGWPANAMA.COM*\n\n` +
      `👤 *Nombre:* ${formData.name}\n` +
      `📱 *Teléfono:* ${formData.phone}\n` +
      `✉️ *Correo:* ${formData.email || 'No proporcionado'}\n` +
      `📍 *Provincia:* ${formData.province}\n` +
      `📌 *Asunto:* ${formData.subject}\n` +
      `💬 *Mensaje:* ${formData.message}`
    );

    setFormSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=${text}`, '_blank');
    }, 1200);
  };

  const provincesPanama = [
    'Panamá Centro',
    'Panamá Oeste',
    'Chiriquí',
    'Colón',
    'Coclé',
    'Veraguas',
    'Herrera',
    'Los Santos',
    'Bocas del Toro',
    'Darién',
    'Comarca Guna Yala / Emberá / Ngäbe'
  ];

  return (
    <div className="space-y-16 pb-20">
      <SeoHead
        title={`Contacto | ${DISTRIBUTOR_INFO.pageTitle}`}
        description="Ponte en contacto con Yamilka Batista, distribuidor independiente de HGW en Panamá. Envíos nacionales por Servientrega 24-48h, atención vía WhatsApp y correo oficial."
        path="/contacto"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-stone-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs font-semibold inline-block mb-3">
            Atención Inmediata
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Contacto & Envíos Nacionales
          </h1>
          <p className="mt-3 text-emerald-100 text-sm max-w-lg mx-auto leading-relaxed">
            Estamos a tu disposición para asesorarte sobre los productos o ayudarte en tu proceso de afiliación al Plan de Ganancia Mutua.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Distribuidor Oficial
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-1">
                  {DISTRIBUTOR_INFO.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">{DISTRIBUTOR_INFO.title}</p>
              </div>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900 uppercase">Ventas & Afiliaciones</h5>
                    <a
                      href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20hacer%20un%20pedido%20o%20afiliarme`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-emerald-800 font-extrabold hover:underline block mt-0.5"
                    >
                      {DISTRIBUTOR_INFO.activeDistributorContact}
                    </a>
                    <p className="text-[10px] text-stone-400 mt-0.5">Atención Directa por Yamilka Batista</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900">Correo Electrónico Oficial</h5>
                    <a
                      href={`mailto:${DISTRIBUTOR_INFO.email}`}
                      className="text-xs text-stone-700 hover:text-emerald-800 block mt-0.5"
                    >
                      {DISTRIBUTOR_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900 uppercase tracking-tighter">Oficina Principal (Panamá)</h5>
                    <p className="text-[11px] text-stone-700 mt-0.5 leading-tight">
                      {DISTRIBUTOR_INFO.officeAddress}
                    </p>
                    <p className="text-[11px] text-emerald-800 font-bold mt-1">Tel: {DISTRIBUTOR_INFO.officePhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900">Horario de Oficina</h5>
                    <p className="text-xs text-stone-600 mt-0.5">{DISTRIBUTOR_INFO.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-stone-900">Cobertura Nacional Servientrega</h5>
                    <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">{DISTRIBUTOR_INFO.shippingInfo}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=Hola%20Yamilka,%20quisiera%20hacer%20un%20pedido%20de%20productos%20HGW`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Mensaje Directo a WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Formulario de Consulta
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mt-1 mb-6">
                Escríbenos tu Consulta o Pedido
              </h3>

              {formSubmitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-emerald-950 text-lg">¡Mensaje Preparado con Éxito!</h4>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Te estamos redirigiendo a WhatsApp con Yamilka Batista para darte respuesta inmediata. Si la ventana no abrió automáticamente:
                  </p>
                  <a
                    href={`https://wa.me/${DISTRIBUTOR_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
                  >
                    Abrir WhatsApp Manualmente
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ana Lucía Morales"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +507 6000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Provincia de Entrega
                      </label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs cursor-pointer"
                      >
                        {provincesPanama.map((prov) => (
                          <option key={prov} value={prov}>{prov}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      Motivo de Contacto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs cursor-pointer"
                    >
                      <option value="informacion-productos">Información sobre productos específicos</option>
                      <option value="pedido-compra">Deseo realizar un pedido con entrega Servientrega</option>
                      <option value="afiliacion-distribuidor">Quiero afiliarme al Plan de Ganancia Mutua 50-50</option>
                      <option value="catalogo-pdf">Solicitar catálogo digital en PDF</option>
                      <option value="otro">Otra consulta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      Mensaje o Productos que necesitas
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Escribe tus dudas, los productos que te interesan o la dirección para tu entrega..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-stone-900 focus:outline-hidden focus:border-emerald-600 focus:bg-white text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta a Yamilka Batista</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map Embed Section: Panama */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-bold text-stone-900 text-base">Cobertura y Despachos en Panamá</h4>
              <p className="text-xs text-stone-500">Distribución física y logística para todo el territorio de la República de Panamá.</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              Servientrega Express 24-48h
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-21/9 border border-stone-200 bg-stone-100">
            <iframe
              title="Mapa de Cobertura HGW Panamá"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.34444535492!2d-79.66441551694602!3d8.993600028795055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8c28071%3A0x7d6dd0335e4d0c9f!2sPanam%C3%A1!5e0!3m2!1ses!2spa!4v1700000000000!5m2!1ses!2spa"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
            Resolvemos tus Dudas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Preguntas Frecuentes (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-2">
            Todo lo que necesitas saber sobre entregas, compras y el plan de compensación.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-3 text-[17px] text-stone-700 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
