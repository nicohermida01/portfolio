import 'server-only'
import { Resend } from 'resend'

import { EmailTemplate } from 'components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

const sendEmail = async input => {
	const data = await resend.emails.send({
		from: 'Portfolio <noreply@nicohermida.com>',
		to: ['hermida.nicolas101@gmail.com'],
		subject: `New message from: ${input.fromName}`,
		react: EmailTemplate({
			name: input.fromName,
			mail: input.fromEmail,
			message: input.message,
		}),
	})

	return data
}

export const emailService = {
	sendEmail,
}
