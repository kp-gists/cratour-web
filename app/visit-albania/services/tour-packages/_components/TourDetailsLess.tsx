import Image from 'next/image';
import React from 'react';

type Props = {
	age: string;
	group: string;
};

const TourDetailsLess = ({ age, group }: Props) => {
	const items = [
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
		<div className='flex flex-row justify-between  w-full  '>
			{items.map((item) => (
				<div key={item.id} className='flex flex-col justify-center items-center w-full '>
					<div className='w-10 h-10 flex justify-center items-center'>
						<Image src={item.image} className='bg-contain' width={24} height={24} alt={item.title} />
					</div>

					<div className='flex flex-row items-center justify-center gap-1 w-fit'>
						<h2 className='font-medium text-sm text-gray-600'>{item.title}</h2>
					</div>
				</div>
			))}
		</div>
	);
};

export default TourDetailsLess;
