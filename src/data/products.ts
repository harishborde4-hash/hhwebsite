import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Nebula Oversized Tee',
    description: 'A premium oversized t-shirt featuring a stunning nebula print on high-quality cotton.',
    price: 34.99,
    originalPrice: 45.00,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Oversized',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Midnight Blue', hex: '#191970' },
      { name: 'Black', hex: '#000000' }
    ],
    rating: 4.8,
    reviewsCount: 124,
    isNew: true,
    stock: 50
  },
  {
    id: '2',
    name: 'Classic White Essential',
    description: 'The ultimate white tee for your everyday wardrobe. Breathable and durable.',
    price: 19.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Classic',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' }
    ],
    rating: 4.5,
    reviewsCount: 342,
    stock: 100
  },
  {
    id: '3',
    name: 'Retro Wave Graphic Tee',
    description: '80s inspired retro wave graphic on a soft vintage-wash tee.',
    price: 29.99,
    originalPrice: 39.99,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Graphic',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Black', hex: '#000000' }
    ],
    rating: 4.9,
    reviewsCount: 89,
    isSale: true,
    stock: 25
  },
  {
    id: '4',
    name: 'Active Performance Tee',
    description: 'Moisture-wicking fabric designed for high-intensity training.',
    price: 24.99,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Sports',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Electric Blue', hex: '#0000FF' },
      { name: 'Neon Green', hex: '#39FF14' }
    ],
    rating: 4.7,
    reviewsCount: 56,
    stock: 40
  },
  {
    id: '5',
    name: 'Desert Sand Oversized',
    description: 'Earth-toned oversized fit, perfect for layering.',
    price: 32.00,
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Oversized',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand', hex: '#C2B280' }
    ],
    rating: 4.6,
    reviewsCount: 45,
    isNew: true,
    stock: 15
  },
  {
    id: '6',
    name: 'Cyberpunk Aesthetic',
    description: 'Futuristic design with neon accents and high-density printing.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Graphic',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' }
    ],
    rating: 4.9,
    reviewsCount: 12,
    stock: 10
  },
  {
    id: '7',
    name: 'Vintage Sun-Dazed Tee',
    description: 'A sun-bleached effect vintage tee that feels like a favorite from day one.',
    price: 28.00,
    images: [
      'https://images.unsplash.com/photo-1574180563860-ca22091f242f?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Classic',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Blue', hex: '#6082B6' },
      { name: 'Vintage Black', hex: '#333333' }
    ],
    rating: 4.7,
    reviewsCount: 67,
    stock: 30
  },
  {
    id: '8',
    name: 'Pro-Gym Compression',
    description: 'Ultra-tight compression fit for maximum muscle support during workouts.',
    price: 45.00,
    images: [
      'https://images.unsplash.com/photo-1556816214-da47b1af2962?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Sports',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#111111' }
    ],
    rating: 4.9,
    reviewsCount: 215,
    isNew: true,
    stock: 100
  },
  {
    id: '9',
    name: 'Abstract Expressionist Tee',
    description: 'Wearable art featuring an abstract print across the chest and back.',
    price: 36.50,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Graphic',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'White', hex: '#FFFFFF' }
    ],
    rating: 4.4,
    reviewsCount: 31,
    stock: 12
  },
  {
    id: '10',
    name: 'Forest Canopy Oversized',
    description: 'Deep green oversized tee with a subtle forest-inspired texture.',
    price: 33.99,
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80'
    ],
    category: 'Oversized',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Forest Green', hex: '#228B22' }
    ],
    rating: 4.8,
    reviewsCount: 54,
    isSale: true,
    stock: 20
  }
];
