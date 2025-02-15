'use client';

import { useGetTourPackage } from '@/hooks/usePackages';
import React from 'react';
import TourHero from '../_components/TourHero';
import TourDescription from '../_components/TourDescription';
import { useParams } from 'next/navigation';
import TourDetails from '../_components/TourDetails';
import TourAttractions from '../_components/TourAttractions';
import MapItinerary from '../_components/MapItinerary';
import Highlights from '../_components/Highlights';

const TourPackagesPage = () => {
	const { id } = useParams();
	const { tourPackage, errorTour, loadingTour } = useGetTourPackage(id as string);
	console.log('🚀 ~ TourPackagesPage ~ tourPackage,errorTour:', tourPackage, errorTour);

	if (loadingTour) return <div>loading...</div>;

	// TODO better
	if (!tourPackage) return <div>tour not found</div>;

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
	} = tourPackage.data;
	console.log('🚀 ~ TourPackagesPage ~ title:', title);

	return (
		<div className='p-2 md:p-6 max-w-6xl flex flex-col justify-center items-center  mx-auto pb-10 gap-5'>
			<TourHero categories={categories} title={title} cover={cover} days={totalDays} subtitle={subtitle} />

			<TourDescription desc={desc} content={content} />
			<TourDetails age={age} group={groupSize} />
			<TourAttractions attractions={attractions} />
			<MapItinerary items={itinerary} title={title} />
			<Highlights highlights={highlights} />
			{/* <Itinerary /> */}
			{/* <MoreDescription /> */}
			{/* <WhatsIncluded /> */}
			{/* <Gallery /> */}
			{/* <CustomerGallery /> */}
		</div>
	);
};

export default TourPackagesPage;
