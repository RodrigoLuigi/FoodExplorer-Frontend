import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Logo } from './styles'

export function SignIn() {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { signIn, user } = useAuth()

	function handleSignIn() {
		signIn({ email, password })
	}

	return (
		<Container>
			<Logo>
				<img src={logo} alt="Logo Food Explorer" />
			</Logo>

			<Form>
				<h1>Faça login</h1>

				<div>
					<label htmlFor="email">Email</label>
					<Input
						placeholder="Exemplo: exemplo@exemplo.com"
						type="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="password">Senha</label>
					<Input
						placeholder="No mínimo 6 caracteres "
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<Button
					disabled={loading}
					title={loading ? 'Carregando...' : 'Entrar'}
					onClick={handleSignIn}
				/>

				<Link to="/register">Criar uma conta</Link>
			</Form>
		</Container>
	)
}
