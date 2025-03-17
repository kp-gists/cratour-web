import NavbarService from './_comp/Navbar';

export default function ServiceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className=' relative'>
			<NavbarService />
			<div className=' p-4'>{children}</div>
		</div>
	);
}
