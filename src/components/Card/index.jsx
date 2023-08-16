import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'

import avatar from '../../assets/receipt.svg' /* refatorar */

import { api } from '../../services/api'

import pencil from '../../assets/pencil.svg'
import { MdFavoriteBorder } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'

import { Button } from '../Button'
import { Counter } from '../Counter'

import { Container, Favorites, CardImage, Info, Include } from './styles'

export function Card({ data }) {
	const [isFavorite, setIsFavorite] = useState(false)

	const { user } = useAuth()

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

	async function handleChangeFavorite() {
		setIsFavorite((prevIsFavorite) => !prevIsFavorite)

		try {
			if (!isFavorite) {
				alert('adicionando favoritos')
				await api.post('/favorites', {
					user_id: user.id,
					product_id: data.id
				})
			} else {
				alert('removendo favoritos')
				await api.delete(`/favorites/${data.id}`)
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		async function fetchUserFavorites() {
			await api
				.get('/favorites')
				.then((response) => {
					const favoriteIds = response.data.map(
						(favorite) => favorite.product_id
					)
					setIsFavorite(favoriteIds.includes(data.id))
				})
				.catch((error) => {
					if (error.response) {
						alert(error.response.data.message)
					} else {
						alert('Erro ao buscar o favoritos:', error)
					}
				})
		}

		fetchUserFavorites()
	}, [])

	return (
		<Container>
			<Favorites>
				{user.role === 'ROLE_ADMIN' ? (
					<button type="button" onClick={() => handleEditProduct(data.id)}>
						<img src={pencil} alt="imagem de uma caneta" />
					</button>
				) : (
					<button onClick={handleChangeFavorite}>
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
					<Counter />
					<Button title="incluir" onClick={() => console.log(data.id)} />
				</Include>
			)}
		</Container>
	)
}
