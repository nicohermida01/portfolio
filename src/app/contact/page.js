import Link from 'next/link'

import { GithubIcon } from 'components/icons/GithubIcon'
import { LinkedInIcon } from 'components/icons/LinkedinIcon'
import { InstagramIcon } from 'components/icons/InstagramIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'
import { ContactForm } from 'components/ContactForm'

const iconClass = 'h-[20px] w-[20px] sm:w-[18px] sm:h-[18px]'

export default function Contact() {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center relative sm:pt-[130px] sm:pb-[100px]'>
			<div className='homeBackground absolute top-[-150px] h-screen w-[50%] -z-10 lg:w-full sm:top-[-210px]'></div>

			<h2 className='text-[2rem] font-bold flex flex-col items-center text-center sm:text-[20px]'>
				Send me a message!
				<span className='text-base text-TEXT_SECONDRAY2 sm:text-[12px]'>
					Let&apos;s Connect! Reach out to me and let&apos;s build something
					great together.
				</span>
			</h2>

			<ContactForm />

			<div className='flex flex-col items-center text-TEXT_SECONDRAY2 sm:text-[12px]'>
				<span> OR </span>
				<span>Find me on these online spaces too!</span>

				<div className='flex items-center gap-8 mt-6'>
					<Link
						href='https://github.com/nicohermida01'
						aria-label='Go to my github profile'
						target='_blank'
					>
						<GithubIcon
							className={`${iconClass} fill-TEXT_SECONDRAY2 hover:fill-BASE_TEXT defaultTransition`}
						/>
					</Link>

					<Link
						href='https://www.linkedin.com/in/nico-hermida/'
						target='_blank'
						aria-label='Go to my linkedin profile'
					>
						<LinkedInIcon
							className={`${iconClass} fill-TEXT_SECONDRAY2 hover:fill-LINKEDIN defaultTransition`}
						/>
					</Link>

					<Link
						href='https://www.instagram.com/nicohermida1/'
						aria-label='Go to my instagram profile'
						target='_blank'
					>
						<InstagramIcon
							className={`${iconClass} fill-TEXT_SECONDRAY2 hover:fill-INSTAGRAM defaultTransition`}
						/>
					</Link>

					<Link
						href='https://twitter.com/nico_hermida'
						aria-label='Go to my twitter profile'
						target='_blank'
					>
						<TwitterIcon
							className={`${iconClass} fill-TEXT_SECONDRAY2 hover:fill-TWITTER defaultTransition`}
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}
