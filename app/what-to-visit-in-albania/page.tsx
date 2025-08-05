import React from 'react'

import { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'
import ContactBanner from '@/components/ctas/ContactBanner'

export const metadata: Metadata = {
	title: 'Cratour | Home',
}

const WhatToVisitInAlbaniaPage = () => {
	return (
		<div>
			<UnderConstruction title={'What To Visit In Albania Page'} />
			<ContactBanner />
		</div>
	)
}

export default WhatToVisitInAlbaniaPage
