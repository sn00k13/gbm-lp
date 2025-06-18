'use client';

import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faXTwitter,
// 	faFacebook,
// 	faInstagram,
// 	faLinkedin,
// } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './images/logo.png'; // Adjust the path as necessary

function Header() {
	return (
		<div className="flex items-center min-w-full h-24 px-16 pt-16">
			<div className="flex items-center w-full">
				<Link href="/" className="flex items-center">
					<div className="relative h-24 w-24">
						{' '}
						{/* Adjust h-24 and w-48 as needed */}
						<Image
							src={Logo}
							alt="Logo"
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<p className="text-4xl text-[#FF521B] font-extrabold">GoBuyMe</p>
				</Link>
			</div>
			<div className="flex items-center justify-end w-full">
				<nav className="flex space-x-4 text-md items-center text-white">
					<Link href="/">Home</Link>
					<Link href="/services">Services</Link>
					<Link href="/about">About Us</Link>
					<Link href="/features">Features</Link>
					<Link href="/contact">Contact Us</Link>
					<button className="bg-[#FF521B] text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
						Download now
					</button>
				</nav>
			</div>
		</div>
	);
}

export default Header;
