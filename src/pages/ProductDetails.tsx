import React, { useState } from 'react';
import { Product, CartItem } from '../types';
import { Star, ShieldCheck, Heart, Sparkles, ShoppingBag, ArrowLeft, Info } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function ProductDetails({
  product,
  onBack,
  onAddToCart,
  setIsCartOpen,
}: ProductDetailsProps) {
  const [selectedBoxSize, setSelectedBoxSize] = useState<6 | 12 | 24>(6);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const isGiftbox = product.category === 'giftbox';

  // Calculate pricing based on box size
  // 6 pieces = base price. 12 pieces = base * 2 * 0.95 (5% off). 24 pieces = base * 4 * 0.90 (10% off)
  const getUnitPrice = () => {
    if (isGiftbox) return product.price;
    const basePrice = product.price;
    if (selectedBoxSize === 12) return basePrice * 2 * 0.95;
    if (selectedBoxSize === 24) return basePrice * 4 * 0.90;
    return basePrice;
  };

  const unitPrice = getUnitPrice();
  const totalPrice = unitPrice * quantity;

  // Handle Zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleAddToCart = () => {
    onAddToCart({
      product,
      quantity,
      selectedBoxSize: isGiftbox ? 6 : selectedBoxSize, // Giftbox always defaults to size 6 internally
    });
    setIsCartOpen(true);
  };

  return (
    <div id="product-detail-view" className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Return to Boutique trigger */}
      <button
        id="back-to-shop-btn"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-900 text-xs font-mono uppercase tracking-widest mb-10 transition-colors focus:outline-none"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Boutique Catalog
      </button>

      {/* Main product card split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-stone-200/60 p-8 md:p-12 shadow-md relative overflow-hidden">
        
        {/* Left Side: Product Editorial Gallery with Zoom */}
        <div className="lg:col-span-6 space-y-6">
          <div
            id="product-image-zoom-container"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative cursor-zoom-in"
          >
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-100 ${
                isZoomed ? 'scale-180' : 'scale-100'
              }`}
              style={{
                transformOrigin: isZoomed ? `${mousePos.x}% ${mousePos.y}%` : 'center center',
              }}
              loading="eager"
            />
            
            {/* Guide overlay */}
            <div className="absolute bottom-4 right-4 bg-stone-900/70 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-wider py-1 px-2.5 rounded-full pointer-events-none">
              Hover to zoom ingredients
            </div>
          </div>

          {/* Features list bullet points */}
          <div className="grid grid-cols-2 gap-4 bg-stone-50 rounded-xl p-5 border border-stone-100 text-xs text-stone-600">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details & Cart controls */}
        <div className="lg:col-span-6 space-y-6">
          {/* Category & Badge */}
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 font-semibold">
              {product.category === 'sable' && 'Artisan Sablé Series'}
              {product.category === 'stuffed' && 'Stuffed Chocolate Series'}
              {product.category === 'giftbox' && 'Luxury Caskets & Hampers'}
              {product.category === 'seasonal' && 'Solstice Experimental releases'}
            </span>
            <div className="flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-semibold text-stone-700">{product.rating}</span>
              <span className="text-[10px] text-stone-400 font-mono">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Name & Tagline */}
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-stone-500 leading-relaxed italic">
              "{product.tagline}"
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {product.description}
          </p>

          {/* Chef notes block quote */}
          <div className="border-l-2 border-amber-600 pl-4 py-1 italic text-xs text-stone-500 bg-amber-50/40 pr-3 rounded-r-lg">
            <strong className="text-stone-800 not-italic block font-mono text-[10px] uppercase tracking-wider mb-1">
              Chef Patissier’s Journal
            </strong>
            "{product.chefNotes}"
          </div>

          {/* 1. Box Size Selector (Skip for gift box categories) */}
          {!isGiftbox && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 block font-semibold">
                Configure Casket Capacity
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[6, 12, 24].map((size) => {
                  const isSelected = selectedBoxSize === size;
                  let sizeDiscountText = '';
                  if (size === 12) sizeDiscountText = '5% Gift Discount';
                  if (size === 24) sizeDiscountText = '10% Collector Discount';

                  return (
                    <button
                      key={size}
                      id={`size-selector-btn-${size}`}
                      onClick={() => setSelectedBoxSize(size as any)}
                      className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center focus:outline-none ${
                        isSelected
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 hover:border-stone-400 text-stone-800 bg-stone-50'
                      }`}
                    >
                      <span className="font-serif font-semibold text-sm">{size} Cookies</span>
                      {sizeDiscountText !== '' && (
                        <span className={`text-[8px] uppercase font-mono font-medium mt-1 ${
                          isSelected ? 'text-amber-300' : 'text-amber-700'
                        }`}>
                          {sizeDiscountText}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Quantity & Total Controls */}
          <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-stone-100">
            {/* Quantity adjustment */}
            <div className="space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono text-stone-400 block font-semibold">
                Baking Batches
              </span>
              <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden h-12">
                <button
                  id="qty-decrease-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-stone-500 hover:bg-stone-200 h-full transition-colors font-medium focus:outline-none"
                >
                  -
                </button>
                <span className="px-5 font-mono font-semibold text-stone-800 text-xs">
                  {quantity}
                </span>
                <button
                  id="qty-increase-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-stone-500 hover:bg-stone-200 h-full transition-colors font-medium focus:outline-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total display and add to cart button */}
            <div className="flex-grow space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono text-stone-400 block font-semibold">
                Allocation Sum
              </span>
              <div className="flex items-center justify-between gap-4 h-12">
                <span className="font-serif text-2xl font-bold text-stone-900">
                  ${totalPrice.toFixed(2)}
                </span>
                <button
                  id="add-to-cart-action-btn"
                  onClick={handleAddToCart}
                  className="bg-stone-900 hover:bg-stone-800 text-white font-serif h-full px-8 rounded-full font-medium text-xs uppercase tracking-widest transition-colors shadow-md flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Ingredients & Nutrition Collapsible Details */}
          <div className="pt-6 border-t border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Ingredients block */}
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-stone-400 font-bold flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-stone-400" /> Certified Ingredients
              </h4>
              <ul className="space-y-1 text-stone-600 list-disc pl-4 leading-relaxed font-sans">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Nutrition facts table */}
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-stone-400 font-bold flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-stone-400" /> Nutritional Disclosures
              </h4>
              <div className="bg-stone-50 rounded-lg p-3.5 border border-stone-200/60 font-mono text-[10px] text-stone-600 space-y-1.5">
                <div className="flex justify-between">
                  <span>Serving size</span>
                  <span className="text-stone-900 font-medium">1 Cookie ({product.category === 'giftbox' ? '35g' : `${selectedBoxSize === 6 ? '30g' : '30g'}`})</span>
                </div>
                <div className="border-t border-stone-200/80 pt-1.5 flex justify-between">
                  <span>Calories</span>
                  <span className="text-stone-900 font-bold">{product.nutritionalFacts.calories} kcal</span>
                </div>
                <div className="flex justify-between">
                  <span>Proteins</span>
                  <span className="text-stone-900 font-medium">{product.nutritionalFacts.protein}</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbohydrates</span>
                  <span className="text-stone-900 font-medium">{product.nutritionalFacts.carbs}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fats (AOP Butter)</span>
                  <span className="text-stone-900 font-medium">{product.nutritionalFacts.fat}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
