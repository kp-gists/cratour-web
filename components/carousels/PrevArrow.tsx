import { ArrowLeftCircle } from 'lucide-react';
import React from 'react';
import { CustomArrowProps } from 'react-slick';

const PrevArrow = (props: CustomArrowProps) => {
	return (
		<div className='flex justify-center items-center p-1 absolute top-1/2 -left-6'>
			<ArrowLeftCircle className={props.className} onClick={props.onClick} />
		</div>
	);
};

export default PrevArrow;
