import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { Package, MapPin, Mail, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        const q = query(
          collection(db, 'orders'),
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <h2 className="text-2xl font-bold">Please log in to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img 
                src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}&background=4f46e5&color=fff`} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-indigo-50"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-black mb-1">{user.displayName || 'TeeStorm Member'}</h1>
              <p className="text-gray-500 mb-4 flex items-center justify-center md:justify-start space-x-2">
                <Mail size={16} />
                <span>{user.email}</span>
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  Verified Account
                </span>
                <span className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  Member since 2024
                </span>
              </div>
            </div>
            <button className="px-6 py-2 border-2 border-gray-100 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center space-x-2">
                <MapPin size={18} className="text-indigo-600" />
                <span>Default Shipping</span>
              </h3>
              <div className="text-sm text-gray-500 space-y-1">
                <p className="font-bold text-black">{user.displayName || 'Your Name'}</p>
                <p>123 Fashion Street, Suite 4B</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
              <button className="w-full mt-6 py-3 border border-dashed border-gray-300 rounded-xl text-sm font-bold text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Change Address
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-2">Storm Loyalty Points</h3>
              <p className="text-3xl font-black mb-4">450 <span className="text-indigo-200 text-sm font-medium">PTS</span></p>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-4">
                <div className="bg-white h-full w-[45%]" />
              </div>
              <p className="text-xs text-indigo-100">You're 550 points away from a $20 discount!</p>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold flex items-center space-x-2">
                  <Package size={18} className="text-indigo-600" />
                  <span>Order History</span>
                </h3>
                <span className="text-xs font-bold text-gray-400 uppercase">{orders.length} Orders</span>
              </div>

              <div className="divide-y divide-gray-50">
                {loading ? (
                  <div className="p-12 text-center">
                    <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading your history...</p>
                  </div>
                ) : orders.length > 0 ? (
                  orders.map((order) => (
                    <motion.div 
                      key={order.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-6 hover:bg-gray-50 transition-all group"
                    >
                      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                            <Package size={24} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-black text-sm uppercase">Order #{order.id.slice(-6)}</span>
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                                order.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 flex items-center space-x-1">
                              <Clock size={12} />
                              <span>{order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString() : 'Processing'}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end space-x-8">
                          <div className="text-right">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total</p>
                            <p className="font-black text-indigo-600">${order.total?.toFixed(2)}</p>
                          </div>
                          <button className="p-2 bg-gray-100 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Mini item list */}
                      <div className="mt-4 flex -space-x-2">
                        {order.items?.slice(0, 4).map((item: any, idx: number) => (
                          <img 
                            key={idx} 
                            src={item.images[0]} 
                            className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                            alt=""
                          />
                        ))}
                        {order.items?.length > 4 && (
                          <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                            +{order.items.length - 4}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-20 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                      <Package size={32} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">No orders found</h4>
                    <p className="text-gray-500 mb-8">Ready to start your first storm?</p>
                    <a href="/" className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-900 transition-all flex items-center space-x-2 mx-auto w-fit">
                      <span>Shop Collection</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
