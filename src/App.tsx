import { useState, useEffect } from 'react';
import { Page, CartItem, Product } from './types';
import { PRODUCTS } from './data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import CartSidebar from './components/CartSidebar';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import StoreExperience from './pages/StoreExperience';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize cart from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sweet_cookie_cart');
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Failed to load cart from local storage', e);
    }
  }, []);

  // Sync cart to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem('sweet_cookie_cart', JSON.stringify(newCart));
    } catch (e) {
      console.warn('Failed to save cart to local storage', e);
    }
  };

  // 1. Add to Cart Handler
  const handleAddToCart = (newItem: CartItem) => {
    const existingIndex = cart.findIndex(
      (item) =>
        item.product.id === newItem.product.id &&
        item.selectedBoxSize === newItem.selectedBoxSize
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += newItem.quantity;
      saveCart(updated);
    } else {
      saveCart([...cart, newItem]);
    }
  };

  // 2. Update Quantity Handler
  const handleUpdateQuantity = (productId: string, qty: number, boxSize: 6 | 12 | 24) => {
    if (qty <= 0) {
      handleRemoveItem(productId, boxSize);
      return;
    }

    const updated = cart.map((item) => {
      if (item.product.id === productId && item.selectedBoxSize === boxSize) {
        return { ...item, quantity: qty };
      }
      return item;
    });
    saveCart(updated);
  };

  // 3. Remove Item Handler
  const handleRemoveItem = (productId: string, boxSize: 6 | 12 | 24) => {
    const filtered = cart.filter(
      (item) => !(item.product.id === productId && item.selectedBoxSize === boxSize)
    );
    saveCart(filtered);
  };

  // 4. Clear Cart Handler
  const handleClearCart = () => {
    saveCart([]);
  };

  // 5. Navigate to Product Details
  const handleViewProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActivePage('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active product
  const activeProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 flex flex-col selection:bg-amber-600/20 selection:text-amber-900">
      {/* Shared Luxury Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        setSelectedProductId={setSelectedProductId}
      />

      {/* Main Page Rendering Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <Home
            products={PRODUCTS}
            onViewProduct={handleViewProduct}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'shop' && (
          <Shop
            products={PRODUCTS}
            onViewProduct={handleViewProduct}
          />
        )}

        {activePage === 'collections' && (
          <Collections
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'product-details' && (
          <ProductDetails
            product={activeProduct}
            onBack={() => {
              setActivePage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
            setIsCartOpen={setIsCartOpen}
          />
        )}

        {activePage === 'about' && <About />}

        {activePage === 'contact' && <Contact />}

        {activePage === 'store-experience' && <StoreExperience />}
      </main>

      {/* Persistent Newsletter Call-out (Shown before footer) */}
      <Newsletter />

      {/* Shared Footer Details */}
      <Footer
        setActivePage={setActivePage}
        setSelectedProductId={setSelectedProductId}
      />

      {/* Shopping Cart Drawer Overlay */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
