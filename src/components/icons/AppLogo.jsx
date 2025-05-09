import Image from 'next/image'

export function AppLogo(props) {
	return (
		<Image
			src='/logo_N_resized.png'
			alt='Logo N'
			width={50}
			height={50}
			{...props}
		/>
	)
}
