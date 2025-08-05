'use client'

import Breadcrumbs from '@/components/Breadcrumbs'
import { usePathname } from 'next/navigation'

// Map from your whatTodoLinks array
const linkMap: Record<string, { label: string; href?: string }> = {
	'what-to-visit-in-albania': {
		label: 'What To Visit in Albania',
		href: '/what-to-visit-in-albania',
	},
	attractions: { label: 'All Attractions' },
	cities: { label: 'All Cities' },
	category: { label: 'Categories' },
	'frequently-asked-questions': { label: 'Questions/Answers' },
	'what-to-do': { label: 'What To Do!' },
	'tour-experiences': { label: 'Experiences' },
}

export default function DynamicBreadcrumbs() {
	const pathname = usePathname() // e.g. /what-to-visit-in-albania/cities
	const segments = pathname.split('/').filter(Boolean)

	const crumbs = segments.map((segment, index) => {
		const href = '/' + segments.slice(0, index + 1).join('/')
		const key = segment as keyof typeof linkMap
		return {
			label: linkMap[key]?.label || segment,
			href: index < segments.length - 1 ? href : undefined, // last crumb is not a link
		}
	})

	return (
		<div className='my-10 ml-4 md:ml-10'>
			<Breadcrumbs crumbs={crumbs} />
		</div>
	)
}
