import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Logo } from './styles'

export function SignIn() {
	const [loading, setLoading] = useState(false)

	return (
		<Container>
			<Logo>
				<img src={logo} alt="Logo Food Explorer" />
			</Logo>

			<Form>
				<h1>Faça login</h1>

				<Input
					placeholder="Exemplo: exemplo@exemplo.com"
					type="email"
					label="Email"
				/>

				<Input
					placeholder="No mínimo 6 caracteres "
					type="password"
					label="Senha"
				/>

				<Button
					disabled={loading}
					title={loading ? 'Carregando...' : 'Entrar'}
				/>

				<Link to="/register">Criar uma conta</Link>
			</Form>
		</Container>
	)
}
