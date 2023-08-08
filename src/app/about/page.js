import { ArgentinaFlagIcon } from 'components/icons/ArgentinaFlagIcon'
import { BackendIcon } from 'components/icons/BackendIcon'
import { FrontendIcon } from 'components/icons/FrontendIcon'
import { HandIcon } from 'components/icons/HandIcon'

export default function About() {
	return (
		<section className='min-h-screen max-w-appMWidth mx-auto px-6 relative flex items-center'>
			<div className='homeBackground absolute h-screen left-[-470px] top-0 w-full -z-10'></div>

			<div className='w-[60%] flex flex-col gap-2 justify-center'>
				<div className='font-bold'>
					<p className='text-[2rem] flex items-center gap-2'>
						Hello there! <HandIcon width='40px' height='40px' />
					</p>
					<p className='text-[1.5rem]'>
						My name is <span className='text-PRIMARY'>Nicolas Hermida</span>
					</p>
					<p className='text-[1rem] flex items-center gap-1'>
						I&apos;m a programmer, 23 years old, living in Argentina
						<ArgentinaFlagIcon width='20px' height='20px' />
					</p>
				</div>
				<p>
					Ever since I was young, I&apos;ve been fascinated by the world of
					computers and technology. Currently, I&apos;m a university student
					pursuing a degree in Computer Science.
				</p>
				<p>
					In 2019, I began self-studying web development, learning the
					fundamentals of HTML, CSS, and Javascript. Today, I possess a strong
					command of an extensive stack of frameworks and packages, enabling me
					to apply them effectively in both frontend and backend projects.
					Below, you will find some of the projects I have done to put into
					practice and improve my skills.
				</p>
				<p>
					If you have a project in mind and believe that I have the necessary
					capabilities, please do not hesitate to get in touch!
				</p>
				<p>
					Thank you for visiting my portfolio, and I hope you enjoy exploring my
					projects!
				</p>
			</div>

			<div className=' w-[40%] relative'>
				<div className='bg-BLACK_1 px-6 py-12 rounded-xl text-TEXT_SECONDRAY2 font-bold w-max flex flex-col items-center gap-4 absolute left-[100px] top-[-200px]'>
					<BackendIcon
						width='100px'
						height='100px'
						className='fill-TEXT_SECONDRAY2'
					/>
					<h3>Backend Developer</h3>
				</div>

				<div className='bg-BLACK_1 px-6 py-12 rounded-xl text-TEXT_SECONDRAY2 font-bold w-max flex flex-col items-center gap-4 absolute right-0 top-[-100px]'>
					<FrontendIcon
						width='100px'
						height='100px'
						className='fill-TEXT_SECONDRAY2'
					/>
					<h3>Frontend Developer</h3>
				</div>
			</div>
		</section>
	)
}
