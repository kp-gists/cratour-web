// components/Breadcrumbs.tsx
'use client'

import Link from 'next/link'

interface Crumb {
	label: string
	href?: string
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
	return (
		<nav className='text-sm text-gray-600 mb-4'>
			<ol className='flex items-center flex-wrap gap-1'>
				<li>
					<Link href='/' className='hover:text-blue-600'>
						Home
					</Link>
				</li>
				{crumbs.map((crumb, i) => (
					<li key={i} className='flex items-center'>
						<span className='mx-1'>/</span>
						{crumb.href ? (
							<Link href={crumb.href} className='hover:text-blue-600'>
								{crumb.label}
							</Link>
						) : (
							<span className='text-gray-500'>{crumb.label}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
