export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  chefNotes: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category: 'sable' | 'stuffed' | 'giftbox' | 'seasonal';
  ingredients: string[];
  nutritionalFacts: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  features: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedBoxSize: 6 | 12 | 24;
}

export interface BookingDetails {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

export type Page = 
  | 'home' 
  | 'shop' 
  | 'collections' 
  | 'product-details' 
  | 'about' 
  | 'contact' 
  | 'store-experience';
