import { images } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import SatisfyText from '../ui/SatisfyText';
import RobotoText from '../ui/RobotoText';
import Link from 'next/link';

const CitiesLayout = () => {
	return (
		<div className='w-full h-full bg-primary-500 relative p-4 md:p-6 lg:p-8 min-h-[1180px]  md:min-h-[1200px] overflow-hidden '>
			<div className='absolute top-6 left-[40px] p-2 bg-white '>
				<Image width={120} height={100} src={images.cityBerat} className='bg-cover' alt='berat castle' />
			</div>

			<div className='absolute top-6 left-[190px] p-2 bg-white hidden md:flex '>
				<Image width={120} height={100} src={images.beratCastle} className='bg-cover' alt='berat castle' />
			</div>

			<Image
				src={images.curved6}
				width={121}
				height={152}
				className='absolute w-[60px] h-[76px] md:w-[121px] md:h-[152px] top-0 left-[55%] md:left-1/2 lg:left-[52%]'
				alt='line city'
			/>
			<SatisfyText className='text-xl md:text-2xl font-bold text-white absolute top-[45px] md:top-[90px] left-[72%] md:left-[64%] lg:left-[59%]'>
				BERAT
			</SatisfyText>

			<Image src={images.dottedCurve1} width={113} height={135} className='absolute top-[130px] md:top-[100px] right-0 ' alt='line city' />
			<div className='absolute top-[230px] right-[113px] bg-white p-2 hidden md:block'>
				<Image src={images.valbona} width={204} height={172} className=' ' alt='line city' />
			</div>

			<div className='hidden justify-center items-center gap-4 flex-col absolute top-[130px] right-[193px]  lg:flex'>
				<Image src={images.pinSmall} width={36} height={49} className=' ' alt='line city' />
				<SatisfyText className='text-white text-xl md:text-2xl'>Valbona</SatisfyText>
			</div>

			<Image
				src={images.frame1}
				width={490}
				height={380}
				className='absolute top-[200px] md:top-[230px] left-16 w-[300px] h-[330px] md:h-[400px] md:w-[480px] lg:w-[490px] lg:h-[380px]'
				alt='line city'
			/>

			<div className='flex justify-center items-center gap-4 flex-col absolute top-[150px] left-0'>
				<div className='flex gap-2'>
					<Image src={images.dottedCurve} width={100} height={70} className='pt-3 ' alt='line city' />
					<SatisfyText className='text-white text-xl md:text-2xl'>Shkodra</SatisfyText>
				</div>
				<Image src={images.pinSmall} width={36} height={49} className=' ' alt='line city' />
			</div>

			<div className=' flex justify-center bg-transparent  items-center w-fit md:w-[600px] lg:w-[660px] mx-4 md:mx-auto flex-col gap-6  pb-40 md:pb-20 relative pt-[550px] pl-4 md:pt-[600px] lg:pt-[240px] md:pl-12'>
				<RobotoText className='text-xl font-bold md:text-5xl uppercase text-white'>Cities Layouts</RobotoText>
				<SatisfyText className='text-xl md:text-3xl font-bold w-fit md:w-[400px] text-center text-wrap  text-white'>
					Discover Albania: Where Natural Wonders Meet Rich History
				</SatisfyText>
				<p className='w-fit md:w-[480px] lg:w-[660px] mx-auto text-sm md:text-[18px] lg:text-xl text-wrap px-0 md:px-4 text-white  text-center'>
					Explore the enchanting layouts of Albania, a country where every city offers a unique blend of attractions. From pristine beaches along the Adriatic
					and Ionian coasts to serene lakes and winding rivers. Discover centuries-old castles, vibrant cultural scenes, and picturesque villages that echo
					history.{' '}
				</p>

				<Link href={'/what-to-visit-in-albania/cities'} className='block'>
					<SatisfyText
						as='h5'
						className='text-xl font-bold px-4 py-2 hover:bg-yellow-100 bg-cyan-300 rounded-lg text-purple-700 hover:scale-105 hover:text-purple-900  hover:underline shadow-lg drop-shadow-lg shadow-yellow-50'
					>
						Discover all cities!
					</SatisfyText>
				</Link>
			</div>

			{/* bottom curves */}

			<div className='flex flex-col absolute bottom-7 md:bottom-2 lg:bottom-10 right-0'>
				<Image
					src={images.curved3}
					width={334}
					height={126}
					className='w-[303px] h-[106px] md:w-[260px] md:h-[90px] lg:w-[334px] lg:h-[126px] '
					alt='line city'
				/>
				<Image
					src={images.ismaili}
					width={90}
					height={90}
					className='ring ring-white w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full relative -left-8 top-2 bg-contain'
					alt='line city'
				/>
			</div>

			<div className='absolute bottom-0 left-[10%] hidden lg:flex flex-row gap-2'>
				<Image src={images.dottedCurve} width={147} height={64} className=' ' alt='line city' />
				<SatisfyText as='h5' className='text-xl md:text-3xl text-white relative -top-4'>
					Saranda
				</SatisfyText>
			</div>

			<div className='absolute bottom-[180px] left-[0%] lg:flex flex-row gap-2 hidden '>
				<Image src={images.dottedCurve} width={147} height={64} className='rotate-180' alt='line city' />
				<SatisfyText as='h5' className='text-xl md:text-3xl text-white relative -top-4'>
					Kruja
				</SatisfyText>
			</div>

			<Image
				src={images.busull}
				alt='busull'
				width={130}
				height={130}
				className='w-[130px] h-[130px] absolute z-20 left-[330px] bottom-[120px] hidden lg:block'
			/>

			<div className='absolute bottom-[100px] right-[30%] md:right-[10%] md:bottom-[50px] lg:right-[30%] lg:bottom-[150px] flex flex-col gap-2'>
				<Image src={images.pinSmall} width={36} height={49} className=' ' alt='line city' />
				<SatisfyText as='h5' className='text-xl md:text-3xl text-white'>
					Vlora
				</SatisfyText>
			</div>

			<div className='absolute bottom-0 left-[40%] md:left-[10%] lg:left-[35%] flex justify-end flex-col items-end gap-4'>
				<div className='flex flex-row gap-3 items-end'>
					<Image src={images.pinSmall} width={36} height={49} className=' ' alt='line city' />
					<SatisfyText as='h5' className='text-xl md:text-3xl text-white relative -bottom-4'>
						Butrint
					</SatisfyText>
				</div>

				<Image src={images.curved1} width={36} height={49} className=' ' alt='line city' />
			</div>
		</div>
	);
};

export default CitiesLayout;
