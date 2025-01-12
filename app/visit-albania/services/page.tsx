import RBAlb from '@/components/ui/RBAlb';
import RobotoText from '@/components/ui/RobotoText';
import SatisfyText from '@/components/ui/SatisfyText';
import { images } from '@/constants/images';
import { services } from '@/constants/services';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
	return (
		<div className='max-w-4xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-4 md:gap-6 lg:gap-8 pt-10 md:pt-16 lg:pt-20'>
			<SatisfyText as='h1' className='text-xl md:text-3xl text-center px-2 '>
				Explore Our Comprehensive Services for an <br /> Unforgettable <b className='text-cyan-600'>Albanian Experience</b>
			</SatisfyText>

			<p className='indent-4'>
				Are you planning a trip to <RBAlb />? Discover our range of exceptional services designed to make your journey seamless, exciting, and memorable.
				Whether you&apos;re visiting <RBAlb /> for its <b className='underline text-orange-500'>stunning landscapes</b>,{' '}
				<i className='underline text-green-500'>vibrant culture</i>, or as a <span className='text-blue-600'>medical tourism destination</span>, we’ve got you
				covered. Here&apos;s how we can help you create <b className='text-lg underline'>the perfect travel experience:</b>
			</p>

			<div className='flex flex-col gap-8 md:gap-12 lg:gap-16'>
				{services.map((service, idx) => (
					<article key={service.id} className='flex flex-col gap-4'>
						<SatisfyText as='h2' className='text-lg md:text-2xl'>
							{idx + 1}. {service.title}
						</SatisfyText>
						<p className='indent-2'>{service.content}</p>

						<div className='px-2 md:px-4'>
							<RobotoText as='h3' className='font-bold text-lg'>
								{service.whyUsTitle}
							</RobotoText>

							<ul className='px-2 md:px-4 pt-2'>
								{service.whyUsArr.map((item, idx) => (
									<li className='flex gap-2 py-2' key={idx}>
										<Image src={images.megaphone} className='' width={24} height={24} alt='speaker' /> {item}
									</li>
								))}
							</ul>

							<Link href={`/visit-albania/services/${service.slug}`} className='block mt-4 mb-6'>
								<SatisfyText as='h6' className='text-cyan-600 capitalize text-xl hover:underline  hover:text-cyan-800 hover:font-bold'>
									{service.cta2}
								</SatisfyText>
							</Link>
						</div>
					</article>
				))}
			</div>

			{/* footer  */}

			<hr />
			<div className='pb-10'>
				<RobotoText as='h5' className='text-2xl font-bold mb-4 md:mb-6'>
					Why Choose Our Services?
				</RobotoText>
				<p className='indent-4'>
					We are dedicated to making your visit to <RBAlb /> as enjoyable and stress-free as possible. Our services are designed with your needs in mind,
					combining quality, convenience, and affordability. Whether you’re here for <b className='text-green-600'>leisure</b>,{' '}
					<b className='text-purple-600'>business</b>, or <b className='text-blue-600'>health</b>, we are your trusted partner in creating exceptional travel
					experiences. Start planning your <RBAlb hasN /> adventure today and let us take care of the rest!
				</p>
			</div>
		</div>
	);
};

export default ServicesPage;
