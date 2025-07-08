import Header from '../../../components/Header';

export default function Vendors() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Grow Your <span className="text-[#FF521B]">Business</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
						Join thousands of restaurants and businesses already thriving with
						GoBuyMe. Reach more customers, increase sales, and grow your
						business with our powerful platform.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-[#FF521B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
							Partner With Us
						</button>
						<button className="border-2 border-[#FF521B] text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF521B] hover:text-white transition-colors">
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-[#FF521B] mb-2">500+</div>
							<div className="text-gray-600">Active Partners</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-[#FF521B] mb-2">50K+</div>
							<div className="text-gray-600">Orders Delivered</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-[#FF521B] mb-2">$2M+</div>
							<div className="text-gray-600">Revenue Generated</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-[#FF521B] mb-2">4.8★</div>
							<div className="text-gray-600">Partner Rating</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Why Partner With GoBuyMe?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover how our platform can transform your business and drive
							growth
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Increase Sales
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Reach new customers and increase your revenue by up to 40% with
								our extensive customer base and marketing support.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Low Commission
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Keep more of your profits with our competitive commission rates.
								Start with just 15% and earn rewards for high performance.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Reliable Delivery
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Professional delivery partners ensure your food arrives fresh
								and on time. Real-time tracking keeps customers informed and
								satisfied.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Analytics Dashboard
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Track your performance with detailed analytics. Monitor sales,
								customer feedback, and optimize your menu for better results.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Quick Setup
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Get started in minutes, not days. Our simple onboarding process
								gets you online and accepting orders quickly and easily.
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								24/7 Support
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Our dedicated support team is here to help you succeed. Get
								assistance whenever you need it, day or night.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-gray-900 mb-6">
								Powerful Tools for Your Business
							</h2>
							<div className="space-y-6">
								<div className="flex items-start">
									<div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
										<svg
											className="w-4 h-4 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Easy Menu Management
										</h3>
										<p className="text-gray-600">
											Update your menu, prices, and availability in real-time.
											Control what customers see and when.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
										<svg
											className="w-4 h-4 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Order Management
										</h3>
										<p className="text-gray-600">
											Receive orders instantly on your tablet or phone. Accept,
											reject, or modify orders with ease.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
										<svg
											className="w-4 h-4 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Customer Insights
										</h3>
										<p className="text-gray-600">
											Understand your customers better with detailed analytics.
											Track popular items and peak ordering times.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="w-8 h-8 bg-[#FF521B] rounded-full flex items-center justify-center mr-4 mt-1">
										<svg
											className="w-4 h-4 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											Marketing Support
										</h3>
										<p className="text-gray-600">
											Boost your visibility with our marketing tools.
											Promotions, featured listings, and social media
											integration.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
								<div className="bg-white rounded-xl p-6 shadow-lg">
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										Partner Success Metrics
									</h3>
									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Average Order Value</span>
											<span className="text-[#FF521B] font-bold">$28</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Customer Retention</span>
											<span className="text-[#FF521B] font-bold">85%</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Setup Time</span>
											<span className="text-[#FF521B] font-bold">2 hours</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Support Response</span>
											<span className="text-[#FF521B] font-bold">
												&lt; 5 min
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Application Form */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Become a Partner
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Ready to grow your business? Fill out the application below and
							we&apos;ll get back to you within 24 hours.
						</p>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="businessName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Business Name *
									</label>
									<input
										type="text"
										id="businessName"
										name="businessName"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter your business name"
									/>
								</div>
								<div>
									<label
										htmlFor="businessType"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Business Type *
									</label>
									<select
										id="businessType"
										name="businessType"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
									>
										<option value="">Select business type</option>
										<option value="restaurant">Restaurant</option>
										<option value="cafe">Café</option>
										<option value="bakery">Bakery</option>
										<option value="grocery">Grocery Store</option>
										<option value="pharmacy">Pharmacy</option>
										<option value="retail">Retail Store</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="contactName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Contact Person *
									</label>
									<input
										type="text"
										id="contactName"
										name="contactName"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter contact person name"
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Phone Number *
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter phone number"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email Address *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
									placeholder="Enter email address"
								/>
							</div>

							<div>
								<label
									htmlFor="address"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Business Address *
								</label>
								<textarea
									id="address"
									name="address"
									rows={3}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors resize-none"
									placeholder="Enter your business address"
								></textarea>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="cuisine"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Cuisine Type (Restaurants)
									</label>
									<select
										id="cuisine"
										name="cuisine"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
									>
										<option value="">Select cuisine type</option>
										<option value="american">American</option>
										<option value="italian">Italian</option>
										<option value="chinese">Chinese</option>
										<option value="mexican">Mexican</option>
										<option value="indian">Indian</option>
										<option value="japanese">Japanese</option>
										<option value="thai">Thai</option>
										<option value="mediterranean">Mediterranean</option>
										<option value="other">Other</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="avgOrder"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Average Order Value
									</label>
									<input
										type="number"
										id="avgOrder"
										name="avgOrder"
										min="0"
										step="0.01"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter average order value"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="description"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Business Description
								</label>
								<textarea
									id="description"
									name="description"
									rows={4}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors resize-none"
									placeholder="Tell us about your business, specialties, and what makes you unique..."
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-[#FF521B] text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
							>
								Submit Partnership Application
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Success Stories */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Success Stories
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							See how our partners have grown their businesses with GoBuyMe
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gray-50 rounded-2xl p-6">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[#FF521B] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold">PC</span>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Pizza Corner</h3>
									<p className="text-sm text-gray-600">Italian Restaurant</p>
								</div>
							</div>
							<p className="text-gray-600 mb-4">
								&quot;Since partnering with GoBuyMe, our delivery orders have
								increased by 60%. The platform is easy to use and the delivery
								service is reliable.&quot;
							</p>
							<div className="text-[#FF521B] font-semibold">
								+60% Revenue Increase
							</div>
						</div>

						<div className="bg-gray-50 rounded-2xl p-6">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[#FF521B] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold">SC</span>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Sweet Dreams</h3>
									<p className="text-sm text-gray-600">Bakery & Café</p>
								</div>
							</div>
							<p className="text-gray-600 mb-4">
								&quot;GoBuyMe helped us reach customers we never had before. Our
								weekend orders have doubled and the analytics help us plan
								better.&quot;
							</p>
							<div className="text-[#FF521B] font-semibold">
								+100% Weekend Sales
							</div>
						</div>

						<div className="bg-gray-50 rounded-2xl p-6">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[#FF521B] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold">TC</span>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Taco Central</h3>
									<p className="text-sm text-gray-600">Mexican Restaurant</p>
								</div>
							</div>
							<p className="text-gray-600 mb-4">
								&quot;The setup was incredibly fast and the support team is
								amazing. We&apos;ve expanded our delivery radius and our
								customer base has grown significantly.&quot;
							</p>
							<div className="text-[#FF521B] font-semibold">
								+45% Customer Growth
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-[#FF521B] to-orange-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Grow Your Business?
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Join hundreds of successful businesses already thriving with
						GoBuyMe. Start your partnership today and see the difference
						tomorrow!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Apply Now
						</button>
						<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors">
							Schedule Demo
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
