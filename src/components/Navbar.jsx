import Link from 'next/link'

import { AppLogo } from './icons/AppLogo'

export async function Navbar() {
	return (
		<header className='w-full bg-[rgba(0,0,0,.6)] fixed top-0 z-10 backdrop-blur'>
			<div className='w-full max-w-appMWidth mx-auto px-8 py-4 flex items-center justify-between'>
				<Link href='/' aria-label='Go to home page'>
					<AppLogo className='w-[30px] h-[30px] sm:w-[18px] sm:h-[18px]' />
				</Link>

				<nav>
					<ul className='flex gap-4 sm:text-[12px]'>
						<li>
							<Link
								href='/about'
								aria-label='Go to about page'
								className='text-TEXT_SECONDARY1 hover:underline'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								aria-label='Go to contact page'
								className='text-TEXT_SECONDARY1 hover:underline'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
