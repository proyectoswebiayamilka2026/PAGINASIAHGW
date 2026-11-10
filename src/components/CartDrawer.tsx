import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, Truck, ArrowRight } from 'lucide-react';
import { Product, DISTRIBUTOR_INFO } from '../data/hgwData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  if (!isOpen) return null;

  const totalUSD = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let orderList = items
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.product.name}* (x${it.quantity}) - $${(it.product.price * it.quantity).toFixed(2)} USD`
      )
      .join('\n');

    let text = `👋 *HOLA YAMILKA, DESEO REALIZAR UN PEDIDO EN HGW SANTIAGO DE VERAGUAS:*\n\n` +
      `${orderList}\n\n` +
      `📦 *Total de Productos:* $${totalUSD.toFixed(2)} USD\n` +
      (customerName ? `👤 *Cliente:* ${customerName}\n` : '') +
      (customerCity ? `📍 *Destino / Dirección:* ${customerCity}\n` : '') +
      `\n¿Podría confirmarme la disponibilidad y los datos para el pago (Yappy / Banco General) y envío por Servientrega? Muchas gracias.`;

    const url = `https://wa.me/${DISTRIBUTOR_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-700" />
            <h3 className="font-bold text-stone-900 text-base">Tu Carrito de Pedido</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              {items.reduce((sum, i) => sum + i.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mx-auto text-stone-400 mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-stone-800 text-lg">Tu carrito está vacío</h4>
              <p className="text-xs text-stone-500 mt-2 max-w-xs mx-auto">
                Explora nuestro catálogo y añade suplementos, café saludable o accesorios de turmalina.
              </p>
              <button
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer shadow-xs"
              >
                <span>Explorar Productos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Delivery notice */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-100">
                <Truck className="w-4 h-4 shrink-0 text-emerald-700" />
                <span>Envíos por Servientrega a todo Panamá (24 a 48 horas)</span>
              </div>

              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-stone-200/90 bg-stone-50/50"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 rounded-lg object-contain p-1 bg-white border border-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-stone-900 truncate">
                      {item.product.name}
                    </h5>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xs font-extrabold text-emerald-800">
                        ${(item.product.price * item.quantity).toFixed(2)} USD
                      </span>
                      <span className="text-[10px] text-stone-500">
                        (${item.product.price.toFixed(2)} c/u)
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg bg-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Optional client details to speed up checkout */}
              <div className="pt-2 border-t border-stone-200 space-y-2">
                <span className="text-xs font-semibold text-stone-700 block">
                  Datos de entrega opcionales para WhatsApp:
                </span>
                <input
                  type="text"
                  placeholder="Tu Nombre completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder="Provincia / Ciudad (ej. Chiriquí, Panamá Oeste)"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-hidden focus:border-emerald-600"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Area */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-center text-xs text-stone-500">
                <span>Disponibilidad:</span>
                <span className="font-bold text-emerald-800 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>En Stock para Entrega</span>
                </span>
              </div>
              <div className="flex justify-between text-sm pt-1 border-t border-stone-200/60">
                <span className="font-bold text-stone-800">Total a Pagar:</span>
                <span className="font-extrabold text-emerald-900 text-lg">
                  ${totalUSD.toFixed(2)} USD
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckoutWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
              <span>Atención: {DISTRIBUTOR_INFO.name}</span>
              <button
                type="button"
                onClick={onClearCart}
                className="text-stone-400 hover:text-red-600 underline cursor-pointer"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
