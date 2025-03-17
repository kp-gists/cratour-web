'use client';

import { useRouter } from 'next/navigation';
import { Divider, Select } from 'antd';
import { List, SquareArrowDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { languages } from '@/constants/locales';
import Image from 'next/image';

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

const { Option } = Select;

const Footer = ({}: Props) => {
	const router = useRouter();

	const handleChange = (value: string) => {
		const url = value === 'en' ? '/' : `/${value}`;
		router.push(url);
	};
	return (
		<div className='relative w-full  px-4 md:px-8 py-6 border-t-2 '>
			<div className='max-w-[1200px] mx-auto gap-1 w-full flex flex-col justify-center items-center'>
				<div className='flex flex-row justify-between items-center w-full'>
					<div>
						logo cratour
						<div className='icon w-10 h-10 rounded-sm bg-red-200' />
					</div>
					<div className='flex flex-col justify-center items-center gap-3'>
						{links.map((link) => (
							<Link className='text-lg block' href={link.href} key={link.id}>
								{link.title}
							</Link>
						))}
					</div>
				</div>

				<Divider className='bg-gray-400' />

				<div className='flex justify-between items-center gap-4 md:gap-8'>
					<div>
						Follow us:{' '}
						<div>
							<SquareArrowDown />
							<SquareArrowDown />
						</div>
					</div>

					<div>currencies list</div>

					<div>
						{/* other languages switcher */}
						<Select defaultValue='en' style={{ width: 200 }} onChange={handleChange}>
							{languages.map(({ id, slug, flag }) => (
								<Option key={id} value={id}>
									<div className='flex justify-start gap-2 items-center'>
										<Image src={flag} alt={slug} width={20} height={20} />
										<p className='capitalize'>{slug}</p>
									</div>
								</Option>
							))}
						</Select>
					</div>
				</div>
				<Divider className='bg-gray-400' />
			</div>
		</div>
	);
};

export default Footer;
