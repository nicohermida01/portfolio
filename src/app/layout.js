import localFont from 'next/font/local'

import 'app/globals.css'
import { Navbar } from 'components/Navbar'

const SansationFont = localFont({
	src: [
		{
			path: '../ssot/assets/fonts/Sansation-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../ssot/assets/fonts/Sansation-Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sansation',
})

export const metadata = {
	title: 'Nico Hermida',
	description:
		'Explora mi portfolio como desarrollador de software, donde muestro mis proyectos y habilidades en el desarrollo de aplicaciones web y móviles',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${SansationFont.variable} font-sans`}>
			<body className='bg-BODY text-BASE_TEXT'>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	)
}
