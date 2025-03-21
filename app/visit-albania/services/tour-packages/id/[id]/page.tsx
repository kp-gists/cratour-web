'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import TourDetailsId from '../../_components/TourDetailsId';
import ScreenError from '@/components/ScreenError';

const TourIdPage = () => {
	const params = useParams();
	const id = params?.id;

	if (!id) return <ScreenError message='Tour not found!' buttonLabel='Back Tours' buttonLink='https://cratour.al/visit-albania/services/tour-packages' />;

	return <TourDetailsId id={id as string} />;
};

export default TourIdPage;
