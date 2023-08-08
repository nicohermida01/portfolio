import 'server-only'

import nodemailer from 'nodemailer'

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL
const NODEMAILER_PW = process.env.NODEMAILER_PW

export async function sendEmail(input) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: NODEMAILER_EMAIL,
			pass: NODEMAILER_PW,
		},
	})

	const mailOptions = {
		from: input.fromEmail,
		to: NODEMAILER_EMAIL,
		subject: 'Portfolio new message',
		html: `<div>
			<p>From: ${input.fromEmail}</p>
			<p>Name: ${input.fromName}</p>
			<p>Message: ${input.message}</p>
		</div>`,
	}

	return await transporter.sendMail(mailOptions)
}
