import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, HistoryTable } from './styles'

export function OrderHistory() {
	const [history, setHistory] = useState([])

	const navigate = useNavigate()

	const statusTypes = {
		WAITING: { text: 'Pendente', className: 'waitingStyle' },
		IN_PRODUCTION: { text: 'Preparando', className: 'inProductionStyle' },
		DONE: { text: 'Entregue', className: 'doneStyle' }
	}

	function handleBack() {
		navigate(-1)
	}

	function getStatusInfo(status) {
		return statusTypes[status] || { text: 'Desconhecido', className: '' }
	}

	function formatDate(date) {
		const data = new Date(date)

		const day = data.getDate()
		const month = data.getMonth() + 1

		const hours = data.getHours()
		const minutes = String(data.getMinutes()).padStart(2, '0')

		const formattedDate = `${month}/${day} às ${hours}h${minutes}`

		return formattedDate
	}

	useEffect(() => {
		async function fetchHistory() {
			try {
				const response = await api.get('/orders')

				response.data.map((order) => {
					const formattedDate = formatDate(order.created_at)

					order.created_at = formattedDate
				})

				setHistory(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Não foi possível carregar o histórico de pedidos.')
				}
			}
		}

		fetchHistory()
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

					<h1>Pedidos</h1>

					{history.length > 0 ? (
						<HistoryTable>
							<table>
								<thead>
									<tr>
										<th>Status</th>
										<th>Código</th>
										<th>Detalhamento</th>
										<th>Data e hora</th>
									</tr>
								</thead>

								<tbody>
									{history.map((orderHistory) => {
										const { text, className } = getStatusInfo(
											orderHistory.status
										)

										return (
											<tr key={orderHistory.id}>
												<td>
													<div className={`${className} status-cell`}>
														<div></div>
														{text}
													</div>
												</td>
												<td>{orderHistory.code}</td>
												<td>{orderHistory.description}</td>
												<td>{orderHistory.created_at}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</HistoryTable>
					) : (
						<h2>Não existe pedidos cadastrados no momento.</h2>
					)}
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
