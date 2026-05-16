import { Link } from 'react-router-dom';
import { Mail, Globe, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-black tracking-tighter text-black mb-6 block">
              TEE<span className="text-indigo-600">STORM</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The ultimate destination for premium t-shirts. We blend comfort with contemporary style to bring you the best in streetwear and classics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/category/Oversized" className="text-gray-500 hover:text-indigo-600 text-sm">Oversized Collection</Link></li>
              <li><Link to="/category/Graphic" className="text-gray-500 hover:text-indigo-600 text-sm">Graphic Tees</Link></li>
              <li><Link to="/category/Classic" className="text-gray-500 hover:text-indigo-600 text-sm">Classic Essentials</Link></li>
              <li><Link to="/category/Sports" className="text-gray-500 hover:text-indigo-600 text-sm">Active Performance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-gray-500 hover:text-indigo-600 text-sm">50+ Premium Features</Link></li>
              <li><Link to="/admin" className="text-gray-500 hover:text-indigo-600 text-sm">Admin Dashboard</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-indigo-600 text-sm">Contact Support</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-indigo-600 text-sm">Help & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-50 border-none rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-indigo-600 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs">© 2024 TEESTORM. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-black text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-black text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
