import RobotoText from '@/components/ui/RobotoText';
import { images } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

const Road = () => {
	return (
		<div className='relative md:w-[750px]  lg:w-[750px] h-full overflow-visible   bg-white px-[50px]  -top-2 md:-top-4'>
			{/* road vertical */}
			<div className='flex flex-row gap-2 '>
				<div className='flex flex-col'>
					<div className='w-10 h-24 bg-slate-400 relative z-30'>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] top-0'></div>
					</div>

					<div className='w-10 h-24 bg-slate-400 relative z-30'>
						<div className='w-1 h-16 rounded-sm bg-white absolute left-[18px] top-4'></div>
					</div>
				</div>
				<div className='w-full h-48 flex justify-center items-center z-30'>
					<div className='flex flex-row justify-center items-center gap-2 md:gap-3'>
						<Image src={images.checked} width={28} height={28} alt='checked driver' className='' />

						<p className='text-lg font-sans'>Your driver will be in touch before your transfer.</p>
					</div>
				</div>
			</div>

			<div className='flex justify-start items-end '>
				{/* v1 */}
				<div className='relative z-20 w-20 h-20  bg-white -top-[80px] '>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>

					{/* bars */}
					<div className=' z-30 w-40 h-20 absolute top-0 left-0 bg-white' />
					<div className=' z-30 w-20 h-40 absolute -bottom-20 -right-20 bg-white' />
				</div>
				{/* road 2 */}
				<div className='w-[500px] h-10 bg-slate-400 relative z-30 '>
					<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
					<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-40'></div>
					<div className='w-16 h-1 rounded-sm bg-white absolute top-[18px] right-80'></div>
				</div>

				<div className='relative z-20 w-20 h-20  bg-white -left-20 top-10'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>
					{/* bars */}
					<div className=' z-30 w-40 h-20 absolute -bottom-20 left-0 bg-white' />
					<div className=' z-30 w-20 h-40 absolute -bottom-20 left-0 bg-white' />
				</div>
			</div>

			<div className='pt-10   flex justify-end relative'>
				<div className='w-[370px] h-28 absolute top-14 gap-2 left-1/4 flex flex-col md:gap-4 justify-start items-center'>
					<div className='flex gap-2'>
						<Image src={images.checked} width={28} height={28} alt='relax' />
						<p className='text-lg md:text-2xl flex gap-1'>
							<RobotoText className='font-bold'>Free Wi-Fi </RobotoText> on board
						</p>
					</div>
					<p className='font-extrabold text-2xl'>&</p>
					<div className='flex gap-2'>
						<Image src={images.battery} width={28} height={28} alt='relax' />
						<p className='text-lg md:text-2xl flex gap-1'>
							<RobotoText className='font-bold'>Charge</RobotoText> your electronics
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='w-10 h-24 bg-slate-400 relative z-50 '>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
					</div>
					<div className='w-10 h-24 bg-slate-400 relative z-50 '>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -bottom-3 z-50'></div>
					</div>
				</div>
			</div>

			<div className='flex justify-end items-end h-[100px] relative -top-5'>
				<div className='relative z-20 w-20 h-20  -bottom-10 bg-white'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2 bg-white    z-10 w-20 h-20 bg-b rounded-full'></div>

					<div className=' z-30 w-40 h-20 absolute -bottom-20 left-0 bg-white' />
					<div className=' z-30 w-20 h-40 absolute -bottom-20 -right-20 bg-white' />
				</div>

				<div className='w-[400px] h-10 bg-slate-400 relative z-30 '>
					<div className='w-14 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
					<div className='w-20 h-1 rounded-sm bg-white absolute top-[18px] right-1/3'></div>
					<Image src={images.suvLeft} alt='suv' className='absolute  bottom-0 right-1/3  z-50 ' width={86} height={86} />

					<div className='w-14 h-1 rounded-sm bg-white absolute top-[18px] left-5'></div>
					<div className='w-0 h-1 rounded-sm bg-white absolute top-[18px] right-40'></div>
				</div>

				<div className='relative z-20 w-20 h-20  bg-white -top-20 -left-20'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full'></div>
					{/* bars */}
					<div className=' z-30 w-40 h-20 absolute top-0 left-0 bg-white' />
					<div className=' z-30 w-20 h-40 absolute -bottom-20 right-0 bg-white' />
				</div>
			</div>

			<div className='flex justify-start items-start pl-[88px]  relative'>
				<div className='flex flex-col '>
					<div className='w-10 h-24 bg-slate-400 relative z-50 top-5'>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
					</div>
					<div className='w-10 h-24 bg-slate-400 relative z-50 '>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -top-3 z-50'></div>
						<div className='w-1 h-10 rounded-sm bg-white absolute left-[18px] -bottom-3 z-50'></div>
					</div>
				</div>

				<div className='w-full h-[200px] z-50 flex justify-center items-center flex-col gap-2'>
					<Image src={images.pinSmall} width={24} height={24} alt='breakfast stop' />
					<RobotoText className='font-extrabold text-lg md:text-2xl'>Extra Stops</RobotoText>
					<p className='text-center w-[320px] text-base md:text-lg'>You can add additional stops and use it for food, drinks or for the view</p>
				</div>
				<Image src={images.bStop} width={128} height={128} alt='breakfast stop' className='absolute z-[51] -left-10 top-10' />
				<div className='absolute z-[51] left-20 -top-12'>
					<div className='relative'>
						<div className='blur rounded-full opacity-40 w-20 h-20 absolute bg-cyan-400 z-10' />
						<div className='p-2 bg-white rounded-full relative z-30'>
							<Image src={images.pinPlus} width={54} height={54} alt='breakfast stop' />
						</div>
					</div>
				</div>
			</div>

			<div className=' flex flex-row justify-start items-end  relative -top-2'>
				<div className='relative z-20 w-20 h-20  -top-20 left-[88px] bg-white'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2 bg-white    z-10 w-20 h-20 bg-b rounded-full'></div>

					<div id='vertical' className=' z-30 w-40 h-20 absolute top-0 left-0 bg-white' />
					<div id='horizontal' className=' z-30 w-20 h-40 absolute -bottom-20 -right-20 bg-white' />
				</div>
				<div className='w-[320px] h-10 bg-slate-400 relative z-30 left-[88px]'>
					<div className='w-14 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>
					{/* <div className='w-20 h-1 rounded-sm bg-white absolute top-[18px] right-1/3'></div> */}
					<Image src={images.suv} alt='suv' className='absolute  bottom-0 left-10  z-50 ' width={86} height={86} />

					<div className='w-14 h-1 rounded-sm bg-white absolute top-[18px] left-5'></div>
				</div>
				<div className='relative z-20 w-20 h-20  top-10  bg-white'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2 bg-white    z-10 w-20 h-20 bg-b rounded-full'></div>

					<div id='horizontal' className=' z-30 w-20 h-20 absolute -bottom-20 left-0 bg-white' />
					<div id='vertical' className=' z-30 w-20 h-40 absolute -bottom-20 -left-0 bg-white' />
				</div>
			</div>

			<div className='flex justify-end  pr-[166px] relative top-[72px]'>
				<div className='relative z-20 w-20 h-20  bg-white'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '></div>
					<div className='absolute top-1/2 left-1/2 bg-white    z-10 w-20 h-20 bg-b rounded-full'></div>

					<div id='horizontal' className=' z-30 w-20 h-20 absolute -bottom-20 -right-20 bg-white' />
					<div id='vertical' className=' z-30 w-20 h-40 absolute bottom-0 -right-20 bg-white' />
				</div>

				<div className='w-[180px] h-10 bg-slate-400 relative z-30 '>
					<div className='w-14 h-1 rounded-sm bg-white absolute top-[18px] right-5'></div>

					<div className='w-14 h-1 rounded-sm bg-white absolute top-[18px] left-5'></div>
				</div>
			</div>

			<div className='flex relative flex-col pl-[340px] top-[150px]'>
				<div className='relative  z-20 w-20 h-20  bg-transparent -left-20 -top-14'>
					<div className='relative z-10 w-40 h-40 top-0 right-0 bg-slate-400 rounded-full '>
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border border-dashed border-white z-20 w-[124px] h-[124px] bg-transparent rounded-full'></div>
						{/* bars */}
					</div>
					<div className='absolute top-1/2 left-1/2    z-10 w-20 h-20 bg-white rounded-full flex justify-center items-center'>
						<Image src={images.roundabout} width={72} height={72} alt='roundabout' />
					</div>

					<div className=' z-30 w-40 h-20 absolute -bottom-20 left-0 bg-transparent' />
					<div className=' z-30 w-20 h-40 absolute -bottom-20 left-0 bg-transparent' />
				</div>

				<div className='flex flex-col pt-2'>
					<div className='w-10 h-36 bg-slate-400 relative z-50 '>
						<div className='w-1 h-14 rounded-sm bg-white absolute left-[18px] top-10 z-50'></div>
					</div>
				</div>
			</div>
			<div className='w-full relative h-[500px] flex flex-col justify-start pl-20 items-center  mt-36'>
				<div className='bg-white border border-cyan-200 shadow-green-400 p-4 md:p-8 shadow-lg relative z-50 rounded-xl flex flex-col justify-center items-center gap-4'>
					<div className='flex justify-center items-center w-28 bg-cyan-100 rounded-full h-28'>
						<Image src={images.pinSmall} width={48} height={48} className='' alt='pin arrived' />
					</div>
					<RobotoText className='uppercase font-extrabold  text-2xl md:text-3xl text-blue-600'>YOU ARRIVED!</RobotoText>

					<p className='text-center'>
						Your destination is here! <br />
						We wish you a pleasant stay and <br />
						unforgettable memories.
					</p>
				</div>

				<div className='absolute -right-24 -top-40 z-10'>
					<Image src='/gifs/Celebration.gif' width={300} height={300} className='rounded-full' alt='arrived gif' />
				</div>
			</div>
		</div>
	);
};

export default Road;
