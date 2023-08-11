'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { InputField } from 'components/InputField'
import { SendIcon } from 'components/icons/SendIcon'
import { SpinnerLoaderIcon } from 'components/icons/SpinnerLoaderIcon'

export function ContactForm() {
	const [nameInput, setNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [messageInput, setMessageInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const clearInputs = () => {
		setNameInput('')
		setEmailInput('')
		setMessageInput('')
	}

	const handleSubmit = e => {
		e.preventDefault()

		setIsLoading(true)
		fetch('https://nicohermida.com/api/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fromName: nameInput,
				fromEmail: emailInput,
				message: messageInput,
			}),
		})
			.then(res => {
				toast.success('Email sent successfully!')
				clearInputs()
			})
			.catch(err => {
				console.error(err)
				toast.error('Someting went wrong')
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<form
			className='w-[60%] my-16 flex flex-col items-center gap-8 sm:w-full'
			onSubmit={handleSubmit}
		>
			<div className='w-full flex gap-8 sm:flex-col'>
				<InputField
					label='Your Name'
					type='text'
					placeholder='Enter your name'
					id='name'
					isRequired
					value={nameInput}
					onChange={({ target }) => setNameInput(target.value)}
				/>

				<InputField
					label='Email Address'
					type='email'
					placeholder='Enter your email address'
					id='email'
					isRequired
					value={emailInput}
					onChange={({ target }) => setEmailInput(target.value)}
				/>
			</div>

			<div className='flex flex-col w-full sm:text-[12px] sm:text-center'>
				<label htmlFor='message' className='text-TEXT_SECONDRAY2'>
					Your Message
				</label>
				<textarea
					id='message'
					required
					placeholder="Hi, I'm excited to work together!"
					className=' bg-transparent resize-none border-b-2 border-PRIMARY focus:outline-none mt-2 p-2'
					value={messageInput}
					onChange={({ target }) => setMessageInput(target.value)}
				></textarea>
			</div>

			<button className='bg-PAYLOAD_BLUE h-[40px] w-[194px] flex items-center justify-center gap-2 [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite sm:text-[12px]'>
				{isLoading ? (
					<SpinnerLoaderIcon />
				) : (
					<>
						Send
						<SendIcon className='h-[20px] w-[20px] stroke-BASE_TEXT sm:h-[16px] sm:w-[16px]' />
					</>
				)}
			</button>
		</form>
	)
}
