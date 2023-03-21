import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Logo } from './styles'

export function SignUp() {
	const [loading, setLoading] = useState(false)

	return (
		<Container>
			<Logo>
				<img src={logo} alt="Logo Food Explorer" />
			</Logo>

			<Form>
				<h1>Crie sua conta</h1>

				<Input
					placeholder="Exemplo: Maria da Silva"
					type="text"
					label="Seu nome"
					id="name"
					className="input-signup"
				/>

				<Input
					placeholder="Exemplo: exemplo@exemplo.com"
					type="email"
					label="Email"
					id="email"
					className="input-signup"
				/>

				<Input
					placeholder="No mínimo 6 caracteres "
					type="password"
					label="Senha"
					id="password"
					className="input-signup"
				/>

				<Button
					disabled={loading}
					title={loading ? 'Carregando...' : 'Criar conta'}
				/>

				<Link to="/">Já tenho uma conta</Link>
			</Form>
		</Container>
	)
}
