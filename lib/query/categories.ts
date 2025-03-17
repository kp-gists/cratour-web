import QueryString from 'qs';
import axios from 'axios';
import { Pagination } from '@/types/common';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllCategories = async ({ page = 1, pageSize = 25, sort = 'asc' }: Pagination) => {
	const query = QueryString.stringify(
		{
			populate: '*',
			pagination: {
				page,
				pageSize,
			},
			sort: [`title:${sort}`],
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/categories?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log({ e }));
};
export const fetchCategory = async (slug: string) => {
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

	return axios
		.get(`${apiUrl}/categories?${query}`)
		.then((res) => res.data.data[0])
		.catch((e) => console.log({ e }));
};

export const fetchToursByCategorySlug = async ({ slug, pagination: { page = 1, pageSize = 25, sort = 'asc' } }: { pagination: Pagination; slug: string }) => {
	const query = QueryString.stringify(
		{
			filters: {
				categories: {
					slug: { $eq: slug },
				},
			},
			populate: '*',
			pagination: {
				page,
				pageSize,
			},
			sort: [`title:${sort}`],
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/tour-packages?${query}`)
		.then((res) => res.data.data)
		.catch((e) => console.log({ e }));
};
