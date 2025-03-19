import AboutUs from '@/components/landing/AboutUs';
import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About us | Cratour History',
};

const AboutUsPage = () => {
	return (
		<div>
			<AboutUs />
		</div>
	);
};

export default AboutUsPage;
