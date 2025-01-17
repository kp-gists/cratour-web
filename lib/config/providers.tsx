import React from 'react';
import ReactQueryClientProvider from './ReactQueryClientProvider';

type Props = {
	children: React.ReactNode;
};

function AllProviders({ children }: Props) {
	return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
}

export default AllProviders;
