'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const TransferServicePage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams();
	return <div>TransferServicePage - {JSON.stringify(params)}</div>;
};

export default TransferServicePage;
