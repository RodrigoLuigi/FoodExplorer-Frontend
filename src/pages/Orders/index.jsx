import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/cart'

import { FiChevronLeft } from 'react-icons/fi'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CardSecondary } from '../../components/CardSecondary'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, SectionWrapper } from './styles'

export function Orders() {
	const navigate = useNavigate()

	const { cart } = useCart()

	const totalPrice = cart.reduce((total, item) => total + item.priceNumber, 0)

	function handleBack() {
		navigate(-1)
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

					<SectionWrapper>
						<section className="my-order">
							<h2>Meu Pedido</h2>
							<ul>
								{cart.map((item) => (
									<li key={item.id}>
										<CardSecondary data={item} />
									</li>
								))}
							</ul>

							<strong>Total: {totalPrice}</strong>
						</section>

						<section className="payment">
							<h2>Pagamento</h2>
						</section>
					</SectionWrapper>
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
