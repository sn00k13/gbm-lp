import Header from '../../../../components/Header';

export default function GoBuyMeRestaurantDownload() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                GoBuyMe <span className="text-[#FF521B]">Restaurant</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The complete business management app for restaurants and local businesses. 
                Manage orders, track sales, and grow your business with powerful analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#" 
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
                <a 
                  href="#" 
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Get it on Google Play
                </a>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">4.9★</span>
                </div>
                <div className="text-gray-600">25K+ Downloads</div>
                <div className="text-gray-600">Free</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
                <div className="relative">
                  {/* Phone Mockup */}
                  <div className="w-64 h-96 bg-gray-900 rounded-3xl mx-auto relative shadow-2xl">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                      {/* App Screen Mockup */}
                      <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50">
                        {/* Header */}
                        <div className="bg-[#FF521B] text-white p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold">Restaurant Dashboard</h3>
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-[#FF521B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-4 space-y-4">
                          {/* Stats Card */}
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-600">Today&apos;s Sales</span>
                              <span className="text-sm font-semibold text-green-600">+12%</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900">$1,245.80</div>
                          </div>
                          
                          {/* Order Card */}
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold">New Order #1234</span>
                              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">$28.50</span>
                            </div>
                            <div className="text-xs text-gray-600 mb-2">2x Margherita Pizza, 1x Coke</div>
                            <div className="flex space-x-2">
                              <button className="flex-1 bg-green-500 text-white text-xs py-2 rounded">Accept</button>
                              <button className="flex-1 bg-gray-200 text-gray-700 text-xs py-2 rounded">Modify</button>
                            </div>
                          </div>
                          
                          {/* Quick Stats */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-gray-900">15</div>
                              <div className="text-xs text-gray-500">Orders</div>
                            </div>
                            <div className="bg-white rounded-lg p-2 text-center">
                              <div className="text-sm font-bold text-gray-900">4.8★</div>
                              <div className="text-xs text-gray-500">Rating</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful Business Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage and grow your restaurant business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Increase Sales</h3>
              <p className="text-gray-600 leading-relaxed">
                Reach new customers and increase your revenue by up to 40% with 
                our extensive customer base and marketing support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Track your performance with detailed analytics. Monitor sales, 
                customer feedback, and optimize your menu for better results.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Menu Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Update your menu, prices, and availability in real-time. 
                Control what customers see and when with easy-to-use tools.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional delivery partners ensure your food arrives fresh and on time. 
                Real-time tracking keeps customers informed and satisfied.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Get started in minutes, not days. Our simple onboarding process 
                gets you online and accepting orders quickly and easily.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is here to help you succeed. 
                Get assistance whenever you need it, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">App Screenshots</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what the GoBuyMe Restaurant app looks like in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Screenshot 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
                <div className="w-48 h-80 bg-gray-900 rounded-2xl mx-auto relative shadow-lg">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                  <div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50">
                      <div className="bg-[#FF521B] text-white p-3">
                        <h4 className="font-semibold text-center">Order Management</h4>
                      </div>
                      <div className="p-3 space-y-3">
                        <div className="bg-white rounded-lg p-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold">Order #1234</span>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">New</span>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">2x Pizza, 1x Coke</div>
                          <div className="text-sm font-bold text-gray-900 mt-1">$28.50</div>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold">Order #1235</span>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Preparing</span>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">1x Burger, 1x Fries</div>
                          <div className="text-sm font-bold text-gray-900 mt-1">$18.75</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 font-semibold text-gray-900">Order Management</p>
            </div>

            {/* Screenshot 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
                <div className="w-48 h-80 bg-gray-900 rounded-2xl mx-auto relative shadow-lg">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                  <div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-green-50 to-blue-50">
                      <div className="bg-[#FF521B] text-white p-3">
                        <h4 className="font-semibold text-center">Menu Editor</h4>
                      </div>
                      <div className="p-3 space-y-3">
                        <div className="bg-white rounded-lg p-2">
                          <div className="text-sm font-semibold">Margherita Pizza</div>
                          <div className="text-xs text-gray-600">Fresh mozzarella, tomato sauce</div>
                          <div className="text-sm font-bold text-gray-900 mt-1">$12.99</div>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <div className="text-sm font-semibold">Pepperoni Pizza</div>
                          <div className="text-xs text-gray-600">Pepperoni, cheese, tomato sauce</div>
                          <div className="text-sm font-bold text-gray-900 mt-1">$14.99</div>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <div className="text-sm font-semibold">Chicken Burger</div>
                          <div className="text-xs text-gray-600">Grilled chicken, lettuce, mayo</div>
                          <div className="text-sm font-bold text-gray-900 mt-1">$9.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 font-semibold text-gray-900">Menu Editor</p>
            </div>

            {/* Screenshot 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
                <div className="w-48 h-80 bg-gray-900 rounded-2xl mx-auto relative shadow-lg">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                  <div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-yellow-50 to-orange-50">
                      <div className="bg-[#FF521B] text-white p-3">
                        <h4 className="font-semibold text-center">Analytics</h4>
                      </div>
                      <div className="p-3 space-y-3">
                        <div className="bg-white rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-gray-900">$2,456.80</div>
                          <div className="text-sm text-gray-600">This Week&apos;s Sales</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-sm font-bold">45</div>
                            <div className="text-xs text-gray-600">Orders</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-sm font-bold">4.8★</div>
                            <div className="text-xs text-gray-600">Rating</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <div className="text-xs text-gray-600 mb-1">Top Items</div>
                          <div className="text-xs">1. Margherita Pizza</div>
                          <div className="text-xs">2. Chicken Burger</div>
                          <div className="text-xs">3. Pepperoni Pizza</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 font-semibold text-gray-900">Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our restaurant partners are growing with GoBuyMe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Revenue Increase</h3>
                  <p className="text-gray-600">
                    Restaurants see an average 40% increase in revenue within the first 3 months.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Retention</h3>
                  <p className="text-gray-600">
                    85% of customers return for repeat orders, building loyal customer base.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Setup Time</h3>
                  <p className="text-gray-600">
                    Get started in just 2 hours with our simple onboarding process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Average Order Value</span>
                  <span className="text-[#FF521B] font-bold">$28</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Customer Rating</span>
                  <span className="text-[#FF521B] font-bold">4.8★</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Support Response</span>
                  <span className="text-[#FF521B] font-bold">&lt; 5 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Commission Rate</span>
                  <span className="text-[#FF521B] font-bold">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF521B] to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Download GoBuyMe Restaurant today and join hundreds of successful 
            businesses already thriving with our platform!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
