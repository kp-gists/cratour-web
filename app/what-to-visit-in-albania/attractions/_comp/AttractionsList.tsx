/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
'use client';

import React, { useState } from 'react';
import { useGetAllAttractions } from '@/hooks/useAttractions';
import ScreenLoading from '@/components/ScreenLoading';
import ScreenError from '@/components/ScreenError';
import Link from 'next/link';
import Image from 'next/image';

const AttractionsList = () => {
	const [page, setPage] = useState<number>(1);
	const [pageSize, setPageSize] = useState<number>(50);

	const { attractions, isError, isLoading, error } = useGetAllAttractions({ page, pageSize });

	if (isLoading) return <ScreenLoading text='Loading Attractions...' />;
	if (isError) return <ScreenError buttonLabel='What to do in Albania' buttonLink='/what-to-visit-in-albania' />;

	return (
		<div className='p-2 md:p-6 max-w-6xl flex flex-col justify-center items-center  mx-auto pb-10 gap-5'>
			<div className='w-full px-8 py-6'>
				<h1 className='mb-4 text-3xl font-semibold'>All Attractions List in Albania</h1>

				<p className='text-base'>Quick overview for attractions</p>
			</div>

			<div className='flex flex-col  items-center justify-center max-w-5xl gap-8'>
				{attractions.data.map((item: any) => {
					return (
						<Link
							className='flex flex-row w-full justify-end items-end gap-6 border-2 border-dashed border-cyan-400 px-6 py-5 rounded-xl overflow-hidden'
							href={`/what-to-visit-in-albania/attractions/${item.slug}`}
							key={item.id}
						>
							<Image src={item.cover.url} alt={item.name} width={360} height={260} className='bg-contain h-[260px] w-[360px] rounded-xl' />

							<div className='flex flex-col  gap-3 md:gap-4 items-start w-[400px]'>
								<div className='flex flex-wrap gap-3'>
									{item.tags.split(' ').map((tag: any) => (
										<div key={tag} className='px-2 py-1 rounded-md border block text-xs bg-cyan-100 italic'>
											{tag}
										</div>
									))}
								</div>
								<h2 className='text-xl font-semibold'>{item.name}</h2>
								{item.seo !== null ? <p className='text-pretty'>{item.seo.metaDescription}</p> : ''}
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default AttractionsList;
