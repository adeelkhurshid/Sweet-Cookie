import { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

interface ShopProps {
  products: Product[];
  onViewProduct: (id: string) => void;
}

type CategoryFilter = 'all' | 'sable' | 'stuffed' | 'giftbox' | 'seasonal';

export default function Shop({ products, onViewProduct }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q)
      );
    }

    // 3. Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // 'featured' - best sellers first
      result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return result;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All Confections', value: 'all' },
    { label: 'Artisan Sablés', value: 'sable' },
    { label: 'Stuffed Delicacies', value: 'stuffed' },
    { label: 'Curated Gift Boxes', value: 'giftbox' },
    { label: 'Seasonal Releases', value: 'seasonal' },
  ];

  return (
    <div id="shop-cookies-page" className="bg-stone-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
          Authentic Catalog
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
          The Sweet Cookie Boutique
        </h1>
        <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4 mb-4" />
        <p className="text-xs text-stone-500 leading-relaxed">
          Order our micro-batches for same-day decoration and packaging. Select single boxes or curate your bespoke multi-flavor leather hamper.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white rounded-2xl border border-stone-200/60 p-6 mb-12 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                id={`filter-category-${cat.value}`}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-[10px] uppercase tracking-widest font-mono px-4 py-2.5 rounded-full transition-all focus:outline-none border ${
                  selectedCategory === cat.value
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-stone-50 text-stone-500 hover:text-stone-900 border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="shop-search-input"
              placeholder="Search recipe or ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs pl-10 pr-4 py-3 rounded-full border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
            />
          </div>
        </div>

        {/* Sorting controls info */}
        <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-stone-400" />
            <span>Showing <strong className="text-stone-800 font-mono">{filteredProducts.length}</strong> luxurious formulations</span>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="shop-sort-select" className="font-mono text-[10px] uppercase text-stone-400">
              Sort by
            </label>
            <select
              id="shop-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 text-stone-700 text-xs py-1.5 px-3 rounded-md border border-stone-200 focus:outline-none focus:border-amber-600 transition-colors cursor-pointer font-sans"
            >
              <option value="featured">House Recommendation</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Critic Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-stone-200/50 p-8">
          <div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg text-stone-800 font-medium mb-1">No formulations found</h3>
          <p className="text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
            We haven't recorded matches for your search. Try resetting filters or search terms for other luxury butter biscuits.
          </p>
          <button
            id="reset-shop-filters-btn"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setSortBy('featured');
            }}
            className="mt-6 bg-stone-900 hover:bg-stone-800 text-white font-serif text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-full shadow-xs"
          >
            Reset Catalog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      )}

      {/* Quality commitment note */}
      <div className="mt-20 border-t border-stone-200 pt-12 text-center max-w-xl mx-auto space-y-3">
        <Sparkles className="w-5 h-5 text-amber-500 mx-auto" />
        <h4 className="font-serif text-sm font-semibold text-stone-900 uppercase tracking-widest">
          The Sweet Cookie Promise
        </h4>
        <p className="text-[11px] text-stone-500 leading-relaxed italic">
          "Each batch is supervised by our senior pastry artisan. We use no artificial emulsifiers, hydrogenated fats, or processed sucrose. You are tasting unadulterated high-fat French butter and certified grand-cru chocolate."
        </p>
      </div>
    </div>
  );
}
