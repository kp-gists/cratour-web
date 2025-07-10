import { fetchAllCars } from '@/lib/query/cars'
import { Pagination } from '@/types/common'
import { useQuery } from '@tanstack/react-query'

export interface CarFilters {
	type?: 'sedan' | 'suv' | 'mini-van'
	fuelType?: 'diesel' | 'petrol' | 'hybrid' | 'electric'
	nrPeople?: number
	kamio?: 'manual' | 'automat'
}

interface UseGetCarsProps extends Pagination, CarFilters {}

export const useGetCars = ({ page = 1, pageSize = 25, sort = 'desc', type, fuelType, nrPeople = 4, kamio }: UseGetCarsProps) => {
	const {
		data: cars = [],
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ['qk_cars', { page, pageSize, sort, type, fuelType, nrPeople, kamio }],
		queryFn: () =>
			fetchAllCars({
				page,
				pageSize,
				sort,
				filters: {
					type,
					fuelType,
					nrPeople,
					kamio,
				},
			}),
		placeholderData: [],
	})

	return {
		cars,
		isLoading,
		isError,
		error,
		refetch,
	}
}
