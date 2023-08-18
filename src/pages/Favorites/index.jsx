import { useNavigate } from 'react-router-dom'

import { FiChevronLeft } from 'react-icons/fi'

import dishe from '../../assets/dishe.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, FavoritesWrapper, CardImage, Info } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Favorites() {
	const [favorites, setFavorites] = useState([])

	const navigate = useNavigate()

	function handleBack() {
		navigate(-1)
	}

	useEffect(() => {
		async function fetchFavorites() {
			const response = await api
				.get('/favorites')
				.then((response) => {
					setFavorites(response.data)
					console.log(response.data)
				})
				.catch((error) => {
					console.error(error)
				})
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
										<h2>{favorite.name}</h2>
										<ButtonText title="Remover dos Favoritos" />
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
