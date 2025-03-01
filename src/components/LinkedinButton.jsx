import Link from 'next/link'

import { LinkedInIcon } from 'components/icons/LinkedinIcon'

export function LinkedinButton({ url }) {
	return (
		<Link
			href={url}
			aria-label='Go to linkedin profile'
			target='_blank'
			className='bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
		>
			<LinkedInIcon className='h-[20px] w-[20px] fill-BASE_TEXT sm:w-[18px] sm:h-[18px]' />
			LinkedIn
		</Link>
	)
}
