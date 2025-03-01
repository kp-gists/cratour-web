/* eslint-disable no-unused-vars */
'use client';

import { useGetTourPackage } from '@/hooks/usePackages';
import React from 'react';
import TourHero from './TourHero';
import TourDescription from './TourDescription';
import TourDetails from './TourDetails';
import TourAttractions from './TourAttractions';
import MapItinerary from './MapItinerary';
import Highlights from './Highlights';
import Timeline from './Timeline';
import MoreDescription from './MoreDescription';
import Gallery from '@/components/Gallery';
import ScreenLoading from '@/components/ScreenLoading';
import ScreenErrorItem from '@/components/ScreenErrorItem';
import ScreenError from '@/components/ScreenError';
import { useParams } from 'next/navigation';

const TourDetailsPage = () => {
	const params = useParams();
	const slug = params?.slug;

	const { tourPackage, isErrorTour, loadingTour } = useGetTourPackage(slug as string);

	if (loadingTour) return <ScreenLoading text='Loading Tour Package details...' />;
	if (!tourPackage) return <ScreenLoading text='Loading Tour Package details...' />;
	if (isErrorTour) return <ScreenError />;

	if (!tourPackage && !loadingTour && !isErrorTour)
		return <ScreenErrorItem buttonLabel='All Tours' buttonLink='/visit-albania/services/tour-packages' message='Tour not found!' />;

	const {
		categories,
		cover,
		title,
		totalDays,
		subtitle,
		desc,
		age,
		attractions,
		content,
		customerPhotos,
		gallery,
		groupSize,
		highlights,
		isFeatured,
		itinerary,
		routes,
	} = tourPackage;

	return (
		<>
			<div className='p-2 md:p-6 max-w-6xl flex flex-col justify-center items-center  mx-auto pb-10 gap-5'>
				<TourHero categories={categories} title={title} cover={cover} days={totalDays} subtitle={subtitle} />

				<TourDescription desc={desc} content={content} />
				<TourDetails age={age} group={groupSize} />
				<TourAttractions attractions={attractions} />
				<MapItinerary items={itinerary} title={title} />
				<Highlights highlights={highlights} />
				<Timeline routes={routes} />
				<MoreDescription content={content} />
				{/* <WhatsIncluded /> */}
				<Gallery gallery={gallery} title='Tour Gallery Photos: ' />
				<Gallery gallery={customerPhotos} title='Photos From Our Customers: ' />
			</div>
		</>
	);
};

export default TourDetailsPage;
