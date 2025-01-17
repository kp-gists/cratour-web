'use client';

import { useGetAllPackages } from '@/hooks/usePackages';
import React from 'react';

const TourPackagesPage = () => {
	const { isError, packages, isLoading } = useGetAllPackages();
	console.log('🚀 ~ TourPackagesPage ~ isError,packages,isLoading:', isError, packages, isLoading);

	return <div>TourPackagesPage</div>;
};

export default TourPackagesPage;
