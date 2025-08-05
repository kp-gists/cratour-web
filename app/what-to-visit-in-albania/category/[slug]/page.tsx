'use client'

import UnderConstruction from '@/components/UnderConstruction'
import { useParams } from 'next/navigation'
import React from 'react'

const CategoryPage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams()
	return (
		<div>
			<UnderConstruction title={params?.slug as string} />
		</div>
	)
}

export default CategoryPage
