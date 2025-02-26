'use client';

import React from 'react';
import { useGetAllAttractions } from '@/hooks/useAttractions';

const AttractionsListPage = () => {
	const { attractions, isError, isLoading, error } = useGetAllAttractions({ page: 1, pageSize: 50 });
	console.log('🚀 ~ AttractionsPage ~ attractions,isError,isLoading:', attractions, isError, isLoading, error);
	return <div>AttracionsListPage</div>;
};

export default AttractionsListPage;
