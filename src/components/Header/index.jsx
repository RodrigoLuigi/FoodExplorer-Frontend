import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'

import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import receipt from '../../assets/receipt.svg'

import { IoMenu } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'
import { Button } from '../Button'
import { MenuMobile } from '../MenuMobile'

import { Container, Logo, Search, Orders, Logout } from './styles'
import { ButtonText } from '../ButtonText'

export function Header({ setSearch }) {
	const [menuIsVisible, setMenuIsVisible] = useState(false)

	const { user, signOut } = useAuth()
	const { cart } = useCart()

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

	function handleOrders() {
		navigate('/orders')
	}

	function handleOrderHistory() {
		navigate('/history')
	}

	return (
		<Container>
			<div className="content">
				<MenuMobile
					menuIsVisible={menuIsVisible}
					setMenuIsVisible={setMenuIsVisible}
					setSearch={setSearch}
				/>

				<IoMenu
					className="menu"
					size={32}
					onClick={() => setMenuIsVisible(true)}
				/>

				<Logo>
					<Link to="/">
						<img
							src={logo}
							alt="Hexagono de cor azul com texto Food Explorer do lado direito"
						/>
					</Link>
					{user.role === 'ROLE_ADMIN' && <span>admin</span>}
				</Logo>

				<Search>
					<div>
						<label htmlFor="search">
							<FiSearch size={24} />
						</label>
						<Input
							name="search"
							placeholder="Busque por pratos e ingredientes"
							type="text"
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</Search>

				<ButtonText
					title="Meus Favoritos"
					className="btn-favorites"
					onClick={handleFavorites}
				/>

				<ButtonText
					title="Histórico de pedidos"
					className="btn-history"
					onClick={handleOrderHistory}
				/>

				{user.role === 'ROLE_ADMIN' ? (
					<Button
						title="Novo prato"
						className="btn-new-product"
						onClick={handleNewProduct}
					/>
				) : (
					<Orders onClick={handleOrders}>
						<img src={receipt} size={32} />
						<span>{cart.length}</span>
						<strong>
							Pedidos <span>({cart.length})</span>
						</strong>
					</Orders>
				)}

				<Logout onClick={handleSignOut}>
					<MdLogout size={32} />
				</Logout>
			</div>
		</Container>
	)
}
