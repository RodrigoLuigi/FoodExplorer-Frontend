import { api } from '../../services/api'
import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import dishe from '../../assets/dishe.png'
import receipt from '../../assets/receipt.svg'

import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, ProductNote, Image, Include, Info } from './styles'

export function Details() {
	const [data, setData] = useState({})

	const params = useParams()
	const navigate = useNavigate()

	function handleBack() {
		navigate(-1)
	}

	const [count, setCount] = useState(1)
	let quantity = String(count).padStart(2, '0')

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
							<img src={imageUrl} alt="" />
						</Image>

						<Info>
							<div className="description">
								<h1>{data.name}</h1>
								<p>{data.description}</p>

								<div className="ingredients">
									<span>alface</span>
									<span>cebola</span>
									<span>pão naan</span>
									<span>pepino</span>
									<span>rabanete</span>
									<span>tomate</span>
								</div>
							</div>

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
										incluir &middot; R$<span>25,00</span>
									</strong>
								</button>
							</Include>
						</Info>
					</ProductNote>
				</Content>
			</main>
			<Footer />
		</Container>
	)
}
