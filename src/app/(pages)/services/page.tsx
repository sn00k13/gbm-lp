import Header from '../../../components/Header';

export default function Services() {
	return (
		<>
			<Header />
			<div className="max-w-4xl mx-auto px-4 py-12">
				<h1 className="text-4xl font-bold text-[#0B3948] mb-6">Our Services</h1>
				<p className="text-lg text-gray-700 mb-8">
					GoBuyMe offers a range of convenient services to make your life
					easier:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white bg-opacity-80 rounded-lg shadow p-6">
						<h2 className="text-xl font-semibold text-[#FF521B] mb-2">
							Food Delivery
						</h2>
						<p className="text-gray-700">
							Order from your favorite local restaurants and get your meals
							delivered fast and fresh.
						</p>
					</div>
					<div className="bg-white bg-opacity-80 rounded-lg shadow p-6">
						<h2 className="text-xl font-semibold text-[#FF521B] mb-2">
							Grocery Shopping
						</h2>
						<p className="text-gray-700">
							Shop for groceries from trusted stores and have them delivered to
							your doorstep.
						</p>
					</div>
					<div className="bg-white bg-opacity-80 rounded-lg shadow p-6">
						<h2 className="text-xl font-semibold text-[#FF521B] mb-2">
							Easy Payment
						</h2>
						<p className="text-gray-700">
							Enjoy multiple secure payment options for a seamless checkout
							experience.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
