import logoFooter from '../../assets/logo-footer.svg'

import { Container, Logo } from './styles'

export function Footer() {
	return (
		<Container>
			<div className="content">
				<Logo>
					<img src={logoFooter} alt="" />
				</Logo>
				<span>&copy;2023 - Todos os direitos reservados.</span>
			</div>
		</Container>
	)
}
