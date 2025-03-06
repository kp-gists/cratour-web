'use client';

import { Geist, Geist_Mono, Satisfy } from 'next/font/google';
import './globals.css';
import 'react-day-picker/src/style.css';
import AllProviders from '@/lib/config/providers';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import GoogleAnalytics from '@/components/GA4';

const satisfy = Satisfy({
	variable: '--font-satisfy-mono',
	subsets: ['latin'],
	weight: '400',
});

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	useEffect(() => {
		NProgress.start(); // Fillo loading kur ndryshon rruga
		const timer = setTimeout(() => {
			NProgress.done(); // Mbyll loading pas 500ms (siguri për përmirësim UX)
		}, 500);

		return () => clearTimeout(timer);
	}, [pathname]);
	return (
		<html lang='en'>
			<head>
				<title>Cra Tour | Home</title>
				<meta
					name='description'
					content='Cratour crafts your visit to Albania, with services such as tour packages,transfers, medical tourism, rent a car, reservations,accommodation'
				></meta>
				<meta name='google-site-verification' content='D1nHMHh85FL0jJR0fPPAUxSNkNGX2bSUqKg0EODKeQc' />
				<GoogleAnalytics />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} `}>
				<AllProviders>{children}</AllProviders>
			</body>
		</html>
	);
}
