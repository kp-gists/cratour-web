import type { Metadata } from 'next';
import { Geist, Geist_Mono, Satisfy } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
	title: 'CRA Tour | Visit Albania',
	description: 'Craft your visit to albania with cra tour with our services like tour packages, city transfers, medical tourism and renting a car or hotel',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} antialiased`}>{children}</body>
		</html>
	);
}
