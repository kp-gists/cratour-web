import { useQuery } from '@tanstack/react-query';
import { fetchAllCities, fetchCity } from '@/lib/query/city';
import { Pagination } from '@/types/common';

export const useGetAllCities = ({ page = 1, pageSize = 25, sort = 'desc' }: Pagination) => {
	const {
		data: cities,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_cities'],
		queryFn: () => fetchAllCities({ page, pageSize, sort }),
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
