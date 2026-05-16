import { motion } from 'framer-motion';
import { ArrowRight, Truck, ShieldCheck, Zap, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1920&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
              Spring Collection 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              UNLEASH YOUR <span className="text-indigo-500">STORM</span> STYLE.
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              Discover the finest collection of premium t-shirts designed for the modern individual. Quality meets comfort in every stitch.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/category/Oversized" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center space-x-2">
                <span>Shop Collection</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/category/Graphic" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center">
                View Lookbook
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Row */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Free Shipping</h4>
                <p className="text-xs text-gray-500">Orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Secure Payment</h4>
                <p className="text-xs text-gray-500">100% Secure Checkout</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Fast Delivery</h4>
                <p className="text-xs text-gray-500">Within 2-3 Days</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <RefreshCcw size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Easy Returns</h4>
                <p className="text-xs text-gray-500">30-Day Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black mb-2">FEATURED DROPS</h2>
              <p className="text-gray-500">Check out our latest and most popular designs.</p>
            </div>
            <Link to="/category/all" className="text-indigo-600 font-bold flex items-center space-x-2 group">
              <span>View All</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-indigo-600 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white mb-10 lg:mb-0 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">JOIN THE STORM CLUB & GET 20% OFF</h2>
              <p className="text-indigo-100 text-lg mb-8">Sign up for our newsletter and receive an exclusive discount code on your first order.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-xl text-black focus:ring-4 focus:ring-white/20 transition-all"
                />
                <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all">
                  Join Now
                </button>
              </div>
            </div>
            <div className="relative">
               <motion.div 
                 animate={{ rotate: [0, 5, 0, -5, 0] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/20"
               >
                 <Zap size={100} className="text-white fill-white" />
               </motion.div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-900/50 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default Home;
