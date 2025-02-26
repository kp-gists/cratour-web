import QueryString from 'qs';
import axios from 'axios';
import { Pagination } from '@/types/common';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllAttractions = async ({ page = 1, pageSize = 25, sort = 'desc' }: Pagination) => {
	const query = QueryString.stringify(
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
	console.log(`${apiUrl}/city-attractions?${query}`);

	return axios
		.get(`${apiUrl}/city-attractions?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log({ e }));
};
export const fetchAttraction = async (slug: string) => {
	const query = QueryString.stringify(
		{
			filters: {
				slug: { $eq: slug }, // Filtering by slug
			},
			populate: '*',
		},
		{
			encodeValuesOnly: true,
		},
	);
	console.log(`${apiUrl}/city-attractions?${query}`);

	return axios
		.get(`${apiUrl}/city-attractions?${query}`)
		.then((res) => res.data.data[0])
		.catch((e) => console.log({ e }));
};
export const fetchToursByAttractionSlug = async (slug: string) => {
	const query = QueryString.stringify(
		{
			filters: {
				attractions: {
					slug: { $eq: slug },
				},
			},
			populate: '*',
		},
		{
			encodeValuesOnly: true,
		},
	);
	console.log(`${apiUrl}/city-attractions?${query}`);

	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data.data)
		.catch((e) => console.log({ e }));
};
