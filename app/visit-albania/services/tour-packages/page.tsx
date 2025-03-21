/* eslint-disable no-unused-vars */

import { Alert, Breadcrumb } from 'antd';
import { ArrowBigDown, FileX, HomeIcon, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import ToursList from './_components/ToursList';
import CraftTourDrawer from '@/components/drawers/CraftTourDrawer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tour Packages',
	description: 'Or Handpicked tour packages with cratour and can be modified and crafted and edited tours upon your needs',
};

const TourPackagesPage = () => {
	return (
		<div className='md:p-6 max-w-6xl flex flex-col justify-center items-center mx-auto'>
			{/* TODO h screen static elements
			 */}
			<div className='flex flex-col  gap-4 md:gap-8 w-full px-4 md:px-20 lg:px-40 mb-4'>
				<Breadcrumb
					items={[
						{
							href: '/',
							title: <HomeIcon width={20} height={20} />,
						},
						{
							href: '/visit-albania/services',
							title: (
								<div className='flex gap-2'>
									<SlidersHorizontal width={20} height={20} />
									<p>Services</p>
								</div>
							),
						},
						{
							title: 'Tour Packages',
						},
					]}
				/>

				<h1 className='text-3xl font-semibold'>Our Handpicked Tour Packages</h1>

				<Alert
					message='Informational Disclaimer'
					description="All of our tours are fully customizable. We tailor each experience to match your preferences. Let us know your requests, and we'll create your perfect itinerary!"
					type='info'
					showIcon
				/>

				<div className='pt-10 w-full flex-col items-center gap-4 flex justify-center'>
					<h2>Fill up the form to customize your own tour</h2>
					<ArrowBigDown className='animate-bounce' />
					<CraftTourDrawer />
				</div>
			</div>

			<div className='w-full  max-w-4xl  mx-auto h-0.5 bg-gray-200 rounded my-6 md:my-10' />

			<div>{/* Tours header */}</div>
			<div>{/* Tour filters //TODO in future */}</div>

			<ToursList />
		</div>
	);
};

export default TourPackagesPage;
