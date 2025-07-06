'use client';

import React, { useState } from 'react';
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3 group">
						<div className="relative h-12 w-12 transition-transform group-hover:scale-105">
							<Image
								src={Logo}
								alt="GoBuyMe Logo"
								fill
								style={{ objectFit: 'contain' }}
								priority
							/>
						</div>
						<div className="flex flex-col">
							<span className="text-2xl font-bold text-[#FF521B] leading-tight">GoBuyMe</span>
							<span className="text-xs text-gray-500 -mt-1">Deliver Happiness</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						<Link 
							href="/" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							Home
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
						<Link 
							href="/services" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							Services
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
						<Link 
							href="/features" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							Features
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
						<Link 
							href="/about" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							About
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
						<Link 
							href="/vendors" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							For Vendors
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
						<Link 
							href="/careers" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							Careers
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
						<Link 
							href="/contact" 
							className="text-gray-700 hover:text-[#FF521B] font-medium transition-colors duration-200 relative group"
						>
							Contact
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF521B] transition-all duration-200 group-hover:w-full"></span>
						</Link>
					</nav>

					{/* CTA Buttons */}
					<div className="hidden lg:flex items-center space-x-4">
						<Link 
							href="/downloads" 
							className="bg-gradient-to-r from-[#FF521B] to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-500 hover:to-[#FF521B] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
							</svg>
							<span>Download App</span>
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={toggleMobileMenu}
						className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#FF521B] hover:bg-gray-100 transition-colors duration-200"
						aria-label="Toggle mobile menu"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="lg:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 shadow-lg rounded-b-lg">
							<Link
								href="/"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/services"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Services
							</Link>
							<Link
								href="/features"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Features
							</Link>
							<Link
								href="/about"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About
							</Link>
							<Link
								href="/vendors"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								For Vendors
							</Link>
							<Link
								href="/careers"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Careers
							</Link>
							<Link
								href="/contact"
								className="block px-3 py-2 text-gray-700 hover:text-[#FF521B] hover:bg-orange-50 rounded-md font-medium transition-colors duration-200"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contact
							</Link>
							<div className="pt-4 border-t border-gray-200">
								<Link
									href="/downloads"
									className="block w-full text-center bg-gradient-to-r from-[#FF521B] to-orange-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-[#FF521B] transition-all duration-300 transform hover:scale-105 shadow-md"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Download App
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
