import { ArgentinaFlagIcon } from 'components/icons/ArgentinaFlagIcon'
import { BackendIcon } from 'components/icons/BackendIcon'
import { FrontendIcon } from 'components/icons/FrontendIcon'
import { HandIcon } from 'components/icons/HandIcon'

export default function About() {
	return (
		<section className='h-screen relative flex items-center lg:flex-col lg:py-[200px] sm:!py-[100px]'>
			<div className='homeBackground absolute h-screen left-[-470px] top-0 w-full -z-10 lg:left-0 lg:top-[-240px] sm:!top-[-210px]'></div>

			<div className='w-[60%] flex flex-col gap-2 justify-center lg:w-full lg:text-center sm:text-[12px]'>
				<div className='font-bold'>
					<p className='text-[2rem] flex items-center gap-2 lg:justify-center sm:text-[20px]'>
						Hello there!{' '}
						<HandIcon className='h-[40px] w-[40px] sm:w-[30px] sm:h-[30px]' />
					</p>
					<p className='text-[1.5rem] sm:text-[18px]'>
						My name is <span className='text-PRIMARY'>Nicolas Hermida</span>
					</p>
					<p className='text-[1rem] flex items-center gap-1 lg:flex-col'>
						I&apos;m a programmer, 23 years old, living in Argentina
						<ArgentinaFlagIcon className='h-[20px] w-[20px]' />
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

			<div className='w-[40%] relative text-center lg:w-full lg:static lg:flex lg:justify-center lg:gap-[10px] lg:mt-[40px] '>
				<div className='bg-BLACK_1 px-6 py-12 rounded-xl text-TEXT_SECONDRAY2 font-bold w-max flex flex-col items-center gap-4 absolute left-[100px] top-[-200px] lg:static sm:p-[24px]'>
					<BackendIcon className='w-[100px] h-[100px] fill-TEXT_SECONDRAY2 sm:w-[50px] sm:h-[50px]' />
					<h3 className='sm:text-[12px]'>Backend Developer</h3>
				</div>

				<div className='bg-BLACK_1 px-6 py-12 rounded-xl text-TEXT_SECONDRAY2 font-bold w-max flex flex-col items-center gap-4 absolute right-0 top-[-100px] lg:static sm:p-[24px]'>
					<FrontendIcon className='w-[100px] h-[100px] fill-TEXT_SECONDRAY2 sm:w-[50px] sm:h-[50px]' />
					<h3 className='sm:text-[12px]'>Frontend Developer</h3>
				</div>
			</div>
		</section>
	)
}
