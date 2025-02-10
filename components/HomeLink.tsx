import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeLink = ({ styles }: { styles?: string }) => {
	return (
		<Link href={'/'} className={styles} title='Home | cratour.al'>
			<Image alt='go home cratour.al' src='/png/home.png' width={28} height={28} className='' />
		</Link>
	);
};

export default HomeLink;
