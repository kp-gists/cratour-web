'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const CityPage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams();
	return <div>CityPage - {JSON.stringify(params)}</div>;
};

export default CityPage;
