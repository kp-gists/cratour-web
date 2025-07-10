import { RentACar } from '@/types/services'
import { Button, Modal, Tooltip, Image as AntdImage } from 'antd'
import { Luggage, User2 } from 'lucide-react'
import Image from 'next/image'

import React, { useState } from 'react'

const CarCard = ({
	cover,
	name,
	nrPeople,
	nrLargeBags,
	nrDoors,
	kamio,
	desc,
	hasAC,
	isAvailable,
	engineCapacity,
	slug,
	id,
	fuelType,
	gallery,
	model,
	nrChargePorts,
	nrSeats,
	nrSmallBags,
	type,
}: RentACar) => {
	const [open, setOpen] = useState(false)

	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(false)

	return (
		<div className='w-72 h-[270px] flex flex-col gap-2 border border-gray-200 rounded-md hover:border-gray-400 bg-gray-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-3 md:px-4'>
			<div className='w-full h-fit flex justify-center items-center'>
				<Image src={cover.url} width={200} className='bg-cover' height={100} alt={name} />
			</div>
			<h1 className='text-lg font-bold'>{name}</h1>

			<div className='flex items-center gap-4'>
				{kamio === 'automat' ? (
					<Tooltip arrow title={kamio + ' transmission'} className='flex items-center gap-1'>
						<Image src='/png/automatic-transmission.png' width={24} height={24} alt={kamio} />
					</Tooltip>
				) : (
					<Tooltip arrow title={kamio + ' transmission'} className='flex items-center gap-1'>
						<Image src='/png/automatic-transmission.png' width={24} height={24} alt={kamio} />
					</Tooltip>
				)}

				<Tooltip arrow title={nrPeople + ' Adults Passengers'} className='flex items-center gap-1'>
					<User2 />
					<span className='text-lg font-bold'>{nrPeople}</span>
				</Tooltip>

				<Tooltip arrow title={nrLargeBags + ' large bags'} className='flex items-center gap-1'>
					<Luggage />
					<span className='text-lg font-bold'>{nrLargeBags}</span>
				</Tooltip>

				<Tooltip arrow title={nrDoors + ' doors'} className='flex items-center gap-1'>
					<Image src='/svg/car-door.svg' width={24} height={24} alt='car-dor' />
					<span className='text-lg font-bold'>{nrDoors}</span>
				</Tooltip>
			</div>

			<div className='w-fill px-2 justify-end flex  items-center'>
				<Button type='link' onClick={onOpen}>
					View More
				</Button>
			</div>

			<Modal onClose={onClose} onCancel={onClose} width={700} open={open} centered>
				<div className='space-y-4'>
					<h1 className='text-2xl font-bold'>{name}</h1>

					{/* Main Image */}
					<Image src={cover?.url || '/placeholder.jpg'} alt={name} width={640} height={360} className='rounded-md w-full object-cover' />

					{/* Description */}
					{desc && <p className='text-gray-700'>{desc}</p>}

					{/* Car Info Grid */}
					<div className='grid grid-cols-2 gap-4 mt-4 text-sm'>
						<div>
							<strong>Transmission:</strong> {kamio}
						</div>
						<div>
							<strong>Fuel Type:</strong> {fuelType}
						</div>
						<div>
							<strong>Seats:</strong> {nrSeats ?? '-'}
						</div>
						<div>
							<strong>Doors:</strong> {nrDoors ?? '-'}
						</div>
						<div>
							<strong>Passengers:</strong> {nrPeople ?? '-'}
						</div>
						<div>
							<strong>Large Bags:</strong> {nrLargeBags ?? '-'}
						</div>
						<div>
							<strong>Small Bags:</strong> {nrSmallBags ?? '-'}
						</div>
						<div>
							<strong>Air Conditioning:</strong> {hasAC ? 'Yes' : 'No'}
						</div>
						<div>
							<strong>Charging Ports:</strong> {nrChargePorts ?? '0'}
						</div>
						<div>
							<strong>Engine Capacity:</strong> {engineCapacity ?? '-'} L
						</div>
					</div>

					{/* Gallery Thumbnails (if available) */}
					{gallery && gallery.length > 0 && (
						<div className='pt-4'>
							<h2 className='font-semibold mb-2'>Gallery</h2>
							<div className='grid grid-cols-3 gap-2'>
								{gallery.map((media) => (
									<AntdImage key={media.id} src={media.url} alt={media.name} width={200} height={130} className='rounded object-cover w-full h-[130px]' />
								))}
							</div>
						</div>
					)}
				</div>
				{/* TODO add the action buttons */}
				{/* whatsapp and email form */}
			</Modal>
		</div>
	)
}

export default CarCard
