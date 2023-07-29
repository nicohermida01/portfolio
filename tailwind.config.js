/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'home-brackground': 'url("/background1.svg")',
			},
			fontFamily: {
				sans: ['var(--font-sansation)'],
			},
			colors: {
				PRIMARY: '#6E07F3',
				'PRIMARY-HOVER': '#9755ed',
				BODY: '#F0EFF5',

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
