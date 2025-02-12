import qs from 'qs';
import axios from 'axios';

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

export const fetchAllPackages = async () => {
	const query = qs.stringify(
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
	const query = qs.stringify(
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
