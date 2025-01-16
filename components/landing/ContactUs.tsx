import React from 'react';
import Contact from '../Contact';
import SatisfyText from '../ui/SatisfyText';

const ContactUs = () => {
	return (
		<div className='flex flex-col justify-start gap-4 p-4 md:p-10 border-2 border-dashed rounded-lg border-cyan-500  my-10 md:my-16 mx-4 md:mx-6 overflow-hidden'>
			<SatisfyText className='text-xl md:text-3xl'>Contact Us via our form:</SatisfyText>
			<Contact />
		</div>
	);
};

export default ContactUs;
