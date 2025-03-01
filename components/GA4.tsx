/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Script from 'next/script';
import { useEffect } from 'react';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
declare global {
	interface Window {
		dataLayer: any[];
	}
}
export default function GoogleAnalytics() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.dataLayer = window.dataLayer || [];
			function gtag(...args: any[]) {
				window.dataLayer.push(args);
			}
			gtag('js', new Date());
			gtag('config', GA_TRACKING_ID);
		}
	}, []);

	return <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />;
}
