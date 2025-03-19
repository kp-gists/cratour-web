'use client';

import { useRouter } from 'next/navigation';
import { Divider, Select } from 'antd';
import { ArrowRight, Circle, List, SquareArrowDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { languages } from '@/constants/locales';
import Image from 'next/image';
import { business, links, logos } from '@/constants';
import { socials } from '@/constants/socials';

type Props = {
	isHome?: boolean;
};

const currentYear = new Date().getFullYear();

const { Option } = Select;

const Footer = ({}: Props) => {
	const router = useRouter();

	const handleChange = (value: string) => {
		const url = value === 'en' ? '/' : `/${value}`;
		router.push(url);
	};
	return (
		<div className='relative w-full  px-4 md:px-8 py-6 border-t-2 '>
			<div className='max-w-[1200px] mx-auto gap-1  w-full flex flex-col justify-center items-center'>
				<div className='flex flex-col md:gap-6 md:px-6 lg:flex-row justify-between items-center w-full'>
					<div className='w-[340px] md:w-full flex justify-center items-center flex-col md:items-start'>
						<Image src={logos.logoX} width={200} height={200} alt='' />
						<p className='text-sm'>{business.desc}</p>
					</div>
					<div className='flex px-4 my-6 md:px-8 w-full flex-col md:flex-row md:justify-start lg:justify-center items-start md:items-center gap-4 md:gap-6 lg:gap-10'>
						<div>
							<h2 className='font-sans font-semibold text-lg mb-2'>Services:</h2>
							<div className='pr-4 w-full md:w-full lg:w-[240px] '>
								{links.services.map((link) => (
									<Link className='text-base hover:font-semibold flex mb-1 flex-row gap-3 items-center group ' href={link.href} key={link.href}>
										<Circle className='w-3 h-3  mr-1 text-cyan-400 group-hover:bg-cyan-400 rounded-full' /> <div>{link.title}</div>{' '}
										<ArrowRight className='w-4 h-4 text-cyan-400 group-hover:ml-2' />
									</Link>
								))}
							</div>
						</div>

						<div>
							<h2 className='font-sans font-semibold text-lg mb-2'>About us:</h2>
							<div className='pr-4 w-full md:w-full lg:w-[320px]'>
								{links.aboutUs.map((link) => (
									<Link className='text-base mb-1 flex flex-row gap-1 items-center group hover:font-semibold ' href={link.href} key={link.href}>
										<Circle className='w-3 h-3 text-cyan-400 mr-1 group-hover:bg-cyan-400 rounded-full' /> <div>{link.title}</div>{' '}
										<ArrowRight className='w-4 h-4 text-cyan-400 group-hover:ml-2' />
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>

				<Divider className='bg-gray-400' />

				<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 w-full'>
					<div>
						<h2 className='font-sans font-semibold text-lg mb-2'>Our Socials:</h2>
						<div className='flex-wrap flex gap-3 md:flex-nowrap md:flex-row md:gap-3 justify-center items-center'>
							{socials.map((s) => (
								<Link href={s.url} className='flex justify-center items-center gap-2' key={s.url}>
									<Image src={s.icon} width={20} height={20} alt={s.displayName} />
									<p>{s.displayName}</p>
								</Link>
							))}
						</div>
					</div>

					<div>
						<h2 className='font-sans font-semibold text-lg mb-2'>Select Language:</h2>
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
				<div className='flex flex-col px-6 md:px-10 md:flex-row justify-between items-center gap-4 md:gap-8 w-full'>
					<div>
						<Link className='text-xs italic' target='_blank' href={'https://cratour.al/sitemap.xml'}>
							Sitemaps
						</Link>
					</div>

					<p className='italic text-xs'>
						<Link href={'https://cratour.al/'} target='_blank' className='text-blue-500 font-bold'>
							Cratour.al
						</Link>
						<span className='mx-2'>
							2008 - <span>{currentYear}</span>
						</span>
						All rights reserved.
					</p>

					<p className='italic text-xs'>
						<Link href={'https://www.codewithkoli.com/links'} target='_blank' className='text-blue-500 font-bold'>
							CWK - Dev Team
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
