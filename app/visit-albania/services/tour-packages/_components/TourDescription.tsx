import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Props = {
	desc: string;
	content: string | null;
};

const TourDescription = ({ desc, content }: Props) => {
	return (
		<div className='flex justify-start items-start w-full px-2 md:px-20 mt-4 md:mt-8'>
			<p className='w-full relative border-2 border-dashed text-pretty text-stone-700   rounded-2xl px-4 pt-6 pb-4 border-green-400 leading-6  text-sm md:text-base'>
				<span className='absolute -top-[18px] left-6 w-fit border border-green-400  rounded-2xl py-1 px-3 h-fit bg-green-100 text-base'>Description</span>
				{desc}{' '}
				<Dialog>
					{content && (
						<span className=''>
							<DialogTrigger className='text-base hover:text-blue-600 hover:font-bold animate-pulse text-blue-800'>...quick look</DialogTrigger>
						</span>
					)}
					<DialogContent>
						<DialogTitle>Quick Overview</DialogTitle>
						<DialogDescription
							className='w-full max-w-screen-lg p-6 overflow-y-auto max-h-[80vh]'
							dangerouslySetInnerHTML={{
								__html: `${content}`,
							}}
						></DialogDescription>
					</DialogContent>
				</Dialog>
			</p>
		</div>
	);
};

export default TourDescription;
