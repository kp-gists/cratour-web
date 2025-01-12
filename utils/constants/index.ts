import { images } from './images';

export const services = [
	{
		id: 'service-1',
		title: 'Tour Packages',
		slug: 'tour-packages',
		description: 'Explore curated tours covering the best destinations and experiences.',
		icon: images.tourGuide,
		cta: '..more tours',
	},
	{
		id: 'service-2',
		title: 'Transfer Services',
		slug: 'city-transfer-services',
		description: 'Reliable and comfortable city transfers to meet all your travel needs.',
		icon: images.transfer,
		cta: '...more transfers',
	},
	{
		id: 'service-3',
		title: 'Medical Tourism',
		slug: 'medical-tourism',
		description: 'Access top healthcare services while exploring new destinations.',
		icon: images.medicalTourism,
		cta: '..act now!',
	},
	{
		id: 'service-4',
		title: 'Hotel Reservation',
		slug: 'hotel-reservation',
		description: 'Book your stay at top-rated hotels tailored to your preferences.',
		icon: images.reservation,
		cta: '...book now!',
	},
	{
		id: 'service-5',
		title: 'Rent A Car',
		slug: 'rent-car',
		description: 'Convenient and affordable car rental services for your travels.',
		icon: images.rentalCar,
		cta: '...rent now!',
	},
];

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
