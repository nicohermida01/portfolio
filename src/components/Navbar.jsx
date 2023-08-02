import Link from 'next/link'

import { AppLogo } from './AppLogo'

export async function Navbar() {
	return (
		<header className='w-full bg-black fixed top-0 z-10'>
			<div className='w-full max-w-appMWidth mx-auto px-6 py-2 flex items-center justify-between'>
				<Link href='/'>
					<AppLogo width='30px' height='30px' />
				</Link>

				<nav>
					<ul className='flex gap-4'>
						<li>
							<Link href='/about' className='text-[#BDBEBE] hover:underline'>
								About
							</Link>
						</li>
						<li>
							<Link href='contact' className='text-[#BDBEBE] hover:underline'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
