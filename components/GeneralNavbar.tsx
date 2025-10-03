import React from 'react';
import HomeLink from './HomeLink';
import Link from 'next/link';
import { Briefcase, Compass } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { images } from '@/constants/images';
import Image from 'next/image';
const GeneralNavbar = () => {
	return (
		<>
			<div className='hidden lg:block p-0 m-0 pt-4 md:pt-6 '>
				<nav className='mx-auto w-fit h-full bg-white  rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-cyan-200 flex flex-row shadow-xl justify-between items-center px-3 md:px-8 py-2 md:py-3  gap-6'>
					<HomeLink styles='p-2 hover:bg-cyan-200 rounded-full' />

					<Link href='/what-to-visit-in-albania' className='group flex flex-row justify-center items-center gap-0' title='What to visit in Albania'>
						<div className='p-2 group-hover:bg-cyan-200 rounded-full flex flex-col items-center gap-0'>
							<Compass size={28} className='text-cyan-700' />
						</div>
						<p className='text-muted-foreground'>Navigate</p>
					</Link>

					<Link href='/visit-albania/services' className='group flex flex-row justify-center items-center gap-0' title='CRA Tour Services'>
						<div className='p-2 hover:bg-cyan-200 rounded-full flex items-center gap-2'>
							<Briefcase size={28} className='text-stone-700' />
						</div>
						<p className='text-muted-foreground'>Services</p>
					</Link>
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
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose className='w-full flex flex-row justify-center items-center gap-4'>
								<HomeLink styles='p-2 block hover:bg-cyan-200 rounded-full' />
								<Link href='/what-to-visit-in-albania' className='p-2 hover:bg-cyan-200 rounded-full flex items-center gap-2' title='What to visit in Albania'>
									<Compass size={28} className='text-cyan-700' />
								</Link>
								<Link href='/visit-albania/services' className='p-2 hover:bg-cyan-200 rounded-full flex items-center gap-2' title='CRA Tour Services'>
									<Briefcase size={28} className='text-cyan-700' />
								</Link>
								<Button variant='outline'>Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</>
	);
};

export default GeneralNavbar;
