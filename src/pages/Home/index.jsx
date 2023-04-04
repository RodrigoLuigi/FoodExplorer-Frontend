import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

export function Home() {
	return (
		<Container>
			<Header />

			<div className="content"></div>

			<Footer />
		</Container>
	)
}
