import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Logo } from './styles'

export function SignUp() {
	const [loading, setLoading] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert('Preencha todos os campos!')
		}

		api
			.post('/users', { name, email, password })
			.then(() => {
				alert('Usuário cadastrado com sucesso!')
				navigate('/')
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Não foi possível cadastrar!')
				}
			})
	}

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
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					placeholder="Exemplo: exemplo@exemplo.com"
					type="email"
					label="Email"
					id="email"
					className="input-signup"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					placeholder="No mínimo 6 caracteres "
					type="password"
					label="Senha"
					id="password"
					className="input-signup"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button
					disabled={loading}
					title={loading ? 'Carregando...' : 'Criar conta'}
					onClick={handleSignUp}
				/>

				<Link to="/">Já tenho uma conta</Link>
			</Form>
		</Container>
	)
}
