import { useState } from 'react';
import { Menu, X, ShoppingBag, Search, Sparkles } from 'lucide-react';
import { Page, CartItem } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  cart: CartItem[];
  setIsCartOpen: (isOpen: boolean) => void;
  setSelectedProductId: (id: string | null) => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  cart,
  setIsCartOpen,
  setSelectedProductId,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Boutique Home', page: 'home' },
    { label: 'Shop Cookies', page: 'shop' },
    { label: 'Curated Collections', page: 'collections' },
    { label: 'Store Experience', page: 'store-experience' },
    { label: 'Our Heritage', page: 'about' },
    { label: 'Bespoke Contact', page: 'contact' },
  ];

  const navigateTo = (page: Page) => {
    setActivePage(page);
    setSelectedProductId(null);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation-bar"
      className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center">
            <button
              id="brand-logo-btn"
              onClick={() => navigateTo('home')}
              className="group flex flex-col items-center focus:outline-none"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-serif text-2xl font-semibold tracking-wider text-stone-900 uppercase">
                  Sweet Cookie
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-mono -mt-0.5">
                Luxury Confectionery
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              const isSelected = activePage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-item-${item.page}`}
                  onClick={() => navigateTo(item.page)}
                  className={`relative text-xs uppercase tracking-widest font-medium transition-colors duration-300 focus:outline-none py-1 ${
                    isSelected ? 'text-amber-600' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {isSelected && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-amber-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Header Action Icons */}
          <div className="hidden md:flex items-center space-x-6 text-stone-600">
            <button
              id="nav-search-btn"
              className="p-1 hover:text-stone-900 transition-colors focus:outline-none"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Cart Button */}
            <button
              id="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-800 hover:text-stone-950 focus:outline-none group flex items-center gap-1"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center tracking-normal">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              id="nav-cart-btn-mobile"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-stone-800 focus:outline-none"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="nav-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 focus:outline-none p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-navigation-panel" className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                id={`mobile-nav-item-${item.page}`}
                onClick={() => navigateTo(item.page)}
                className={`block w-full text-left text-sm uppercase tracking-widest font-medium py-2 px-3 rounded-md transition-colors ${
                  activePage === item.page
                    ? 'bg-amber-50 text-amber-600 font-semibold'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
