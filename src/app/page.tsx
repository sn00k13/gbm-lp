// import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';
import heroImage from '@/components/images/Gemini_Generated_Image_64gbmr64gbmr64gb-removebg-preview.png'; // Adjust the path as necessary
import backgroundImageCover from '@/components/images/arif.jpg'; // Adjust the path as necessary
import AppleLogo from '@/components/images/Apple-Logosu.png'; // Adjust the path as necessary
import GoogleLogo from '@/components/images/googleplay.png'; // Adjust the path as necessary

export default function Home() {
	return (
		<div className="relative flex flex-col items-center justify-between min-h-screen bg-[#FFF0EB]">
			<Image
				src={backgroundImageCover}
				alt="Background"
				fill
				style={{ objectFit: 'cover', zIndex: 0 }}
				className="pointer-events-none"
			/>
			{/* Overlay shade */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200/60 to-black/70 z-[1] pointer-events-none"></div>
			<div className="relative z-10 w-full">
				<Header />
				<section className="grid grid-cols-2 w-full h-full p-16">
					<div className="flex flex-col items-start justify-start space-y-10">
						<h1 className="text-5xl font-semibold text-[#0B3948]">
							Get your cravings satisfied in just minutes!
						</h1>
						<p className="text-gray-800 text-lg">
							Your one-stop app for food delivery and grocery shopping. Order
							from your favorite local restaurants and stores, all in one place.
						</p>
						<div>
							<div className="flex flex-row space-x-8 mt-4">
								<div className="bg-white bg-opacity-40 rounded-lg shadow p-4 flex-1">
									<h3 className="font-bold text-sm mb-2 text-[#FF521B]">
										Fast Delivery
									</h3>
									<p className="text-gray-700 text-sm">
										Get your food and groceries delivered to your door in
										minutes.
									</p>
								</div>
								<div className="bg-white bg-opacity-40 rounded-lg shadow p-4 flex-1">
									<h3 className="font-bold text-sm mb-2 text-[#FF521B]">
										Wide Selection
									</h3>
									<p className="text-gray-700 text-sm">
										Choose from a variety of local restaurants and stores.
									</p>
								</div>
								<div className="bg-white bg-opacity-40 rounded-lg shadow p-4 flex-1">
									<h3 className="font-bold text-sm mb-2 text-[#FF521B]">
										Easy Payment
									</h3>
									<p className="text-gray-700 text-sm">
										Multiple secure payment options for your convenience.
									</p>
								</div>
							</div>
						</div>
						<div className="flex space-x-4 mt-4">
							<button className="flex item-center bg-amber-50 w-36 h-12 rounded-lg shadow">
								<div className="w-1/3 h-full flex items-center justify-center">
									<Image
										src={AppleLogo}
										alt="Apple Logo"
										width={50}
										height={50}
									/>
								</div>
								<div className="flex flex-col items-start justify-center w-2/3 h-full">
									<div className="text-xs">Download on the</div>
									<div>App Store</div>
								</div>
							</button>
							<button className="flex item-center bg-amber-50 w-36 h-12 rounded-lg shadow">
								<div className="w-1/3 h-full flex items-center justify-center">
									<Image
										src={GoogleLogo}
										alt="Google Play"
										width={50}
										height={50}
									/>
								</div>
								<div className="flex flex-col items-start justify-center w-2/3 h-full">
									<div className="text-xs">Available on</div>
									<div>Google Play</div>
								</div>
							</button>
						</div>
					</div>
					<div className="flex items-start justify-center">
						<Image
							src={heroImage} // Adjust the path as necessary
							alt="Hero Image"
							width={500} // Adjust width as needed
							height={500} // Adjust height as needed
							className="rounded-lg"
						/>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}
