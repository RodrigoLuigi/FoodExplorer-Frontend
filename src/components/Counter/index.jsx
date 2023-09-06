import { useState } from 'react'

import { FiPlus, FiMinus } from 'react-icons/fi'

import { Container } from './styles'

export function Counter({ onCountChange }) {
	const [count, setCount] = useState(1)
	let quantity = String(count).padStart(2, '0')

	function increaseCount() {
		if (count < 5) {
			setCount(count + 1)
			onCountChange(count + 1)
		}
	}

	function decreaseCount() {
		if (count > 1) {
			setCount(count - 1)
			onCountChange(count - 1)
		}
	}

	return (
		<Container>
			<button type="button" onClick={decreaseCount}>
				<FiMinus size={24} />
			</button>
			<span>{quantity}</span>
			<button type="button" onClick={increaseCount}>
				<FiPlus size={24} />
			</button>
		</Container>
	)
}
