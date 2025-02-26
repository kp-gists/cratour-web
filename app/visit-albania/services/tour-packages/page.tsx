/* eslint-disable no-unused-vars */
'use client';

import ScreenError from '@/components/ScreenError';
import ScreenLoading from '@/components/ScreenLoading';
import { useGetAllPackages } from '@/hooks/usePackages';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const TourPackagesPage = () => {
	const [page, setPage] = useState<number>(1);
	const [sort, setSort] = useState<'asc' | 'desc'>('desc');
	const [pageSize, setPageSize] = useState<number>(25);

	// TODO filters & pagination
	const { isLoadingTours, isErrorTour, tours, errorTour, refetchTours } = useGetAllPackages({ page, pageSize });

	if (isLoadingTours) return <ScreenLoading text='Loading Tour Packages' />;

	if (isErrorTour) return <ScreenError />;

	return (
		<div className='p-4 md:p-6 max-w-6xl flex flex-col justify-center items-center border mx-auto'>
			<div>{/* Tours header */}</div>
			<div>{/* Tour filters //TODO in future */}</div>

			<div className=' max-w-6xl flex flex-wrap gap-8'>
				{tours?.data.map((tour) => {
					const publishDate = new Intl.DateTimeFormat('sq-AL', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
					}).format(new Date(tour.publishedAt));
					return (
						<Link
							href={`/visit-albania/services/tour-packages/${tour.slug}`}
							key={tour.id}
							className='flex flex-col gap-3 border rounded-2xl p-4 justify-center items-center'
						>
							<h1>{tour.title}</h1>
							{tour.cover && <Image src={tour.cover.url} alt='' width={330} height={220} />}
							<p className='max-w-md'>{tour.desc}</p>
							<div>{publishDate}</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default TourPackagesPage;
