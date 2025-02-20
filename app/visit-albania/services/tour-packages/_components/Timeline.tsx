import React from 'react';

type Props = {
	routes?: any[];
};

const Timeline = (props: Props) => {
	const routes = [
		{
			title: 'Historical and Natural Highlights in One Day',
			keywords: 'Tirana, Elbasan Castle, Belsh, Berat, Wine Tasting, Durres, History, Tradition, Lakes,  Local Experience',
			desc: "Explore Albania's historical and natural highlights in one day.\nAfter visiting Visit Elbasan Castle to continue enjoying a coffee break surrounded by the scenic lakes of Belsh, explore Berat’s castle and famous quarters, and immerse yourself in the countryside. Top the day off with a visit to a renowned winery for wine tasting before ending your journey at the coastal city of Durres, where you can walk along the boulevard and indulge in some famous Albanian ice cream.",
			cover: {
				url: 'https://res.cloudinary.com/dfooptvte/image/upload/v1739262318/large_Berat_castle_entrance_0927a9b5dc.jpg',
			},
			routeItem: [
				{ id: 265, title: 'Departure from Tirana (8:00 AM)', desc: 'Set off from Tirana with your guide...', stayingTime: '0.5 - 1 hour' },
				{ id: 266, title: 'Visit to Elbasan Castle', desc: 'Explore the remains of the medieval castle...', stayingTime: '0.5-1 hour' },
				{ id: 267, title: 'Coffee Stop at Belsh', desc: 'Stop at a local café for coffee while admiring the lakes...', stayingTime: '0.5-1 hour' },
				{ id: 268, title: 'Explore Berat: Castle & Quarters', desc: "Arrive in Berat, known as the 'City of a Thousand Windows'...", stayingTime: '3-4 hour' },
				{ id: 269, title: 'Visit to Countryside & Winery', desc: 'Take a scenic drive to a renowned Albanian winery...', stayingTime: '1-1.5 hour' },
				{ id: 270, title: 'Visit to Durres', desc: 'Walk along the city’s famous boulevard and visit the amphitheater...', stayingTime: '1-1.5 hour' },
				{ id: 271, title: 'Return to Tirana', desc: 'Return to Tirana after a full day of exploration...', stayingTime: '0.5-1 hour' },
			],
		},
		{
			title: 'Historical and Natural Highlights in One Day',
			keywords: 'Tirana, Elbasan Castle, Belsh, Berat, Wine Tasting, Durres, History, Tradition, Lakes,  Local Experience',
			desc: "Explore Albania's historical and natural highlights in one day.\nAfter visiting Visit Elbasan Castle to continue enjoying a coffee break surrounded by the scenic lakes of Belsh, explore Berat’s castle and famous quarters, and immerse yourself in the countryside. Top the day off with a visit to a renowned winery for wine tasting before ending your journey at the coastal city of Durres, where you can walk along the boulevard and indulge in some famous Albanian ice cream.",
			cover: {
				url: 'https://res.cloudinary.com/dfooptvte/image/upload/v1739262318/large_Berat_castle_entrance_0927a9b5dc.jpg',
			},
			routeItem: [
				{ id: 265, title: 'Departure from Tirana (8:00 AM)', desc: 'Set off from Tirana with your guide...', stayingTime: '0.5 - 1 hour' },
				{ id: 266, title: 'Visit to Elbasan Castle', desc: 'Explore the remains of the medieval castle...', stayingTime: '0.5-1 hour' },
				{ id: 267, title: 'Coffee Stop at Belsh', desc: 'Stop at a local café for coffee while admiring the lakes...', stayingTime: '0.5-1 hour' },
				{ id: 268, title: 'Explore Berat: Castle & Quarters', desc: "Arrive in Berat, known as the 'City of a Thousand Windows'...", stayingTime: '3-4 hour' },
				{ id: 269, title: 'Visit to Countryside & Winery', desc: 'Take a scenic drive to a renowned Albanian winery...', stayingTime: '1-1.5 hour' },
				{ id: 270, title: 'Visit to Durres', desc: 'Walk along the city’s famous boulevard and visit the amphitheater...', stayingTime: '1-1.5 hour' },
				{ id: 271, title: 'Return to Tirana', desc: 'Return to Tirana after a full day of exploration...', stayingTime: '0.5-1 hour' },
			],
		},
		{
			title: 'Historical and Natural Highlights in One Day',
			keywords: 'Tirana, Elbasan Castle, Belsh, Berat, Wine Tasting, Durres, History, Tradition, Lakes,  Local Experience',
			desc: "Explore Albania's historical and natural highlights in one day.\nAfter visiting Visit Elbasan Castle to continue enjoying a coffee break surrounded by the scenic lakes of Belsh, explore Berat’s castle and famous quarters, and immerse yourself in the countryside. Top the day off with a visit to a renowned winery for wine tasting before ending your journey at the coastal city of Durres, where you can walk along the boulevard and indulge in some famous Albanian ice cream.",
			cover: {
				url: 'https://res.cloudinary.com/dfooptvte/image/upload/v1739262318/large_Berat_castle_entrance_0927a9b5dc.jpg',
			},
			routeItem: [
				{ id: 265, title: 'Departure from Tirana (8:00 AM)', desc: 'Set off from Tirana with your guide...', stayingTime: '0.5 - 1 hour' },
				{ id: 266, title: 'Visit to Elbasan Castle', desc: 'Explore the remains of the medieval castle...', stayingTime: '0.5-1 hour' },
				{ id: 267, title: 'Coffee Stop at Belsh', desc: 'Stop at a local café for coffee while admiring the lakes...', stayingTime: '0.5-1 hour' },
				{ id: 268, title: 'Explore Berat: Castle & Quarters', desc: "Arrive in Berat, known as the 'City of a Thousand Windows'...", stayingTime: '3-4 hour' },
				{ id: 269, title: 'Visit to Countryside & Winery', desc: 'Take a scenic drive to a renowned Albanian winery...', stayingTime: '1-1.5 hour' },
				{ id: 270, title: 'Visit to Durres', desc: 'Walk along the city’s famous boulevard and visit the amphitheater...', stayingTime: '1-1.5 hour' },
				{ id: 271, title: 'Return to Tirana', desc: 'Return to Tirana after a full day of exploration...', stayingTime: '0.5-1 hour' },
			],
		},
	];

	const transformed = routes.map((item, idx) => ({
		...item,
		place: idx === 0 ? 'first' : idx === routes.length - 1 ? 'last' : 'mid',
		dir: idx % 2 === 0 ? 'left' : 'right',
	}));
	console.log('🚀 ~ Timeline ~ transformed:', transformed);

	return (
		<div className='max-w-3xl mx-auto flex flex-col gap-6'>
			<h1 className='text-center text-2xl font-bold'>Trip Timeline</h1>

			<div className='relative flex flex-col items-center'>
				{/* Vertical Green Line */}
				<div className='absolute top-0 bottom-0 w-1.5 bg-green-500 rounded-lg'></div>

				{/* Timeline Items */}
				{transformed.map((item, index) => (
					<div key={index} className='relative w-full flex items-center mb-6'>
						{/* Left/Right Positioning */}
						<div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
							<div className='bg-white shadow-lg p-4 rounded-lg border'>
								<h2 className='font-semibold'>{item.title}</h2>
								<p className='text-sm text-gray-600'>{item.desc}</p>
							</div>
						</div>

						{/* Middle Connector */}
						<div className='relative w-10 flex justify-center'>
							<div className='absolute w-5 h-5 bg-green-500 rounded-full border-4 border-white'></div>
						</div>

						{/* Right Content */}
						<div className={`w-1/2 px-4 ${index % 2 === 0 ? 'hidden' : ''}`}>
							<div className='bg-white shadow-lg p-4 rounded-lg border'>
								<h2 className='font-semibold'>{item.title}</h2>
								<p className='text-sm text-gray-600'>{item.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Timeline;
