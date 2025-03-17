/* eslint-disable no-unused-vars */
'use client';

import ScreenError from '@/components/ScreenError';
import ScreenLoading from '@/components/ScreenLoading';
import { useGetAllPackages, useInfinitePackages } from '@/hooks/usePackages';
import { fetchAllPackagesInfinite } from '@/lib/query/tour-packages';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Button, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
		<div className='p-4 md:p-6 max-w-6xl flex flex-col justify-center items-center border mx-auto'>
			<div>{/* Tours header */}</div>
			<div>{/* Tour filters //TODO in future */}</div>

			<div className=' max-w-6xl flex flex-wrap gap-8'>
				{data.pages?.map((page) =>
					page.data.map((tour: any, idx: number) => {
						const publishDate = new Intl.DateTimeFormat('sq-AL', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric',
						}).format(new Date(tour.publishedAt));

						if (page.data.length - 1 == idx) {
							return (
								<Link
									href={`/visit-albania/services/tour-packages/${tour.slug}`}
									key={tour.id}
									className='flex flex-col gap-3 border rounded-2xl p-4 justify-center items-center'
									ref={ref}
								>
									<h1>{tour.title}</h1>
									{tour.cover && <Image src={tour.cover.url} alt='' width={330} height={220} />}
									<p className='max-w-md'>{tour.desc}</p>
									<div>{publishDate}</div>
								</Link>
							);
						}
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
					}),
				)}
			</div>
			{/* <Button ref={ref} disabled={!hasNextPage} loading={isFetchingNextPage} onClick={() => fetchNextPage()}></Button> */}
			{isFetchingNextPage && <Spin className='my-10' />}
		</div>
	);
};

export default TourPackagesPage;
