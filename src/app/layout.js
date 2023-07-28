import 'app/globals.css'

export const metadata = {
	title: 'Nico Hermida',
	description:
		'Explora mi portfolio como desarrollador de software, donde muestro mis proyectos y habilidades en el desarrollo de aplicaciones web y móviles',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
