'use client';

import { useEffect, useState } from 'react';

const useHash = () => {
	const [hash, setHash] = useState(() => window.location.hash.replace('#', ''));

	useEffect(() => {
		const handleHashChange = () => {
			setTimeout(() => {
				setHash(window.location.hash.replace('#', ''));
			}, 10); // Delay ensures hash updates properly
		};

		window.addEventListener('hashchange', handleHashChange);
		window.addEventListener('popstate', handleHashChange); // Handles browser back/forward

		// Cleanup listener on unmount
		return () => {
			window.removeEventListener('hashchange', handleHashChange);
			window.removeEventListener('popstate', handleHashChange);
		};
	}, []);

	return hash;
};

export default useHash;
