/* eslint-disable @typescript-eslint/no-explicit-any */
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

	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log('🚀 ~ fetch cities ~ e:', e));
};
export const fetchAllPackagesInfinite = async ({ pageParam, sort }: any) => {
	console.log('🚀 ~ fetchAllPackagesInfinite ~ sort:', sort);
	const query = qs.stringify(
		{
			populate: '*',
			pagination: {
				page: pageParam,
				pageSize: 10,
			},
			// sort: [`publishedAt:${sort}`],
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log('🚀 ~ fetch cities ~ e:', e));
};

export const fetchPackageDetailsBySlug = async (slug: string) => {
	const query = qs.stringify(
		{
			filters: {
				slug: { $eq: slug }, // Filtering by slug
			},
			populate: {
				routes: { populate: '*' },
				cover: { populate: '*' },
				gallery: { populate: '*' },
				customerPhotos: { populate: '*' },
				categories: {
					populate: {
						icon: { fields: ['url'] },
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
				seo: {
					populate: '*',
				},
			},
		},
		{
			encodeValuesOnly: true,
		},
	);
	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data.data[0]) // Assuming you get an array and only need the first result
		.catch((e) => {
			console.log('🚀 ~ fetchPackageDetailsBySlug ~ error:', e);
		});
};
export const fetchSeoPackageDetailsBySlug = async (slug: string) => {
	const query = qs.stringify(
		{
			filters: {
				slug: { $eq: slug }, // Filtering by slug
			},
			populate: {
				seo: {
					fields: ['metaTitle', 'metaDescription', 'keywords', 'canonical'],
					populate: {
						shareImage: {
							fields: ['url'],
						},
					},
				},
				cover: {
					fields: ['url'],
				},
			},
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data.data[0]) // Assuming you get an array and only need the first result
		.catch((e) => {
			console.log('🚀 ~ seo tour ~ error:', e);
		});
};
