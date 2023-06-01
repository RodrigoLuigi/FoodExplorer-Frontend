import { useNavigate } from 'react-router-dom'

import { FiChevronLeft } from 'react-icons/fi'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content } from './styles'

export function NewProduct() {
	const navigate = useNavigate()

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
				</Content>
			</main>
			<Footer />
		</Container>
	)
}
