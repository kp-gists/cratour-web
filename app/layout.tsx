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
import '@ant-design/v5-patch-for-react-19';
import Footer from '@/components/Footer';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
		NProgress.start();
		const timer = setTimeout(() => {
			NProgress.done();
		}, 500);

		return () => clearTimeout(timer);
	}, [pathname]);
	return (
		<html lang='en'>
			<head>
				<meta name='google-site-verification' content='D1nHMHh85FL0jJR0fPPAUxSNkNGX2bSUqKg0EODKeQc' />
				<GoogleAnalytics />
				<link rel='stylesheet' type='text/css' charSet='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} `}>
				<ApolloProvider client={client}>
					<AllProviders>
						{children}

						<Footer />
					</AllProviders>
				</ApolloProvider>
			</body>
		</html>
	);
}
