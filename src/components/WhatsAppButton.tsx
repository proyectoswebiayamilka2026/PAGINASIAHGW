import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DISTRIBUTOR_INFO } from '../data/hgwData';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const currentUrl = window.location.href;
    const message = encodeURIComponent(`Hola Yamilka, deseo más información sobre lo que vi en esta página: ${currentUrl}`);
    const whatsappUrl = `https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer border-2 border-white"
      aria-label="Contactar por WhatsApp"
      title="¿Tienes dudas? Chatea con nosotros"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute left-16 bg-white text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl border border-stone-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿En qué puedo ayudarte?
      </span>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
      </span>
    </button>
  );
};
