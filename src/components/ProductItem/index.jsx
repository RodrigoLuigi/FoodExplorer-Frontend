import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function ProductItem({ value, onClick, ...rest }) {
	return (
		<Container>
			<input type="text" value={value} {...rest} readOnly />

			<button type="button" onClick={onClick} className="button-delete">
				<FiX />
			</button>
		</Container>
	)
}
