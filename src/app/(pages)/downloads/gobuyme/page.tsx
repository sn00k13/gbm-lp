import Header from '../../../../components/Header';

export default function GoBuyMeDownload() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
								GoBuyMe <span className="text-[#FF521B]">App</span>
							</h1>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								Order food from your favorite local restaurants and get it
								delivered right to your doorstep. Fast, reliable, and delicious!
							</p>

							<div className="flex flex-col sm:flex-row gap-4 mb-8">
								<a
									href="#"
									className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
								>
									<svg
										className="w-6 h-6 mr-3"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
									</svg>
									Download on App Store
								</a>
								<a
									href="#"
									className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
								>
									<svg
										className="w-6 h-6 mr-3"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
									</svg>
									Get it on Google Play
								</a>
							</div>

							<div className="flex items-center space-x-6">
								<div className="flex items-center">
									<div className="flex text-yellow-400 mr-2">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<span className="text-gray-700 font-semibold">4.8★</span>
								</div>
								<div className="text-gray-600">100K+ Downloads</div>
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
														<h3 className="font-bold">GoBuyMe</h3>
														<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
															<svg
																className="w-5 h-5 text-[#FF521B]"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
																/>
															</svg>
														</div>
													</div>
												</div>

												{/* Content */}
												<div className="p-4 space-y-4">
													{/* Search Bar */}
													<div className="bg-white rounded-lg p-3 shadow-sm">
														<div className="flex items-center">
															<svg
																className="w-5 h-5 text-gray-400 mr-2"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
																/>
															</svg>
															<span className="text-gray-500 text-sm">
																Search restaurants...
															</span>
														</div>
													</div>

													{/* Restaurant Card */}
													<div className="bg-white rounded-lg p-3 shadow-sm">
														<div className="flex items-center mb-2">
															<div className="w-12 h-12 bg-orange-200 rounded-lg mr-3 flex items-center justify-center">
																<svg
																	className="w-6 h-6 text-orange-600"
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
															<div>
																<h4 className="font-semibold text-gray-900">
																	Pizza Palace
																</h4>
																<div className="flex items-center text-sm text-gray-600">
																	<span className="text-yellow-400 mr-1">
																		★
																	</span>
																	<span>4.8 (120 reviews)</span>
																</div>
															</div>
														</div>
														<div className="text-xs text-gray-600 mb-2">
															Italian • Pizza • 20-30 min
														</div>
														<div className="flex justify-between items-center">
															<span className="text-sm font-semibold text-gray-900">
																$2.99 delivery
															</span>
															<span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
																Open
															</span>
														</div>
													</div>

													{/* Quick Actions */}
													<div className="grid grid-cols-2 gap-2">
														<div className="bg-white rounded-lg p-2 text-center">
															<div className="text-sm font-bold text-gray-900">
																$15
															</div>
															<div className="text-xs text-gray-500">
																Min Order
															</div>
														</div>
														<div className="bg-white rounded-lg p-2 text-center">
															<div className="text-sm font-bold text-gray-900">
																25 min
															</div>
															<div className="text-xs text-gray-500">
																Avg Time
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
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Why Choose GoBuyMe?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the features that make ordering food easier and more
							enjoyable
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
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Smart Search
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Find exactly what you&apos;re craving with our intelligent
								search. Filter by cuisine, rating, delivery time, and more.
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
										d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Real-time Tracking
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Track your order from kitchen to doorstep in real-time. Know
								exactly when your food will arrive.
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
								Secure Payments
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Pay safely with multiple payment options. Your data is protected
								with bank-level security.
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
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Community Reviews
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Read authentic reviews from real customers. Make informed
								decisions about where to order from.
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
										d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2zM4 3h6V1H4v2z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Smart Notifications
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Get updates on your order status, promotions, and restaurant
								deals. Never miss out on great offers.
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
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Trust & Safety
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Your safety is our priority. All restaurants are verified and
								delivery partners are background-checked.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* App Screenshots */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							App Screenshots
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							See what the GoBuyMe app looks like in action
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
												<h4 className="font-semibold text-center">
													Restaurant Menu
												</h4>
											</div>
											<div className="p-3 space-y-3">
												<div className="bg-white rounded-lg p-2">
													<div className="flex items-center justify-between">
														<div>
															<div className="text-sm font-semibold">
																Margherita Pizza
															</div>
															<div className="text-xs text-gray-600">
																Fresh mozzarella, tomato sauce
															</div>
														</div>
														<div className="text-sm font-bold text-gray-900">
															$12.99
														</div>
													</div>
												</div>
												<div className="bg-white rounded-lg p-2">
													<div className="flex items-center justify-between">
														<div>
															<div className="text-sm font-semibold">
																Pepperoni Pizza
															</div>
															<div className="text-xs text-gray-600">
																Pepperoni, cheese, tomato sauce
															</div>
														</div>
														<div className="text-sm font-bold text-gray-900">
															$14.99
														</div>
													</div>
												</div>
												<div className="bg-white rounded-lg p-2">
													<div className="flex items-center justify-between">
														<div>
															<div className="text-sm font-semibold">
																Chicken Burger
															</div>
															<div className="text-xs text-gray-600">
																Grilled chicken, lettuce, mayo
															</div>
														</div>
														<div className="text-sm font-bold text-gray-900">
															$9.99
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<p className="text-center mt-4 font-semibold text-gray-900">
								Restaurant Menu
							</p>
						</div>

						{/* Screenshot 2 */}
						<div className="relative">
							<div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
								<div className="w-48 h-80 bg-gray-900 rounded-2xl mx-auto relative shadow-lg">
									<div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
									<div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
										<div className="h-full bg-gradient-to-br from-green-50 to-blue-50">
											<div className="bg-[#FF521B] text-white p-3">
												<h4 className="font-semibold text-center">
													Order Tracking
												</h4>
											</div>
											<div className="p-3 space-y-3">
												<div className="bg-white rounded-lg p-3 text-center">
													<div className="text-lg font-bold text-gray-900">
														Order #1234
													</div>
													<div className="text-sm text-gray-600">
														Estimated: 25-30 min
													</div>
												</div>
												<div className="space-y-2">
													<div className="flex items-center">
														<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
															<svg
																className="w-3 h-3 text-white"
																fill="currentColor"
																viewBox="0 0 20 20"
															>
																<path
																	fillRule="evenodd"
																	d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																	clipRule="evenodd"
																/>
															</svg>
														</div>
														<span className="text-sm text-gray-700">
															Order Confirmed
														</span>
													</div>
													<div className="flex items-center">
														<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
															<svg
																className="w-3 h-3 text-white"
																fill="currentColor"
																viewBox="0 0 20 20"
															>
																<path
																	fillRule="evenodd"
																	d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																	clipRule="evenodd"
																/>
															</svg>
														</div>
														<span className="text-sm text-gray-700">
															Preparing
														</span>
													</div>
													<div className="flex items-center">
														<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
															<div className="w-2 h-2 bg-white rounded-full"></div>
														</div>
														<span className="text-sm text-gray-700">
															On the way
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<p className="text-center mt-4 font-semibold text-gray-900">
								Order Tracking
							</p>
						</div>

						{/* Screenshot 3 */}
						<div className="relative">
							<div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
								<div className="w-48 h-80 bg-gray-900 rounded-2xl mx-auto relative shadow-lg">
									<div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
									<div className="absolute inset-2 bg-white rounded-xl overflow-hidden">
										<div className="h-full bg-gradient-to-br from-yellow-50 to-orange-50">
											<div className="bg-[#FF521B] text-white p-3">
												<h4 className="font-semibold text-center">My Orders</h4>
											</div>
											<div className="p-3 space-y-3">
												<div className="bg-white rounded-lg p-2">
													<div className="flex justify-between items-center mb-1">
														<span className="text-sm font-semibold">
															Order #1234
														</span>
														<span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
															Delivered
														</span>
													</div>
													<div className="text-xs text-gray-600">
														Pizza Palace • 2x Margherita Pizza
													</div>
													<div className="text-sm font-bold text-gray-900 mt-1">
														$28.50
													</div>
												</div>
												<div className="bg-white rounded-lg p-2">
													<div className="flex justify-between items-center mb-1">
														<span className="text-sm font-semibold">
															Order #1233
														</span>
														<span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
															Delivered
														</span>
													</div>
													<div className="text-xs text-gray-600">
														Burger House • 1x Chicken Burger
													</div>
													<div className="text-sm font-bold text-gray-900 mt-1">
														$12.99
													</div>
												</div>
												<div className="bg-white rounded-lg p-2">
													<div className="flex justify-between items-center mb-1">
														<span className="text-sm font-semibold">
															Order #1232
														</span>
														<span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
															Delivered
														</span>
													</div>
													<div className="text-xs text-gray-600">
														Sushi Bar • 1x California Roll
													</div>
													<div className="text-sm font-bold text-gray-900 mt-1">
														$18.75
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<p className="text-center mt-4 font-semibold text-gray-900">
								Order History
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Benefits of Using GoBuyMe
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover why millions of customers choose GoBuyMe for their food
							delivery needs
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
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
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Wide Restaurant Selection
									</h3>
									<p className="text-gray-600">
										Choose from hundreds of local restaurants, from fast food to
										fine dining.
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
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Fast Delivery
									</h3>
									<p className="text-gray-600">
										Get your food delivered in 20-40 minutes on average,
										guaranteed.
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
									<h3 className="text-lg font-semibold text-gray-900 mb-2">
										Great Deals
									</h3>
									<p className="text-gray-600">
										Enjoy exclusive discounts, free delivery, and special
										promotions.
									</p>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Quick Facts
							</h3>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<span className="text-gray-700">Average Delivery Time</span>
									<span className="text-[#FF521B] font-bold">25 min</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-gray-700">Restaurant Partners</span>
									<span className="text-[#FF521B] font-bold">500+</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-gray-700">Customer Rating</span>
									<span className="text-[#FF521B] font-bold">4.8★</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-gray-700">Cities Covered</span>
									<span className="text-[#FF521B] font-bold">50+</span>
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
						Ready to Order Delicious Food?
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Download GoBuyMe today and discover amazing restaurants in your
						area!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#"
							className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
						>
							<svg
								className="w-6 h-6 mr-3"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
							</svg>
							Download on App Store
						</a>
						<a
							href="#"
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors flex items-center justify-center"
						>
							<svg
								className="w-6 h-6 mr-3"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
							</svg>
							Get it on Google Play
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
