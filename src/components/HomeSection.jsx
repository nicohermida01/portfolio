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

const iconSize = '50px'

const technologies = {
	js: <JavascriptIcon width={iconSize} height={iconSize} />,
	ts: <TypescriptIcon width={iconSize} height={iconSize} />,
	py: <PythonIcon width={iconSize} height={iconSize} />,
	java: <JavaIcon width={iconSize} height={iconSize} />,
	go: <GolangIcon width={iconSize} height={iconSize} />,
	next: <NextjsIcon width={iconSize} height={iconSize} />,
	react: <ReactIcon width={iconSize} height={iconSize} />,
	nest: <NestjsIcon width={iconSize} height={iconSize} />,
	mongo: <MongoDBIcon width={iconSize} height={iconSize} />,
}

export function HomeSection() {
	return (
		<section className='min-h-screen flex flex-col justify-center max-w-appMWidth mx-auto px-6 relative'>
			<div className='homeBackground absolute left-[-400px] h-screen w-[100%] -z-10'></div>

			<HomeHeading />

			<div className='mt-10 flex gap-4 items-center'>
				<Link
					href='/contact'
					className='bg-PAYLOAD_BLUE px-6 py-3 rounded-3xl flex items-center gap-1 [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
				>
					Contact me
					<SendIcon width='20px' height='20px' stroke='#fff' />
				</Link>

				<Link
					href='/nicohermida-cv-en.pdf'
					target='_blank'
					className='border-GRAY_1 border-2 px-6 py-3 rounded-3xl defaultTransition hover:border-GRAY_1HOVER'
				>
					Download CV
				</Link>
			</div>

			<div className='flex gap-6 flex-wrap items-center justify-center absolute right-0 w-[400px]'>
				{Object.values(technologies).map((icon, i) => {
					return (
						<div key={i} className='bg-BLACK_1 p-6 w-max rounded-xl'>
							{icon}
						</div>
					)
				})}
			</div>

			<Link
				href='#projects'
				className='w-max flex gap-2 absolute bottom-10 text-TEXT_SECONDARY1 animate-bounce animate-infinite animate-duration-[1300ms]'
			>
				View projects
				<ScrollDownIcon
					width='24px'
					height='24px'
					className='stroke-TEXT_SECONDARY1'
				/>
			</Link>
		</section>
	)
}
