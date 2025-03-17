import { ArrowRightCircle } from 'lucide-react';
import React from 'react';
import { CustomArrowProps } from 'react-slick';

const NextArrow = (props: CustomArrowProps) => {
	console.log('🚀 ~ NextArrow ~ props:', props);
	// todo add the classname props
	return (
		<div className='flex justify-center items-center p-1 absolute top-1/2 -right-6'>
			<ArrowRightCircle className={props.className} onClick={props.onClick} />
		</div>
	);
};

export default NextArrow;
