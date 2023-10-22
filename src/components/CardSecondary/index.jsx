import { api } from '../../services/api'

import disheImg from '../../assets/dishe.png'

import { useCart } from '../../hooks/cart'

import { Container } from './styles'

export function CardSecondary({ data }) {
	const { removeFromCart } = useCart()

	const imageUrl = data.imagePath
		? `${api.defaults.baseURL}/files/${data.imagePath}`
		: disheImg

	function removeProductFromCart() {
		removeFromCart(data)
	}

	function formatPrice(price) {
		const totalPrice = data.priceNumber.toFixed(2)

		return totalPrice
	}
	return (
		<Container>
			<div className="card-image">
				<img src={imageUrl} alt={`Imagem do produto ${data.name}`} width={78} />
			</div>

			<div className="info-container">
				<div>
					<h2>
						{data.quantity} x {data.name}
					</h2>
					<span>R$ {formatPrice(data.priceNumber)}</span>
				</div>

				<button onClick={removeProductFromCart}>Excluir</button>
			</div>
		</Container>
	)
}
