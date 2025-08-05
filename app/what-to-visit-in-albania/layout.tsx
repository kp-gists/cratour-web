import DynamicBreadcrumbs from './_comp/DynamicBreadcrumbs'
import WhatToVisitNavbar from './_comp/Navbar'

export default function WhatToDoLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative'>
			<WhatToVisitNavbar />
			<div className='p-4 max-w-[1656px] mx-auto'>
				{/* ✅ Breadcrumbs available on all subpages */}
				<DynamicBreadcrumbs />
				{children}
			</div>
		</div>
	)
}
