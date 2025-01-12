import NavbarService from './_components/NavbarService';

export default function ServiceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='h-screen relative overflow-y-scroll'>
			<NavbarService />
			<div className='h-full w-full p-4'>{children}</div>
		</div>
	);
}
