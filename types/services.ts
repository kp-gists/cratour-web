import { Media } from './common'

export type ServiceType = 'transfer' | 'medical' | 'tour' | 'hotel' | 'rent-car'

export type TransmissionType = 'manual' | 'automat'
export type FuelType = 'diesel' | 'petrol' | 'hybrid' | 'electric'
export type CarType = 'sedan' | 'suv' | 'mini-van'

export interface RentACar {
	id: number
	name: string
	desc: string
	slug: string
	isAvailable: boolean
	cover: Media
	gallery?: Media[]
	model?: string
	nrSeats?: number
	nrDoors?: number
	nrLargeBags?: number
	nrSmallBags?: number
	kamio: TransmissionType
	hasAC: boolean
	nrChargePorts?: number
	engineCapacity?: number
	fuelType?: FuelType
	type?: CarType
	nrPeople?: number
}
