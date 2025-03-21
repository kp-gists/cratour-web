import ScreenError from '@/components/ScreenError';
import ScreenErrorItem from '@/components/ScreenErrorItem';
import ScreenLoading from '@/components/ScreenLoading';
import { useGetTourPackageById } from '@/hooks/usePackages';
import React from 'react';
import TourHero from './TourHero';
import TourDescription from './TourDescription';
import TourDetails from './TourDetails';
import TourAttractions from './TourAttractions';
import Highlights from './Highlights';
import Timeline from './Timeline';
import MoreDescription from './MoreDescription';
import Gallery from '@/components/Gallery';

type Props = {
	id: string;
};

const TourDetailsId = ({ id }: Props) => {
	const { isErrorTour, loadingTour, tourPackage } = useGetTourPackageById(id);
	if (loadingTour || !tourPackage) return <ScreenLoading text='Loading Tour Package details...' />;
	if (isErrorTour) return <ScreenError />;

	const { categories, cover, title, totalDays, subtitle, desc, age, attractions, content, customerPhotos, gallery, groupSize, highlights, isFeatured, routes } =
		tourPackage;

	return (
		<div className='p-2 md:p-6 overflow-hidden max-w-6xl flex flex-col justify-center items-center  mx-auto pb-10 gap-5'>
			<TourHero categories={categories} title={title} cover={cover} days={totalDays} subtitle={subtitle} />

			<TourDescription desc={desc} content={content} />
			<TourDetails age={age} group={groupSize} />
			<TourAttractions attractions={attractions} />
			{/* <MapItinerary items={itenerary} title={title} /> */}
			<Highlights highlights={highlights} />
			<Timeline routes={routes} />
			<MoreDescription content={content} />
			{/* <WhatsIncluded /> */}
			<Gallery gallery={gallery} title='Tour Gallery Photos: ' />
			<Gallery gallery={customerPhotos} title='Photos From Our Customers: ' />
		</div>
	);
};

export default TourDetailsId;
