import { useNavigate } from 'react-router-dom'

import avatar from '../../assets/receipt.svg' /* refatorar */

import { api } from '../../services/api'

import { MdFavoriteBorder } from 'react-icons/md'

import { Button } from '../Button'
import { Counter } from '../Counter'

import { Container, Favorites, CardImage, Info, Include } from './styles'

export function Card({ data }) {
	const imageUrl = data.imagePath
		? `${api.defaults.baseURL}/files/${data.imagePath}`
		: avatar

	const navigate = useNavigate()

	function handleDetails(id) {
		navigate(`/details/${id}`)
	}

	const convertPrice = Number(data.price / 100)
	const price = String(convertPrice).replace('.', ',')

	return (
		<Container>
			<Favorites>
				<MdFavoriteBorder size={24} />
			</Favorites>

			<CardImage>
				<img src={imageUrl} alt={`Imagem do prato ${data.name}`} />
			</CardImage>

			<Info>
				<button type="button" onClick={() => handleDetails(data.id)}>
					<h2 className="title">{data.name}</h2>
					<span>&gt;</span>
				</button>
				<p className="description">{data.description}</p>
				<strong className="price">R$ {price}</strong>
			</Info>

			<Include>
				<Counter />
				<Button title="incluir" onClick={() => console.log(data.id)} />
			</Include>
		</Container>
	)
}
