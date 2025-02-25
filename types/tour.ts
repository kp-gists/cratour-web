export interface Route {
	id: string;
	title: string;
	keywords?: string;
	desc?: string;
	cover?: Cover;
	notes?: string; // Private field
	days: number;
	routeItem: RouteItem[];
	cities: City[];
}

export interface RouteItem {
	id: string;
	title: string;
	desc?: string;
	stayingTime?: string;
	tour_activities: TourActivity[];
}

export interface TourActivity {
	id: string;
	title: string;
	slug: string;
	subtitle?: string;
	desc?: string;
	// TODO fix the image
	cover?: any;
	attraction?: any;
	activity_type?: any;
}
export interface Cover {
	url: string;
	formats: Formats;
}
export interface Formats {
	thumbnail?: {
		url: string;
	};
	small?: {
		url: string;
	};
	large?: {
		url: string;
	};
	medium?: {
		url: string;
	};
}

export interface Attraction {
	id: number;
	documentId: string;
	slug: string;
	name: string;
	cover: Cover;
}

export interface Itinerary {
	name: string;
	lat: number;
	lng: number;
}

export interface Highlight {
	id: number;
	text: string;
	description?: string;
	isNew?: boolean;
	icon: {
		url: string;
	};
}
export interface TourPackage {
	id: string;
	title: string;
	slug: string;
	desc?: string;
	subtitle: string;
	totalDays: number;
	groupSize: string;
	age: string;
	routes: Route[];
	categories: Category[];
	isFeatured: boolean;
	itinerary: Itinerary[];
	content?: string; // CKEditor5 custom field
	cover: Cover;
	gallery?: any[];
	customerPhotos?: any[];
	highlights: Highlight[];
	attractions: Attraction[];
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;
}

export type City = {
	title: string;
	slug: string;
	desc: string;
	documentId: string;
	content?: string;
	cover?: any;
};

export type Category = {
	title: string;
	slug: string;
	desc?: string;
	icon: {
		documentId: string;
		id: number;
		url: string;
	};
	documentId: string;
	id: number;
};
