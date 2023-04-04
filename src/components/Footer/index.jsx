import logoFooter from '../../assets/logo-footer.svg'

import { Container } from './styles'

export function Footer() {
	return (
		<Container>
			<div className="content">
				<img
					src={logoFooter}
					alt="Hexagono de cor azul com texto Food Explorer do lado direito"
				/>
				<span>&copy;2023 - Todos os direitos reservados.</span>
			</div>
		</Container>
	)
}
