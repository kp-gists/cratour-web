import React from 'react';

type Props = {
	text?: string;
};

const Loading = ({ text }: Props) => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin'></div>
			{text && <p className='text-lg font-semibold text-gray-700 dark:text-gray-300'>{text}</p>}
		</div>
	);
};

export default Loading;
