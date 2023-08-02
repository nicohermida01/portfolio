import Link from 'next/link'

import { HomeHeading } from 'components/HomeHeading'
import { JavascriptIcon } from 'components/JavascriptIcon'
import { TypescriptIcon } from 'components/TypescriptIcon'
import { PythonIcon } from 'components/PythonIcon'
import { JavaIcon } from 'components/JavaIcon'
import { GolangIcon } from 'components/GolangIcon'
import { NextjsIcon } from 'components/NextjsIcon'
import { ReactIcon } from 'components/ReactIcon'
import { NestjsIcon } from 'components/NestjsIcon'
import { MongoDBIcon } from 'components/MongoDBIcon'
import { SendIcon } from 'components/SendIcon'

/* const sectionBaseStyles =
	'min-h-screen w-full max-w-appMWidth mx-auto px-[32px]' */

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

export default function Home() {
	return (
		<>
			<section className='min-h-screen flex flex-col justify-center max-w-appMWidth mx-auto px-6 relative'>
				<HomeHeading />

				<div className='mt-10 flex gap-4 items-center'>
					<Link
						href='/contact'
						className='bg-PAYLOAD_BLUE px-6 py-3 rounded-3xl flex items-center gap-1'
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
			</section>

			{/* <section
				id={APP_SECTIONS.ABOUT}
				className={`${sectionBaseStyles} pt-[128px]`}
			>
				<h3 className='text-[24px] font-bold'>About me</h3>

				<div className='flex justify-between gap-[64px] items-center'>
					<Image src='avatar.svg' alt='Avatar' width={200} height={200}></Image>

					<AboutDescription />
				</div>

				<div className='mt-[32px] flex flex-col items-center gap-[32px]'>
					<h3 className='w-full text-[24px] font-bold text-start'>
						Software I&#39mve used
					</h3>

					<SoftwareCard />
				</div>
			</section>
			<section
				id={APP_SECTIONS.EXPERIENCE}
				className={`${sectionBaseStyles} pt-[128px]`}
			>
				<h3 className='text-[24px] font-bold'>My Work Experience</h3>
			</section>
			<section
				id={APP_SECTIONS.PROJECTS}
				className='min-h-screen grid place-items-center'
			>
				PROJECTS
			</section>
			<section
				id={APP_SECTIONS.CONTACT}
				className='min-h-screen grid place-items-center'
			>
				CONTACT
			</section>
			<footer className='bg-PRIMARY'>footer</footer> */}
		</>
	)
}
