'use client';

import { useGetAllCities } from '@/hooks/useCities';
import React, { useState } from 'react';

const CitiesPage = () => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(20);

	const [sort, setSort] = useState<'asc' | 'desc'>('asc');

	// TODO cities page
	const { cities, isError, isLoading } = useGetAllCities({ page, pageSize, sort });
	console.log('🚀 ~ CitiesPage ~ cities,isError,isLoading:', cities, isError, isLoading);

	return <div>CitiesPage</div>;
};

export default CitiesPage;
