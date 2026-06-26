import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'fleur-de-sel-sable',
    name: 'Fleur de Sel Butter Sablé',
    tagline: 'A delicate French butter-crust masterpiece, accented by rare sea salt crystals.',
    description: 'Our signature Sablé represents the pinnacle of classical French pastry technique. Hand-rolled with high-fat Normandy butter, unbleached flour, and pure Madagascar Bourbon vanilla beans, each biscuit is carefully baked to a perfect golden crumble before being sprinkled with genuine hand-harvested Fleur de Sel from Guérande.',
    chefNotes: 'We rest the dough for exactly 36 hours at 4°C to fully hydrate the flour and develop the deep, lactic butter flavors before baking. Best enjoyed alongside an afternoon Earl Grey.',
    price: 24.00,
    rating: 4.9,
    reviewsCount: 148,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    category: 'sable',
    ingredients: [
      'Charentes-Poitou Butter (AOP)',
      'Unbleached Wheat Flour',
      'Organic Cane Sugar',
      'Madagascar Bourbon Vanilla',
      'Guérande Fleur de Sel',
      'Organic Egg Yolks'
    ],
    nutritionalFacts: {
      calories: 140,
      protein: '2g',
      carbs: '15g',
      fat: '8g'
    },
    features: [
      '100% Organic, certified AOP butter',
      'No artificial preservatives or flavorings',
      'Hand-crafted in micro-batches daily',
      'Sustainably sourced vanilla'
    ],
    isBestSeller: true
  },
  {
    id: 'pistachio-praline-croquant',
    name: 'Pistachio Praline Croquant',
    tagline: 'Filled with slow-roasted Sicilian pistachio praline and gold flakes.',
    description: 'An indulgent, multi-textured cookie featuring a soft, tender center stuffed with a luxurious, slow-churned Sicilian pistachio praline paste. The outer crust is studded with caramelized raw pistachios and a delicate dusting of edible 24k gold leaf, creating a truly majestic tasting profile.',
    chefNotes: 'To achieve the ultimate creaminess, our house praline is ground in a traditional stone mill for six hours until it reaches a velvety, micro-fine texture.',
    price: 28.00,
    rating: 5.0,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
    category: 'stuffed',
    ingredients: [
      'Bronte Pistachios (AOP)',
      'Single-Estate White Chocolate',
      'Normandy Butter',
      'Organic Egg Whites',
      'French Wheat Flour',
      'Edible Gold Leaf'
    ],
    nutritionalFacts: {
      calories: 180,
      protein: '4g',
      carbs: '18g',
      fat: '11g'
    },
    features: [
      'Authentic Bronte Sicilian pistachios',
      'Hand-applied 24k gold leaf garnish',
      'Melt-in-your-mouth liquid core',
      'Stone-milled nut praline'
    ],
    isBestSeller: true,
    isNew: true
  },
  {
    id: 'royale-grand-box',
    name: 'The Royale Grand Gift Box',
    tagline: 'An exquisite curation of our finest signature cookies in a velvet casket.',
    description: 'Designed for the ultimate connoisseur, The Royale Grand Gift Box gathers 18 of our most beloved creations. Secured in a luxury, rigid-shelled navy velvet box with gold-foil letterpress accents, each cookie is individually nestled in custom gold parchment to preserve its pristine shape and aroma.',
    chefNotes: 'This collection features a balanced assortment of our classic Sablés, double-baked Croquants, and seasonal tarts. The velvet box itself is crafted to be a durable keepsake.',
    price: 75.00,
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=800&q=80',
    category: 'giftbox',
    ingredients: [
      'Normandy Butter',
      'Piedmont Hazelnuts',
      'Madagascar Vanilla Beans',
      'Valrhona Dark Chocolate',
      'Sicilian Pistachios',
      'Sea Salt of Guérande'
    ],
    nutritionalFacts: {
      calories: 160,
      protein: '3g',
      carbs: '16g',
      fat: '9g'
    },
    features: [
      'Contains 18 hand-selected artisan cookies',
      'Navy velvet-finish reusable keepsake casket',
      'Includes illustrated tasting guide',
      'Complimentary wax-sealed gift letter'
    ],
    isBestSeller: true
  },
  {
    id: 'espresso-obsidian-chunk',
    name: 'Espresso Obsidian Dark Chunk',
    tagline: 'Ethiopian espresso beans infused with 72% single-origin dark chocolate.',
    description: 'An intense, dramatic cookie crafted with a deeply dark cocoa base. We infuse the dough with freshly ground, single-origin Ethiopian Yirgacheffe espresso beans, then fold in generous, hand-broken shards of Valrhona 72% dark chocolate. The result is a robust, bittersweet symphony.',
    chefNotes: 'We pair espresso with Valrhona cocoa because the high acidity of Yirgacheffe coffee perfectly balances the smoky, red-fruit notes of the single-estate dark chocolate.',
    price: 26.00,
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    category: 'stuffed',
    ingredients: [
      'Valrhona 72% Dark Chocolate',
      'Ethiopian Yirgacheffe Coffee',
      'Dark Dutch Cocoa Powder',
      'Brown Butter',
      'Cane Sugar',
      'Maldon Smoked Sea Salt'
    ],
    nutritionalFacts: {
      calories: 170,
      protein: '3g',
      carbs: '19g',
      fat: '10g'
    },
    features: [
      'Single-origin Valrhona grand cru chocolate',
      'Micro-lot specialty coffee beans',
      'Garnished with smoked salt crystals',
      'Deep, low-sugar flavor profile'
    ],
    isNew: true
  },
  {
    id: 'strawberry-rose-ispahan',
    name: 'Strawberry Rose Ispahan Sablé',
    tagline: 'Delicate floral biscuit with organic strawberries and Damask rose.',
    description: 'A poetic, floral formulation inspired by classic French patisserie. This crumbly Sablé is infused with steam-distilled Bulgarian Damask rose water, studded with tart freeze-dried organic strawberries, and decorated with dried crimson rose petals. It offers an incredibly clean, aromatic floral finish.',
    chefNotes: 'We use a highly delicate hand-folding technique to keep the strawberry chunks intact, preserving beautiful pink pockets that burst with intense fruit acidity.',
    price: 32.00,
    rating: 4.7,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=800&q=80',
    category: 'seasonal',
    ingredients: [
      'Organic Strawberries',
      'Bulgarian Damask Rose Water',
      'French Wheat Flour',
      'AOP Normandy Butter',
      'Sugared Rose Petals',
      'Organic Egg Whites'
    ],
    nutritionalFacts: {
      calories: 130,
      protein: '2g',
      carbs: '17g',
      fat: '7g'
    },
    features: [
      'Steam-distilled Bulgarian rose water',
      'Naturally sweetened with organic fruit',
      'Edible hand-picked rose petals',
      'Exclusive spring-summer seasonal release'
    ]
  },
  {
    id: 'velvet-tasting-hamper',
    name: 'Bespoke Velvet Tasting Hamper',
    tagline: 'The ultimate confectionery voyage with personalized letterpress cards.',
    description: 'The crowning achievement of our gift line, the Bespoke Velvet Tasting Hamper is an immersive epicurean experience. This stunning, leather-strapped case contains 24 custom-made gourmet cookies, two jars of artisan vanilla-bean and chocolate spreads, a professional cookie-tasting guide, and a heavy-cardstock letterpress card customized with your message.',
    chefNotes: 'This represents our absolute grandest presentation. Each hamper is custom-packed on the morning of dispatch with cookies baked less than four hours prior.',
    price: 120.00,
    rating: 5.0,
    reviewsCount: 43,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    category: 'giftbox',
    ingredients: [
      'Artisan Butter Spreads',
      'Assorted Cookie Batters',
      'Single-Origin Nuts & Cocoa',
      'Tahitian Vanilla Bean',
      'Organic Jams & Curds'
    ],
    nutritionalFacts: {
      calories: 165,
      protein: '3g',
      carbs: '16g',
      fat: '10g'
    },
    features: [
      '24 freshly baked luxury cookies',
      'Two exclusive spreads (Vanilla & Cocoa)',
      'Hand-crafted leather-strapped velvet case',
      'Individually customized calligraphy card'
    ]
  }
];
