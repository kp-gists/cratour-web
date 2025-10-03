'use client';

import React, { useEffect, useState } from 'react';

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image } from 'antd';

type Props = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	gallery: any[];
	title?: string;
};

const Gallery = ({ gallery, title = 'Gallery:' }: Props) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	if (gallery == null) return;
	if (!gallery.length) return;

	return (
		<div className='flex flex-col justify-center items-start gap-4 md:gap-6  w-full px-8 md:px-16'>
			<h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
			<Carousel
				setApi={setApi}
				opts={{
					align: 'start',
				}}
				className='w-[360px] md:w-[500px] lg:w-[900px]  px-6'
			>
				<CarouselContent>
					{gallery.map((item) => (
						<CarouselItem key={item.documentId} className='basis-full md:basis-1/2 lg:basis-1/3'>
							<Image src={item.url} width={250} height={185} alt={item.hash} className='rounded-lg w-[300px] md:w-[250px] h-[225px] md:h-[185px] bg-contain' />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
				<div className='py-2 text-center text-sm text-muted-foreground'>
					{current} / {count}
				</div>
			</Carousel>
		</div>
	);
};

export default Gallery;
