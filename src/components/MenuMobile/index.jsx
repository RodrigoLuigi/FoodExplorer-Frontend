import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { IoClose } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import { Container, Search } from './styles'

export function MenuMobile({ menuIsVisible, setMenuIsVisible, setSearch }) {
	const { user, signOut } = useAuth()

	const navigate = useNavigate()

	function handleNewProduct() {
		navigate(`/product/new`)
	}

	function handleSignOut() {
		navigate('/')
		signOut()
	}

	function handleFavorites() {
		navigate('/favorites')
	}

	function handleHistory() {
		navigate('/orders/history')
	}
	function handleAllOrders() {
		navigate('/orders/all')
	}

	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
	}, [menuIsVisible])

	return (
		<Container isVisible={menuIsVisible}>
			<div className="header">
				<IoClose size={24} onClick={() => setMenuIsVisible(false)} />
				<span>Menu</span>
			</div>

			<div className="content">
				<Search>
					<label htmlFor="search">
						<FiSearch size={24} />
					</label>
					<Input
						id="search"
						name="search"
						placeholder="Busque por pratos e ingredientes"
						type="text"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</Search>

				<ul>
					{user.role === 'ROLE_ADMIN' ? (
						<>
							<li>
								<ButtonText title="Novo prato" onClick={handleNewProduct} />
							</li>
							<li>
								<ButtonText title="Pedidos " onClick={handleAllOrders} />
							</li>
						</>
					) : (
						<>
							<li>
								<ButtonText title="Meus favoritos" onClick={handleFavorites} />
							</li>
							<li>
								<ButtonText
									title="Histórico de pedidos "
									onClick={handleHistory}
								/>
							</li>
						</>
					)}
					<li>
						<ButtonText title="Sair" onClick={handleSignOut} />
					</li>
				</ul>
			</div>
		</Container>
	)
}
