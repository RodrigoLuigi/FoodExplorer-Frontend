import { Input } from '../Input'
import receipt from '../../assets/receipt.svg'

import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

export function PaymentForm() {
	const navigate = useNavigate()

	const { cart, setCart } = useCart()

	async function handleSubmit(event) {
		event.preventDefault()

		const products = cart.map((product) => {
			return { product_id: product.id, quantity: product.quantity }
		})

		try {
			await api.post('/orders', { products })

			alert(
				'Pagamento aprovado, acompanhe o status do seu pedido pelo Histórico de pedidos!'
			)
			setCart([])
			navigate('/')
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possível finalizar o pedido!')
			}
		}
	}

	return (
		<Container onSubmit={handleSubmit}>
			<div className="form-item">
				<label htmlFor="card-number">Número do cartão</label>
				<Input
					placeholder="0000 0000 0000 0000"
					type="number"
					id="card-number"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div className="card-validate">
				<div className="form-item">
					<label htmlFor="card-validate">Validade</label>
					<Input
						placeholder="04/25"
						type="number"
						id="card-validate"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="form-item">
					<label htmlFor="card-key">CVC</label>
					<Input
						placeholder="000"
						type="number"
						id="card-key"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>

			<button type="submit">
				<img src={receipt} alt="Imagem de uma papel de receitas" />
				Finalizar pagamento
			</button>
		</Container>
	)
}
