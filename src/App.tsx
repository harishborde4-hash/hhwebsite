import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CategoryPage from './pages/CategoryPage';
import AdminDashboard from './pages/AdminDashboard';
import Features from './pages/Features';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/wishlist" element={<div className="pt-32 text-center">Wishlist coming soon!</div>} />
                <Route path="/profile" element={<div className="pt-32 text-center">Profile coming soon!</div>} />
                <Route path="/orders" element={<div className="pt-32 text-center">Orders coming soon!</div>} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<div className="pt-32 text-center font-black text-4xl">CONTACT US<br/><span className="text-gray-400 text-lg">support@teestorm.com</span></div>} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="bottom-right" />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
