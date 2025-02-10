import { whyChooseTransfer } from '@/constants/why';
import Image from 'next/image';
import React from 'react';

const ChooseUsTransfer = () => {
	return (
		<div className='my-6 md:my-10'>
			<h1 className='mb-8 text-xl text-center md:text-2xl font-bold'>
				Why choose CRA-tour <br className='block md:hidden' /> for your transfers?
			</h1>
			<ul className='flex flex-wrap gap-6 items-center justify-center md:gap-8'>
				{whyChooseTransfer.map((item) => (
					<li
						key={item.id}
						className='px-3 w-full md:w-fit py-3 flex flex-col items-center gap-2 justify-center border-4 border-cyan-500 rounded-xl shadow shadow-cyan-500'
					>
						<div className='flex flex-col  justify-center items-center gap-2'>
							<Image src={item.icon} width={72} height={72} alt={item.id} className='w-12 h-12 md:w-16 md:h-16' />
							<strong className='text-lg md:text-xl'>{item.title}</strong>
						</div>
						<p className='w-full md:w-72 lg:w-96 h-12 text-center text-base'>{item.subtitle}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChooseUsTransfer;
