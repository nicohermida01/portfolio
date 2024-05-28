import localFont from 'next/font/local'

import 'app/globals.css'
import { Navbar } from 'components/Navbar'
import { ToastWrapper } from 'components/ToastWrapper'
import {
	cannonicalUrl,
	metaDescription,
	metaKeywords,
	metaTitle,
} from 'ssot/metadata'

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
	title: metaTitle,
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
	description: metaDescription,
	keywords: metaKeywords,
	alternates: {
		canonical: cannonicalUrl,
	},
	openGraph: {
		title: metaTitle,
		description: metaDescription,
		type: 'website',
		url: cannonicalUrl,
		images: [
			{
				url: `${cannonicalUrl}/n.png`,
				width: 800,
				height: 600,
				alt: 'Nico Hermida logo',
			},
		],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${SansationFont.variable} font-sans`}>
			<body className='bg-BODY text-BASE_TEXT'>
				<Navbar />

				<ToastWrapper />

				<main className='min-h-screen w-full max-w-appMWidth mx-auto px-8'>
					{children}
				</main>
			</body>
		</html>
	)
}
