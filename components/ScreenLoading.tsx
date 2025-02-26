import React from 'react';

type Props = { text?: string };

const ScreenLoading = ({ text = 'Loading...' }: Props) => {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin'></div>
				<p className='text-lg font-semibold text-gray-700 dark:text-gray-300'>{text}</p>
			</div>
		</div>
	);
};

export default ScreenLoading;
