import { useQuery } from '@tanstack/react-query';
import { fetchAllCities, fetchCity } from '@/lib/query/city';

export const useGetAllCities = () => {
	const {
		data: cities,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_cities'],
		queryFn: fetchAllCities,
	});
	return {
		cities,
		isLoading,
		isError,
		error,
		refetch,
	};
};

export const useGetCity = (id: string) => {
	const {
		data: city,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_city'],
		queryFn: () => fetchCity(id),
	});
	return {
		city,
		isLoading,
		isError,
		error,
		refetch,
	};
};
