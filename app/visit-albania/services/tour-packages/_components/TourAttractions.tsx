import { Attraction } from '@/types/tour';
import React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	attractions: Attraction[];
};

const TourAttractions = ({ attractions }: Props) => {
	if (attractions.length == 0) return;
	return (
		<div className='flex flex-col justify-center items-start gap-4 md:gap-6  w-full px-8 md:px-16'>
			<h3 className='text-xl md:text-2xl font-bold'>What attractions you will explore: </h3>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-[360px] md:w-[500px] lg:w-[900px]  px-6'
			>
				<CarouselContent>
					{attractions.map((item) => (
						<CarouselItem key={item.slug} className='basis-full md:basis-1/2 lg:basis-1/3'>
							<Link href={`/what-to-visit-in-albania/attractions/${item.slug}`} className='p-1 flex flex-col gap-4 '>
								<Image
									src={item!.cover!.url}
									width={250}
									height={185}
									alt={item.slug}
									className='rounded-lg w-[300px] md:w-[250px] h-[225px] md:h-[185px] bg-contain'
								/>
								<p className='capitalize text-lg font-bold'>{item.name}</p>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default TourAttractions;
