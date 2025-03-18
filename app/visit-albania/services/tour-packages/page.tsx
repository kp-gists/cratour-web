/* eslint-disable no-unused-vars */
'use client';

import ScreenError from '@/components/ScreenError';
import ScreenLoading from '@/components/ScreenLoading';
import { fetchAllPackagesInfinite } from '@/lib/query/tour-packages';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import TourCard from './_components/TourCard';

const TourPackagesPage = () => {
	const [page, setPage] = useState<number>(1);
	const [sort, setSort] = useState<'asc' | 'desc'>('desc');
	const [pageSize, setPageSize] = useState<number>(10);

	const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['qk_packages_infinite'],
		queryFn: (props: any) => fetchAllPackagesInfinite({ ...props, sort }),
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = lastPage.data.length ? allPages.length + 1 : undefined;
			return nextPage;
		},
		initialPageParam: 1,
	});

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, fetchNextPage]);

	if (status === 'pending') return <ScreenLoading text='Loading Tour Packages' />;

	if (status === 'error') return <ScreenError />;

	return (
		<div className='md:p-6 max-w-6xl flex flex-col justify-center items-center mx-auto'>
			<div>{/* Tours header */}</div>
			<div>{/* Tour filters //TODO in future */}</div>

			<div className=' max-w-6xl flex flex-wrap gap-8'>
				{data.pages?.map((page) =>
					page.data.map((tour: any, idx: number) => {
						if (page.data.length - 1 == idx) {
							return <TourCard key={tour.slug} ref={ref} tour={tour} />;
						}
						return <TourCard key={tour.slug} tour={tour} />;
					}),
				)}
			</div>

			{isFetchingNextPage && <Spin className='my-10' />}
		</div>
	);
};

export default TourPackagesPage;
