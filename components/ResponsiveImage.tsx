/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
	formats: any;
	className?: string;
	noImg?: boolean;
};

const ResponsiveImage = ({ formats, className, noImg = false }: Props) => {
	if (noImg) {
		return (
			<img
				src={'/jpg/tirana-demo.jpg'} // Fallback
				alt='Blog Cover Image'
				className={className}
			/>
		);
	}
	return (
		<img
			src={formats?.large?.url || formats.small.url} // Fallback
			alt='Blog Cover Image'
			className={className}
			sizes='(max-width: 500px) 500px, (max-width: 750px) 750px, 1000px'
			srcSet={
				`
      ${formats.thumbnail?.url} 245w,
      ${formats.small?.url} 500w,
      ${formats.medium?.url} 750w,
      ${formats.large?.url} 1000w
  ` as string
			}
		/>
	);
};

export default ResponsiveImage;
