import { ArrowRight, Sparkles, Star, Package, Clock, Flame } from 'lucide-react';
import { Page } from '../types';

interface CollectionsProps {
  setActivePage: (page: Page) => void;
}

export default function Collections({ setActivePage }: CollectionsProps) {
  const handleExplore = () => {
    setActivePage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'sable',
      title: 'The Artisan Sablé Series',
      subtitle: 'Pure butter-crust geometry refined over generations',
      description: 'Our traditional Sablé series centers on the mathematical perfect ratio of 84% fat Charentes-Poitou butter, unbleached flour, and raw cane sugar. Resting the raw dough at 4°C allows natural fermentation to occur, culminating in an incredibly fine, flakey crumble accented by flaky hand-harvested sea salt.',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
      tag: 'Normandy Tradition',
      highlights: [
        'AOP Charentes-Poitou French Butter base',
        'Fleur de Sel de Guérande accents',
        'Slow double-baked golden crusts',
        'Madagascar Bourbon vanilla bean infusion'
      ],
      icon: Star
    },
    {
      id: 'stuffed',
      title: 'Stuffed Chocolate Croquants',
      subtitle: 'Liquid-core engineering wrapped in caramelized nut crusts',
      description: 'Designed for the modern chocolate hedonist. These confections feature a robust, crunchy shell of caramelized raw Italian hazelnuts or Sicilian pistachios, housing a thick, slow-churned molten chocolate or stone-milled nut praline core that flows beautifully upon the first bite.',
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
      tag: 'Liquid Gold Core',
      highlights: [
        'Valrhona 72% single-estate dark chocolate',
        'Sicilian Bronte stone-milled praline fill',
        'Garnished with caramelized raw nuts',
        'Slightly smoked sea salt crust dusting'
      ],
      icon: Flame
    },
    {
      id: 'giftbox',
      title: 'Curated Caskets & Velvet Hampers',
      subtitle: 'Uncompromising luxury presentations pressed with real gold leaf',
      description: 'Bespoke corporate offerings, birthday statements, and personal anniversaries. Our rigid navy blue boxes are lined with protective gold parchment and hand-tied with heavy double-faced satin ribbons. Included is an illustrated wax-sealed directory detailing each recipe.',
      image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=800&q=80',
      tag: 'Bespoke Gifting',
      highlights: [
        'Hand-wrapped navy velvet fiber casket',
        'Personal letterpress calligraphy card',
        'Protective gold foil food-safe lining',
        'Custom wax seal stamped to order'
      ],
      icon: Package
    },
    {
      id: 'seasonal',
      title: 'Seasonal Solstice Releases',
      subtitle: 'Highly limited experimental floras and freeze-dried organic fruits',
      description: 'Our chief patissier’s playground. These micro-lot releases occur only four times a year. Inspired by changing climates, we infuse delicate doughs with organic steam-distilled floral essential oils, wild honey, and select hand-harvested botanicals.',
      image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=800&q=80',
      tag: 'Limited Batches',
      highlights: [
        'Organic Bulgarian Damask rose water',
        'Wild mountain sage honey glaze',
        'Hand-picked crimson rose petal flakes',
        'Limited to exactly 500 numbered boxes'
      ],
      icon: Clock
    }
  ];

  return (
    <div id="collections-overview-page" className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Title */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
            The Families
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
            Curated Collections
          </h1>
          <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4 mb-4" />
          <p className="text-xs text-stone-500 leading-relaxed">
            Every creation falls into a specific flavor lineage. Discover our four distinct confectionery disciplines, each crafted to achieve an absolute perfection in density, sugar-balance, and aroma.
          </p>
        </div>

        {/* Collections Stack */}
        <div className="space-y-24">
          {sections.map((sec, idx) => {
            const IconComponent = sec.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={sec.id}
                id={`collection-section-${sec.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 border border-stone-200/60 shadow-xs relative overflow-hidden`}
              >
                {/* Background soft lighting */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-stone-100/30 blur-3xl pointer-events-none" />

                {/* Left side (alternate layout) */}
                <div className={`lg:col-span-7 space-y-6 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                    <IconComponent className="w-3.5 h-3.5 text-amber-600" />
                    {sec.tag}
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 font-semibold mb-1">
                      {sec.title}
                    </h2>
                    <p className="text-xs font-serif text-amber-700 italic">
                      {sec.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {sec.description}
                  </p>

                  {/* Highlights list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-stone-100">
                    {sec.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex gap-2 items-start text-xs text-stone-600">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button to Shop */}
                  <div className="pt-6">
                    <button
                      id={`explore-collection-btn-${sec.id}`}
                      onClick={handleExplore}
                      className="bg-stone-900 hover:bg-stone-800 text-white font-serif py-3 px-8 rounded-full font-medium text-xs uppercase tracking-widest transition-all shadow-xs flex items-center gap-2 group"
                    >
                      Explore Series
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right side Photo container */}
                <div className={`lg:col-span-5 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-stone-100 border border-stone-200">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
