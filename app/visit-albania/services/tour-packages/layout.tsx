import { Metadata } from 'next';

// TODO add seo
export const metadata: Metadata = {
	title: 'Our Tours',
};

export default function ToursLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}
