import Link from 'next/link'

import { APP_SECTIONS } from 'ssot/appSections'
import { getDictionary } from 'utils/dictionaries'

export async function Navbar() {
	const i18nDict = await getDictionary()

	return (
		<nav className='bg-[rgba(110,7,243,.9)] flex justify-center fixed top-0 w-full backdrop-blur-[2px]'>
			<ul className='flex text-white '>
				{Object.values(APP_SECTIONS).map((section, index) => (
					<li key={index}>
						<Link
							className='inline-block py-[8px] px-[32px] hover:underline text-[14px]'
							href={`#${section}`}
						>
							{i18nDict[section]}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
