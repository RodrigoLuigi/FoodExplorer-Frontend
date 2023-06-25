import { Container } from './styles.js'

export function InputFile({ id, label, placeholder, icon: Icon, ...rest }) {
	return (
		<Container>
			<label htmlFor={id}>{label}</label>
			<label htmlFor={id}>
				{Icon && <Icon size={24} />}
				{placeholder}
			</label>
			<input id={id} name={id} {...rest} />
		</Container>
	)
}
