import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
              {category?.replace('-', ' ')} COLLECTION
            </h1>
            <p className="text-gray-500">Showing {filteredProducts.length} unique designs</p>
          </motion.div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
              <Filter size={18} />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
              <SlidersHorizontal size={18} />
              <span>Sort By</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
