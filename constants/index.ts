import { images } from './images';

export const tourPackages = [];

export const cityActivities = [
	{
		key: 'restaurants-1',
		title: 'Restaurants',
		description:
			"Enjoy a variety of local and international cuisines at the city's best restaurants, offering everything from fine dining to casual street food.",
		estimation: '2-3 hours',
		icon: images.restaurant,
	},
	{
		key: 'sightseeing-2',
		title: 'Sightseeing',
		description: "Explore breathtaking landmarks, historical monuments, and scenic viewpoints that define the city's rich heritage.",
		estimation: '4-6 hours',
		icon: images.sightseeing,
	},
	{
		key: 'shops-boutiques-3',
		title: 'Shops & Boutiques',
		description: "Shop till you drop in the city's charming boutiques and bustling shopping districts, featuring unique items and designer brands.",
		estimation: '2-4 hours',
		icon: images.boutique,
	},
	{
		key: 'where-to-stay-4',
		title: 'Where to Stay',
		description: 'Find the ideal accommodation, from luxurious hotels to cozy bed-and-breakfasts, tailored to your preferences.',
		estimation: 'Varies',
		icon: images.hotel,
	},
	{
		key: 'cultural-experiences-5',
		title: 'Cultural Experiences',
		description: "Immerse yourself in the city's culture through art galleries, museums, and live performances showcasing local traditions.",
		estimation: '3-5 hours',
		icon: images.family,
	},
	{
		key: 'outdoor-adventures-6',
		title: 'Outdoor Adventures',
		description: "Engage in outdoor activities like hiking, biking, or kayaking, and connect with nature in the city's beautiful surroundings.",
		estimation: '4-8 hours',
		icon: images.hiking,
	},
	{
		key: 'nightlife-7',
		title: 'Nightlife',
		description: 'Experience the vibrant nightlife with trendy bars, nightclubs, and live music venues that keep the city buzzing after dark.',
		estimation: '3-6 hours (evening)',
		icon: images.nightlife,
	},
	{
		key: 'festivals-events-8',
		title: 'Festivals & Events',
		description: 'Participate in colorful festivals, exciting concerts, and seasonal events that bring the city to life.',
		estimation: '4-6 hours',
		icon: images.culture,
	},
	{
		key: 'local-markets-9',
		title: 'Local Markets',
		description: 'Browse lively markets offering fresh produce, local crafts, and authentic souvenirs to take a piece of the city home with you.',
		estimation: '2-3 hours',
		icon: images.market,
	},
	{
		key: 'hidden-gems-10',
		title: 'Hidden Gems',
		description: "Discover the city's hidden treasures, including secret gardens, tucked-away cafes, and offbeat attractions.",
		estimation: '2-4 hours',
		icon: images.hiddenGems,
	},
];

export const logos = {
	logoX: '/logo/logo-horizontal.png',
	logoY: '/logo/logo-vertical.png',
	icon: '/logo/cratour-icon.png',
};

export const business = {
	desc: 'Cratour.al is a licensed travel company specializing in customized tours and private transfers across Albania. Founded by tourism expert Lulezim Marra, it offers authentic, stress-free journeys tailored to each traveler. With deep local knowledge and trusted partnerships, we ensure unforgettable experiences free from tourist traps.',
	longDesc:
		'Cratour.al is a fully licensed travel company specializing in customized tours and private transfers across Albania. Founded by Lulezim Marra, a seasoned content creator and tourism expert, Cratour.al is built on a deep passion for showcasing Albania’s rich history, culture, and landscapes. With years of experience working with international media and organizing tours, we offer travelers a unique, authentic, and stress-free journey—free from tourist traps and tailored to their needs. Whether it’s exploring hidden gems, enjoying seamless transportation, or experiencing local hospitality, Cratour.al ensures every trip is crafted with honesty, expertise, and care',
};

export const links = {
	services: [
		{
			href: 'https://cratour.al/visit-albania/services/tour-packages',
			title: 'Our Tours',
		},
		{
			href: 'https://cratour.al/visit-albania/services/city-transfer',
			title: 'Transfers',
		},
		{
			href: 'https://cratour.al/visit-albania/services/medical-tourism',
			title: 'Medical Tourism',
		},
		{
			href: 'https://cratour.al/visit-albania/services/hotel-reservation',
			title: 'Hotel Reservation',
		},
		{
			href: 'https://cratour.al/visit-albania/services/rent-car',
			title: 'Rent a car',
		},
	],
	aboutUs: [
		{
			href: 'https://cratour.al/about-us',
			title: 'Our Story',
		},
		{
			href: 'https://cratour.al/visit-albania',
			title: 'Visit Albania!',
		},
		{
			href: 'https://cratour.al/contact',
			title: 'Contact',
		},
		{
			href: 'https://cratour.al/what-to-visit-in-albania/tour-experiences',
			title: 'Tour Experiences',
		},
		{
			href: 'https://cratour.al/what-to-visit-in-albania',
			title: 'What to visit/to do in Albania',
		},
	],
};
