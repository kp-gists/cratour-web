'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const ExperiencesPage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams();
	return <div>ExperiencesPage - {JSON.stringify(params)}</div>;
};

export default ExperiencesPage;
