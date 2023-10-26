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

	async function handleSignUp() {
		if (!name || !email || !password) {
			return alert('Preencha todos os campos!')
		}

		try {
			setLoading(true)
			await api.post('/users', { name, email, password })

			alert('Usuário cadastrado com sucesso!')
			navigate('/')
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
				setLoading(false)
			} else {
				alert('Não foi possível cadastrar um novo usuário!')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<Container>
			<Logo>
				<img src={logo} alt="Logo Food Explorer" />
			</Logo>

			<Form>
				<h1>Crie sua conta</h1>

				<div>
					<label htmlFor="name">Seu nome</label>
					<Input
						placeholder="Exemplo: Maria da Silva"
						type="text"
						id="name"
						disabled={loading}
						className="input-signup"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<Input
						placeholder="Exemplo: exemplo@exemplo.com"
						type="email"
						id="email"
						disabled={loading}
						className="input-signup"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="password">Senha</label>
					<Input
						placeholder="No mínimo 6 caracteres "
						type="password"
						id="password"
						disabled={loading}
						className="input-signup"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

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
