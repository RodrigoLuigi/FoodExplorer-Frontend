import { Input } from '../Input'
import { Button } from '../Button'
import receipt from '../../assets/receipt.svg'

import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export function PaymentForm() {
	const navigate = useNavigate()

	function handleSubmit(event) {
		event.preventDefault()

		navigate('/')
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
					<label htmlFor="card-number">Validade</label>
					<Input
						placeholder="04/25"
						type="number"
						id="card-number"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="form-item">
					<label htmlFor="card-number">CVC</label>
					<Input
						placeholder="000"
						type="number"
						id="card-number"
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
