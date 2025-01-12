import React from 'react';

const RBAlb = ({ hasN = false }: { hasN?: boolean }) => {
	return (
		<span>
			<b className='text-red-600'>A</b>
			<b className='text-black'>l</b>
			<b className='text-red-600'>b</b>
			<b className='text-black'>a</b>
			<b className='text-red-600'>n</b>
			<b className='text-black'>i</b>
			<b className='text-red-600'>a</b>
			{hasN && <b className='text-black'>n</b>}
		</span>
	);
};

export default RBAlb;
