import { Sparkles, Award, Shield, Users } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      title: 'Centennial Recipes',
      description: 'We keep original copper ledger books hand-inked with baking times and hydration constants since our first flour hydrated on Rue de l’Université.',
      icon: Award
    },
    {
      title: 'Certified Origin (AOP)',
      description: 'We reject artificial replacements. Every ounce of butter used carries the official French Protected Designation of Origin seal.',
      icon: Shield
    },
    {
      title: 'Stone Mill Pralines',
      description: 'Our nuts are stone-milled inside traditional Italian granite wheel mills for six hours, producing micro-fine, velvety textures.',
      icon: Users
    }
  ];

  const milestones = [
    {
      year: '1912',
      title: 'Flour Hydrated on Rue de l’Université',
      description: 'Chief Patissier Jacques opened a tiny, three-oven boutique baking hand-pressed fleur-de-sel sablés.'
    },
    {
      year: '1948',
      title: 'The Casket Creation',
      description: 'Introduced our signature rigid cylindrical caskets wrapped in navy blue fiber stock and hand-pressed with hot brass dye plates.'
    },
    {
      year: '1982',
      title: 'The Solstice Releases',
      description: 'Began formulating micro-batch cookies infused with fresh steam-distilled floral water and custom honey elixirs.'
    },
    {
      year: 'Present',
      title: 'Museum-Quality Craftsmanship',
      description: 'Combining state-of-the-art interactive 3D box inspection with centuries-old Normandy butter-churning techniques.'
    }
  ];

  return (
    <div id="about-heritage-page" className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
            The Chronicle
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
            Our Baking Heritage
          </h1>
          <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4 mb-4" />
          <p className="text-xs text-stone-500 leading-relaxed">
            Sweet Cookie represents a century-long dialogue between culinary physics and traditional French pastry philosophy. We make biscuits not for volume, but for critical appreciation.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-[9px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Philosophy of baking
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-stone-900">
              "We measure dough hydration in hours, not minutes."
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              Industrial baking speed strips flour of its soul. Our dough undergoes a rigid 36-hour chilling and rest phase at exactly 4°C. This allows our unbleached wheat starches to fully expand and absorb lactic acids released by our AOP churned butter, producing caramelized honey notes under our hearth bakes.
            </p>
            <p className="text-xs text-stone-400 italic">
              "There are no shortcuts to a perfect golden crumble."
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-stone-100 border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80"
                alt="Inside Sweet Cookie boutique"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Core Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-stone-200/60 p-8 shadow-xs text-left space-y-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900">{val.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>

        {/* Heritage Timeline */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-14 shadow-xs">
          <h2 className="font-serif text-2xl text-stone-900 font-semibold text-center mb-12">
            Historical Milestones
          </h2>
          <div className="relative border-l border-stone-200 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12 text-left">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative">
                {/* Node indicator */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-amber-600 bg-white" />
                
                <div className="space-y-1">
                  <span className="font-mono text-sm font-bold text-amber-700 tracking-widest block">
                    {ms.year}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-stone-900">
                    {ms.title}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-xl">
                    {ms.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
