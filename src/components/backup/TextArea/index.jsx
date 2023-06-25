import { Container } from './styles'

export function TextArea({ id, value, label, ...rest }) {
	return (
		<Container>
			{label && <label htmlFor={id}>{label}</label>}
			<textarea {...rest}>{value}</textarea>
		</Container>
	)
}
