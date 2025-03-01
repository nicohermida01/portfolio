import Link from 'next/link'

const primaryClass =
	'bg-PAYLOAD_BLUE px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold'

const secondaryClass =
	'border-GRAY_1 border-2 px-6 py-3 rounded-sm flex items-center gap-2 w-max font-bold defaultTransition hover:border-GRAY_1HOVER'

export function VisitProjectButton({ url, isPrimary }) {
	return (
		<Link
			href={url}
			aria-label='go to project website'
			target='_blank'
			className={`${isPrimary ? primaryClass : secondaryClass}`}
		>
			Visit project
		</Link>
	)
}
