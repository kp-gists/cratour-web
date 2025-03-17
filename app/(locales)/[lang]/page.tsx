'use client';

import CitiesLayout from '@/components/landing/CitiesLayout';
import ContactUs from '@/components/landing/ContactUs';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import TravelLayout from '@/components/landing/TravelLayout';
import { langs } from '@/constants/locales';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const DynamicLanguagePage = () => {
	const { lang } = useParams();
	const router = useRouter();

	useEffect(() => {
		// Check if the lang is supported
		if (!langs.includes(lang as string)) {
			// Redirect to a 404 page or another route
			router.push('/not-found'); // Redirect to a 404 page or another route as needed
		}
	}, [lang, router]);

	// TODO add the languages to each component

	return (
		<div className='w-full flex justify-center items-center  flex-col pb-10  h-full overflow-y-scroll '>
			{/* TODO landing */}
			<h1>lang :{lang}</h1>

			{/* HERO section */}
			<Hero />

			<Services />

			<TravelLayout />

			{/* City layout */}
			<CitiesLayout />

			{/* Tours Layout simple descriptions with ctas */}

			{/* Travel features things to do on a tour */}

			<ContactUs />
		</div>
	);
};

export default DynamicLanguagePage;
