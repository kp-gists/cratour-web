'use client';

import TransferForm from '@/components/TransferForm';
import SatisfyText from '@/components/ui/SatisfyText';
import { contacts } from '@/constants/contacts';
import { images } from '@/constants/images';
import useHash from '@/hooks/useHash';
import { createWhatsappHref } from '@/lib/whatsapp';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Road from '../_components/Road';
import ChooseUsTransfer from '../_components/ChooseUsTransfer';

const TransferServicePage = () => {
	const hash = useHash();

	useEffect(() => {}, [hash]);

	const handleClick = (contenthash: string) => {
		if (window !== undefined) {
			window.location.hash = contenthash;
		}
	};

	return (
		<div className='max-w-5xl mx-auto px-4 flex flex-col gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-8 pb-10 scroll-smooth'>
			{/* intro image */}
			{/* About this activity */}
			<ChooseUsTransfer />

			<div id='cta-transfers my-6 md:my-10'>
				<h2 className='mb-4 font-extrabold text-lg md:text-3xl text-gray-600 text-center'>Schedule Now!</h2>

				<p className='text-center text-base md:text-lg'>Choose the method to connect with:</p>

				<div className='flex flex-col md:flex-row justify-center items-center my-6 gap-4 md:gap-6'>
					<Link
						href={contacts.tel.href}
						target='_blank'
						className='flex justify-center items-center w-full md:w-[260px] gap-2 md:gap-4 px-4 py-1 border rounded-xl border-cyan-600 bg-cyan-600 text-white h-16 hover:scale-105 hover:-translate-y-1'
					>
						<div className='bg-white p-1 rounded-full flex justify-center items-center w-10 h-10'>
							<Image src={contacts.tel.icon} width={28} height={28} alt={`call us on phone, tel: ${contacts.tel.href}`} />
						</div>
						<strong className='text-xl md:text-2xl'>{contacts.tel.title}</strong>
					</Link>

					<Link
						href={createWhatsappHref(contacts.whatsapp.telNr, contacts.whatsapp.textService)}
						className='flex justify-center items-center w-full md:w-[360px] gap-2 md:gap-4 px-4 py-1 border rounded-xl border-green-600 bg-green-100 text-black h-16 hover:bg-green-300 group'
					>
						<Image
							src={contacts.whatsapp.icon}
							width={32}
							height={32}
							className='group-hover:border-4 group-hover:border-white rounded-full'
							alt={`chat us on whatsapp, tel: ${contacts.whatsapp.icon}`}
						/>
						<strong className='text-xl md:text-2xl'>{contacts.whatsapp.title}</strong>
					</Link>
					<Link
						href={`#pickup`}
						className='flex justify-center items-center w-full md:w-[260px] gap-2 md:gap-4 px-4 py-1  border-2 rounded-xl 0 text-black h-16 bg-cyan-50 hover:bg-cyan-200'
					>
						<Image src={images.message} width={28} height={28} alt={`call us on phone, tel: ${contacts.tel.href}`} />
						<strong className='text-xl md:text-2xl'>e-mail us!</strong>
					</Link>
				</div>
			</div>

			<div className='flex flex-col items-center  relative  w-full h-full overflow-hidden my-10 '>
				<h3 className='text-center font-semibold text-xl md:text-2xl md:w-[570px] mb-4'>
					Follow the instructions to request the details of any transfers you are planning:
				</h3>
				{/* 1 */}
				<Link href='#pickup' onClick={() => handleClick('pickup')}>
					<Image src={images.transfer1} width={750} height={600} className='rounded-lg' alt='ads' />
				</Link>

				{/* 2 */}
				<Link href='#cartype' onClick={() => handleClick('cartype')}>
					<Image src={images.transfer2} width={750} height={600} className='rounded-lg' alt='ads' />
				</Link>

				{/* 3 */}
				<Link href='#extra' onClick={() => handleClick('extra')} className='flex flex-col justify-start items-center w-full h-[835px] relative my-10 '>
					<Image src={images.transfer30} width={750} height={435} className='rounded-lg' alt='ads' />

					<div className='relative h-[400px] w-full'>
						<Image src={images.message} width={64} height={64} className='absolute top-8 left-[40%] rounded-lg' alt='ads' />
						<Image src={images.languages} width={64} height={64} className='absolute top-8 right-1/3 rounded-lg' alt='ads' />
						<p className='text-blue-500 text-lg p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Extra Details</p>
						<Image src={images.people} width={64} height={64} className='absolute top-[40%] left-[28%] rounded-lg' alt='ads' />
						<Image src={images.suitcase} width={64} height={64} className='absolute  top-[40%] right-1/4  rounded-lg' alt='ads' />
						<Image src={images.note} width={64} height={64} className='absolute bottom-8 left-1/2 rounded-lg' alt='ads' />
					</div>
				</Link>

				{/* 4 */}
				<Link
					href='#newEmail'
					onClick={() => handleClick('newEmail')}
					className='flex flex-col md:flex-row justify-around gap-4 items-center  bg-blue-50/20 w-[750px]'
				>
					<div className='flex flex-col items-center md:flex-row gap-2 relative w-'>
						<div className='w-14 h-14 relative'>
							<div className='w-14 h-14 rounded-full absolute top-0 left-0 z-10 bg-blue-300' />
							<div className='w-11 h-11 rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-500' />
							<p className='text-center text-xl rounded-full text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>4</p>
						</div>
						<p className='w-[300px] text-center'>Your will receive an email with the requested price and details </p>
					</div>
					<Image src={images.newMessage} width={300} height={300} className='rounded-lg' alt='ads' />
				</Link>

				<Image src={images.transfer3} width={750} height={600} className='rounded-lg z-10' alt='ads' />

				<Road />
			</div>

			<div className='w-full mx-auto flex justify-center items-center flex-col bg-contain'>
				<SatisfyText as='h1' className='text-center font-extrabold text-4xl w-full text-blue-700'>
					Fill up the form:
				</SatisfyText>
				<Image src='/png/form.png' alt='form ' width={600} height={600} className='bg-contain' />
			</div>
			<TransferForm />
		</div>
	);
};

export default TransferServicePage;
