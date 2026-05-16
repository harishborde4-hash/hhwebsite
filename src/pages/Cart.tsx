import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-400">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet. Let's change that!</p>
          <Link to="/" className="inline-block bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-12">SHOPPING BAG</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-6 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm"
                >
                  <div className="w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <span className="font-medium">Size:</span>
                          <span className="px-2 py-0.5 bg-gray-100 rounded-md font-bold">{item.selectedSize}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <span className="font-medium">Color:</span>
                          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: item.colors.find(c => c.name === item.selectedColor)?.hex }} />
                          <span className="font-bold">{item.selectedColor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center space-x-4 bg-gray-50 p-1 rounded-xl">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="p-1.5 hover:bg-white rounded-lg transition-all"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-6 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="p-1.5 hover:bg-white rounded-lg transition-all"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="text-xl font-black text-indigo-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:w-[400px]">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-black">$0.00</span>
                </div>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-black text-indigo-600">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/checkout"
                className="w-full bg-black text-white py-5 rounded-2xl font-black text-center block hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                PROCEED TO CHECKOUT
              </Link>
              
              <div className="mt-8">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">We Accept</h4>
                <div className="flex justify-center items-center space-x-4 opacity-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
