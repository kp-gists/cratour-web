import TransferForm from '@/components/TransferForm';
import { images } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const TransferServicePage = () => {
	return (
		<div className='max-w-5xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-8 pb-10'>
			{/* intro image */}
			{/* About this activity */}
			{/*  */}
			Free cancellation Cancel up to 24 hours in advance for a full refund
			{/*  */}
			Reserve now & pay later Keep your travel plans flexible — book your spot and pay nothing today.
			{/*  */}
			availability 24/7 Check availability to see starting times.
			{/*  */}
			Driver English
			{/*  */}
			Private group
			{/* end of walk-down demo */}
			<div className='flex flex-col items-center  relative  w-full h-full overflow-visible '>
				<Image src={images.transfer1} width={880} height={770} className='' alt='ads' />
				<Image src={images.transfer2} width={880} height={770} className='' alt='ads' />
				<Image src={images.transfer3} width={880} height={770} className=' z-10' alt='ads' />

				<div className='relative w-full h-full border bg-white px-[54px] -top-4'>
					{/* road vertical */}
					<div className='w-10 h-24 bg-slate-400 relative z-30'>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] top-0'></div>
					</div>

					<div className='w-10 h-24 bg-slate-400 relative z-30'>
						<div className='w-1 h-16 rounded-sm bg-white absolute left-[18px] top-4'></div>
					</div>

					{/* curve */}
					<div className='flex justify-start items-end'>
						<div className='relative z-20  w-20 h-20   overflow-hidden bg-white '>
							<div className='absolute z-10 w-40 h-40 bottom-0 left-0 bg-slate-400 rounded-full '></div>
							<div className='absolute -top-1/2 -right-1/2  z-10 w-20 h-20 bg-white rounded-full'></div>

							<div className='w-[100px] h-[100px] border-x-2 border-white bg-transparent rounded-full z-50 absolute -top-1/2 -right-1/2 ' />
						</div>

						{/* road */}
						<div className='w-[500px] h-10 bg-slate-400 relative z-30 '>
							<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
							<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-40'></div>
							<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-80'></div>
						</div>

						{/* curve end */}
						<div className='relative z-20  w-20 h-20  top-10 overflow-hidden bg-white '>
							<div className='absolute z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>

							<div className='absolute top-1/2 -left-1/2  z-10 w-20 h-20 bg-white rounded-full'></div>
						</div>
					</div>

					<div className='pt-10  w-[660px] h-56 flex justify-end'>
						<div className='w-10 h-24 bg-slate-400 relative z-30 '>
							<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
						</div>
					</div>

					<div className='flex justify-end items-end h-[100px]'>
						<div className='w-[400px] h-10 bg-slate-400 relative z-30 '>
							<div className='w-10 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
							<div className='w-10 h-1 rounded-sm bg-white absolute top-[18px] left-5'></div>
							<div className='w-10 h-1 rounded-sm bg-white absolute top-[18px] right-10'></div>
						</div>

						<div className='relative z-20  w-20 h-20   overflow-hidden bg-white '>
							<div className='absolute z-10 w-40 h-40 bottom-0 right-0 bg-slate-400 rounded-full '></div>

							<div className='absolute top-1/2 left-1/2  z-10 w-20 h-20 bg-white rounded-full'></div>
						</div>
					</div>
				</div>
			</div>
			<TransferForm />
		</div>
	);
};

export default TransferServicePage;
