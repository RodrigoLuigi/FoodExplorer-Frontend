import { useState } from 'react'

import { useAuth } from '../../hooks/auth'
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

	return (
		<Container>
			<div className="content">
				<MenuMobile
					menuIsVisible={menuIsVisible}
					setMenuIsVisible={setMenuIsVisible}
				/>

				<IoMenu
					className="menu"
					size={32}
					onClick={() => setMenuIsVisible(true)}
				/>

				<Logo>
					<img
						src={logo}
						alt="Hexagono de cor azul com texto Food Explorer do lado direito"
					/>
					{user.role === 'ROLE_ADMIN' && <span>admin</span>}
				</Logo>

				<Search>
					<div>
						<FiSearch size={24} />
						<Input
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

				{user.role === 'ROLE_ADMIN' ? (
					<Button
						title="Novo prato"
						className="btn-new-product"
						onClick={handleNewProduct}
					/>
				) : (
					<Orders>
						<img src={receipt} size={32} />
						<span>0</span>
						<strong>
							pedidos <span>(0)</span>
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
