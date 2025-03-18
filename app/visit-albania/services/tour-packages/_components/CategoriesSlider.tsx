import Slider from 'react-slick';
import { Tag } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

type Props = {
	items: any;
};

const CategoriesSlider = ({ items }: Props) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1200,
		autoplaySpeed: 3000,
		cssEase: 'linear',
	};
	if (items.length == 0) {
		return;
	}
	if (items.length == 1) {
		return <Tag className='bg-orange-100 w-fit'>{items[0].title}</Tag>;
	}

	return (
		<div className='w-[300px]'>
			<Slider {...settings} waitForAnimate>
				{items.map((activity: any) => (
					<div key={activity.slug} className='w-full  flex justify-center  items-center'>
						<div className='mx-0 flex justify-self-center'>
							<Tag className='bg-orange-100 '>{activity.title}</Tag>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CategoriesSlider;
