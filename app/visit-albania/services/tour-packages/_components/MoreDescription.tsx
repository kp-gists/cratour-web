import React from 'react';

type Props = { content: string };

const MoreDescription = ({ content }: Props) => {
	if (!content) return;
	return (
		<div className='max-w-5xl px-4 py-6 my-6 md:my-10 relative'>
			<div className='px-5 py-2 absolute text-cyan-950 top-[6px] left-14 bg-cyan-200 rounded-xl'>More Description</div>
			<div
				className='px-6 py-10 border border-dashed border-cyan-400 rounded-xl'
				dangerouslySetInnerHTML={{
					__html: `${content}`,
				}}
			/>
		</div>
	);
};

export default MoreDescription;
