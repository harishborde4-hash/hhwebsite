import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <Toaster position="top-center" />
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
              <footer className="bg-gray-50 dark:bg-gray-800 py-12 border-t dark:border-gray-700 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <h2 className="text-2xl font-bold text-emerald-600 mb-4">Crucial Salad</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Freshness you can taste, health you can feel.</p>
                  <div className="flex justify-center space-x-6 text-gray-400">
                    <span>© 2024 Crucial Salad. All rights reserved.</span>
                  </div>
                </div>
              </footer>
            </div>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
