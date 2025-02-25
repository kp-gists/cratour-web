import { List } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
	isHome?: boolean;
};

const links = [
	{
		id: 'links',
		href: '/links',
		icon: <List />,
		title: 'Links',
	},
];

const Footer = ({ isHome = false }: Props) => {
	return (
		<div className='relative w-full  px-4 py-6 border-t-2'>
			<div className='flex justify-around items-center gap-4 md:gap-8'>
				<div className='icon w-10 h-10 rounded-sm bg-red-200' />
				<div className='flex flex-col justify-center items-center gap-3'>
					{links.map((link) => (
						<Link className='text-lg block' href={link.href} key={link.id}>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
