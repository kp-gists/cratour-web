import { useQuery } from '@tanstack/react-query'
import { fetchAllCities, fetchCity } from '@/lib/query/city'
import { Pagination } from '@/types/common'

export const getAllCities = async () => {
	const data = await fetchAllCities({ page: 1, pageSize: 100, sort: 'asc' })
	return data.data // adjust if API response shape is different
}

export const useGetAllCities = ({ page = 1, pageSize = 25, sort = 'desc' }: Pagination) => {
	const {
		data: cities,
		isLoading,
		isError,
		error,
		refetch,
		isFetching,
	} = useQuery({
		queryKey: ['qk_cities'],
		queryFn: () => fetchAllCities({ page, pageSize, sort }),
	})
	return {
		cities,
		isLoading,
		isError,
		error,
		refetch,
		isFetching,
	}
}

export const useFetchAllCities = () => {
	return useQuery({
		queryKey: ['cities'],
		queryFn: getAllCities,
		staleTime: 1000 * 60 * 60 * 24 * 7, // cache for 1 week
	})
}

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
	})
	return {
		city,
		isLoading,
		isError,
		error,
		refetch,
	}
}
