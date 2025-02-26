'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ScreenErrorProps {
	message?: string;
	buttonLabel?: string;
	buttonLink?: string;
}

export default function ScreenError({ message = 'Something went wrong!', buttonLabel = 'Go Back', buttonLink }: ScreenErrorProps) {
	const router = useRouter();

	return (
		<div className='flex flex-col items-center justify-center h-screen text-center bg-gray-100 dark:bg-gray-900'>
			<Image src='/svg/error500.svg' alt='Error' width={300} height={300} className='mb-6' />
			<h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>{message}</h2>
			<div className='mt-6 flex gap-4'>
				<Link href='/' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
					Home
				</Link>
				{buttonLink ? (
					<Link href={buttonLink} className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition'>
						{buttonLabel}
					</Link>
				) : (
					<button onClick={() => router.back()} className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition'>
						{buttonLabel}
					</button>
				)}
			</div>
		</div>
	);
}
