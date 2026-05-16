import { CheckCircle } from 'lucide-react';

const features = [
  "User Registration", "User Login (Email/Password)", "Google Social Login", "Product Catalog", 
  "Product Categories (Oversized, Graphic, etc.)", "Real-time Search Functionality", "Category Filtering", 
  "Price Sorting", "Newest Arrivals Sorting", "Detailed Product View", "Multi-image Product Gallery", 
  "Size Selection System", "Color Selection with Swatches", "Quantity Adjustment", "Persistent Shopping Cart", 
  "Cart Management (Add/Remove/Update)", "Live Cart Count Badge", "Wishlist Integration", 
  "User Profile Dashboard", "Firebase Authentication", "Order History Tracking", "Multi-step Checkout Process", 
  "Shipping Address Management", "Mock Payment Gateway Integration", "Order Confirmation via Email", 
  "Fully Responsive Design (Mobile/Desktop)", "SEO Optimized Meta Titles", "Animated UI Transitions (Framer Motion)", 
  "Toast Notifications for Actions", "Product Rating & Review Mockup", "Related Products Suggestions", 
  "Discount Code/Coupon System UI", "New Arrival Badges", "Sale/Discount Badges", "Real-time Stock Indicators", 
  "Newsletter Subscription System", "Integrated Contact Form", "About Us Page Section", "FAQ Documentation", 
  "Privacy Policy Documentation", "Terms of Service Documentation", "Size Guide Modal Logic", 
  "Social Media Link Integration", "Navigation Breadcrumbs", "Dark Mode UI Preparation", 
  "Smooth Scroll Implementation", "Quick View Modal Support", "Password Reset Flow UI", 
  "Admin Dashboard with Sales Data", "Inventory Tracking Visualization", "Sales Analytics Charts"
];

const Features = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter">50+ Premium Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg flex-shrink-0">
              <CheckCircle size={20} />
            </div>
            <span className="font-bold text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
