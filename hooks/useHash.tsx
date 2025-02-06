'use client';

import { useEffect, useState } from 'react';

const useHash = () => {
	const [hash, setHash] = useState('');

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const handleHashChange = () => {
			setTimeout(() => {
				if (window !== undefined) {
					setHash(window.location.hash.replace('#', ''));
				}
			}, 10); // Delay ensures hash updates properly
		};

		if (window !== undefined) {
			window.addEventListener('hashchange', handleHashChange);
			window.addEventListener('popstate', handleHashChange);
		}
		// Handles browser back/forward

		// Cleanup listener on unmount
		return () => {
			if (window !== undefined) {
				window.removeEventListener('hashchange', handleHashChange);
				window.removeEventListener('popstate', handleHashChange);
			}
		};
	}, []);

	return hash;
};

export default useHash;
