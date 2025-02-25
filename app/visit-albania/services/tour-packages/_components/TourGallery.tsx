import React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	gallery: any[];
	title?: string;
};

const TourGallery = ({ gallery, title = 'Gallery:' }: Props) => {
	if (!gallery) return;

	return (
		<div className='flex flex-col justify-center items-start gap-4 md:gap-6  w-full px-8 md:px-16'>
			<h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-[360px] md:w-[500px] lg:w-[900px]  px-6'
			>
				<CarouselContent>
					{gallery.map((item) => (
						<CarouselItem key={item.id} className='basis-full md:basis-1/2 lg:basis-1/3'>
							<Link href={item.url} target='_blank' className='p-1 flex flex-col gap-4 '>
								<Image
									src={item!.formats!.small!.url || item.url}
									width={250}
									height={185}
									alt={item.hash}
									className='rounded-lg w-[300px] md:w-[250px] h-[225px] md:h-[185px] bg-contain'
								/>
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

export default TourGallery;
