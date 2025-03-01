import Link from 'next/link'

import { CodeIcon } from 'components/icons/CodeIcon'

export function ViewCodeButton({ url }) {
	return (
		<Link
			href={url}
			aria-label='Go to github repository'
			target='_blank'
			className='bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold [&:hover>svg]:animate-wiggle-more [&:hover>svg]:animate-infinite'
		>
			<CodeIcon className='h-[20px] w-[20px] stroke-BASE_TEXT sm:w-[18px] sm:h-[18px]' />
			View code
		</Link>
	)
}
