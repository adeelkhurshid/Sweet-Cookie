import { useState } from 'react';
import { ArrowRight, Sparkles, Heart, Trophy, Gift, Calendar } from 'lucide-react';
import { Product, Page } from '../types';
import ThreeDBox from '../components/ThreeDBox';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  products: Product[];
  onViewProduct: (id: string) => void;
  setActivePage: (page: Page) => void;
}

export default function Home({ products, onViewProduct, setActivePage }: HomeProps) {
  const [boxOpened, setBoxOpened] = useState(false);

  // Filter 3 best sellers
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 3);

  const navigateTo = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="boutique-home-page" className="bg-stone-50 text-stone-800">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-linear-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-100/70 border border-amber-200/50 text-amber-900 text-[10px] font-mono uppercase tracking-[0.25em] px-3.5 py-1 rounded-full">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Est. 1912 • Rue de l'Université
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-semibold tracking-tight leading-[1.08]">
              The Art of <br />
              <span className="text-amber-700 font-serif italic font-normal">Luxury Confectionery</span>
            </h1>
            
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-md">
              Hand-rolled butter sablés and stuffed chocolate creations baked daily in micro-batches. Indulge in museum-quality confectionery made with single-estate cacao and AOP Normandy cream.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-shop-now-btn"
                onClick={() => navigateTo('shop')}
                className="bg-stone-900 hover:bg-stone-800 text-white font-serif py-3.5 px-8 rounded-full font-medium text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-1"
              >
                Explore Shop
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                id="hero-our-story-btn"
                onClick={() => navigateTo('about')}
                className="bg-transparent hover:bg-stone-100 text-stone-800 border border-stone-300 font-serif py-3.5 px-8 rounded-full font-medium text-xs uppercase tracking-widest transition-all"
              >
                Our Heritage
              </button>
            </div>

            {/* Quality mini details */}
            <div className="pt-6 border-t border-stone-200 flex gap-6 text-stone-400">
              <div className="flex items-center gap-1.5 text-xs">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>Certified AOP Normandy Butter</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Heart className="w-4 h-4 text-amber-600" />
                <span>No Artificial Elements</span>
              </div>
            </div>
          </div>

          {/* Hero Right: High-Performance 3D Interaction */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <div className="w-full max-w-lg md:max-w-xl">
              <ThreeDBox />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CURATOR'S SELECTION (BEST SELLERS) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
            Bespoke Confections
          </span>
          <h2 className="font-serif text-3xl text-stone-900 font-semibold tracking-tight">
            Curator’s Selection
          </h2>
          <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4 mb-4" />
          <p className="text-xs text-stone-500">
            A precise evaluation of flavor, density, and crispness. These are our three most requested masterpieces, refined over generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE GIFT BOX REVEAL (NO CARTOON EFFECTS) */}
      <section className="py-20 bg-stone-900 text-stone-100 overflow-hidden relative border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Interactive Box Left Visual Area */}
          <div className="flex flex-col items-center justify-center p-8 bg-stone-950 rounded-3xl border border-stone-800 shadow-2xl relative min-h-[400px]">
            {/* Box Closed State */}
            {!boxOpened ? (
              <div className="text-center space-y-6 flex flex-col items-center">
                <div className="w-32 h-32 bg-stone-900 border border-amber-500/30 rounded-2xl shadow-xl flex items-center justify-center relative animate-pulse">
                  <Gift className="w-12 h-12 text-amber-500" />
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-amber-500/20" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-amber-500/20" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-white">The Royal Casket is Sealed</h3>
                  <p className="text-xs text-stone-400 mt-2 max-w-xs">
                    Tap to lift the custom letterpress cover and inspect the freshly baked cookies nestled inside.
                  </p>
                </div>
                <button
                  id="open-box-visual-btn"
                  onClick={() => setBoxOpened(true)}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-mono text-[10px] uppercase tracking-widest font-semibold py-3 px-6 rounded-full transition-colors"
                >
                  Unveil Contents
                </button>
              </div>
            ) : (
              /* Box Opened State showing cookies inside */
              <div className="text-center space-y-6 w-full animate-fade-in">
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                  {products.slice(0, 3).map((p, idx) => (
                    <div key={p.id} className="bg-stone-900 border border-stone-800 p-2.5 rounded-xl flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mb-2">
                        <img src={p.image} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[9px] font-serif text-amber-400 line-clamp-1">{p.name}</span>
                      <span className="text-[8px] font-mono text-stone-400 mt-0.5">Assortment #{idx + 1}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-white">Casket Unveiled Successfully</h3>
                  <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto">
                    The box reveals 18 fresh hand-decorated cookies. Each is nestled in wax-sealed gold parchment to preserve absolute texture integrity.
                  </p>
                </div>
                <button
                  id="close-box-visual-btn"
                  onClick={() => setBoxOpened(false)}
                  className="bg-transparent hover:bg-stone-800 text-stone-400 border border-stone-800 font-mono text-[10px] uppercase tracking-widest py-2.5 px-5 rounded-full transition-colors"
                >
                  Re-seal Casket
                </button>
              </div>
            )}
          </div>

          {/* Interactive Box Right Text Content */}
          <div className="space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-500 block font-semibold">
              The Packaging Philosophy
            </span>
            <h2 className="font-serif text-3xl text-white font-semibold tracking-tight">
              A Symphony in Navy & Gold
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              To us, the presentation is as integral to the experience as the flour itself. Our gift boxes are manufactured by hand in Paris using recycled premium rigid fibers, wrapped in navy velvet-finish stock, and pressed with real gold brass plates.
            </p>
            <ul className="space-y-4 text-xs sm:text-sm text-stone-300 font-sans">
              <li className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">1</span>
                <span><strong>Humidity Controlled Shielding:</strong> Internal gold-foil barriers prevent flavor absorption from the air.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="w-5 h-5 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">2</span>
                <span><strong>Heavy Calligraphy Papers:</strong> Personalized letters are hand-stamped with a bespoke beeswax crest.</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                id="cta-buy-box-btn"
                onClick={() => navigateTo('collections')}
                className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-xs font-mono uppercase tracking-widest font-semibold transition-colors"
              >
                Inspect Gift Boxes <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. EDITORIAL BENTO GRID (MUSEUM QUALITY PRESENTATION) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
            Fine Materials
          </span>
          <h2 className="font-serif text-3xl text-stone-900 font-semibold tracking-tight">
            Our Baking Standards
          </h2>
          <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Normandy Butter */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-stone-200/60 p-8 flex flex-col md:flex-row gap-8 items-center shadow-xs">
            <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                alt="Normandy Butter Sourcing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 text-left space-y-4">
              <span className="text-[9px] uppercase tracking-wider font-mono text-amber-600 font-semibold">AOP Sourcing</span>
              <h3 className="font-serif text-lg font-medium text-stone-900">Normandy Cream Churn</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                We use exclusively Charentes-Poitou butter. Churned using centuries-old wooden paddles, this butter carries an 84% fat content and deep hazelnut aromas.
              </p>
            </div>
          </div>

          {/* Card 2: Single-Estate Cocoa */}
          <div className="md:col-span-5 bg-stone-950 text-stone-100 rounded-2xl border border-stone-800 p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4 text-left">
              <span className="text-[9px] uppercase tracking-wider font-mono text-amber-400 font-semibold">The Chocolate Estate</span>
              <h3 className="font-serif text-xl font-medium text-white">Valrhona 72% Obsidian Shards</h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                No industrial chips. We melt whole, wood-fired dark chocolate bars from Madagascar estates, hand-chopping them to create varying obsidian liquid pools inside each cookie.
              </p>
            </div>
            <div className="pt-8 border-t border-stone-800 flex justify-between items-center text-xs">
              <span className="font-mono text-stone-500">Cocoa Registry #72-12</span>
              <span className="text-amber-400 font-medium">Single-Estate</span>
            </div>
          </div>

          {/* Card 3: Flour Resting Cycle */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-stone-200/60 p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4 text-left">
              <span className="text-[9px] uppercase tracking-wider font-mono text-amber-600 font-semibold">Baking Physics</span>
              <h3 className="font-serif text-lg font-medium text-stone-900">36-Hour Dough Hydration</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Hydration is time, and time is flavor. Resting the dough for 36 hours breaks down complex starch enzymes, releasing beautiful caramelized sugars during our oven bake.
              </p>
            </div>
            <div className="pt-8 text-left">
              <span className="text-amber-700 font-serif font-normal italic text-sm">"Slow baking is real luxury."</span>
            </div>
          </div>

          {/* Card 4: Curated Tea Pairings */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-stone-200/60 p-8 flex flex-col md:flex-row gap-8 items-center shadow-xs">
            <div className="md:w-1/2 text-left space-y-4 order-2 md:order-1">
              <span className="text-[9px] uppercase tracking-wider font-mono text-amber-600 font-semibold">Gourmet Rituals</span>
              <h3 className="font-serif text-lg font-medium text-stone-900">Tea & Coffee Affinities</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Each collection contains custom notes describing water temperatures and bean profiles that harmonize with each cookie, turning tasting into an elegant ceremony.
              </p>
            </div>
            <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-stone-100 order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
                alt="Afternoon Tea pairings"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. PRIVATE TASTING BOOKING CTA */}
      <section className="bg-amber-50/60 py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Calendar className="w-8 h-8 text-amber-700 mx-auto mb-2" />
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-semibold tracking-tight">
            The private boutique experience
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Reserve a dedicated tasting salon at our flagship Rue de l’Université location. Sample hot sablés straight from the hearth alongside our chief patissier.
          </p>
          <div>
            <button
              id="cta-reserve-tasting-btn"
              onClick={() => navigateTo('store-experience')}
              className="bg-stone-900 hover:bg-stone-800 text-white font-serif py-3.5 px-10 rounded-full font-medium text-xs uppercase tracking-widest transition-colors shadow-md"
            >
              Book Tasting Salon
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
