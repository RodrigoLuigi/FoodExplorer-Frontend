import { FiChevronLeft } from 'react-icons/fi'

import { Container } from './styles'

export function SamplePrevArrow(props) {
	const { onClick } = props

	return (
		<Container>
			<button onClick={onClick}>
				<FiChevronLeft size={32} />
			</button>
		</Container>
	)
}
