import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Shield, Truck, RefreshCw, Minus, Plus, Heart, Share2, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || '');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="pt-32 pb-20 text-center">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    toast.success('Added to cart!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Gallery */}
          <div className="flex-1 space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handleShare}
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-sm"
              >
                <Share2 size={20} />
              </button>
            </motion.div>
            <div className="flex space-x-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-indigo-600' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-widest">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    New
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-black mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">{product.reviewsCount} verified reviews</span>
              </div>
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-black text-indigo-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <div className="space-y-8">
              {/* Color Selection */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Color: {selectedColor}</h4>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 ${selectedColor === color.name ? 'border-indigo-600' : 'border-transparent'}`}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest">Select Size</h4>
                  <button className="text-sm font-bold text-indigo-600 underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-bold rounded-xl border-2 transition-all ${selectedSize === size ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Quantity</h4>
                <div className="flex items-center space-x-4 w-fit bg-gray-50 p-2 rounded-2xl">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-white rounded-xl transition-all shadow-sm"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-white rounded-xl transition-all shadow-sm"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-gray-900 transition-all flex items-center justify-center space-x-3"
                >
                  <ShoppingCart size={24} />
                  <span>ADD TO CART</span>
                </button>
                <button className="px-6 py-5 rounded-2xl border-2 border-gray-100 hover:bg-gray-50 transition-all">
                  <Heart size={24} />
                </button>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <Truck className="text-indigo-600" size={20} />
                  <span className="text-sm font-medium">Free express shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-indigo-600" size={20} />
                  <span className="text-sm font-medium">Secure payment gateway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="text-indigo-600" size={20} />
                  <span className="text-sm font-medium">30-day easy returns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-indigo-600" size={20} />
                  <span className="text-sm font-medium">Ethically sourced cotton</span>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Product Description</h4>
                <p className="text-gray-500 leading-relaxed">
                  {product.description} Crafted with 100% premium heavy cotton for a structured yet breathable feel. Features reinforced seams and a classic fit that stays true to size even after multiple washes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
