import { Navbar } from 'components/Navbar'
import { APP_SECTIONS } from 'ssot/appSections'

export default function Home() {
	return (
		<>
			<Navbar />

			<section
				id={APP_SECTIONS.HOME}
				className='bg-home-brackground min-h-screen bg-auto bg-bottom bg-no-repeat grid place-items-center'
			>
				<h1 className='text-white font-bold text-[70px] flex flex-col items-center'>
					Nico Hermida
					<span className='text-HOME-SUBHEADING font-normal text-[20px]'>
						Software developer
					</span>
				</h1>
			</section>
			<section
				id={APP_SECTIONS.ABOUT}
				className='min-h-screen grid place-items-center'
			>
				ABOUT
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
