/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Gallery from '@/components/Gallery';
import Loading from '@/components/Loading';
import ScreenError from '@/components/ScreenError';
import ScreenLoading from '@/components/ScreenLoading';
import { useGetAttraction } from '@/hooks/useAttractions';
import { fetchToursByAttractionSlug } from '@/lib/query/attractions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AttractionDetailsPage = ({ slug }: { slug: string }) => {
	const { attraction, isLoadingAttraction, isErrorAttraction, errorAttraction } = useGetAttraction(slug as string);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['qk_attraction_tours', slug],
		queryFn: () => fetchToursByAttractionSlug(slug),
	});

	if (isErrorAttraction) {
		console.log('🚀 ~ AttractionPage ~ isErrorAttraction:', errorAttraction);
		return <ScreenError buttonLabel='All Attractions' buttonLink='/visit-albania/attractions' />;
	}

	if (isLoadingAttraction) {
		return <ScreenLoading text='Loading Attraction...' />;
	}

	const {
		name,
		publishedAt,
		content,
		tags,
		gallery,
		isSuggested,
		cover: { url, width, height },
	} = attraction;

	const published = new Date(publishedAt).toLocaleDateString('en', {
		month: 'long',
		day: '2-digit',
		year: 'numeric',
	});

	return (
		<div className='p-2 md:p-6 max-w-6xl flex flex-col justify-center items-center  mx-auto pb-10 gap-5'>
			<div className='flex flex-col justify-start items-start gap-6 px-0 md:px-10'>
				<h1 className='text-2xl md:text-3xl font-bold'>{name}</h1>
				<div className='flex flex-row gap-6 items-center'>
					{!isSuggested ? (
						<div className='flex-row flex gap-2 items-center'>
							<Image src='/png/suggest.png' width={24} height={24} alt='is suggested attraction' />
							<h5 className='text-lg font-serif bg-cover'>This attraction is suggested by us!</h5>
						</div>
					) : (
						''
					)}
					<div className='bg-gray-600 w-1.5 rounded-full h-1.5' />
					<p>{published}</p>
				</div>
				<div>
					<div className='w-full  lg:w-[915px] h-[260px] lg:h-[515px] relative overflow-hidden rounded-3xl shadow flex justify-center items-center'>
						<Image src={url} alt='' width={width} height={height} className='bg-cover' />
					</div>
				</div>
				<div className='flex flex-wrap gap-3 pl-6 pr-0 md:pr-40'>
					{tags.length > 0 &&
						tags.split(' ').map((tag: string) => (
							<div key={tag} className='border rounded-md px-2 py-1 bg-gray-100 text-stone-800 italic text-sm'>
								{tag}
							</div>
						))}
				</div>

				<div className='relative my-10 md:my-12 border-2 border-dashed border-cyan-400 px-6 py-10 rounded-xl'>
					<div className='absolute -top-5 left-10 rounded-lg border border-cyan-500 bg-cyan-100 px-3 py-2'>Attraction Description</div>
					<div
						className=''
						dangerouslySetInnerHTML={{
							__html: `${content}`,
						}}
					/>
				</div>

				<div className='my-12 md:my-16'>
					<Gallery gallery={gallery} title='Attraction Photos: ' />
				</div>

				{isLoading && !isError && <Loading />}
				{!isLoading && isError && ''}
				<div className='flex flex-col gap-4'>
					<h1 className='text-3xl font-semibold'>Related Tours for this Attraction:</h1>
					<div className='flex flex-col items-center gap-8 max-w-5xl'>
						{!isLoading &&
							!isError &&
							data.length > 0 &&
							data.map((tour: any) => (
								<Link
									href={`/visit-albania/services/tour-packages/${tour.slug}`}
									key={tour.id}
									className='flex flex-row gap-6 items-center px-4 py-2 border-2 border-dashed border-cyan-400 rounded-xl'
								>
									<Image src={tour.cover.url ? tour.cover.url : '/png/frame1.png'} width={300} height={260} alt='aasd' className='rounded-xl' />

									<div className='flex-col gap-3'>
										<h1 className='text-xl font-semibold'>{tour.title}</h1>

										<p className='text-pretty text-base'>{tour.desc}</p>
									</div>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AttractionDetailsPage;
