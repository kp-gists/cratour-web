import { Metadata } from 'next';
import React from 'react';
import AttractionsList from './_comp/AttractionsList';

// TODO add seo
export const metadata: Metadata = {
	title: 'Attractions | Visit Albania',
	description: 'What to do in albania, what to visit in albania, explore albania, all attractions in albania',
};
const AttractionsPage = () => {
	return <AttractionsList />;
};

export default AttractionsPage;
