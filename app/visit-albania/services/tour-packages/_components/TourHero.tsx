/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category } from '@/types/tour';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	title: string;
	subtitle: string;
	categories: Category[];
	cover: any;
	days: number;
};

const TourHero = ({ title, categories, cover, days, subtitle }: Props) => {
	return (
		<div className='flex flex-col justify-start items-start py-6 md:py-8 gap-6 px-0 md:px-10'>
			<h1 className='text-2xl md:text-3xl font-bold'>{title}</h1>

			<div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 '>
				<div className='flex flex-row gap-1 items-center'>
					{[1, 2, 3, 4, 5].map((i) => (
						<Image key={i} src='/png/star.png' width={24} height={24} alt='star' />
					))}
				</div>
				<div className='pt-2 flex flex-row gap-4 items-end justify-end'>
					<strong className='leading-6'>
						{days} day{`${days === 1 ? '' : 's'}`}
					</strong>

					<li className='list-disc leading-6 ml-4'>{subtitle}</li>
				</div>
			</div>
			<div className='w-full  lg:w-[915px] h-[260px] lg:h-[515px] relative overflow-hidden rounded-3xl shadow'>
				<Image src={cover.url} alt='' fill />
			</div>

			<div className='flex flex-wrap gap-x-1 gap-y-2 md:gap-4  w-full '>
				{categories.map((category) => (
					<Link
						key={category.slug}
						href={`/what-to-visit-in-albania/category/${category.documentId}`}
						target='_blank'
						className='flex md:flex-row gap-2 px-2 md:px-4 py-1 md:py-2 bg-gray-100 items-center rounded-lg'
					>
						<Image src={category.icon.url} alt={category.slug} width={24} height={24} className='w-4 h-4 md:w-6 md:h-6' />

						<span className='capitalize text-sm md:text-base  leading-6'>{category.title}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default TourHero;
