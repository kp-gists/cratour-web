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
						className='w-[300px] h-[300px] p-2 flex flex-col items-center justify-center border-2 border-cyan-500 rounded-xl shadow shadow-cyan-500 relative overflow-hidden'
					>
						<Image src={item.icon} width={128} height={128} alt={item.id} className='mb-4 ' />
						<div className='bg-white/30 backdrop-blur-sm flex flex-col justify-center items-center rounded-lg m-2'>
							<strong className='text-lg md:text-xl  rounded-xl px-2 py-1'>{item.title}</strong>
							<p className='w-full  text-center font-medium text-pretty text-base '>{item.subtitle}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChooseUsTransfer;
