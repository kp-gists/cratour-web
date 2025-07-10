import { Pagination } from '@/types/common'
import axios from 'axios'
import QueryString from 'qs'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

interface CarFilters {
	type?: 'sedan' | 'suv' | 'mini-van'
	fuelType?: 'diesel' | 'petrol' | 'hybrid' | 'electric'
	kamio?: 'manual' | 'automat'
	nrPeople?: number
}

interface FetchCarsFilters {
	page: number
	pageSize: number
	sort?: string
	filters?: CarFilters
}

const buildCarQuery = ({
	type,
	fuelType,
	kamio,
	nrPeople,
	page = 1,
	pageSize = 10,
	sort = 'desc',
}: CarFilters & { page?: number; pageSize?: number; sort?: string }) => {
	const filters: any = {}

	if (type) filters.type = { $eq: type }
	if (fuelType) filters.fuelType = { $eq: fuelType }
	if (kamio) filters.kamio = { $eq: kamio }
	if (nrPeople !== undefined) filters.nrPeople = { $gte: nrPeople }

	const query = QueryString.stringify(
		{
			pagination: { page, pageSize },
			sort: [`createdAt:${sort}`], // use the passed sort
			filters,
			populate: '*',
		},
		{ encodeValuesOnly: true },
	)

	return query
}

export const fetchAllCars = async ({ page, pageSize, sort = 'desc', filters = {} }: FetchCarsFilters) => {
	const query = buildCarQuery({ ...filters, page, pageSize, sort })

	console.log(`${apiUrl}/rent-a-cars?${query}`)

	return axios
		.get(`${apiUrl}/rent-a-cars?${query}`)
		.then((res) => res.data?.data || [])
		.catch((e) => {
			console.log('🚀 ~ fetchPackageDetailsBySlug ~ error:', e)
		})
}
