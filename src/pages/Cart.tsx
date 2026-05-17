import { } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="bg-emerald-100 p-6 rounded-full mb-6">
          <ShoppingBag className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2 dark:text-white">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/" 
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all"
        >
          Browse Salads
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border dark:border-gray-700"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg dark:text-white">{item.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-bold">₹{item.price}</p>
                
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-emerald-600"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-bold dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-emerald-600"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg dark:text-white">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border dark:border-gray-700 h-fit">
          <h2 className="text-xl font-bold mb-6 dark:text-white">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>
            <hr className="dark:border-gray-700" />
            <div className="flex justify-between text-xl font-bold dark:text-white">
              <span>Total</span>
              <span className="text-emerald-600">₹{totalPrice + 40}</span>
            </div>
          </div>
          
          <button 
            onClick={() => user ? navigate('/checkout') : navigate('/login')}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-200 dark:shadow-none"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          {!user && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Please login to place an order
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
