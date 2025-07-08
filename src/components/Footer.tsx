'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faXTwitter,
	faFacebook,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 w-full">
			<div className="flex flex-col md:flex-row items-center justify-center p-4 gap-4">
				<p className="text-sm text-gray-600">
					&copy; {new Date().getFullYear()} Bubble Barrel Commerce Nig. Ltd. All
					rights reserved.
				</p>
				<ul className="flex gap-4 justify-end">
					<li>
						<Link href="/privacy" className="text-sm text-gray-600">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link href="/terms" className="text-sm text-gray-600">
							Terms of Service
						</Link>
					</li>
					<li>
						<Link href="/contact" className="text-sm text-gray-600">
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex gap-4 justify-center items-center">
				<button
					className="w-12 h-12 bg-transparent text-blue-600 rounded-full border-solid border-2 border-gray-300 hover:bg-gray-300"
					onClick={() => window.open('https://twitter.com/akanta', '_blank')}
				>
					<FontAwesomeIcon icon={faFacebook} />
				</button>
				<button
					className="w-12 h-12 bg-transparent text-purple-500 rounded-full border-solid border-2 border-gray-300 hover:bg-gray-300"
					onClick={() => window.open('https://twitter.com/akanta', '_blank')}
				>
					<FontAwesomeIcon icon={faInstagram} />
				</button>
				<button
					className="w-12 h-12 bg-transparent text-blue-500 rounded-full border-solid border-2 border-gray-300 hover:bg-gray-300"
					onClick={() => window.open('https://twitter.com/akanta', '_blank')}
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</button>
				<button
					className="w-12 h-12 bg-transparent text-black rounded-full border-solid border-2 border-gray-300 hover:bg-gray-300"
					onClick={() => window.open('https://twitter.com/akanta', '_blank')}
				>
					<FontAwesomeIcon icon={faXTwitter} />
				</button>
			</div>
		</div>
	);
}

export default Footer;
