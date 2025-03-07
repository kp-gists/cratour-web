/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
declare global {
	interface Window {
		dataLayer: any[];
	}
}
export default function GoogleAnalytics() {
	return (
		<>
			<Script id='' type='text/javascript'>
				{`var _iub = _iub || [];
_iub.csConfiguration = {"siteId":3953466,"cookiePolicyId":57630008,"lang":"en","storage":{"useSiteId":true}};`}
			</Script>
			<Script type='text/javascript' src='https://cs.iubenda.com/autoblocking/3953466.js'></Script>
			<Script type='text/javascript' src='//cdn.iubenda.com/cs/gpp/stub.js'></Script>
			<Script type='text/javascript' src='//cdn.iubenda.com/cs/iubenda_cs.js' charSet='UTF-8' async></Script>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy='afterInteractive' />
			<Script strategy='afterInteractive' id='google-analytics'>{`
				  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_TRACKING_ID}');
				`}</Script>
		</>
	);
}
