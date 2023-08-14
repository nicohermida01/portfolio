export function EmailTemplate({ name, message, mail }) {
	return (
		<div>
			<h1>New message from {name}</h1>
			<span>{mail}</span>
			<p>{message}</p>
		</div>
	)
}
