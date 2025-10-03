import GeneralNavbar from '@/components/GeneralNavbar';
import React from 'react';

export default function ContactLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='relative overflow-y-scroll'>
			<GeneralNavbar />
			<div className='w-full p-4'>{children}</div>
		</div>
	);
}
