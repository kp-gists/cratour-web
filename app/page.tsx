import Landing from '@/components/landing';
import './globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cratour | Home',
};

export default function Home() {
	return (
		<div className='w-full flex justify-center items-center overflow-x-hidden flex-col pb-10 '>
			<Landing />
		</div>
	);
}
