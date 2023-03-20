import { Container } from './styles'

export function Input({ label, id, ...rest }) {
	return (
		<Container>
			<label for={id}>{label}</label>

			<input id={id} {...rest} />
		</Container>
	)
}
