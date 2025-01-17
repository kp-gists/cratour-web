import QueryString from 'qs';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllAttractions = async () => {
	const query = QueryString.stringify(
		{
			populate: '*',
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
export const fetchAttraction = async (id: string) => {
	const query = QueryString.stringify(
		{
			populate: '*',
		},
		{
			encodeValuesOnly: true,
		},
	);
	console.log(`${apiUrl}/city-attractions/${id}?${query}`);

	return axios
		.get(`${apiUrl}/city-attractions/${id}?${query}`)
		.then((res) => res.data)
		.catch((e) => console.log({ e }));
};
