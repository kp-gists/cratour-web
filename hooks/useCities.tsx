import { useQuery } from '@tanstack/react-query';
import { fetchAllAttractions } from '@/lib/query/attractions';
import { fetchCity } from '@/lib/query/city';

export const useGetAllCities = () => {
	const {
		data: cities,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_cities'],
		queryFn: fetchAllAttractions,
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
