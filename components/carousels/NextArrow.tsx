import { ArrowRightCircle } from 'lucide-react';
import React from 'react';
import { CustomArrowProps } from 'react-slick';

const NextArrow = (props: CustomArrowProps) => {
	// todo add the classname props
	return (
		<div className='flex justify-center items-center   top-0 right-0'>
			<ArrowRightCircle className={props.className} onClick={props.onClick} />
		</div>
	);
};

export default NextArrow;
