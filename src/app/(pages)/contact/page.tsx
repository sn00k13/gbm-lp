import Header from '../../../components/Header';

export default function Contact() {
	return (
		<>
			<Header />

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Get in <span className="text-[#FF521B]">Touch</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Have questions, feedback, or need support? We&apos;re here to help!
						Reach out to our team and we&apos;ll get back to you as soon as
						possible.
					</p>
				</div>
			</section>

			{/* Contact Form & Info Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Send us a Message
							</h2>
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											First Name
										</label>
										<input
											type="text"
											id="firstName"
											name="firstName"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
											placeholder="Enter your first name"
										/>
									</div>
									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Last Name
										</label>
										<input
											type="text"
											id="lastName"
											name="lastName"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
											placeholder="Enter your last name"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter your email address"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
										placeholder="Enter your phone number"
									/>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Subject
									</label>
									<select
										id="subject"
										name="subject"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors"
									>
										<option value="">Select a subject</option>
										<option value="general">General Inquiry</option>
										<option value="support">Technical Support</option>
										<option value="business">Business Partnership</option>
										<option value="feedback">Feedback & Suggestions</option>
										<option value="billing">Billing & Payments</option>
										<option value="other">Other</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF521B] focus:border-transparent transition-colors resize-none"
										placeholder="Tell us how we can help you..."
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full bg-[#FF521B] text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">
									Contact Information
								</h2>
								<p className="text-gray-600 mb-8">
									Get in touch with us through any of these channels. We&apos;re
									here to help and will respond to your inquiry as quickly as
									possible.
								</p>
							</div>

							{/* Contact Cards */}
							<div className="space-y-6">
								<div className="bg-gray-50 rounded-xl p-6">
									<div className="flex items-start">
										<div className="w-12 h-12 bg-[#FF521B] rounded-lg flex items-center justify-center mr-4">
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												Email Support
											</h3>
											<p className="text-gray-600 mb-2">support@gobuy.me</p>
											<p className="text-sm text-gray-500">
												We typically respond within 2-4 hours
											</p>
										</div>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<div className="flex items-start">
										<div className="w-12 h-12 bg-[#FF521B] rounded-lg flex items-center justify-center mr-4">
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												Phone Support
											</h3>
											<p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
											<p className="text-sm text-gray-500">
												Monday - Friday, 9 AM - 6 PM EST
											</p>
										</div>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<div className="flex items-start">
										<div className="w-12 h-12 bg-[#FF521B] rounded-lg flex items-center justify-center mr-4">
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												Office Address
											</h3>
											<p className="text-gray-600 mb-2">
												123 Innovation Drive
												<br />
												Tech City, TC 12345
												<br />
												United States
											</p>
											<p className="text-sm text-gray-500">
												Visit us during business hours
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Social Media */}
							<div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									Follow Us
								</h3>
								<div className="flex space-x-4">
									<a
										href="#"
										className="w-10 h-10 bg-[#FF521B] rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
									>
										<svg
											className="w-5 h-5 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
										</svg>
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-[#FF521B] rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
									>
										<svg
											className="w-5 h-5 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
										</svg>
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-[#FF521B] rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
									>
										<svg
											className="w-5 h-5 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
										</svg>
									</a>
									<a
										href="#"
										className="w-10 h-10 bg-[#FF521B] rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
									>
										<svg
											className="w-5 h-5 text-white"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Frequently Asked Questions
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Find quick answers to common questions about GoBuyMe
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-xl p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								How do I download the GoBuyMe app?
							</h3>
							<p className="text-gray-600">
								You can download the GoBuyMe app from the App Store (iOS) or
								Google Play Store (Android). Simply search for
								&quot;GoBuyMe&quot; and click the download button.
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								What payment methods do you accept?
							</h3>
							<p className="text-gray-600">
								We accept all major credit cards (Visa, MasterCard, American
								Express), digital wallets (Apple Pay, Google Pay), and cash on
								delivery for eligible orders.
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								How long does delivery take?
							</h3>
							<p className="text-gray-600">
								Delivery times vary by location and store, but most orders are
								delivered within 30-60 minutes. You can track your order in
								real-time through the app.
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Can I cancel my order?
							</h3>
							<p className="text-gray-600">
								Orders can be cancelled within 5 minutes of placement if the
								store hasn&apos;t started preparing your items. Contact our
								support team for assistance.
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								How do I become a partner business?
							</h3>
							<p className="text-gray-600">
								We&apos;re always looking for great local businesses to partner
								with! Contact our business development team at business@gobuy.me
								for more information.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-[#FF521B] to-orange-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Still Have Questions?
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Our support team is here to help you 24/7. Don&apos;t hesitate to
						reach out if you need any assistance with your GoBuyMe experience.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-[#FF521B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Contact Support
						</button>
						<button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#FF521B] transition-colors">
							Download App
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
