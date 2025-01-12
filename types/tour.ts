export type TourRoute = {
	day: number;
	title: string;
	description: string;
	icon?: string; //TODO add icons map
};

export type TourPackage = {
	title: string;
	slug: string;
	description: string;
	keywords: string[];
	image: string;
	content: string;
	daysIncluded: number;
	routes: TourRoute[];
};

export enum CityActivitiesEnum {
	Restaurants = 'restaurants',
	Sightseeing = 'sightseeing',
	ShopsAndBoutiques = 'shops-boutiques',
	WhereToStay = 'where-to-stay',
	CulturalExperiences = 'cultural-experiences',
	OutdoorAdventures = 'outdoor-adventures',
	Nightlife = 'nightlife',
	FestivalsAndEvents = 'festivals-events',
	LocalMarkets = 'local-markets',
	HiddenGems = 'hidden-gems',
}

export type City = {
	name: string;
	location: string;
};
