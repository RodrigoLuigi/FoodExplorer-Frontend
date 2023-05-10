import hero from '../../assets/hero.svg'

import { Container } from './styles'

export function Brand() {
	return (
		<Container>
			<div className="content">
				<img src={hero} alt="Hamburguers e frutas" />
				<div className="text">
					<h2>Sabores Inigualáveis</h2>
					<p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
				</div>
			</div>
		</Container>
	)
}
