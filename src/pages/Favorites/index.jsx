import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, FavoritesWrapper, CardImage, Info } from './styles'

export function Favorites() {
	const [favorites, setFavorites] = useState([])

	const navigate = useNavigate()

	function handleBack() {
		navigate(-1)
	}

	function handleDetails(id) {
		navigate(`/product/details/${id}`)
	}

	async function handleRemoveFavorite(id) {
		try {
			await api.delete(`/favorites/${id}`)

			setFavorites((prevState) =>
				prevState.filter((favorite) => favorite.product_id !== id)
			)

			alert('Produto removido dos favoritos')
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possível remover o favorito.')
			}
		}
	}

	useEffect(() => {
		async function fetchFavorites() {
			try {
				const response = await api.get('/favorites')
				setFavorites(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Não foi possível carregar os favoritos.')
				}
			}
		}
		fetchFavorites()
	}, [])

	return (
		<Container>
			<Header />

			<main>
				<Content>
					<ButtonText
						title="voltar"
						icon={FiChevronLeft}
						onClick={handleBack}
					/>
					<h1>Meus Favoritos</h1>

					<FavoritesWrapper>
						{favorites &&
							favorites.map((favorite) => (
								<div className="favorite-card" key={String(favorite.id)}>
									<CardImage>
										<img
											src={`${api.defaults.baseURL}/files/${favorite.imagePath}`}
											alt={`Imagem do prato`}
										/>
									</CardImage>

									<Info>
										<button
											className="btn-details"
											type="button"
											onClick={() => handleDetails(favorite.product_id)}
										>
											<h2 className="title">{favorite.name}</h2>
											<span>&gt;</span>
										</button>
										<ButtonText
											title="Remover dos Favoritos"
											onClick={() => handleRemoveFavorite(favorite.product_id)}
										/>
									</Info>
								</div>
							))}
					</FavoritesWrapper>
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
