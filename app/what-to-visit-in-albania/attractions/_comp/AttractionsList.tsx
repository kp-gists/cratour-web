/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
'use client';

import React, { useState } from 'react';
import { useGetAllAttractions } from '@/hooks/useAttractions';
import ScreenLoading from '@/components/ScreenLoading';
import ScreenError from '@/components/ScreenError';
import Link from 'next/link';
import Image from 'next/image';
import ActivitySlider from './ActivitySlider';
import { useQuery, gql } from '@apollo/client';

const GET_ATTRACTIONS = gql`
	query getAttractions {
		cityAttractions {
			name
			cover {
				url
			}
			slug
			seo {
				metaDescription
			}
			tags
			tour_activities {
				title
				slug
			}
		}
	}
`;

const AttractionsList = () => {
	const [page, setPage] = useState<number>(1);
	const [pageSize, setPageSize] = useState<number>(10);

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
							className='flex flex-col lg:flex-row w-full md:justify-start lg:justify-end md:items-start lg:items-end gap-6 border-1 shadow-xl hover:shadow-2xl  px-6 py-5 rounded-xl overflow-hidden'
							href={`/what-to-visit-in-albania/attractions/${item.slug}`}
							key={item.slug}
						>
							<Image
								src={item.cover.url}
								alt={item.name}
								width={360}
								height={260}
								className='bg-contain h-[260px] w-[360px] md:w-full lg:w-[360px] rounded-xl'
							/>

							<div className='flex flex-col  gap-3 md:gap-4 justify-start items-start w-fit  md:w-[400px]'>
								<div className='flex flex-wrap gap-3'>
									{item.tags !== null
										? item.tags
												.split(' ')
												.slice(0, 3)
												.map((tag: any) => (
													<div key={tag} className='px-2 py-1 rounded-md border block text-xs bg-cyan-100 italic'>
														{tag}
													</div>
												))
										: ''}
								</div>
								<h2 className='text-xl font-semibold'>{item.name}</h2>
								{item.seo !== null ? <p className='text-pretty'>{item.seo.metaDescription}</p> : ''}
								<div className=''>
									{item.tour_activities.length > 0 && (
										<div className='flex flex-col '>
											<h2>Activities: </h2>
											<ActivitySlider items={item.tour_activities} />
										</div>
									)}
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default AttractionsList;
