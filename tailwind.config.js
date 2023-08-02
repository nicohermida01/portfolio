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

				'PRIMARY-HOVER': '#9755ed',

				'HOME-SUBHEADING': '#ADADAD',
				'TEXT-DESCRIPTION': '#333',
			},
			maxWidth: {
				appMWidth: '1400px',
			},
		},
	},
	plugins: [],
}
