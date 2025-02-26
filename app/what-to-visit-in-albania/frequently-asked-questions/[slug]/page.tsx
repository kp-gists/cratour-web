'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const FaqPage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams();
	return <div>FaqPage - {JSON.stringify(params)}</div>;
};

export default FaqPage;
