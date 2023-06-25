import { FiChevronDown } from 'react-icons/fi'

import { Container, SelectWrapper } from './styles'

export function Select({ id, label, ...rest }) {
	return (
		<Container>
			{label && <label htmlFor={id}>{label}</label>}

			<SelectWrapper>
				<select id={id} name={id} {...rest}>
					<option value="refeicao">Refeição</option>
					<option value="sobremesa">Sobremesa</option>
					<option value="bebida">Bebidas</option>
				</select>
				<FiChevronDown size={24} />
			</SelectWrapper>
		</Container>
	)
}
