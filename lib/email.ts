import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ReactNode } from 'react';

const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	service: 'gmail',
	post: process.env.MAIL_PORT,
	secure: process.env.NODE_ENV !== 'development', //true
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
} as SMTPTransport.Options);

type SendEmailDTO = {
	sender: Mail.Address;
	recipients: Mail.Address[];
	subject: string;
	clientEmail: string;
	message: string | ReactNode;
	title: string;
};

export const sendEmail = async (dto: SendEmailDTO) => {
	const { message, recipients, sender, title, clientEmail, subject } = dto;

	return await transport.sendMail({
		from: sender,
		to: recipients,
		subject,
		html: `<div>
    <h3>${title}</h3>
    <p>${message}</p>
    <h4>client email: <strong>${clientEmail}</strong></h4>
    </div>`,
		text: title,
	});
};
