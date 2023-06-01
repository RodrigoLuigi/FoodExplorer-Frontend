import { api } from '../../services/api'
import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

import { useNavigate, useParams } from 'react-router-dom'

import dishe from '../../assets/dishe.png'
import receipt from '../../assets/receipt.svg'

import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from '../../components/Ingredient'
import { Button } from '../../components/Button'

import { Container, Content, ProductNote, Image, Include, Info } from './styles'

export function Details() {
	const [data, setData] = useState({})
	const [count, setCount] = useState(1)

	let quantity = String(count).padStart(2, '0')

	const params = useParams()
	const navigate = useNavigate()

	const { user } = useAuth()

	function handleBack() {
		navigate(-1)
	}

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

	const imageUrl = data.imagePath
		? `${api.defaults.baseURL}/files/${data.imagePath}`
		: dishe

	const convertPrice = Number(data.price / 100) * quantity
	const price = String(convertPrice).replace('.', ',')

	useEffect(() => {
		async function fetchProduct() {
			const response = await api.get(`/products/${params.id}`)
			setData(response.data)
		}

		fetchProduct()
		window.scrollTo(0, 0)
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

					<ProductNote>
						<Image>
							<img src={imageUrl} alt={`Imagem do produto ${data.name}`} />
						</Image>

						<Info>
							<div className="description">
								<h1>{data.name}</h1>
								<p>{data.description}</p>

								<div className="ingredients">
									{data.productIngredients &&
										data.productIngredients.map((ingredient) => (
											<Ingredient
												title={ingredient.name}
												key={String(ingredient.id)}
											/>
										))}
								</div>
							</div>

							{user.role === 'ROLE_ADMIN' ? (
								<Button title="Editar prato" className="new-product" />
							) : (
								<Include>
									<div className="count">
										<button type="button" onClick={decreaseCount}>
											<FiMinus size={27} />
										</button>
										<span>{quantity}</span>
										<button type="button" onClick={increaseCount}>
											<FiPlus size={27} />
										</button>
									</div>

									<button className="btn-order">
										<img src={receipt} />
										<strong>
											incluir &middot; R$<span>{price}</span>
										</strong>
									</button>
								</Include>
							)}
						</Info>
					</ProductNote>
				</Content>
			</main>
			<Footer />
		</Container>
	)
}
