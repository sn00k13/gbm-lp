import Header from '../../../components/Header';

export default function Careers() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Join Our <span className="text-[#FF521B]">Delivery Team</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
						Become a GoBuyMe delivery partner and earn great money while helping
						your community. Set your own schedule, work when you want, and grow
						with us.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-[#FF521B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
							Apply Now
						</button>
						<button className="border-2 border-[#FF521B] text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-[#FF521B] hover:text-white transition-colors">
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Why Join GoBuyMe?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the benefits of being a delivery partner with GoBuyMe
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
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Great Earnings
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Earn $15-25 per hour on average, plus tips and bonuses. The more
								you deliver, the more you earn!
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
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Flexible Schedule
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Work when you want! Set your own hours and choose your delivery
								zones. Perfect for students, part-timers, or full-time work.
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
								Safe & Secure
							</h3>
							<p className="text-gray-600 leading-relaxed">
								We prioritize your safety with insurance coverage, real-time
								tracking, and 24/7 support. Your security is our top priority.
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
								Quick Payments
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Get paid weekly with direct deposit. No waiting for checks or
								complicated payment processes. Your earnings are always on time.
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
								Community Impact
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Help local businesses thrive and connect communities. Be part of
								something bigger while earning a great income.
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
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Career Growth
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Start as a delivery partner and grow with us. Opportunities for
								advancement to team lead, operations, and management roles.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Requirements Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-gray-900 mb-6">
								Requirements to Join
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
											Age 18 or Older
										</h3>
										<p className="text-gray-600">
											Must be at least 18 years old with a valid
											government-issued ID.
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
											Smartphone & Data
										</h3>
										<p className="text-gray-600">
											iPhone or Android smartphone with reliable internet
											connection.
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
											Transportation
										</h3>
										<p className="text-gray-600">
											Car, motorcycle, bicycle, or scooter. Must be reliable and
											well-maintained.
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
											Background Check
										</h3>
										<p className="text-gray-600">
											Clean background check required for customer safety and
											trust.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
								<div className="bg-white rounded-xl p-6 shadow-lg">
									<h3 className="text-2xl font-bold text-gray-900 mb-4">
										Quick Facts
									</h3>
									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Average Hourly Rate</span>
											<span className="text-[#FF521B] font-bold">$18-25</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Payment Schedule</span>
											<span className="text-[#FF521B] font-bold">Weekly</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Application Time</span>
											<span className="text-[#FF521B] font-bold">
												15 minutes
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-700">Start Working</span>
											<span className="text-[#FF521B] font-bold">Same Day</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Application Form */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Apply to Join Our Team
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Ready to start earning? Fill out the application below and
							we&apos;ll get back to you within 24 hours.
						</p>
					</div>

					<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										First Name *
									</label>
									<input
										type="text"
										id="firstName"
										name="firstName"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter your first name"
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Last Name *
									</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter your last name"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
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
										placeholder="Enter your email address"
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
										placeholder="Enter your phone number"
									/>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="age"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Age *
									</label>
									<input
										type="number"
										id="age"
										name="age"
										required
										min="18"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter your age"
									/>
								</div>
								<div>
									<label
										htmlFor="transportation"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Transportation Type *
									</label>
									<select
										id="transportation"
										name="transportation"
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
									>
										<option value="">Select transportation type</option>
										<option value="car">Car</option>
										<option value="motorcycle">Motorcycle</option>
										<option value="bicycle">Bicycle</option>
										<option value="scooter">Scooter</option>
										<option value="walking">Walking</option>
									</select>
								</div>
							</div>

							<div>
								<label
									htmlFor="experience"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Previous Delivery Experience
								</label>
								<textarea
									id="experience"
									name="experience"
									rows={4}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors resize-none"
									placeholder="Tell us about any previous delivery or customer service experience..."
								></textarea>
							</div>

							<div>
								<label
									htmlFor="availability"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Preferred Working Hours
								</label>
								<div className="grid md:grid-cols-3 gap-4">
									<label className="flex items-center">
										<input
											type="checkbox"
											name="availability"
											value="morning"
											className="mr-2"
										/>
										<span className="text-gray-700">
											Morning (6 AM - 12 PM)
										</span>
									</label>
									<label className="flex items-center">
										<input
											type="checkbox"
											name="availability"
											value="afternoon"
											className="mr-2"
										/>
										<span className="text-gray-700">
											Afternoon (12 PM - 6 PM)
										</span>
									</label>
									<label className="flex items-center">
										<input
											type="checkbox"
											name="availability"
											value="evening"
											className="mr-2"
										/>
										<span className="text-gray-700">
											Evening (6 PM - 12 AM)
										</span>
									</label>
								</div>
							</div>

							<button
								type="submit"
								className="w-full bg-[#FF521B] text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
							>
								Submit Application
							</button>
						</form>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							What Our Partners Say
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Hear from current delivery partners about their experience with
							GoBuyMe
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[#FF521B] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold">MJ</span>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Mike Johnson</h3>
									<p className="text-sm text-gray-600">Delivery Partner</p>
								</div>
							</div>
							<p className="text-gray-600">
								&quot;GoBuyMe has been amazing! I make great money and the
								flexibility is perfect. The app is easy to use and support is
								always helpful.&quot;
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[#FF521B] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold">SL</span>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">Sarah Lee</h3>
									<p className="text-sm text-gray-600">Bike Courier</p>
								</div>
							</div>
							<p className="text-gray-600">
								&quot;As a student, this is the perfect job. I work around my
								classes and earn enough to cover my expenses. The community is
								great too!&quot;
							</p>
						</div>

						<div className="bg-white rounded-2xl p-6 shadow-lg">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[#FF521B] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold">DC</span>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">David Chen</h3>
									<p className="text-sm text-gray-600">Motorcycle Rider</p>
								</div>
							</div>
							<p className="text-gray-600">
								&quot;I&apos;ve been with GoBuyMe for 2 years now. The pay is
								competitive, the hours are flexible, and I love being part of
								the local business community.&quot;
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-[#FF521B] to-orange-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Start Earning?
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Join thousands of delivery partners who are already earning great
						money with GoBuyMe. Apply today and start working tomorrow!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Apply Now
						</button>
						<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors">
							Contact Us
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
