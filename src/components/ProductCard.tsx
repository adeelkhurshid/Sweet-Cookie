import { Star, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onViewDetails: (id: string) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white border border-stone-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="flex items-center gap-1 bg-amber-600/95 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs">
              <Sparkles className="w-2.5 h-2.5" /> Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-stone-900/90 backdrop-blur-xs text-stone-100 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs">
              New Batch
            </span>
          )}
        </div>

        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Hover overlay with quick view */}
        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={() => onViewDetails(product.id)}
            className="bg-white/95 backdrop-blur-md text-stone-900 font-medium text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white"
          >
            Discover Recipe
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        {/* Category & Rating */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] uppercase tracking-widest font-mono text-stone-400">
            {product.category === 'sable' && 'Artisan Sablé'}
            {product.category === 'stuffed' && 'Stuffed Delicacy'}
            {product.category === 'giftbox' && 'Luxury Giftbox'}
            {product.category === 'seasonal' && 'Seasonal Release'}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-xs font-medium text-stone-700">{product.rating}</span>
          </div>
        </div>

        {/* Name and Tagline */}
        <h3 className="font-serif text-lg font-medium text-stone-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-stone-500 leading-relaxed mb-4 flex-grow italic">
          {product.tagline}
        </p>

        {/* Bottom price and action */}
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-mono">
              Pricing from
            </span>
            <span className="text-base font-serif font-semibold text-stone-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            id={`details-link-btn-${product.id}`}
            onClick={() => onViewDetails(product.id)}
            className="flex items-center gap-1.5 text-stone-800 group-hover:text-amber-700 text-xs font-mono uppercase tracking-widest transition-colors duration-300"
          >
            Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
