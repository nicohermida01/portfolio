/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sansation)'],
			},
			colors: {
				PRIMARY: '#6E07F3',

				PAYLOAD_PINK: '#f3078c',
				PAYLOAD_BLUE: '#078cf3',

				BODY: '#000000',

				GRAY_1: '#333',
				GRAY_1HOVER: '#222',

				BLACK_1: '#18181B',

				BASE_TEXT: '#ECEDEE',
				TEXT_SECONDARY1: '#BDBEBE',
				TEXT_SECONDRAY2: '#7f7f7f',

				TWITTER: '#1D9BF0',
				INSTAGRAM: '#CB098C',
				LINKEDIN: '#126BC4',
			},
			maxWidth: {
				appMWidth: '1400px',
			},
		},
		screens: {
			'2sm': { max: '300px' },
			sm: { max: '576px' },
			md: { max: '768px' },
			lg: { max: '992px' },
			xl: { max: '1200px' },
			'2xl': { max: '1500px' },
			'3xl': '1800px',
		},
	},
	plugins: [require('tailwindcss-animated')],
}
