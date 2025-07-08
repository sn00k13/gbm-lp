import Header from '../../../components/Header';

export default function Services() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Our <span className="text-[#FF521B]">Services</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						GoBuyMe offers a comprehensive range of delivery services to make
						your life easier. From food delivery to grocery shopping, we&apos;ve
						got you covered.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<div className="bg-white rounded-lg px-6 py-3 shadow-sm">
							<span className="text-2xl font-bold text-[#FF521B]">500+</span>
							<p className="text-sm text-gray-600">Restaurant Partners</p>
						</div>
						<div className="bg-white rounded-lg px-6 py-3 shadow-sm">
							<span className="text-2xl font-bold text-[#FF521B]">50+</span>
							<p className="text-sm text-gray-600">Cities Covered</p>
						</div>
						<div className="bg-white rounded-lg px-6 py-3 shadow-sm">
							<span className="text-2xl font-bold text-[#FF521B]">25min</span>
							<p className="text-sm text-gray-600">Avg Delivery Time</p>
						</div>
					</div>
				</div>
			</section>

			{/* Main Services Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							What We Offer
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover our range of services designed to bring convenience to
							your doorstep
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Food Delivery */}
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
										d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Food Delivery
							</h3>
							<p className="text-gray-600 leading-relaxed mb-6">
								Order from your favorite local restaurants and get your meals
								delivered fast and fresh. From pizza to sushi, we deliver it
								all.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									500+ restaurant partners
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Real-time order tracking
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Average 25-minute delivery
								</li>
							</ul>
						</div>

						{/* Grocery Shopping */}
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
										d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Grocery Shopping
							</h3>
							<p className="text-gray-600 leading-relaxed mb-6">
								Shop for groceries from trusted stores and have them delivered
								to your doorstep. Fresh produce, household essentials, and more.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Fresh produce & groceries
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Household essentials
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Same-day delivery available
								</li>
							</ul>
						</div>

						{/* Easy Payment */}
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
										d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Easy Payment
							</h3>
							<p className="text-gray-600 leading-relaxed mb-6">
								Enjoy multiple secure payment options for a seamless checkout
								experience. Pay with cards, digital wallets, or cash on
								delivery.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Credit/debit cards
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Digital wallets
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Cash on delivery
								</li>
							</ul>
						</div>

						{/* Express Delivery */}
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
								Express Delivery
							</h3>
							<p className="text-gray-600 leading-relaxed mb-6">
								Need it fast? Choose express delivery for urgent orders. Get
								your food delivered in 15-20 minutes.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									15-20 minute delivery
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Priority order processing
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Dedicated delivery partners
								</li>
							</ul>
						</div>

						{/* Business Solutions */}
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
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Business Solutions
							</h3>
							<p className="text-gray-600 leading-relaxed mb-6">
								Partner with us to grow your business. We provide delivery
								solutions for restaurants and retail stores.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Restaurant partnerships
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Retail store delivery
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Analytics & insights
								</li>
							</ul>
						</div>

						{/* Customer Support */}
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
							<p className="text-gray-600 leading-relaxed mb-6">
								Our dedicated support team is here to help you 24/7. Get
								assistance whenever you need it.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Live chat support
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Phone support
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Email support
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							How It Works
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Getting started with GoBuyMe is simple and straightforward
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-20 h-20 bg-[#FF521B] rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-white">1</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Browse & Order
							</h3>
							<p className="text-gray-600">
								Browse through hundreds of restaurants and stores. Select your
								favorite items and add them to your cart.
							</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-[#FF521B] rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-white">2</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Track Your Order
							</h3>
							<p className="text-gray-600">
								Track your order in real-time from preparation to delivery. Know
								exactly when your order will arrive.
							</p>
						</div>

						<div className="text-center">
							<div className="w-20 h-20 bg-[#FF521B] rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-white">3</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Enjoy & Repeat
							</h3>
							<p className="text-gray-600">
								Receive your order at your doorstep. Enjoy your meal and order
								again whenever you want!
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-[#FF521B] to-orange-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Get Started?
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Download the GoBuyMe app today and experience the convenience of
						on-demand delivery services!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/downloads/gobuyme"
							className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
						>
							<svg
								className="w-6 h-6 mr-3"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
							</svg>
							Download App
						</a>
						<a
							href="/contact"
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors flex items-center justify-center"
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
