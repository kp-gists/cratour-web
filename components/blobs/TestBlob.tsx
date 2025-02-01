import React from 'react';

const TestBlob = () => {
	return (
		<div className='relative w-96 h-96 bg-white overflow-hidden'>
			<div className='absolute w-72 h-72 bg-green-700 rounded-full blur-2xl opacity-50 top-10 left-10'></div>

			<div className='relative z-10 flex items-center justify-center h-full'>
				<h1 className='text-4xl font-bold text-gray-800'>Green Blob Background</h1>
			</div>
		</div>
	);
};

export default TestBlob;
