import React from 'react';
import { Spin, Tag } from 'antd';
import { useGetAllPackages } from '@/hooks/usePackages';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import CraftTourDrawer from '../drawers/CraftTourDrawer';
import JoinTourBtn from '../ctas/JoinTourBtn';
import NextArrow from '../carousels/NextArrow';
import PrevArrow from '../carousels/PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CraftTours = () => {
	const { isErrorTour, isLoadingTours, tours } = useGetAllPackages({
		page: 1,
		pageSize: 50,
	});

	const settings = {
		dots: true,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		speed: 800,
		autoplaySpeed: 800,
		cssEase: 'linear',
		slidesToShow: 1,
		// nextArrow: <NextArrow className='text-violet-600' />,
		// prevArrow: <PrevArrow className='text-violet-600' />,
	};
	const categoriesSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1200,
		autoplaySpeed: 3000,
		cssEase: 'linear',
	};

	return (
		<div id='craft' className='py-10'>
			<div>
				<div className='flex flex-col w-full'>
					<h1 className='text-2xl font-bold mb-8 px-4 text-center'>Select From Existing Tours</h1>
					<div>
						{isLoadingTours && <Spin />}
						{isErrorTour && <></>}
						{/* Display the tours in a carousel if they exist */}
						<div className='w-[400px] md:w-[800px] overflow-visible mx-10 relative  '>
							{tours?.data && tours?.data.length > 0 && (
								<Slider {...settings}>
									{/* Todo add custom arrows */}
									{tours.data.map((tour) => (
										<div key={tour.slug}>
											<div className='flex border-2 border-violet-300 border-dashed  flex-col  gap-3 justify-start items-start   p-4 rounded-xl bg-gray-50 mx-4'>
												<div className='flex flex-col gap-3 md:flex-row'>
													<div className='w-fit md:w-[360px] h-[240px] flex justify-center items-center overflow-hidden rounded-3xl '>
														<Image src={tour.cover.url} alt='' width={360} height={240} className='rounded-3xl w-full md:w-[360px] h-[240px] object-cover' />
													</div>
													<div className='p-2 flex w-full md:w-[360px] flex-col justify-start items-start gap-3'>
														<h3 className='text-lg font-semibold'>{tour.title}</h3>
														<div>
															<Tag className='w-fit bg-green-300'>Days {tour.totalDays}</Tag>
															<Tag className='w-fit '>{tour.age}</Tag>
														</div>

														<p className=' text-sm overflow-hidden overflow-ellipsis line-clamp-3'>{tour.desc}</p>

														<div className='flex gap-2'>
															<Tag className='w-fit bg-orange-400'>Highlights({tour.highlights.length})</Tag>
															<Tag className='w-fit bg-orange-300'>Attractions({tour.attractions.length})</Tag>
															<Tag className='w-fit bg-orange-200'>Routs({tour.routes.length})</Tag>
														</div>

														<div className='w-[260px] h-8 overflow-hidden py-2 px-4'>
															<Slider {...categoriesSettings}>
																{tour.hashtags.map((cat: any) => (
																	<div key={cat.slug}>
																		<Tag className='bg-cyan-100'>{cat.title}</Tag>
																	</div>
																))}
															</Slider>
														</div>
													</div>
												</div>

												<div className='flex justify-center items-center gap-6 flex-col md:flex-row w-full'>
													<JoinTourBtn title={tour.title} slug={tour.slug} label='Book a Similar Tour' id={tour.documentId} order={tour.id} />

													<Link
														className='underline-offset-4 text-purple-700 text-lg font-mono underline hover:text-purple-950 hover:scale-105 hover:underline-offset-8'
														href={`/visit-albania/services/tour-packages/${tour.slug}`}
													>
														View Tour
													</Link>
												</div>
											</div>
										</div>
									))}
								</Slider>
							)}
						</div>
					</div>
				</div>

				<div className='pt-10 w-full flex justify-center'>
					<CraftTourDrawer />
				</div>
			</div>
		</div>
	);
};

export default CraftTours;
