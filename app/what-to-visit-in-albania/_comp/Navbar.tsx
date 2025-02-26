'use client';

import React from 'react';
import SatisfyText from '@/components/ui/SatisfyText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { images } from '@/constants/images';
import HomeLink from '@/components/HomeLink';
import { whatTodoLinks } from '@/constants/whatToDo';
import { ListCheck } from 'lucide-react';

const NavbarService = () => {
	const path = usePathname();

	const current = path.split('what-to-visit-in-albania')[1].split('/')[1];

	return (
		<>
			<div className='hidden lg:block p-0 m-0 pt-4 md:pt-6 '>
				<nav className='mx-auto w-fit h-full bg-white  rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-cyan-200 flex flex-row shadow-xl justify-between items-center px-3 md:px-8 py-2 md:py-3  gap-6'>
					<HomeLink styles='p-2 hover:bg-cyan-200 rounded-full' />
					{whatTodoLinks.map((item) => (
						<Link href={`/what-to-visit-in-albania/${item.slug}`} key={item.id}>
							<SatisfyText as='h3' className={`text-stone-900  ${current == item.slug ? ' px-4 py-2 bg-cyan-300 rounded-full' : ' px-4 py-2 '}`}>
								{item.title}
							</SatisfyText>
						</Link>
					))}
				</nav>
			</div>

			<div className='block lg:hidden'>
				<Drawer>
					<DrawerTrigger className='fixed bottom-4 left-4 rounded-full p-1 ring z-[101] ring-cyan-600 bg-transparent'>
						<Image src={images.app} width={24} height={24} className='shadow-lg' alt='click the menu' />
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>CRA Tour</DrawerTitle>
							<DrawerDescription className='flex flex-col p-4 gap-4'>
								{whatTodoLinks.map((item) => (
									<Link href={`/what-to-visit-in-albania/${item.slug}`} key={item.id}>
										<SatisfyText
											as='h3'
											className={`text-stone-900 text-xl flex flex-row gap-3 md:gap-4 ${
												current == item.slug ? ' px-4 py-2 bg-cyan-300 rounded-full' : ' px-4 py-2 '
											}`}
										>
											<ListCheck width={36} height={36} className='pr-2' />
											{item.title}
										</SatisfyText>
									</Link>
								))}
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose className='w-full flex flex-row justify-center items-center gap-4'>
								<HomeLink styles='p-2 block hover:bg-cyan-200 rounded-full' />

								<Button variant='outline'>Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</>
	);
};

export default NavbarService;
