import Image from 'next/image'

import { AboutDescription } from 'components/AboutDescription'
import { Navbar } from 'components/Navbar'
import { SoftwareCard } from 'components/SoftwareCard'
import { APP_SECTIONS } from 'ssot/appSections'
import { getDictionary } from 'utils/dictionaries'

const sectionBaseStyles =
	'min-h-screen w-full max-w-appMWidth mx-auto px-[32px]'

export default async function Home() {
	const i18nDict = await getDictionary() //add other locales

	return (
		<>
			<Navbar />

			<section
				id={APP_SECTIONS.HOME}
				className='bg-home-brackground min-h-screen bg-auto bg-bottom bg-no-repeat grid place-items-center'
			>
				<h1 className='text-white font-bold text-[70px] flex flex-col items-center leading-[50px]'>
					{i18nDict['home-heading']}
					<span className='text-HOME-SUBHEADING font-normal text-[20px] line-he'>
						{i18nDict['home-subheading']}
					</span>
				</h1>
			</section>

			<section
				id={APP_SECTIONS.ABOUT}
				className={`${sectionBaseStyles} pt-[128px]`}
			>
				<h3 className='text-[24px] font-bold'>{i18nDict['about-title']}</h3>

				<div className='flex justify-between gap-[64px] items-center'>
					<Image src='avatar.svg' alt='Avatar' width={200} height={200}></Image>

					<AboutDescription />
				</div>

				<div className='mt-[32px] flex flex-col items-center gap-[32px]'>
					<h3 className='w-full text-[24px] font-bold text-start'>
						{i18nDict['about-software']}
					</h3>

					<SoftwareCard />
				</div>
			</section>

			<section
				id={APP_SECTIONS.EXPERIENCE}
				className='min-h-screen grid place-items-center'
			>
				EXPERIENCE
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

			<footer className='bg-PRIMARY'>footer</footer>
		</>
	)
}
