import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex justify-center items-center gap-4 pt-4 flex-col'>
			<h1>Hi CraTour</h1>
			<Image src={'/svg/Trip-amico.svg'} width={500} height={500} alt='asd' />
		</div>
	);
}
