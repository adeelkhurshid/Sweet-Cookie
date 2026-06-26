import { X, Trash2, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, qty: number, boxSize: 6 | 12 | 24) => void;
  onRemoveItem: (productId: string, boxSize: 6 | 12 | 24) => void;
  onClearCart: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartSidebarProps) {
  if (!isOpen) return null;

  // Calculate items cost
  const subtotal = cart.reduce((total, item) => {
    // Regular cookies are priced per box of 6. If they choose box of 12 or 24, we multiply the base box price accordingly.
    let itemPrice = item.product.price;
    if (item.product.category !== 'giftbox') {
      const scale = item.selectedBoxSize / 6;
      itemPrice = item.product.price * scale;
    }
    return total + itemPrice * item.quantity;
  }, 0);

  const shipping = subtotal > 60 ? 0 : 12.50;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert(
      'Thank you for experiencing Sweet Cookie. Your bespoke order is being processed for hand-decoration. We have sent a wax-sealed confirmation card to your registry.'
    );
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="shopping-cart-sidebar-container">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/45 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-50 shadow-2xl flex flex-col h-full border-l border-stone-200">
          {/* Header */}
          <div className="px-6 py-6 border-b border-stone-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-600" />
              <h2 className="font-serif text-lg font-medium text-stone-900 uppercase tracking-wider">
                Your Selection
              </h2>
            </div>
            <button
              id="close-cart-sidebar-btn"
              onClick={onClose}
              className="p-1.5 hover:bg-stone-100 rounded-full text-stone-500 hover:text-stone-800 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-300 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-serif text-lg text-stone-800 mb-1">Your cart is empty</p>
                <p className="text-xs text-stone-400 max-w-[240px] leading-relaxed mb-6">
                  Select some elegant hand-rolled French cookies to begin your gourmet tasting experience.
                </p>
                <button
                  id="cart-continue-browsing-btn"
                  onClick={onClose}
                  className="text-xs uppercase tracking-widest font-mono text-amber-700 font-semibold border-b border-amber-700/40 hover:border-amber-700 pb-0.5"
                >
                  Return to Boutique
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const isGiftbox = item.product.category === 'giftbox';
                let price = item.product.price;
                if (!isGiftbox) {
                  const scale = item.selectedBoxSize / 6;
                  price = item.product.price * scale;
                }

                return (
                  <div
                    key={`${item.product.id}-${item.selectedBoxSize}`}
                    className="flex gap-4 p-4 bg-white rounded-xl border border-stone-200/60"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-medium text-stone-900 pr-2">
                            {item.product.name}
                          </h4>
                          <button
                            id={`remove-cart-item-btn-${item.product.id}`}
                            onClick={() => onRemoveItem(item.product.id, item.selectedBoxSize)}
                            className="text-stone-300 hover:text-red-600 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] text-stone-400 font-mono mt-0.5">
                          {isGiftbox
                            ? 'Curated Hamper Casket'
                            : `Luxury Box of ${item.selectedBoxSize}`}
                        </p>
                      </div>

                      {/* Quantity Selector & Price */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-stone-200 rounded-md overflow-hidden bg-stone-50">
                          <button
                            id={`decrease-qty-btn-${item.product.id}`}
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.selectedBoxSize
                              )
                            }
                            className="px-2.5 py-1 text-stone-500 hover:bg-stone-200 text-xs transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-xs font-mono font-medium text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            id={`increase-qty-btn-${item.product.id}`}
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.selectedBoxSize
                              )
                            }
                            className="px-2.5 py-1 text-stone-500 hover:bg-stone-200 text-xs transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-serif text-sm font-semibold text-stone-900">
                          ${(price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Area with Pricing summary */}
          {cart.length > 0 && (
            <div className="px-6 py-6 border-t border-stone-200 bg-white space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Subtotal</span>
                  <span className="font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Bespoke Hand-Delivery</span>
                  <span className="font-mono">
                    {shipping === 0 ? (
                      <span className="text-emerald-600 font-medium">Complimentary</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-stone-400 italic">
                    Add ${(60 - subtotal).toFixed(2)} more for complimentary shipping
                  </p>
                )}
                <div className="border-t border-stone-100 pt-3 flex justify-between text-sm font-medium text-stone-900">
                  <span className="font-serif font-semibold text-base">Total Sum</span>
                  <span className="font-serif font-bold text-base text-amber-800">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Security info and Checkout buttons */}
              <div className="pt-2">
                <button
                  id="checkout-order-btn"
                  onClick={handleCheckout}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-serif py-3.5 rounded-full font-medium text-xs uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Order Sealed Box
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 mt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Handcrafted & Inspected under AOP Standard</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
