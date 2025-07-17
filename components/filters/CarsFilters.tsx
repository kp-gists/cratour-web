'use client'

import CarCard from '@/app/visit-albania/services/_components/CarCard'
import { images } from '@/constants/images'
import { CarFilters, useGetCars } from '@/hooks/useGetCars'
import { RentACar } from '@/types/services'
import { Alert, Button, Card, Col, Row, Select, Spin, Tabs } from 'antd'
import { SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const { Option } = Select
const { TabPane } = Tabs

const defaultFilters: CarFilters = {
	type: undefined,
	fuelType: undefined,
	nrPeople: undefined,
	kamio: undefined,
}

const CarType = ['all', 'sedan', 'suv', 'mini-van']

const CarsFilters = () => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const [filters, setFilters] = useState<CarFilters>(() => ({
		type: (searchParams.get('type') as CarFilters['type']) || undefined,
		fuelType: (searchParams.get('fuelType') as CarFilters['fuelType']) || undefined,
		nrPeople: searchParams.get('nrPeople') ? Number(searchParams.get('nrPeople')) : undefined,
		kamio: (searchParams.get('kamio') as CarFilters['kamio']) || undefined,
	}))

	const clearFilters = () => setFilters({})

	const handleTabChange = (key: string) => {
		setFilters((prev) => ({
			...prev,
			type: key === 'all' ? undefined : (key as CarFilters['type']),
		}))
	}

	// Sync URL with state
	useEffect(() => {
		const query = new URLSearchParams()

		Object.entries(filters).forEach(([key, value]) => {
			if (value) query.set(key, value.toString())
		})

		router.replace(`?${query.toString()}`, { scroll: false })
	}, [filters, router])

	// Fetch cars based on filters
	const { cars, isLoading, isError } = useGetCars({
		page: 1,
		pageSize: 20,
		...filters,
	})

	const items = CarType.map((type) => ({
		key: type,
		label: type === 'all' ? 'All Cars' : type.toUpperCase(),
		// content mund ta vendosësh këtu, nëse ka
		children: null,
	}))

	return (
		<div className='flex flex-col mt-4 md:mt-6'>
			{/* Filters */}

			<div className='flex flex-col gap-2'>
				<div className='flex ml-4'>
					<SlidersHorizontal />
					<h4 className='ml-4 text-xl'>Filters:</h4>
				</div>
				<Row gutter={[16, 16]} className='px-4  w-full mx-auto'>
					<Col xs={24} sm={12} md={6}>
						<Select
							allowClear
							placeholder='Fuel Type'
							value={filters.fuelType}
							onChange={(value) => setFilters((prev) => ({ ...prev, fuelType: value }))}
							className='w-full'
						>
							<Option value='diesel'>Diesel</Option>
							<Option value='petrol'>Petrol</Option>
							<Option value='hybrid'>Hybrid</Option>
							<Option value='electric'>Electric</Option>
						</Select>
					</Col>
					<Col xs={24} sm={12} md={6}>
						<Select
							allowClear
							placeholder='Transmission'
							value={filters.kamio}
							onChange={(value) => setFilters((prev) => ({ ...prev, kamio: value }))}
							className='w-full'
						>
							<Option value='manual'>Manual</Option>
							<Option value='automat'>Automatic</Option>
						</Select>
					</Col>
					<Col xs={24} sm={12} md={2}>
						<Select
							allowClear
							placeholder='Seats'
							value={filters.nrPeople?.toString()}
							onChange={(value) => setFilters((prev) => ({ ...prev, nrPeople: value ? Number(value) : undefined }))}
							className='w-full'
						>
							<Option value='2'>2+</Option>
							<Option value='4'>4+</Option>
							<Option value='6'>6+</Option>
							<Option value='8'>8+</Option>
						</Select>
					</Col>

					<Col xs={24} sm={12} md={2}>
						<Button onClick={clearFilters} className=''>
							<Image src={images.funnelX} className='mx-1 ' width={18} height={18} alt='clear filter' /> Clear Filters
						</Button>
					</Col>
				</Row>
			</div>

			<div className='px-3 md:px-6 py-2'>
				{/* Car Type Tabs */}
				<Tabs defaultActiveKey={filters.type || 'all'} onChange={handleTabChange} items={items} />
			</div>

			{/* Loading & Error */}
			{isLoading && <Spin size='large' />}
			{isError && <Alert type='error' message='Failed to load cars. Please try again later.' showIcon />}

			{/* Car Grid */}
			<div id='list-cars'>
				<Row gutter={[24, 24]}>
					{cars &&
						cars.map((car: RentACar) => (
							<Col key={car.id} xs={24} sm={12} lg={8}>
								<CarCard {...car} />
							</Col>
						))}
				</Row>
			</div>

			{cars && cars.length === 0 && <Alert className='max-w-3xl mx-auto w-fit' message='No cars found for selected filters.' type='info' showIcon />}
		</div>
	)
}

export default CarsFilters
