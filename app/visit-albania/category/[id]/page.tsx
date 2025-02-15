'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const CategoryPage = () => {
	const params = useParams();
	return <div>CategoryPage - {JSON.stringify(params)}</div>;
};

export default CategoryPage;
