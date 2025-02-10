import React from 'react';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';

const roboto = Roboto({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
});

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	className?: string;
	children: React.ReactNode;
}

const RobotoText: React.FC<TextProps> = ({ as: Component = 'p', className, children, ...props }) => {
	return (
		<Component className={clsx(roboto.className, className)} {...props}>
			{children}
		</Component>
	);
};

export default RobotoText;
