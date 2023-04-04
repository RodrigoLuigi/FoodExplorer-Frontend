import { useState } from 'react'

import logo from '../../assets/logo.svg'
import receipt from '../../assets/receipt.svg'

import { IoMenu } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'
import { MenuMobile } from '../MenuMobile'

import { Container, Logo, Search, Orders, Logout } from './styles'

export function Header() {
	const [menuIsVisible, setMenuIsVisible] = useState(false)

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
					<img src={logo} alt="" />
				</Logo>

				<Search>
					<div>
						<FiSearch size={24} />
						<Input placeholder="Busque por pratos e ingredientes" type="text" />
					</div>
				</Search>

				<Orders>
					<img src={receipt} size={32} />
					<span>0</span>
					<strong>
						pedidos <span>(0)</span>
					</strong>
				</Orders>

				<Logout>
					<MdLogout size={32} />
				</Logout>
			</div>
		</Container>
	)
}
