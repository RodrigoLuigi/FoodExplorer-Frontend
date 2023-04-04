import { Container } from './styles'

export function Input({ id, label, ...rest }) {
	return (
		<Container>
			<label>{label}</label>
			<input id={id} {...rest} />
		</Container>
	)
}
