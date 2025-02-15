import qs from 'qs';
import axios from 'axios';
import { Pagination } from '@/types/common';
import { ResTours } from '@/types/api';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const createTourPackagesQuery = ({ page = 1, pageSize = 25, populateRoutes = false }: { page?: number; pageSize?: number; populateRoutes?: boolean }) => {
	// Define the base query parameters
	const params: any = {
		pagination: {
			page,
			pageSize,
		},
		populate: {},
	};

	// Conditionally add the populate for routes if needed
	if (populateRoutes) {
		params.populate['routes'] = { populate: '*' };
	}

	// Serialize the query parameters into a query string
	const queryString = qs.stringify(params, {
		encodeValuesOnly: true, // Ensures that only the values are encoded
		arrayFormat: 'brackets', // Format for array parameters
	});

	return queryString;
};

// TODO like this
export const fetchAllTourPackages = async () => {
	const queryString = createTourPackagesQuery({ populateRoutes: true });
	const url = `${apiUrl}/tour-packages?${queryString}`;

	return axios
		.get(url)
		.then((res) => res.data)
		.catch((e) => console.log('🚀 ~ fetch fetchAllTourPackages ~ e:', e));
};

export const fetchAllPackages = async ({ page = 1, pageSize = 25, sort = 'desc' }: Pagination): Promise<ResTours> => {
	const query = qs.stringify(
		{
			populate: '*',
			pagination: {
				page,
				pageSize,
			},
			sort: [`publishedAt:${sort}`],
		},
		{
			encodeValuesOnly: true,
		},
	);
	// console.log(`${apiUrl}/tour-packages?${query}`);

	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log('🚀 ~ fetch cities ~ e:', e));
};

export const fetchPackageDetails = async (id: string) => {
	const query = qs.stringify(
		{
			populate: {
				routes: { populate: '*' },
				cover: { populate: '*' },
				gallery: { populate: '*' },
				customerPhotos: { populate: '*' },
				categories: {
					populate: {
						icon: { fields: ['url'] }, // Adjust based on what you need from icon
					},
					fields: ['slug', 'title'],
				},
				attractions: {
					populate: {
						cover: {
							fields: ['formats'],
						},
					},
					fields: ['slug', 'name'],
				},
				highlights: { populate: '*' },
				itinerary: { populate: '*' },
			},
		},
		{
			encodeValuesOnly: true,
		},
	);
	console.log('url:' + `${apiUrl}/tour-packages/${id}?${query}`);
	return axios
		.get(`${apiUrl}/tour-packages/${id}?${query}`)
		.then((res) => res.data)
		.catch((e) => {
			console.log('🚀 ~ fetchPackage ~ error:', e);
		});
};
