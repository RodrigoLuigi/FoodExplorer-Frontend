import { FiChevronRight } from 'react-icons/fi'

import { Container } from './styles'

export function SampleNextArrow(props) {
	const { onClick } = props

	return (
		<Container>
			<button onClick={onClick}>
				<FiChevronRight size={32} />
			</button>
		</Container>
	)
}
