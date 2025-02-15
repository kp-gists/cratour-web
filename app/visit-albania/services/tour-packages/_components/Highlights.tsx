import { Highlight } from '@/types/tour';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
	highlights: Highlight[];
};

const Highlights = ({ highlights }: Props) => {
	if (!highlights.length) return;

	return (
		<div id='highlights' className='my-6  flex justify-start items-start w-full px-4 md:px-12'>
			<div className='flex flex-col items-start  gap-6'>
				<h2 className='text-3xl  font-bold'>Highlights</h2>
				<div className='flex flex-col gap-6 md:gap-8'>
					{highlights.map((item) => (
						<div key={item.id} className='flex flex-row gap-3 md:gap-4'>
							<div className='over'>{item.icon ? <Image src={item.icon.url} width={32} height={32} alt='icon' /> : <Check className='h-8 w-8' />}</div>

							<div className='flex flex-col gap-2 relative'>
								<h3 className='text-lg md:text-xl text-stone-800 font-semibold font-serif'>{item.text}</h3>
								{item.description && <p className='text-sm md:text-base text-gray-500 max-w-3xl'>{item.description}</p>}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Highlights;
