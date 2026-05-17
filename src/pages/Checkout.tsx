import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { CheckCircle, CreditCard, Truck, Loader2 } from 'lucide-react';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      // 1. Save order to Firestore
      const orderData = {
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0],
        userEmail: user.email,
        items: cart,
        totalPrice: totalPrice + 40,
        status: 'Processing',
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'orders'), orderData);

      // 2. Send confirmation email via Resend API
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: user.displayName || user.email?.split('@')[0],
          orderId: docRef.id,
          totalPrice: totalPrice + 40,
          items: cart,
        }),
      });

      setOrderComplete(true);
      clearCart();
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-emerald-100 p-6 rounded-full mb-6">
          <CheckCircle className="h-16 w-16 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-black mb-4 dark:text-white">Order Confirmed!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          Thank you for your purchase! We've sent a confirmation email to your inbox. 
          Your delicious salad will be there in 20 minutes.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-10 dark:text-white text-center">Complete Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white">
            <Truck className="h-5 w-5 text-emerald-600" />
            Delivery Details
          </h2>
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input required type="text" defaultValue={user?.displayName || ''} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Shipping Address</label>
              <textarea required rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white" />
            </div>
            
            <h2 className="text-xl font-bold mt-10 mb-6 flex items-center gap-2 dark:text-white">
              <CreditCard className="h-5 w-5 text-emerald-600" />
              Payment Method
            </h2>
            <div className="p-4 border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-600"></div>
                <span className="font-bold text-emerald-900 dark:text-emerald-100">Cash on Delivery</span>
              </div>
              <span className="text-sm font-bold text-emerald-600">Free</span>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 mt-8 shadow-xl shadow-emerald-200 dark:shadow-none disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <>
                  <span>Place Order - ₹{totalPrice + 40}</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl h-fit border dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6 dark:text-white">Your Order</h2>
          <div className="space-y-4 mb-8">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold dark:text-white text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-bold dark:text-white">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3 pt-6 border-t dark:border-gray-700">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>
            <div className="flex justify-between text-xl font-bold dark:text-white pt-4">
              <span>Total</span>
              <span className="text-emerald-600">₹{totalPrice + 40}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
