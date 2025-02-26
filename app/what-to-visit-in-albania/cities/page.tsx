'use client';

import { useGetAllCities } from '@/hooks/useCities';
import React from 'react';

const CitiesPage = () => {
	// TODO cities page
	const { cities, isError, isLoading } = useGetAllCities();
	console.log('🚀 ~ CitiesPage ~ cities,isError,isLoading:', cities, isError, isLoading);

	return <div>CitiesPage</div>;
};

export default CitiesPage;
