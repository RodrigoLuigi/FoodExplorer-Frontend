import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewProduct } from '../pages/NewProduct'
import { EditProduct } from '../pages/EditProduct'

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/details/:id" element={<Details />} />
			<Route path="/product/new" element={<NewProduct />} />
			<Route path="/product/edit/:id" element={<EditProduct />} />
		</Routes>
	)
}
