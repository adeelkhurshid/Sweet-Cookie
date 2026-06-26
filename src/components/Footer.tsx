import { Page } from '../types';
import { Sparkles, MapPin, Phone, Mail, Instagram, Compass, Heart } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: Page) => void;
  setSelectedProductId: (id: string | null) => void;
}

export default function Footer({ setActivePage, setSelectedProductId }: FooterProps) {
  const navigateTo = (page: Page) => {
    setActivePage(page);
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer-section" className="bg-stone-950 text-stone-400 pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Description */}
        <div className="md:col-span-1 space-y-4">
          <button
            onClick={() => navigateTo('home')}
            className="group flex flex-col items-start focus:outline-none text-left"
          >
            <div className="flex items-center gap-1.5 text-white">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="font-serif text-2xl font-semibold tracking-wider uppercase">
                Sweet Cookie
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-amber-500/80 font-mono -mt-0.5">
              Luxury Confectionery
            </span>
          </button>
          <p className="text-xs text-stone-500 leading-relaxed max-w-xs italic">
            Established under French patisserie traditions, crafting museum-grade artisan biscuits with single-estate cacao and cold-pressed Normandy cream.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-white transition-colors p-1" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-1" title="Pinterest">
              <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 font-semibold">
            The Collections
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <button
                onClick={() => navigateTo('shop')}
                className="hover:text-white hover:underline transition-colors"
              >
                Signature Sablés
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('shop')}
                className="hover:text-white hover:underline transition-colors"
              >
                Stuffed Chocolate Croquants
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('collections')}
                className="hover:text-white hover:underline transition-colors"
              >
                Bespoke Leather Hampers
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('shop')}
                className="hover:text-white hover:underline transition-colors"
              >
                Seasonal Fruit Medleys
              </button>
            </li>
          </ul>
        </div>

        {/* Boutique Locations */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 font-semibold">
            Paris Flagship Boutique
          </h4>
          <ul className="space-y-3.5 text-xs">
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>42 Rue de l’Université, 75007 Paris, France</span>
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>+33 (0) 1 45 44 23 88</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>orders@sweetcookie.com</span>
            </li>
          </ul>
        </div>

        {/* Experience details */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6 font-semibold">
            Bespoke Hours
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex justify-between">
              <span>Monday – Friday</span>
              <span className="font-mono text-white">09:00 – 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="font-mono text-white">10:00 – 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday (Tasting Only)</span>
              <span className="font-mono text-white">11:00 – 17:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Underline and Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
        <p>&copy; {new Date().getFullYear()} Sweet Cookie Confectionery. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> under the highest French AOP guidelines.
        </p>
      </div>
    </footer>
  );
}
