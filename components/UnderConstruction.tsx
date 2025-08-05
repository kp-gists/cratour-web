'use client'

import Image from 'next/image'
import Link from 'next/link'

interface UnderConstructionProps {
	title?: string
	description?: string
	primaryAction?: { label: string; href: string }
	secondaryAction?: { label: string; href: string }
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
	title = 'Page Under Construction',
	description = 'We’re working hard to bring you this feature soon. Stay tuned!',
	// <-- replace with your image path
	primaryAction,
	secondaryAction,
}) => {
	const imageSrc = '/svg/Under construction.svg'
	return (
		<div className='flex flex-col items-center justify-center text-center min-h-[70vh] px-4 py-10'>
			{/* Image */}
			<div className='relative w-[500px] h-[500px] mb-6'>
				<Image src={imageSrc} alt='Under Construction' fill className='object-contain' />
			</div>

			{/* Title */}
			<h1 className='text-3xl md:text-5xl font-bold mb-3'>{title}</h1>

			{/* Description */}
			<p className='text-gray-600 max-w-xl mx-auto mb-6'>{description}</p>

			{/* Actions */}
			<div className='flex gap-4 flex-wrap justify-center'>
				{primaryAction && (
					<Link
						href={primaryAction.href}
						className='px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition'
					>
						{primaryAction.label}
					</Link>
				)}
				{secondaryAction && (
					<Link href={secondaryAction.href} className='px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition'>
						{secondaryAction.label}
					</Link>
				)}
			</div>
		</div>
	)
}

export default UnderConstruction
