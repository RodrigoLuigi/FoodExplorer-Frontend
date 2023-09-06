import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
	const [cart, setCart] = useState([])

	function addToCart(product) {
		const checkOrderedProduct = cart.find((item) => item.id === product.id)

		if (checkOrderedProduct === undefined) {
			setCart([...cart, product])
		} else {
			console.log('Este produto já está no carrinho.')
		}
	}

	function removeFromCart(productToRemove) {
		const newCart = cart.filter((product) => product.id !== productToRemove.id)
		setCart(newCart)
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const context = useContext(CartContext)

	return context
}
