import { services } from '@/constants/services';
import Image from 'next/image';
import React from 'react';
import RobotoText from '../ui/RobotoText';
import SatisfyText from '../ui/SatisfyText';
import Link from 'next/link';

const Services = () => {
	{
		/* services splash layout with tabs bar */
	}

	return (
		<div className='w-full h-fit p-4 md:p-10 lg:p-16 bg-cyan-100 flex flex-col justify-center items-center gap-8 md:gap-16'>
			<SatisfyText className='text-black hover:underline hover:font-bold text-lg md:text-3xl'>Our Services</SatisfyText>
			<p className='text-black font-bold font-mono text-lg md:text-xl mx-auto w-fit md:w-[500px] text-center'>
				Uncover the hidden gems of Albania and embark on a treasure hunt like no other.
			</p>

			<div className='flex flex-wrap justify-center items-center gap-8 px-3'>
				{services.map((service) => (
					<div
						key={service.id}
						className=' hover:-translate-y-2 w-full  md:w-[275px] px-3 py-6 border-2 border-dashed  border-cyan-400  rounded-xl flex justify-center items-center flex-col gap-3'
					>
						<Image src={service.icon} width={80} height={80} alt={service.description} />

						<RobotoText as='h1' className='text-center w-full text-xl font-bold'>
							{service.title}
						</RobotoText>

						<p className='text-center h-20'>{service.description}</p>

						<Link href={`/visit-albania/services/${service.slug}`}>
							<SatisfyText className='text-cyan-600 hover:underline hover:font-bold text-xl'>{service.cta}</SatisfyText>
						</Link>
					</div>
				))}
			</div>

			<Link href={`/visit-albania/services`} className='block my-6'>
				<SatisfyText className='text-cyan-600 text-lg text-center px-3 md:px-6 md:text-xl lg:text-3xl'>
					Explore our services to create unforgettable memories in the land of wonders! ...more
				</SatisfyText>
			</Link>
		</div>
	);
};

export default Services;
