// app/404.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen text-center bg-gray-100'>
			<Image
				src='/svg/404.svg' // Update with the path to your image
				alt='Page not found'
				width={400} // Adjust the width as needed
				height={300} // Adjust the height as needed
				className='mb-4'
			/>
			<h1 className='text-4xl font-bold mb-2'>Oops! Page Not Found</h1>
			<p className='text-lg mb-4'>The page you are looking for does not exist. Please check the URL or return to the homepage.</p>
			<Link href='/' className='text-blue-500 underline'>
				Go to Homepage
			</Link>
		</div>
	);
};

export default Custom404;
