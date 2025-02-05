'use client';

import TransferForm from '@/components/TransferForm';
import { images } from '@/constants/images';
import useHash from '@/hooks/useHash';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const TransferServicePage = () => {
	const hash = useHash();

	useEffect(() => {}, [hash]);

	return (
		<div className='max-w-5xl mx-auto px-4 flex flex-col gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-8 pb-10 scroll-smooth'>
			{/* intro image */}
			{/* About this activity */}
			{/*  */}
			Free cancellation -hash:{hash}
			{/*  */}
			Reserve now & pay later Keep your travel plans flexible — book your spot and pay nothing today.
			{/*  */}
			availability 24/7 Check availability to see starting times.
			{/*  */}
			Private group
			{/* end of walk-down demo */}
			<div className='p-4 '>
				<a href='tel:+355673434342'>Call now!</a>
			</div>
			<div className='flex flex-col items-center  relative  w-full h-full overflow-hidden mb-10 '>
				{/* 1 */}
				<Link href='#pickup' onClick={() => (window.location.hash = 'pickup')}>
					<Image src={images.transfer1} width={750} height={600} className='rounded-lg' alt='ads' />
				</Link>

				{/* 2 */}
				<Link href='#cartype'>
					<Image src={images.transfer2} width={750} height={600} className='rounded-lg' alt='ads' />
				</Link>

				{/* 3 */}
				<Link href='#extra' className='flex flex-col justify-center items-center w-full h-80 relative my-10 py-10 border'>
					<Image src={images.transfer30} width={750} height={600} className='rounded-lg' alt='ads' />

					<Image src={images.message} width={64} height={64} className='absolute top-8 left-[40%] rounded-lg' alt='ads' />
					<Image src={images.languages} width={64} height={64} className='absolute top-8 right-1/3 rounded-lg' alt='ads' />
					<p className='text-blue-500 text-lg p-2'>Extra Details</p>
					<Image src={images.people} width={64} height={64} className='absolute top-[40%] left-[28%] rounded-lg' alt='ads' />
					<Image src={images.suitcase} width={64} height={64} className='absolute  top-[40%] right-1/4  rounded-lg' alt='ads' />
					<Image src={images.note} width={64} height={64} className='absolute bottom-8 left-1/2 rounded-lg' alt='ads' />
				</Link>

				{/* 4 */}
				<Link href='#newEmail' className='flex flex-col md:flex-row justify-around gap-4 items-center  bg-blue-50/20 w-[750px]'>
					<div className='flex flex-col items-center md:flex-row gap-2 relative w-'>
						<div className='w-14 h-14 relative'>
							<div className='w-14 h-14 rounded-full absolute top-0 left-0 z-10 bg-blue-300' />
							<div className='w-11 h-11 rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-500' />
							<p className='text-center text-xl rounded-full text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>4</p>
						</div>
						<p className='w-[300px] text-center'>Your will receive an email with the requested price and details </p>
					</div>
					<Image src={images.newMessage} width={300} height={300} className='rounded-lg' alt='ads' />
				</Link>

				<Image src={images.transfer3} width={750} height={600} className='rounded-lg z-10' alt='ads' />
				<div className='relative md:w-[750px] lg:w-[750px] h-full overflow-hidden border bg-white px-[50px]  -top-2 md:-top-4 pb-20'>
					{/* road vertical */}
					<div className='flex flex-row gap-2 '>
						<div className='flex flex-col'>
							<div className='w-10 h-24 bg-slate-400 relative z-30'>
								<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] top-0'></div>
							</div>

							<div className='w-10 h-24 bg-slate-400 relative z-30'>
								<div className='w-1 h-16 rounded-sm bg-white absolute left-[18px] top-4'></div>
							</div>
						</div>
						<div className='w-full h-48 flex justify-center items-center z-30'>
							<div className='flex flex-row justify-center items-center gap-2 md:gap-3'>
								<Image src={images.checked} width={28} height={28} alt='checked driver' className='' />

								<p className='text-lg font-sans'>Your driver will be in touch before your transfer.</p>
							</div>
						</div>
					</div>

					<div className='flex justify-start items-end'>
						{/* v1 */}
						<div className='relative z-20 w-20 h-20  bg-white -top-[80px] '>
							<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
							<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>
							{/* bars */}
							<div className=' z-30 w-40 h-20 absolute top-0 left-0 bg-white' />
							<div className=' z-30 w-20 h-40 absolute -bottom-20 -right-20 bg-white' />
						</div>
						{/* road 2 */}
						<div className='w-[500px] h-10 bg-slate-400 relative z-30 '>
							<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
							<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-40'></div>
							<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-80'></div>
						</div>

						<div className='relative z-20 w-20 h-20  bg-white -left-20 top-10'>
							<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
							<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>
							{/* bars */}
							<div className=' z-30 w-40 h-20 absolute -bottom-20 left-0 bg-white' />
							<div className=' z-30 w-20 h-40 absolute -bottom-20 left-0 bg-white' />
						</div>
					</div>

					<div className='pt-10   flex justify-end'>
						<div className='flex flex-col'>
							<div className='w-10 h-24 bg-slate-400 relative z-50 '>
								<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
							</div>
							<div className='w-10 h-24 bg-slate-400 relative z-50 '>
								<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
								<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -bottom-3 z-50'></div>
							</div>
						</div>
					</div>

					<div className='flex justify-end items-end h-[100px] relative -top-5'>
						<div className='w-10 h-10 bg-black'></div>

						<div className='relative z-20 w-20 h-20  -bottom-10 bg-white'>
							<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
							<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>
							{/* bars */}
							<div className=' z-30 w-40 h-20 absolute -bottom-20 left-0 bg-green-400' />
							<div className=' z-30 w-20 h-40 absolute -bottom-20 -right-20 bg-black' />
						</div>

						<div className='w-[400px] h-10 bg-slate-400 relative z-30 '>
							<div className='w-10 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
							<div className='w-10 h-1 rounded-sm bg-white absolute top-[18px] left-5'></div>
							<div className='w-0 h-1 rounded-sm bg-white absolute top-[18px] right-40'></div>
						</div>

						<div className='relative z-20 w-20 h-20  bg-white -top-20 -left-20'>
							<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
							<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>
							{/* bars */}
							<div className=' z-30 w-40 h-20 absolute top-0 left-0 bg-white' />
							<div className=' z-30 w-20 h-40 absolute -bottom-20 right-0 bg-white' />
						</div>
					</div>

					<div className='flex justify-start items-start'></div>
				</div>
			</div>
			<TransferForm />
		</div>
	);
};

export default TransferServicePage;
