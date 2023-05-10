import { useState } from 'react'

import dishe from '../../assets/dishe.png'

import { MdFavoriteBorder } from 'react-icons/md'
import { FiPlus, FiMinus } from 'react-icons/fi'

import { Button } from '../Button'

import { Container, Favorites, CardImage, Info, Include } from './styles'
import { useNavigate } from 'react-router-dom'

export function Card({ data }) {
	const [count, setCount] = useState(1)
	let quantity = String(count).padStart(2, '0')

	const navigate = useNavigate()

	function increaseCount() {
		if (count < 5) {
			setCount(count + 1)
		}
	}

	function decreaseCount() {
		if (count > 1) {
			setCount(count - 1)
		}
	}

	function handleDetails(id) {
		navigate(`/details/${id}`)
		return console.log(`Details XXX ${id} ${data.title}`)
	}

	return (
		<Container>
			<Favorites>
				<MdFavoriteBorder size={24} />
			</Favorites>

			<CardImage>
				<img src={dishe} alt="Dishe" />
			</CardImage>

			<Info>
				<button type="button" onClick={() => handleDetails(data.id)}>
					<h2 className="title">{data.title}</h2>
					<span>&gt;</span>
				</button>
				<p className="description">{data.description}</p>
				<strong className="price">R$ {data.price}</strong>
			</Info>

			<Include>
				<div className="count">
					<button type="button" onClick={decreaseCount}>
						<FiMinus size={24} />
					</button>
					<span>{quantity}</span>
					<button type="button" onClick={increaseCount}>
						<FiPlus size={24} />
					</button>
				</div>
				<Button title="incluir" onClick={() => console.log(count)} />
			</Include>
		</Container>
	)
}
