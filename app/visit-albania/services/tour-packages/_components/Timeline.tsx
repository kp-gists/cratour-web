import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CityCard from './CityCard';

type Props = {
	routes: any[];
};

type ItineraryCardProps = {
	dir: 'left' | 'right';
	title: string;
	desc: string;
	cover: {
		url: string;
	};
	isLast?: boolean;
	cities: any[];
	items: any[];
};

const ItineraryCard = ({ dir, title, desc, cover, isLast = false, cities, items }: ItineraryCardProps) => {
	const actions = (
		<div className='flex flex-row gap-4'>
			<Dialog>
				{cities.length > 0 && (
					<span className=''>
						<DialogTrigger className='text-base hover:bg-gray-200 bg-gray-100  border border-transparent hover:border py-1 px-3 rounded-md text-gray-800'>
							Cities ({cities.length})
						</DialogTrigger>
					</span>
				)}
				<DialogContent>
					<DialogTitle className='text-lg font-bold'>List of Cities ({cities.length})</DialogTitle>
					<DialogDescription className='w-full max-w-screen-lg p-6 overflow-y-auto max-h-[80vh]'>
						<div className='flex flex-col gap-4 md:gap-8'>
							{cities.map((city) => (
								<CityCard key={city.id} city={city} />
							))}
						</div>
					</DialogDescription>
				</DialogContent>
			</Dialog>
			<Dialog>
				{items.length > 0 && (
					<span className=''>
						<DialogTrigger className='text-base hover:bg-gray-200  border-transparent border hover:border bg-gray-100 py-1 px-3 rounded-md text-gray-800'>
							Routes ({items.length})
						</DialogTrigger>
					</span>
				)}
				<DialogContent>
					<DialogTitle className='text-lg font-bold'>Details for each route</DialogTitle>
					<DialogDescription className='w-full max-w-screen-lg p-6 overflow-y-auto max-h-[80vh]'>
						<div className='flex flex-col gap-4 md:gap-8'>
							{items.map((item) => (
								<div key={item.id} className='flex flex-col items-center gap-3 border border-dashed border-cyan-400 p-4 rounded-xl'>
									<div className='flex gap-3 flex-col'>
										<div>
											<strong className='text-lg text-center text-pretty mb-2'>{item.title} </strong>
											<div className='italic text-base'>Staying Time: {item.stayingTime}</div>
										</div>
										<p className='text-base overflow-hidden overflow-ellipsis text-pretty'>{desc}</p>
									</div>
								</div>
							))}
						</div>
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</div>
	);

	const titleText = <h1 className='pb-1 capitalize text-lg font-bold'>{title}</h1>;

	const image = <Image src={cover === null ? '/png/street-map.png' : cover.url} width={280} height={280} alt={title} className='rounded-lg mb-6 mt-3' />;
	const description = (
		<>
			<p className='h-[72px] px-3 text-base overflow-hidden overflow-ellipsis line-clamp-3'>
				{desc}
				<Dialog>
					{desc && (
						<span className=''>
							<DialogTrigger className='text-base absolute -bottom-5 right-1/2 hover:text-blue-600 hover:font-bold  text-blue-800'>
								...read more...
							</DialogTrigger>
						</span>
					)}
					<DialogContent>
						<DialogTitle>Quick Route Overview</DialogTitle>
						<DialogDescription
							className='w-full max-w-screen-lg p-6 overflow-y-auto max-h-[80vh]'
							dangerouslySetInnerHTML={{
								__html: `${desc}`,
							}}
						></DialogDescription>
					</DialogContent>
				</Dialog>
			</p>
		</>
	);

	if (dir === 'left') {
		return (
			<div className={cn('w-full px-4  flex flex-row gap-6 relative')}>
				{image}
				<div className='flex flex-col justify-end items-start pr-[130px] relative pb-6'>
					<div className='absolute left-0 top-3 '>{actions}</div>
					{titleText}

					<div className='border-gray-600 rounded-tr-xl border-t-2 border-r-2 pt-3 relative'>
						<div className='w-full h-2' />
						{description}
						{isLast ? '' : <div className='w-6  h-0.5 bg-gray-600 absolute bottom-0 -right-3' />}
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={cn('w-full px-4  flex flex-row gap-6 relative')}>
			<div className='flex flex-col justify-end items-start pl-[130px] relative'>
				<div className='absolute left-0 top-4 '>{actions}</div>
				{titleText}
				<div className='border-gray-600 rounded-tl-xl border-t-2 border-l-2 pt-3 relative'>
					{description}
					<div className='w-full h-2' />
					{isLast ? '' : <div className='w-6  h-0.5 bg-gray-600 absolute bottom-0 -left-3' />}
				</div>
			</div>
			{image}
		</div>
	);
};

const Timeline = ({ routes }: Props) => {
	const transformed = routes.map((item, idx) => ({
		...item,
		place: idx === 0 ? 'first' : idx === routes.length - 1 ? 'last' : 'mid',
		dir: idx % 2 === 0 ? 'left' : 'right',
	}));
	console.log('🚀 ~ Timeline ~ transformed:', transformed);

	return (
		<div className='w-[900px] mx-auto flex flex-col gap-6 my-10 md:my-20'>
			<h1 className='text-center text-2xl font-bold'>Trip Timeline</h1>

			<div className='relative flex flex-col items-center'>
				{transformed.map((item, idx) => (
					<ItineraryCard
						key={item.id}
						cities={item.cities}
						isLast={idx === routes.length - 1}
						cover={item.cover}
						desc={item.desc}
						dir={item.dir as any}
						title={item.title}
						items={item.routeItem}
					/>
				))}
			</div>
		</div>
	);
};

export default Timeline;
