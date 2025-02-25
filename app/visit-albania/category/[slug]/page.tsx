'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const CategoryPage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams();
	return <div>CategoryPage - {JSON.stringify(params)}</div>;
};

export default CategoryPage;
