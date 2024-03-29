import { api } from '../../services/api'
import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

import { useNavigate, useParams } from 'react-router-dom'

import dishe from '../../assets/dishe.png'
import receipt from '../../assets/receipt.svg'

import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from '../../components/Ingredient'

import { Container, Content, ProductNote, Image, Include, Info } from './styles'

export function Details() {
	const [data, setData] = useState({})
	const [count, setCount] = useState(1)
	const [loading, setLoading] = useState(true)

	const { user } = useAuth()
	const { addToCart } = useCart()

	const params = useParams()
	const navigate = useNavigate()

	let quantity = String(count).padStart(2, '0')

	const imageUrl = data.imagePath
		? `${api.defaults.baseURL}/files/${data.imagePath}`
		: dishe

	function handleBack() {
		navigate(-1)
	}

	function handleEditProduct() {
		navigate(`/product/edit/${params.id}`)
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

	function formatPrice(price) {
		const withoutThousandSeparator = price.replace(/\./g, '')

		const formattedPrice = withoutThousandSeparator.replace(',', '.')

		const priceNumber = parseFloat(formattedPrice)

		if (isNaN(priceNumber)) {
			throw new Error('Formato de número inválido.')
		}

		const formattedPriceString = (priceNumber * count).toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		})

		return formattedPriceString
	}

	function handleAddToCart() {
		const { id, name, price, imagePath } = data

		const formattedPrice = price.replace(',', '.')

		const priceNumber = parseFloat(formattedPrice) * count

		const newData = { id, name, priceNumber, quantity: count, imagePath }
		addToCart(newData)
	}

	useEffect(() => {
		async function fetchProduct() {
			try {
				const response = await api.get(`/products/${params.id}`)
				setData(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
					setLoading(false)
				} else {
					alert('Não foi possível carregar os dados do produto.')
				}
			} finally {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			}
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

					{loading ? (
						<Loading />
					) : (
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
									<Button
										title="Editar prato"
										className="new-product"
										onClick={handleEditProduct}
									/>
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

										<button className="btn-order" onClick={handleAddToCart}>
											<img src={receipt} />
											<strong>
												incluir &middot;{' '}
												<span>{data.price ? formatPrice(data.price) : ''}</span>
											</strong>
										</button>
									</Include>
								)}
							</Info>
						</ProductNote>
					)}
				</Content>
			</main>
			<Footer />
		</Container>
	)
}
