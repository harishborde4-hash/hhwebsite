import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { Package, Calendar, Mail } from 'lucide-react';

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
        const fetchedOrders = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border dark:border-gray-700 text-center">
            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 font-black text-3xl">
              {user.email?.[0].toUpperCase()}
            </div>
            <h2 className="text-xl font-bold dark:text-white mb-1">{user.displayName || 'Guest User'}</h2>
            <p className="text-gray-500 text-sm mb-6">{user.email}</p>
            
            <div className="space-y-4 text-left border-t dark:border-gray-700 pt-6">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Joined {new Date(user.metadata.creationTime || '').toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 dark:text-white">
              <Package className="h-6 w-6 text-emerald-600" />
              Order History
            </h2>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            ) : orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border dark:border-gray-700 rounded-2xl p-6 hover:border-emerald-300 dark:hover:border-emerald-900 transition-all">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Order ID: #{order.id.slice(-8).toUpperCase()}</p>
                        <p className="text-xs text-gray-400">{order.createdAt?.toDate().toLocaleString()}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold">
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {order.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900 p-2 rounded-xl">
                          <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg" />
                          <span className="text-xs font-bold dark:text-gray-200">{item.name} x {item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t dark:border-gray-700 flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Amount</span>
                      <span className="text-lg font-black text-emerald-600">₹{order.totalPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">You haven't placed any orders yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
