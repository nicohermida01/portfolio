import Link from 'next/link'

import { GithubIcon } from 'components/icons/GithubIcon'
import { LinkedInIcon } from 'components/icons/LinkedinIcon'
import { InstagramIcon } from 'components/icons/InstagramIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'
import { ContactForm } from 'components/ContactForm'

const iconSize = '20px'

export default function Contact() {
	return (
		<section className='min-h-screen max-w-appMWidth mx-auto px-6 text-BASE_TEXT flex flex-col items-center justify-center relative'>
			<div className='homeBackground absolute top-[-150px] h-screen w-[50%] -z-10'></div>

			<h2 className='text-[2rem] font-bold flex flex-col items-center'>
				Send me a message!
				<span className='text-base text-TEXT_SECONDRAY2'>
					Let&apos;s Connect! Reach out to me and let&apos;s build something
					great together.
				</span>
			</h2>

			<ContactForm />

			<div className='flex flex-col items-center text-TEXT_SECONDRAY2'>
				<span> OR </span>
				<span>Find me on these online spaces too!</span>

				<div className='flex items-center gap-8 mt-6'>
					<Link href='https://github.com/nicohermida01' target='_blank'>
						<GithubIcon
							width={iconSize}
							height={iconSize}
							className='fill-TEXT_SECONDRAY2 hover:fill-BASE_TEXT defaultTransition'
						/>
					</Link>

					<Link
						href='https://www.linkedin.com/in/nico-hermida/'
						target='_blank'
					>
						<LinkedInIcon
							width={iconSize}
							height={iconSize}
							className='fill-TEXT_SECONDRAY2 hover:fill-LINKEDIN defaultTransition'
						/>
					</Link>

					<Link href='https://www.instagram.com/nicohermida1/' target='_blank'>
						<InstagramIcon
							width={iconSize}
							height={iconSize}
							className='fill-TEXT_SECONDRAY2 hover:fill-INSTAGRAM defaultTransition'
						/>
					</Link>

					<Link href='https://twitter.com/nico_hermida' target='_blank'>
						<TwitterIcon
							width={iconSize}
							height={iconSize}
							className='fill-TEXT_SECONDRAY2 hover:fill-TWITTER defaultTransition'
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}
