import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

import avatar from '../../assets/receipt.svg' /* refatorar */

import { api } from '../../services/api'

import pencil from '../../assets/pencil.svg'
import { MdFavoriteBorder } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'

import { Button } from '../Button'
import { Counter } from '../Counter'

import { Container, Favorites, CardImage, Info, Include } from './styles'

export function Card({ data }) {
	const [isFavorite, setIsFavorite] = useState(!!data.is_favorite)
	const [count, setCount] = useState(1)

	const { user } = useAuth()
	const { addToCart } = useCart()

	const navigate = useNavigate()

	const imageUrl = data.imagePath
		? `${api.defaults.baseURL}/files/${data.imagePath}`
		: avatar

	function handleDetails(id) {
		navigate(`/product/details/${id}`)
	}

	function handleEditProduct(id) {
		navigate(`/product/edit/${id}`)
	}

	async function toggleFavoriteStatus() {
		const newIsFavorite = !isFavorite
		setIsFavorite(newIsFavorite)

		try {
			if (newIsFavorite) {
				await addProductToFavorites(user.id, data.id)
			} else {
				await removeProductFromFavorites(data.id)
			}
		} catch (error) {
			handleFavoriteError(error)
		}
	}

	async function addProductToFavorites(user_id, product_id) {
		await api.post('/favorites', {
			user_id,
			product_id
		})
	}

	async function removeProductFromFavorites(product_id) {
		await api.delete(`/favorites/${product_id}`)
	}

	function handleFavoriteError(error) {
		if (error.response) {
			alert(error.response.data.message)
		} else {
			alert('Erro ao gerenciar favorito:', error)
		}
	}

	function handleCountChange(newCount) {
		setCount(newCount)
	}

	function handleAddToCart() {
		const { id, name, price, imagePath } = data

		const formattedPrice = price.replace(',', '.')

		const priceNumber = parseFloat(formattedPrice) * count

		const newData = { id, name, priceNumber, quantity: count, imagePath }
		addToCart(newData)

		console.log({ id, name, priceNumber, quantity: count, imagePath })
	}

	return (
		<Container>
			<Favorites>
				{user.role === 'ROLE_ADMIN' ? (
					<button type="button" onClick={() => handleEditProduct(data.id)}>
						<img src={pencil} alt="imagem de uma caneta" />
					</button>
				) : (
					<button onClick={toggleFavoriteStatus}>
						{isFavorite ? (
							<MdFavorite className="favorite-icon" size={24} />
						) : (
							<MdFavoriteBorder size={24} />
						)}
					</button>
				)}
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
				<strong className="price">R$ {data.price}</strong>
			</Info>

			{user.role === 'ROLE_USER' && (
				<Include>
					<Counter onCountChange={handleCountChange} />
					<Button title="incluir" onClick={handleAddToCart} />
				</Include>
			)}
		</Container>
	)
}
