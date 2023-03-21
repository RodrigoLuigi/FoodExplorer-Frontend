import { Container } from './styles'

export function Input({ id, label, className, ...rest }) {
	return (
		<Container>
			<label for={id}>{label}</label>
			<input className={className} id={id} {...rest} />
		</Container>
	)
}
