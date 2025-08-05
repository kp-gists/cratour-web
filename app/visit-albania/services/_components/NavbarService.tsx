'use client'

import React from 'react'
import SatisfyText from '@/components/ui/SatisfyText'
import { services } from '@/constants/services'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { images } from '@/constants/images'
import HomeLink from '@/components/HomeLink'
import { Compass } from 'lucide-react'

const NavbarService = () => {
	const path = usePathname()

	const currentService = path.split('services')[1].split('/')[1]

	return (
		<>
			<div className='hidden lg:block p-0 m-0 pt-4 md:pt-6 '>
				<nav className='mx-auto w-fit h-full bg-white  rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-cyan-200 flex flex-row shadow-xl justify-between items-center px-3 md:px-8 py-2 md:py-3  gap-6'>
					<HomeLink styles='p-2 hover:bg-cyan-200 rounded-full' />

					<Link href='/what-to-visit-in-albania' className='p-2 hover:bg-cyan-200 rounded-full flex items-center gap-2' title='Visit Albania'>
						<Compass size={28} className='text-cyan-700' />
					</Link>
					{services.english
						.filter((s) => !s.hideService)
						.map((service) => (
							<Link href={`/visit-albania/services/${service.slug}`} key={service.id}>
								<SatisfyText as='h3' className={`text-stone-900  ${currentService == service.slug ? ' px-4 py-2 bg-cyan-300 rounded-full' : ' px-4 py-2 '}`}>
									{service.title}
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
								{services.english.map((service) => (
									<Link href={`/visit-albania/services/${service.slug}`} key={service.id}>
										<SatisfyText
											as='h3'
											className={`text-stone-900 text-xl flex flex-row gap-3 md:gap-4 ${
												currentService == service.slug ? ' px-4 py-2 bg-cyan-300 rounded-full' : ' px-4 py-2 '
											}`}
										>
											<Image src={service.icon} width={36} height={36} alt='icon menu' className='pr-2' /> {service.title}
										</SatisfyText>
									</Link>
								))}
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose className='w-full flex flex-row justify-center items-center gap-4'>
								<HomeLink styles='p-2 block hover:bg-cyan-200 rounded-full' />
								<Link href='/what-to-visit-in-albania' className='p-2 hover:bg-cyan-200 rounded-full flex items-center gap-2' title='Visit Albania'>
									<Compass size={28} className='text-cyan-700' />
								</Link>

								<Button variant='outline'>Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</>
	)
}

export default NavbarService
