import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, Clock } from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    avgOrderValue: 0
  });

  const [recentOrders, setRecentOrders] = useState<any[]>([]);

  // Mock chart data
  const salesData = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
  ];

  const userActivity = [
    { name: '10am', users: 120 },
    { name: '12pm', users: 340 },
    { name: '2pm', users: 560 },
    { name: '4pm', users: 430 },
    { name: '6pm', users: 780 },
    { name: '8pm', users: 650 },
    { name: '10pm', users: 210 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const ordersSnap = await getDocs(collection(db, 'orders'));
      const orders = ordersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const revenue = orders.reduce((sum, order: any) => sum + (order.total || 0), 0);
      
      setStats({
        totalRevenue: revenue,
        totalOrders: orders.length,
        totalUsers: 1240, // Mocked
        avgOrderValue: orders.length > 0 ? revenue / orders.length : 0
      });

      // Get 5 most recent orders
      const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'), limit(5));
      const recentSnap = await getDocs(q);
      setRecentOrders(recentSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500">Welcome back, here's what's happening today.</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2">
            <TrendingUp size={18} />
            <span>Generate Report</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Revenue" value={`$${stats.totalRevenue.toFixed(2)}`} icon={<DollarSign />} trend="+12.5%" />
          <StatCard title="Total Orders" value={stats.totalOrders} icon={<ShoppingCart />} trend="+8.2%" />
          <StatCard title="Total Users" value={stats.totalUsers} icon={<Users />} trend="+4.1%" />
          <StatCard title="Avg. Order" value={`$${stats.avgOrderValue.toFixed(2)}`} icon={<TrendingUp />} trend="-2.4%" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6">Weekly Sales Performance</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="sales" fill="#4f46e5" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6">Real-time Traffic</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivity}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4, fill: '#4f46e5' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-lg font-bold">Recent Orders</h3>
            <button className="text-indigo-600 font-bold text-sm">View All Orders</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-8 py-4">Order ID</th>
                  <th className="px-8 py-4">Customer</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Total</th>
                  <th className="px-8 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-5 font-medium text-sm">#{order.id.slice(-6)}</td>
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">{order.shippingAddress?.name}</span>
                        <span className="text-xs text-gray-500">{order.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-black uppercase">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 font-bold text-indigo-600">${order.total?.toFixed(2)}</td>
                    <td className="px-8 py-5 text-gray-500 text-sm flex items-center space-x-2">
                      <Clock size={14} />
                      <span>Recently</span>
                    </td>
                  </tr>
                ))}
                {recentOrders.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-8 py-10 text-center text-gray-500">
                      No orders found in the database.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
        {icon}
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {trend}
      </span>
    </div>
    <p className="text-gray-500 text-sm font-medium">{title}</p>
    <h4 className="text-2xl font-black mt-1">{value}</h4>
  </div>
);

export default AdminDashboard;
