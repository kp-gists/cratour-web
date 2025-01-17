'use client';

import { useGetAllAttractions } from '@/hooks/useAttractions';
import React from 'react';

const AttractionsPage = () => {
	const { attractions, isError, isLoading, error } = useGetAllAttractions();
	console.log('🚀 ~ AttractionsPage ~ error:', error);
	console.log('🚀 ~ AttractionsPage ~ attractions,isError,isLoading:', attractions, isError, isLoading);

	return <div>AttractionsPage</div>;
};

export default AttractionsPage;
