import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cratour | Home',
};

export default function WrapLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
