import { NextRequest, NextResponse } from 'next/server';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom'; // Import jsdom to simulate the DOM environment
import { sendEmail, sendEmailTransfert } from '@/lib/email';

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
		{
			name: 'CraTour',
			address: 'cratour.al@gmail.com',
		},
	];

	const body = await req.json();
	console.log('🚀 ~ POST ~ body:', body);
	const window = new JSDOM('').window;
	const DOMPurify = createDOMPurify(window);
	const sanitizedMsg = DOMPurify.sanitize(body.notes);
	// subject
	// service type
	// email
	// notes
	if (body.serviceType == 'transfer') {
		try {
			const res = await sendEmailTransfert({
				message: sanitizedMsg,
				sender,
				recipients,
				subject: body.subject,
				title: `You got a message for  ${body.serviceType}: `,
			});
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
	} else {
		try {
			const res = await sendEmail({
				message: sanitizedMsg,
				sender,
				recipients,
				subject: body.subject,
				title: `You got a message for  ${body.serviceType}: `,
				clientEmail: `${body.email}`,
			});
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
}
