import Image from 'next/image';
import React from 'react';

type Props = {
	age: string;
	group: string;
};

const TourDetails = ({ age, group }: Props) => {
	const items = [
		{
			id: 'tour-guide',
			image: '/png/tour-guide.png',
			title: 'Tour Guide',
			subtitle: 'Esclusive, well-detailed and making memories',
		},
		{
			id: 'group-guided',
			image: '/png/group.png',
			title: 'Private or Group Tour',
			subtitle: 'Keep it private or open to new lasting friendships',
		},
		{
			id: 'fully-guided',
			image: '/png/route.png',
			title: 'Fully Guided',
			subtitle: 'An experienced guide will be with you for the entire tour',
		},
		{
			id: 'languages',
			image: '/png/languages.png',
			title: 'Guide languages:',
			subtitle: 'English, Turkish, Italian and spanish',
		},
		{
			id: 'group-size',
			image: '/png/group.png',
			title: 'Group Size: ' + group,
		},
		{
			id: 'age',
			image: '/png/growing-up.png',
			title: age,
		},
	];
	return (
		<div className='flex flex-wrap px-4 md:px-12  w-full py-6 my-6 justify-between '>
			{items.map((item) => (
				<div key={item.id} className='flex flex-row w-full md:w-1/2  gap-4 px-2 py-4'>
					<div className='w-10 h-10 flex justify-center items-center'>
						<Image src={item.image} className='bg-contain' width={32} height={32} alt={item.title} />
					</div>

					<div className='flex flex-col justify-center gap-1 w-fit'>
						<h2 className='font-medium text-lg'>{item.title}</h2>
						<p className='font-light text-gray-700'>{item?.subtitle}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TourDetails;
