import React from 'react';
import { Rubik_Vinyl } from 'next/font/google';
import clsx from 'clsx';

const satisfy = Rubik_Vinyl({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
	weight: '400',
});

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	className?: string;
	children: React.ReactNode;
}

const RubikText: React.FC<TextProps> = ({ as: Component = 'p', className, children, ...props }) => {
	return (
		<Component className={clsx(satisfy.className, className)} {...props}>
			{children}
		</Component>
	);
};

export default RubikText;
