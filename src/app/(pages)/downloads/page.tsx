import Header from '../../../components/Header';
import Link from 'next/link';

export default function Downloads() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Download <span className="text-[#FF521B]">GoBuyMe</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Get the right GoBuyMe app for your needs. Whether you&apos;re a
						customer, delivery partner, or business owner, we have the perfect
						app for you.
					</p>
				</div>
			</section>

			{/* Apps Overview */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Choose Your App
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Three powerful apps, one amazing platform. Find the perfect
							GoBuyMe experience for you.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* GoBuyMe Customer App */}
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="text-center mb-6">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-10 h-10 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-2">
									GoBuyMe
								</h3>
								<p className="text-gray-600">Customer App</p>
							</div>

							<div className="space-y-4 mb-8">
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Order food & groceries</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Real-time tracking</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Secure payments</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Local business support</span>
								</div>
							</div>

							<div className="space-y-3">
								<Link
									href="/downloads/gobuyme"
									className="w-full bg-[#FF521B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors block text-center"
								>
									Download Now
								</Link>
								<div className="flex justify-center space-x-4">
									<div className="flex items-center text-sm text-gray-600">
										<svg
											className="w-4 h-4 mr-1"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										<span>4.8★</span>
									</div>
									<div className="text-sm text-gray-600">100K+ Downloads</div>
								</div>
							</div>
						</div>

						{/* GoBuyMe Ryder App */}
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="text-center mb-6">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-10 h-10 text-white"
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
								<h3 className="text-2xl font-bold text-gray-900 mb-2">
									GoBuyMe Ryder
								</h3>
								<p className="text-gray-600">Delivery Partner App</p>
							</div>

							<div className="space-y-4 mb-8">
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Accept delivery orders</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Flexible schedule</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Earn $15-25/hour</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Weekly payments</span>
								</div>
							</div>

							<div className="space-y-3">
								<Link
									href="/downloads/gobuyme-ryder"
									className="w-full bg-[#FF521B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors block text-center"
								>
									Download Now
								</Link>
								<div className="flex justify-center space-x-4">
									<div className="flex items-center text-sm text-gray-600">
										<svg
											className="w-4 h-4 mr-1"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										<span>4.7★</span>
									</div>
									<div className="text-sm text-gray-600">50K+ Downloads</div>
								</div>
							</div>
						</div>

						{/* GoBuyMe Restaurant App */}
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
							<div className="text-center mb-6">
								<div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-10 h-10 text-white"
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
								<h3 className="text-2xl font-bold text-gray-900 mb-2">
									GoBuyMe Restaurant
								</h3>
								<p className="text-gray-600">Business Management App</p>
							</div>

							<div className="space-y-4 mb-8">
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Manage orders & menu</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Analytics dashboard</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">Increase sales 40%</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 text-[#FF521B] mr-3"
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
									<span className="text-gray-700">24/7 support</span>
								</div>
							</div>

							<div className="space-y-3">
								<Link
									href="/downloads/gobuyme-restaurant"
									className="w-full bg-[#FF521B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors block text-center"
								>
									Download Now
								</Link>
								<div className="flex justify-center space-x-4">
									<div className="flex items-center text-sm text-gray-600">
										<svg
											className="w-4 h-4 mr-1"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										<span>4.9★</span>
									</div>
									<div className="text-sm text-gray-600">25K+ Downloads</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Platform Support */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Available on All Platforms
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Download GoBuyMe apps on your preferred platform
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white rounded-2xl p-6 text-center shadow-lg">
							<div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">iOS</h3>
							<p className="text-gray-600 text-sm">iPhone & iPad</p>
						</div>

						<div className="bg-white rounded-2xl p-6 text-center shadow-lg">
							<div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								Android
							</h3>
							<p className="text-gray-600 text-sm">Phones & Tablets</p>
						</div>

						<div className="bg-white rounded-2xl p-6 text-center shadow-lg">
							<div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Web</h3>
							<p className="text-gray-600 text-sm">Desktop & Mobile</p>
						</div>

						<div className="bg-white rounded-2xl p-6 text-center shadow-lg">
							<div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">PWA</h3>
							<p className="text-gray-600 text-sm">Progressive Web App</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features Comparison */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							App Features Comparison
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Compare features across all GoBuyMe apps
						</p>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr className="border-b-2 border-gray-200">
									<th className="text-left py-4 px-6 font-semibold text-gray-900">
										Features
									</th>
									<th className="text-center py-4 px-6 font-semibold text-gray-900">
										GoBuyMe
									</th>
									<th className="text-center py-4 px-6 font-semibold text-gray-900">
										GoBuyMe Ryder
									</th>
									<th className="text-center py-4 px-6 font-semibold text-gray-900">
										GoBuyMe Restaurant
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">
										Order Food & Groceries
									</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">-</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">
										Real-time Tracking
									</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">-</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">
										Accept Delivery Orders
									</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">-</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">
										Earnings Dashboard
									</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">-</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">Order Management</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">Menu Management</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">
										Analytics & Reports
									</td>
									<td className="text-center py-4 px-6">-</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
								</tr>
								<tr className="border-b border-gray-100">
									<td className="py-4 px-6 text-gray-700">24/7 Support</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
									<td className="text-center py-4 px-6">
										<svg
											className="w-5 h-5 text-green-500 mx-auto"
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
									</td>
								</tr>
							</tbody>
						</table>
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
						Choose the right GoBuyMe app for your needs and start experiencing
						the future of local commerce today!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/downloads/gobuyme"
							className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							Download Customer App
						</Link>
						<Link
							href="/downloads/gobuyme-ryder"
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors"
						>
							Download Ryder App
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
