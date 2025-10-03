import { hero } from '@/constants/hero'
import { images } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import RubikText from '../ui/RubicText'
import SatisfyText from '../ui/SatisfyText'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className='relative w-full h-[85vh] md:h-[520px] lg:h-[654px] overflow-show bg-orange-50'>
			{/* images absolute */}
			<Image
				src={images.boi}
				alt='leaf'
				width={203}
				height={273}
				className='w-[100px] h-[140px] md:w-[203px] md:h-[273px] z-20 absolute left-4 top-4 animate-slideInLeft'
			/>
			<Image
				src={images.girl}
				alt='leaf'
				width={203}
				height={273}
				className='w-[100px] h-[140px] md:w-[203px] md:h-[273px] z-20 absolute right-4 top-4 animate-slideInRight'
			/>
			<Image
				src={images.poseHero}
				alt='pose'
				width={195}
				height={221}
				className='w-[195px] h-[221px] z-20 hidden md:block absolute left-[350px] -top-10 animate-fadeIn'
				style={{ animationDelay: '0.5s' }} // Add a delay
			/>
			<Image
				src={images.camera}
				alt='camera'
				width={225}
				height={223}
				className='w-[225px] h-[223px] hidden lg:block z-20 absolute right-[350px] -top-14 animate-fadeIn'
				style={{ animationDelay: '0.7s' }} // Add a delay
			/>
			{/* <Image
				src={images.cratourIcon}
				alt='busull'
				width={170}
				height={170}
				className='w-[170px] h-[170px] hidden lg:block absolute z-20 left-[230px] top-[230px] animate-fadeIn'
				style={{ animationDelay: '0.9s' }} // Add a delay
			/> */}
			<Image
				src={images.cratourIcon}
				alt='shell'
				width={126}
				height={139}
				className='w-[126px] h-[126px] absolute z-20 bottom-4 right-1/3 md:-bottom-5 md:right-[20%] lg:right-[15%] animate-fadeIn'
				style={{ animationDelay: '1.1s' }} // Add a delay
			/>
			<Image
				src={images.travel}
				alt='travel'
				width={79}
				height={79}
				className='w-[79px] h-[79px] absolute z-20 bottom-[120px] right-[60px] md:bottom-[80px] md:right-[10%] animate-fadeIn'
				style={{ animationDelay: '1.3s' }} // Add a delay
			/>

			<Image
				src={images.curvedBlueS}
				alt='leaf'
				width={143}
				height={135}
				className='md:w-[143px] md:h-[135px] absolute left-[40%] -top-4 md:left-[46%] md:top-1'
			/>
			<Image src={images.curvedBlue} alt='leaf' width={450} height={311} className='w-[450px] h-[311px] hidden md:block absolute z-10 left-2 top-12' />
			<Image
				src={images.curvedAxisBlue}
				alt='leaf'
				width={450}
				height={311}
				className='w-[450px] h-[311px] hidden md:block absolute z-10 -right-3 top-[100px]'
			/>

			{/*  */}
			<div className='mt-[130px] md:mt-[180px] w-fit md:w-[500px] h-fit mx-auto flex flex-col justify-center items-center gap-4 relative z-50'>
				<RubikText as='h1' className='font-bold text-[44px] md:text-[60px] text-primary-400'>
					{hero.title}
				</RubikText>
				<SatisfyText as='h2' className='text-center font-light text-xl md:text-3xl px-1'>
					{hero.desc}
				</SatisfyText>
				<SatisfyText as='h2' className='text-center font-light text-xl md:text-3xl px-1'>
					{hero.subtitle}
				</SatisfyText>

				<Link
					href={'#craft'}
					className='block text-lg lowercase bg-white py-1 rounded-lg px-6 ring ring-orange-600	 leading-tight shadow-xl mt-4 font-semibold text-black-400 hover:bg-orange-100 transition duration-200 hover:scale-105'
				>
					PLAN NOW!
				</Link>
			</div>
		</div>
	)
}

export default Hero
