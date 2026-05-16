import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X, Heart, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { cartCount } = useCart();
  const { user, logout, signInWithGoogle } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-2xl font-black tracking-tighter text-black ml-2 md:ml-0">
              TEE<span className="text-indigo-600">STORM</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/Oversized" className="text-sm font-medium hover:text-indigo-600 transition-colors">Oversized</Link>
            <Link to="/category/Graphic" className="text-sm font-medium hover:text-indigo-600 transition-colors">Graphic</Link>
            <Link to="/category/Classic" className="text-sm font-medium hover:text-indigo-600 transition-colors">Classic</Link>
            <Link to="/category/Sports" className="text-sm font-medium hover:text-indigo-600 transition-colors">Sports</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            
            <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
              <Heart size={20} />
            </Link>

            <div className="relative">
              {user ? (
                <div className="group relative">
                  <button className="flex items-center space-x-2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <img 
                      src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`} 
                      alt="avatar" 
                      className="w-8 h-8 rounded-full"
                    />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 border-b border-gray-50">
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-50">My Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm hover:bg-gray-50">Orders</Link>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={signInWithGoogle}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <User size={20} />
                </button>
              )}
            </div>

            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link to="/category/Oversized" className="block text-lg font-medium">Oversized</Link>
              <Link to="/category/Graphic" className="block text-lg font-medium">Graphic</Link>
              <Link to="/category/Classic" className="block text-lg font-medium">Classic</Link>
              <Link to="/category/Sports" className="block text-lg font-medium">Sports</Link>
              <hr />
              <Link to="/wishlist" className="block text-lg font-medium">Wishlist</Link>
              <Link to="/profile" className="block text-lg font-medium">Profile</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white p-4 border-b border-gray-100 shadow-xl"
          >
            <div className="max-w-3xl mx-auto relative">
              <input 
                autoFocus
                type="text" 
                placeholder="Search for t-shirts..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-600 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
