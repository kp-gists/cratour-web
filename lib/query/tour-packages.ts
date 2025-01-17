import QueryString from 'qs';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllPackages = async () => {
	const query = QueryString.stringify(
		{
			populate: '*',
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

export const fetchPackage = async (id: string) => {
	const query = QueryString.stringify(
		{
			populate: '*',
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/tour-packages/${id}?${query}`)
		.then((res) => res.data)
		.catch((e) => {
			console.log('🚀 ~ fetch city ~ e:', e);
		});
};
