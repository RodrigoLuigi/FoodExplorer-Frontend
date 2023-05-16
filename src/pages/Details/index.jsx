import dishe from '../../assets/dishe.png'
import { FiPlus, FiMinus, FiChevronLeft } from 'react-icons/fi'
import receipt from '../../assets/receipt.svg'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'

import { Container, Content, ProductNote, Image, Include, Info } from './styles'
import { useState } from 'react'

export function Details() {
	const data = {
		id: 1,
		disheImg: '',
		title: 'Torrada de Parma',
		description:
			'	Presunto de parma e rúcula em um pão com fermentação natural.',
		price: '25,95'
	}

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
							<img src={dishe} alt="" />
						</Image>

						<Info>
							<div className="description">
								<h1>Salada Revanello</h1>
								<p>
									Rabanetes, folhas verdes e molho agridoce salpicados com
									gergelim. O pão naan dá um toque especial.
								</p>

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
