import DynamicBreadcrumbs from './_comp/DynamicBreadcrumbs'
import NavbarService from './_comp/Navbar'

export default function WhatToDoLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative'>
			<NavbarService />
			<div className='p-4 max-w-[1656px] mx-auto'>
				{/* ✅ Breadcrumbs available on all subpages */}
				<DynamicBreadcrumbs />
				{children}
			</div>
		</div>
	)
}
