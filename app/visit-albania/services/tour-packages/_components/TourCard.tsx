import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	tour: any;
	ref?: React.Ref<HTMLAnchorElement>;
};

const TourCard = ({ ref, tour }: Props) => {
	const publishDate = new Intl.DateTimeFormat('sq-AL', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	}).format(new Date(tour.publishedAt));

	return (
		<Link href={`/visit-albania/services/tour-packages/${tour.slug}`} key={tour.id} className='block' ref={ref}>
			<div className='flex flex-col gap-3 border rounded-2xl p-2 md:p-3 lg:p-4 justify-center items-center relative overflow-hidden'>
				<div className='relative'>
					<h1 className='text-white font-semibold absolute bottom-1 left-3 bg-white/5 text-center backdrop-blur-sm px-2 rounded-md py-1 mx-3'>{tour.title}</h1>
					{tour.cover && <Image src={tour.cover.url} alt='' width={330} height={220} className='rounded-xl w-[360px] h-[220px] md:w-[330px]  md:h-[220px]' />}
				</div>
				<div className='flex flex-row w-full px-3'>
					<p>{publishDate}</p>
				</div>
			</div>
		</Link>
	);
};

export default TourCard;
