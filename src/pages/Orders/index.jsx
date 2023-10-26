import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/cart'

import { FiChevronLeft } from 'react-icons/fi'
import Clock from '../../assets/clock.svg'
import CheckCircle from '../../assets/check-circle.svg'
import ForkKnife from '../../assets/fork-knife.svg'
import PixIcon from '../../assets/pix-icon.svg'
import CreditCardIcon from '../../assets/creditCard-icon.svg'
import QRCode from '../../assets/qrcode.svg'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CardSecondary } from '../../components/CardSecondary'
import { ButtonText } from '../../components/ButtonText'
import { PaymentForm } from '../../components/PaymentForm'

import { Container, Content, SectionWrapper } from './styles'

export function Orders() {
	const [content, setContent] = useState('pix')
	const navigate = useNavigate()

	const { cart } = useCart()

	const totalPrice = cart
		.reduce((total, item) => total + item.priceNumber, 0)
		.toFixed(2)

	function handleBack() {
		navigate(-1)
	}

	function handleButtonClick(contentType) {
		setContent(contentType)

		if (content === contentType) {
			setContent('checkout')
		}
	}
	useEffect(() => {
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

							<strong>Total: R$ {totalPrice}</strong>
						</section>

						<section className="payment">
							<h2>Pagamento</h2>

							<div className="content-wrapper">
								<div className="buttons">
									<button
										className={content === 'pix' ? 'active' : ''}
										onClick={() => handleButtonClick('pix')}
									>
										<img src={PixIcon} alt="" />
										PIX
									</button>

									<button
										className={content === 'credit' ? 'active' : ''}
										onClick={() => handleButtonClick('credit')}
									>
										<img src={CreditCardIcon} alt="" />
										Crédito
									</button>
								</div>

								<div className="payment-content">
									<div
										className={`checkout pix-content ${
											content === 'pix' ? 'active' : ''
										}`}
									>
										<img src={QRCode} alt="QRCode" />
									</div>

									<div
										className={`checkout credit-content ${
											content === 'credit' ? 'active' : ''
										}`}
									>
										<PaymentForm />
									</div>

									<div
										className={`checkout checkout-content ${
											content === 'checkout' ? 'active' : ''
										}`}
									>
										<div>
											<img src={Clock} alt="Relógio" />
											<span>Aguardando pagamento no caixa</span>
										</div>
									</div>

									<div
										className={`checkout checkout-content ${
											content === 'payment-accept' ? 'active' : ''
										}`}
									>
										<div>
											<img src={CheckCircle} alt="" />
											<span>Pagamento aprovado!</span>
										</div>
									</div>

									<div
										className={`checkout checkout-content ${
											content === 'order-delivered' ? 'active' : ''
										}`}
									>
										<div>
											<img src={ForkKnife} alt="" />
											<span>Pedido entregue!</span>
										</div>
									</div>
								</div>
							</div>
						</section>
					</SectionWrapper>
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
