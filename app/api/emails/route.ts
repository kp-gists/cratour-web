import { NextRequest, NextResponse } from 'next/server';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom'; // Import jsdom to simulate the DOM environment
import { sendEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
	const sender = {
		name: 'CraTour',
		address: 'kol.paja@gmail.com',
	};

	const recipients = [
		{
			name: 'kol.paja',
			address: 'kol.paja@gmail.com',
		},
	];

	const body = await req.json();
	console.log('🚀 ~ POST ~ body:', body);
	const window = new JSDOM('').window;
	const DOMPurify = createDOMPurify(window);
	const sanitizedMsg = DOMPurify.sanitize(body.notes);

	try {
		const res = await sendEmail({
			message: sanitizedMsg,
			sender,
			recipients,
			subject: `this is a subject`,
			title: `You got a message from ${body.fullName}: `,
			clientEmail: `clientEmail ${body.email}`,
		});
		console.log(res);
		return NextResponse.json({
			message: 'Email Sent successfully',
			response: res.accepted,
		});
	} catch (error) {
		console.log('🚀 ~ POST ~ error:', error);
		return NextResponse.json({
			msg: 'email sent error',
		});
	}
}
