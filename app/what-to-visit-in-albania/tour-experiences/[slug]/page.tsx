'use client'

import ContactBanner from '@/components/ctas/ContactBanner'
import UnderConstruction from '@/components/UnderConstruction'
import { useParams } from 'next/navigation'
import React from 'react'

const ExperiencesPage = () => {
	// generated slugs or categories better to do it by static routes!
	const params = useParams()
	return (
		<div>
			<UnderConstruction title={params?.slug as string} />
			<ContactBanner />
		</div>
	)
}

export default ExperiencesPage
