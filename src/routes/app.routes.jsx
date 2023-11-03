import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewProduct } from '../pages/NewProduct'
import { EditProduct } from '../pages/EditProduct'
import { Favorites } from '../pages/Favorites'
import { Orders } from '../pages/Orders'
import { OrderHistory } from '../pages/OrderHistory'
import { AllOrders } from '../pages/AllOrders'

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/details/:id" element={<Details />} />
			<Route path="/product/new" element={<NewProduct />} />
			<Route path="/product/edit/:id" element={<EditProduct />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/orders" element={<Orders />} />
			<Route path="/orders/history" element={<OrderHistory />} />
			<Route path="/orders/all" element={<AllOrders />} />
		</Routes>
	)
}
