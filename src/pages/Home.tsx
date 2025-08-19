import React from 'react';
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Truck, MapPin, Percent, Users, Plus, Minus, Wallet } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart, items: cartItems, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const featuredRestaurants = [
    {
      id: '1',
      name: 'Healthy Mess Co.',
      cuisine: 'North Indian, South Indian',
      rating: 4.5,
      deliveryTime: '30-35 mins',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=500',
      offer: '20% OFF',
      isSubscriptionAvailable: true,
      priceForTwo: 200
    },
    {
      id: '2',
      name: 'Student Tiffin Service',
      cuisine: 'Home Style, Gujarati',
      rating: 4.3,
      deliveryTime: '25-30 mins',
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500',
      offer: 'Free Delivery',
      isSubscriptionAvailable: true,
      priceForTwo: 150
    },
    {
      id: '3',
      name: 'Quick Bites Express',
      cuisine: 'Fast Food, Chinese',
      rating: 4.1,
      deliveryTime: '20-25 mins',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      offer: '₹50 OFF',
      isSubscriptionAvailable: false,
      priceForTwo: 300
    },
    {
      id: '4',
      name: 'Premium Meal Plans',
      cuisine: 'Continental, Italian',
      rating: 4.7,
      deliveryTime: '35-40 mins',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500',
      offer: '15% OFF',
      isSubscriptionAvailable: true,
      priceForTwo: 400
    }
  ];

  const menuItems = [
    {
      id: '1',
      name: 'Chicken Burger',
      description: 'Juicy chicken patty with fresh lettuce and tomato',
      price: 120,
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'fast-food',
      isVeg: false,
      rating: 4.2,
      restaurant: 'Quick Bites Express'
    },
    {
      id: '2',
      name: 'Veggie Pizza',
      description: 'Loaded with fresh vegetables and cheese',
      price: 180,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'fast-food',
      isVeg: true,
      rating: 4.5,
      restaurant: 'Quick Bites Express'
    },
    {
      id: '3',
      name: 'Masala Dosa',
      description: 'Crispy South Indian crepe with spiced potato filling',
      price: 90,
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'south-indian',
      isVeg: true,
      rating: 4.3,
      restaurant: 'South Indian Kitchen'
    },
    {
      id: '4',
      name: 'Idli Sambar',
      description: 'Steamed rice cakes with lentil curry',
      price: 70,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'south-indian',
      isVeg: true,
      rating: 4.1,
      restaurant: 'South Indian Kitchen'
    },
    {
      id: '5',
      name: 'Butter Chicken',
      description: 'Creamy tomato-based chicken curry',
      price: 220,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'north-indian',
      isVeg: false,
      rating: 4.6,
      restaurant: 'North Indian Delights'
    },
    {
      id: '6',
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese with spices',
      price: 180,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'north-indian',
      isVeg: true,
      rating: 4.4,
      restaurant: 'North Indian Delights'
    },
    {
      id: '7',
      name: 'Hakka Noodles',
      description: 'Stir-fried noodles with vegetables',
      price: 140,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'chinese',
      isVeg: true,
      rating: 4.2,
      restaurant: 'Chinese Corner'
    },
    {
      id: '8',
      name: 'Chicken Manchurian',
      description: 'Indo-Chinese chicken in spicy sauce',
      price: 200,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'chinese',
      isVeg: false,
      rating: 4.3,
      restaurant: 'Chinese Corner'
    },
    {
      id: '9',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with cream frosting',
      price: 80,
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'desserts',
      isVeg: true,
      rating: 4.5,
      restaurant: 'Sweet Treats'
    },
    {
      id: '10',
      name: 'Ice Cream Sundae',
      description: 'Vanilla ice cream with chocolate sauce',
      price: 60,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'desserts',
      isVeg: true,
      rating: 4.2,
      restaurant: 'Sweet Treats'
    },
    {
      id: '11',
      name: 'Fresh Lime Soda',
      description: 'Refreshing lime drink with soda',
      price: 40,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'beverages',
      isVeg: true,
      rating: 4.0,
      restaurant: 'Refresh Zone'
    },
    {
      id: '12',
      name: 'Mango Lassi',
      description: 'Creamy yogurt drink with mango',
      price: 50,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'beverages',
      isVeg: true,
      rating: 4.4,
      restaurant: 'Refresh Zone'
    },
    {
      id: '13',
      name: 'Quinoa Salad',
      description: 'Nutritious quinoa with fresh vegetables',
      price: 160,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'healthy',
      isVeg: true,
      rating: 4.3,
      restaurant: 'Healthy Bites'
    },
    {
      id: '14',
      name: 'Grilled Chicken Salad',
      description: 'Protein-rich salad with grilled chicken',
      price: 200,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'healthy',
      isVeg: false,
      rating: 4.5,
      restaurant: 'Healthy Bites'
    }
  ];

  const categories = [
    { name: 'Meal Plans', icon: '🍱', color: 'bg-orange-100', route: '/subscriptions' },
    { name: 'Fast Food', icon: '🍔', color: 'bg-red-100', category: 'fast-food' },
    { name: 'South Indian', icon: '🥘', color: 'bg-green-100', category: 'south-indian' },
    { name: 'North Indian', icon: '🍛', color: 'bg-yellow-100', category: 'north-indian' },
    { name: 'Chinese', icon: '🥢', color: 'bg-purple-100', category: 'chinese' },
    { name: 'Desserts', icon: '🧁', color: 'bg-pink-100', category: 'desserts' },
    { name: 'Beverages', icon: '🥤', color: 'bg-blue-100', category: 'beverages' },
    { name: 'Healthy', icon: '🥗', color: 'bg-teal-100', category: 'healthy' }
  ];

  const handleCategoryClick = (category: any) => {
    if (category.name === 'Meal Plans') {
      navigate('/subscriptions');
    } else {
      setSelectedCategory(category.category);
      setShowMenu(true);
      // Scroll to menu section
      setTimeout(() => {
        const menuSection = document.getElementById('menu-section');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const filteredMenuItems = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const getCartQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurant: item.restaurant,
      isVeg: item.isVeg
    });
  };

  const getCategoryDisplayName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'fast-food': 'Fast Food',
      'south-indian': 'South Indian',
      'north-indian': 'North Indian',
      'chinese': 'Chinese',
      'desserts': 'Desserts',
      'beverages': 'Beverages',
      'healthy': 'Healthy'
    };
    return categoryMap[category] || category;
  };

  const subscriptionPlans = [
    {
      name: 'Weekly Basic',
      meals: 14,
      price: 1200,
      savings: 200,
      features: ['Lunch & Dinner', '2 Free Skips', 'Basic Menu']
    },
    {
      name: 'Monthly Premium',
      meals: 60,
      price: 4500,
      savings: 900,
      features: ['All Meals', '5 Free Skips', 'Premium Menu', 'Free Delivery'],
      popular: true
    },
    {
      name: 'Custom Plan',
      meals: 'Flexible',
      price: 'Custom',
      savings: 'Up to 30%',
      features: ['Choose Duration', 'Unlimited Skips', 'All Menus', 'Priority Support']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500"></div>
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Gradient overlay for brand colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Delicious Food<br />
              <span className="text-yellow-300 animate-pulse">Delivered Fast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
              Subscribe to meal plans or order your favorite dishes. 
              Fresh, healthy, and delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/subscriptions"
                className="px-8 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Meal Plans
              </Link>
              <Link
                to="/menu"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Order Now
              </Link>
            </div>
            
            {/* Floating Food Icons Animation */}
            <div className="absolute top-10 left-10 animate-bounce delay-100">
              <span className="text-4xl opacity-70">🍕</span>
            </div>
            <div className="absolute top-20 right-20 animate-bounce delay-300">
              <span className="text-4xl opacity-70">🍔</span>
            </div>
            <div className="absolute bottom-20 left-20 animate-bounce delay-500">
              <span className="text-4xl opacity-70">🍜</span>
            </div>
            <div className="absolute bottom-10 right-10 animate-bounce delay-700">
              <span className="text-4xl opacity-70">🥗</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in 30 minutes or less</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meal Subscriptions</h3>
              <p className="text-gray-600">Save money with our weekly and monthly plans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Track your order from preparation to delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About FoodieExpress</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for delicious, homestyle meals delivered fresh to your doorstep
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh homestyle cooking"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2020, FoodieExpress was born from a simple idea: everyone deserves access to 
                healthy, delicious, and affordable homestyle meals. We started as a small tiffin service 
                for students and have grown into a comprehensive food delivery platform serving thousands 
                of customers across the city.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to bridge the gap between home-cooked meals and busy lifestyles. We work 
                with local kitchens and experienced cooks to bring you authentic flavors and nutritious 
                meals that remind you of home.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-500">10,000+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-500">50,000+</p>
                  <p className="text-gray-600">Meals Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FoodieExpress?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another food delivery app. Here's what makes us special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Lightning Fast Delivery</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get your meals delivered in 30 minutes or less. Our efficient delivery network ensures 
                your food arrives hot and fresh every time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Flexible Meal Plans</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Choose from weekly, monthly, or custom plans. Skip meals, pause subscriptions, 
                and customize your dining experience according to your schedule.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Real-time Tracking</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Track your order from kitchen to doorstep. Get live updates and know exactly 
                when your delicious meal will arrive.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quality Guaranteed</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We work with certified kitchens and experienced cooks. Every meal is prepared with 
                fresh ingredients and follows strict hygiene standards.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Smart Wallet System</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Easy payments with our digital wallet. Add money once and enjoy seamless ordering 
                without payment hassles every time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Wide Coverage</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We deliver across the city with multiple pickup points and delivery zones. 
                Wherever you are, delicious food is just a tap away.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of satisfied customers who trust FoodieExpress for their daily meals
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/subscriptions"
                  className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
                >
                  Choose a Meal Plan
                </Link>
                <Link
                  to="/menu"
                  className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition duration-200"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's on your mind?</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-center cursor-pointer group"
                onClick={() => handleCategoryClick(category)}
              >
                <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition duration-200`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      {showMenu && (
        <section id="menu-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {getCategoryDisplayName(selectedCategory)}
                </h2>
                <p className="text-gray-600 mt-2">{filteredMenuItems.length} items available</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setShowMenu(false);
                  }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  Clear Filter
                </button>
                <Link
                  to="/menu"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  View Full Menu
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMenuItems.map((item) => {
                const quantity = getCartQuantity(item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-200"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className={`absolute top-4 right-4 w-6 h-6 rounded border-2 ${
                        item.isVeg 
                          ? 'border-green-500 bg-white' 
                          : 'border-red-500 bg-white'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                          item.isVeg ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <p className="text-sm text-gray-500 mb-2">{item.restaurant}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-gray-900">₹{item.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>

                      {quantity === 0 ? (
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
                        >
                          <Plus className="w-4 h-4 inline mr-2" />
                          Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-center space-x-4">
                          <button
                            onClick={() => updateQuantity(item.id, quantity - 1)}
                            className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold text-lg">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, quantity + 1)}
                            className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Subscription Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Meal Plan</h2>
            <p className="text-xl text-gray-600">Save money and never worry about cooking again</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {typeof plan.price === 'number' ? `₹${plan.price}` : plan.price}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {plan.meals} meals • Save ₹{plan.savings}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
                      plan.popular
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular near you</h2>
            <Link to="/restaurants" className="text-orange-500 font-semibold hover:text-orange-600">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-200 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {restaurant.offer}
                    </span>
                  </div>
                  {restaurant.isSubscriptionAvailable && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Plans Available
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">₹{restaurant.priceForTwo} for two</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;