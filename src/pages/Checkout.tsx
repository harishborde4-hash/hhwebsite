import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

// EmailJS Configuration (From user prompt)
const EMAILJS_PUBLIC_KEY = "FSXiN_NC3L0ZgNoXN";
const EMAILJS_SERVICE_ID = "service_teestorm"; // Replace with real Service ID
const EMAILJS_TEMPLATE_ID = "template_order_conf"; // Replace with real Template ID

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmailConfirmation = async (orderDetails: any) => {
    try {
      const itemsList = orderDetails.items.map((item: any) => 
        `${item.name} (${item.selectedSize}/${item.selectedColor}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
      ).join('\n');

      const templateParams = {
        to_email: formData.email,
        customer_name: `${formData.firstName} ${formData.lastName}`,
        order_id: orderDetails.id,
        order_total: `$${orderDetails.total.toFixed(2)}`,
        items_list: itemsList,
        shipping_address: `${formData.address}, ${formData.city}, ${formData.zipCode}`,
        message: "Thank you for shopping with TEESTORM! Your order is being processed."
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast.success(`Confirmation email sent to ${formData.email}`);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Could not send confirmation email, but your order is placed!');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsProcessing(true);
    
    try {
      // Create order in Firestore
      const orderData = {
        userId: user?.uid || 'guest',
        items: cart,
        total: cartTotal,
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`,
          address: formData.address,
          city: formData.city,
          zipCode: formData.zipCode
        },
        email: formData.email,
        status: 'processing',
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, 'orders'), orderData);
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      await sendEmailConfirmation({ ...orderData, id: docRef.id });
      
      setOrderComplete(true);
      clearCart();
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black mb-4">THANK YOU!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Your order has been placed successfully. We've sent a confirmation email with your bill and tracking details to <span className="font-bold text-black">{formData.email}</span>.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-12">
            {/* Shipping Information */}
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-indigo-600 text-white rounded-lg">
                  <Truck size={20} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Shipping Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all"
                />
                <input 
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all"
                />
                <input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all md:col-span-2"
                />
                <input 
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street Address" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all md:col-span-2"
                />
                <input 
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all"
                />
                <input 
                  required
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="ZIP / Postal Code" 
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all"
                />
              </div>
            </section>

            {/* Payment Information */}
            <section>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-indigo-600 text-white rounded-lg">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Payment Method</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-3xl border-2 border-indigo-600 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CreditCard className="text-indigo-600" />
                    <div>
                      <p className="font-bold">Credit / Debit Card</p>
                      <p className="text-xs text-gray-500">Secure encrypted payment</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <input 
                    required
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Card Number" 
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all md:col-span-2"
                  />
                  <input 
                    required
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM / YY" 
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all"
                  />
                  <input 
                    required
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV" 
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-600 transition-all"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:w-[450px]">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
              <div className="max-h-[300px] overflow-y-auto pr-2 mb-8 space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4">
                    <img src={item.images[0]} className="w-16 h-20 rounded-xl object-cover" alt={item.name} />
                    <div className="flex-1">
                      <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">Size: {item.selectedSize} • Qty: {item.quantity}</p>
                      <p className="font-bold text-indigo-600 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-4 border-t border-gray-100 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-3xl font-black text-indigo-600">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                disabled={isProcessing}
                type="submit"
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200'}`}
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <ShieldCheck size={24} />
                    <span>PAY & CONFIRM ORDER</span>
                  </>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
                By completing your purchase you agree to our <br />
                <span className="font-bold">Terms of Service</span> and <span className="font-bold">Refund Policy</span>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
