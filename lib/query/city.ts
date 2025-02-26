import QueryString from 'qs';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// ? cra-tour => city

// todo add the pagination for each of this
export const fetchAllCities = async () => {
	const query = QueryString.stringify(
		{
			populate: '*',
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/cra-tours?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log('🚀 ~ fetch cities ~ e:', e));
};

export const fetchCity = async (id: string) => {
	const query = QueryString.stringify(
		{
			populate: '*',
		},
		{
			encodeValuesOnly: true,
		},
	);

	return axios
		.get(`${apiUrl}/cra-tours/${id}?${query}`)
		.then((res) => res.data)
		.catch((e) => {
			console.log('🚀 ~ fetch city ~ e:', e);
		});
};
