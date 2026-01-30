import Link from 'next/link'

import { HomeHeading } from 'components/HomeHeading'
import { JavascriptIcon } from 'components/icons/JavascriptIcon'
import { TypescriptIcon } from 'components/icons/TypescriptIcon'
import { PythonIcon } from 'components/icons/PythonIcon'
import { JavaIcon } from 'components/icons/JavaIcon'
import { GolangIcon } from 'components/icons/GolangIcon'
import { NextjsIcon } from 'components/icons/NextjsIcon'
import { ReactIcon } from 'components/icons/ReactIcon'
import { NestjsIcon } from 'components/icons/NestjsIcon'
import { MongoDBIcon } from 'components/icons/MongoDBIcon'
import { SendIcon } from 'components/icons/SendIcon'
import { ScrollDownIcon } from 'components/icons/ScrollDownIcon'
import { CV_FILE_PATH } from 'constants/assets'

const iconClassName = 'w-[50px] h-[50px] sm:w-[24px] sm:h-[24px]'

export function HomeSection() {
	return (
		<section className='min-h-screen w-full relative flex items-center lg:flex-col lg:justify-center sm:gap-[30px] lg:gap-[70px]'>
			<div className='homeBackground absolute left-[-400px] h-screen w-[100%] -z-10 lg:left-0 sm:!top-[-170px] lg:top-[-210px]'></div>

			<div className='w-[70%] lg:w-full'>
				<HomeHeading />

				<div className='mt-10 flex gap-4 items-center sm:text-[12px] lg:justify-center 2sm:flex-col sm:mt-[20px]'>
					<Link
						href='/contact'
						aria-label='Go to contact page'
						className='bg-PAYLOAD_BLUE px-6 py-3 rounded-3xl flex items-center gap-1 [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
					>
						Contact me
						<SendIcon className='h-[20px] w-[20px] stroke-BASE_TEXT sm:h-[16px] sm:w-[16px]' />
					</Link>

					<Link
						href={CV_FILE_PATH}
						aria-label='Download my curriculum'
						target='_blank'
						className='border-GRAY_1 border-2 px-6 py-3 rounded-3xl defaultTransition hover:border-GRAY_1HOVER'
					>
						Download CV
					</Link>
				</div>
			</div>

			<div className='w-[30%] grid grid-cols-3 gap-[16px] place-items-center lg:w-full'>
				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-three '>
					<JavascriptIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-one '>
					<TypescriptIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-three '>
					<PythonIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-two '>
					<JavaIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-four '>
					<GolangIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-one '>
					<NextjsIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-four '>
					<ReactIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-five '>
					<NestjsIcon className={iconClassName} />
				</div>

				<div className='w-max h-max bg-BLACK_1 p-6 rounded-xl grid justify-center place-items-center sm:p-[18px] sm:rounded-md floating-two '>
					<MongoDBIcon className={iconClassName} />
				</div>
			</div>

			<Link
				href='#projects'
				aria-label='Go to projects section'
				className='w-max flex items-center gap-2 absolute bottom-10 text-TEXT_SECONDARY1 animate-bounce animate-infinite animate-duration-[1300ms] sm:text-[12px]'
			>
				View projects
				<ScrollDownIcon className='h-[24px] w-[24px] stroke-TEXT_SECONDARY1 sm:w-[18px] sm:h-[18px]' />
			</Link>
		</section>
	)
}
