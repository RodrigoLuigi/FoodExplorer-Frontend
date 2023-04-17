import hero from '../../assets/hero.svg'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Container, Content, Hero } from './styles'

export function Home() {
	return (
		<Container>
			<Header />

			<main>
				<Content>
					<Hero>
						<div className="hero-content">
							<img src={hero} alt="" />
							<div className="text">
								<h2>Sabores Inigualáveis</h2>
								<p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
							</div>
						</div>
					</Hero>
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
