'use client'

import CitiesLayout from '@/components/landing/CitiesLayout'
import ContactUs from '@/components/landing/ContactUs'
import Hero from '@/components/landing/Hero'
import Services from '@/components/landing/Services'
import TravelLayout from '@/components/landing/TravelLayout'
import { languageIds } from '@/constants/locales'
import { notFound, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DynamicLanguagePage = () => {
	const { lang } = useParams()

	const [isValid, setIsValid] = useState<boolean | null>(null)

	useEffect(() => {
		if (!lang || typeof lang !== 'string') return

		if (!languageIds.includes(lang)) {
			setIsValid(false)
		} else {
			setIsValid(true)
		}
	}, [lang])

	if (isValid === false) return notFound()
	if (isValid === null) return null //

	// TODO add the languages to each component

	return (
		<div className='w-full flex justify-center items-center  flex-col pb-10  h-full overflow-y-scroll '>
			{/* TODO landing in other langs */}
			<h1>lang :{lang}</h1>

			{/* HERO section */}
			<Hero />

			<Services />

			<TravelLayout />

			{/* City layout */}
			<CitiesLayout />

			{/* Tours Layout simple descriptions with ctas */}

			{/* Travel features things to do on a tour */}

			<ContactUs />
		</div>
	)
}

export default DynamicLanguagePage
