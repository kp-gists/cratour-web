import React from 'react';
import RobotoText from '../ui/RobotoText';
import SatisfyText from '../ui/SatisfyText';
import Image from 'next/image';
import { images } from '@/constants/images';
import Link from 'next/link';

const TravelLayout = () => {
	return (
		<div className='w-full h-full bg-white relative min-h-[900px] flex justify-center items-center flex-col'>
			<div className='flex flex-col justify-center gap-4 items-center text-center w-[380px] md:w-[500px] lg:w-[660px] relative z-20'>
				<RobotoText as='h1' className='text-xl font-bold uppercase md:text-3xl lg:text-5xl text-primary-400'>
					Travel Features
				</RobotoText>

				<SatisfyText as='p' className='text-center text-xl md:text-3xl p-4 '>
					Pin your destination on the map, and let us do the rest! Start your adventure now!
					<br />
					<span className='hidden lg:block'>We craft your dream tour, ensuring you experience the most unforgettable moments in Albania!</span>
				</SatisfyText>

				<Image
					width={132}
					height={110}
					src={images.beachBall}
					className='bg-cover w-[64px] h-[64px] md:w-[132px] md:h-[110px] absolute -top-1 -right-1 md:-top-10 md:-right-10'
					alt='berat castle'
				/>
				<Image
					width={107}
					height={100}
					src={images.starfish}
					className='bg-cover absolute w-[57px] h-[56px] md:w-[107px] md:h-[100px] -top-3 left-[10px] md:top-2 md:-left-24 z-20'
					alt='berat castle'
				/>
				<Image
					width={107}
					height={100}
					src={images.hat}
					className='bg-cover w-[50px] h-[50px] md:w-[107px] md:h-[100px] absolute bottom-0 left-[20px] md:-left-20 z-20'
					alt='berat castle'
				/>
				<Image
					width={107}
					height={100}
					src={images.cameraBlack}
					className='bg-cover w-[50px] h-[50px] md:w-[107px] md:h-[100px] absolute -bottom-2 right-2 md:-right-10 z-20'
					alt='berat castle'
				/>

				<Link href={'/visit-albania/services/tour-packages'}>
					<SatisfyText className='text-xl md:text-3xl text-cyan-600 '>Explore more...</SatisfyText>
				</Link>
			</div>

			<Link href={'/what-to-visit-in-albania/cities'} className='block absolute top-[10%] left-[10%]'>
				<div className='flex justify-center items-center flex-col gap-1 md:gap-2 w-[220px] h-[170px] p-2 border-2 border-white bg-cyan-200 rounded-lg'>
					<RobotoText className='text-xl md:text-3xl text-center font-bold text-primary-400'>20+</RobotoText>
					<SatisfyText className='text-center'>breathtaking cities and towns, each with unique stories and experiences.</SatisfyText>
					<Image width={24} height={24} src={images.touch} className='bg-cover -rotate-45 animate-pulse' alt='berat castle' />
				</div>
			</Link>
			<Image width={107} height={100} src={images.curvedBlueS} className='bg-cover absolute top-2 left-[20%]' alt='berat castle' />

			<Link href={'/visit-albania/services/tour-packages'} className='hidden md:block absolute top-[10%] left-[50%] z-20'>
				<div className='flex justify-center items-center flex-col gap-1 md:gap-2 w-[220px] h-[170px] p-2 border-2 border-white bg-cyan-200 rounded-lg'>
					<RobotoText className='text-xl md:text-3xl text-center font-bold text-primary-400'>60+</RobotoText>
					<SatisfyText className='text-center'>sun-kissed beaches along the Adriatic and Ionian coasts</SatisfyText>
					<Image width={24} height={24} src={images.touch} className='bg-cover -rotate-45 animate-pulse' alt='berat castle' />
				</div>
			</Link>

			<div className=' absolute top-[5%] left-[50%] xl:top-0 z-10 flex flex-col justify-end items-end'>
				<Image
					src={images.pinSmall}
					width={36}
					height={49}
					className='relative -left-[80px] top-3 md:-left-[330px] lg:-left-[500px] md:top-2 '
					alt='line city'
				/>

				<Image
					width={500}
					height={330}
					src={images.curvedAxisBlue}
					className='bg-cover rotate-12 relative  -right-[80px] -bottom-[30px] md:right-0 w-[280px] h-[250px] md:rotate-0 md:w-[330px] md:h-[250px] lg:w-[500px] lg:h-[330px]'
					alt='berat castle'
				/>
				<Image width={225} height={205} src={images.sand} className='bg-cover ' alt='berat castle' />
			</div>

			<Link href={'/what-to-visit-in-albania/attractions'} className='flex flex-row items-end absolute bottom-[10%] left-[5%] md:left-[10%]'>
				<div className='flex justify-center items-center flex-col gap-1 relative z-20 md:gap-2 w-[200px] h-[170px] md:w-[220px] md:h-[170px] p-2 border-2 border-white bg-cyan-200 rounded-lg'>
					<RobotoText className='text-xl md:text-3xl text-center font-bold text-primary-400'>40+</RobotoText>
					<SatisfyText className='text-center'>national parks, rivers, lakes, and mountains for nature enthusiasts.</SatisfyText>
					<Image width={24} height={24} src={images.touch} className='bg-cover -rotate-45 animate-pulse' alt='berat castle' />
				</div>
				<Image
					width={220}
					height={170}
					src={images.girafe}
					className='bg-cover relative w-[120px] h-[70px] md:w-[220px] md:h-[170px] -left-[40px] md:-left-[70px] z-10'
					alt='berat castle'
				/>
			</Link>

			<div className='hidden flex-col items-end justify-end absolute lg:bottom-0 lg:flex lg:right-0 xl:bottom-[10%] xl:right-[10%]'>
				<Link href={'/what-to-visit-in-albania/attractions'} className='flex flex-row '>
					<div className='flex justify-center items-center flex-col gap-1 relative z-20 md:gap-2 w-[220px] h-[170px] p-2 border-2 border-white bg-cyan-200 rounded-lg'>
						<RobotoText className='text-xl md:text-3xl text-center font-bold text-primary-400'>50+</RobotoText>
						<SatisfyText className='text-center'>ancient castles, archaeological sites, and museums waiting to be uncovered.</SatisfyText>
						<Image width={24} height={24} src={images.touch} className='bg-cover -rotate-45 animate-pulse' alt='berat castle' />
					</div>
				</Link>

				<Image width={400} height={219} alt='' src={images.curvedBlue} className='' />
				<Image src={images.pinBig} width={36} height={49} className='absolute bottom-9 -left-6  ' alt='line city' />
			</div>

			<Link href={'/visit-albania/services/tour-packages'} className='hidden md:flex flex-row absolute bottom-10 md:left-[60%] lg:left-[45%]'>
				<div className='flex justify-center items-center flex-col gap-1 relative z-20 md:gap-2 w-[220px] h-[170px] p-2 border-2 border-white bg-cyan-200 rounded-lg'>
					<RobotoText className='text-xl md:text-3xl text-center font-bold text-primary-400'>33+</RobotoText>
					<SatisfyText className='text-center'>curated tour packages tailored to your interests..</SatisfyText>
					<Image width={24} height={24} src={images.touch} className='bg-cover -rotate-45 animate-pulse' alt='berat castle' />
				</div>
			</Link>
		</div>
	);
};

export default TravelLayout;
