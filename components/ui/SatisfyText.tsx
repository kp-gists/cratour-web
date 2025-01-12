import React from 'react';
import { Satisfy } from 'next/font/google';
import clsx from 'clsx';

const satisfy = Satisfy({
	variable: '--font-satisfy-mono',
	subsets: ['latin'],
	weight: '400',
});

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	className?: string;
	children: React.ReactNode;
}

const SatisfyText: React.FC<TextProps> = ({ as: Component = 'p', className, children, ...props }) => {
	return (
		<Component className={clsx(satisfy.className, className)} {...props}>
			{children}
		</Component>
	);
};

export default SatisfyText;
