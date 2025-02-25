'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const TourActivities = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams();
	return <div>TourActivities - {JSON.stringify(params)}</div>;
};

export default TourActivities;
