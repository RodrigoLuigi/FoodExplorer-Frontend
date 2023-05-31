import { api } from '../../services/api'
import { useEffect, useState } from 'react'

import { SwiperSlide } from 'swiper/react'

import { Card } from '../../components/Card'
import { Brand } from '../../components/Brand'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Category } from '../../components/Category'
import { CarouselSwiper } from '../../components/CarouselSwiper'

import { useAuth } from '../../hooks/auth'

import { Container, Content } from './styles'

export function Home() {
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])

	const [search, setSearch] = useState('')
	const [ingredientsSearch, setIngredientsSearch] = useState([])

	/* const { user } = useAuth()
	const role = user.role */

	useEffect(() => {
		async function fetchCategories() {
			const response = await api.get(`/categories`)
			setCategories(response.data)
		}
		fetchCategories()
	}, [])

	useEffect(() => {
		async function fetchProducts() {
			const response = await api.get(
				`/products?name=${search}&ingredients=${ingredientsSearch}`
			)
			setProducts(response.data)
		}

		fetchProducts()
	}, [search, ingredientsSearch])

	return (
		<Container>
			<Header setSearch={setSearch} />

			<main>
				<Brand />

				<Content>
					{categories.map((category) => (
						<Category title={category.name} key={String(category.id)}>
							<CarouselSwiper>
								{products.length > 0 ? (
									products
										.filter((product) => product.category_id === category.id)
										.map((product, index) => (
											<SwiperSlide key={String(product.id)}>
												<Card data={product} className="swiper-slide" />
											</SwiperSlide>
										))
								) : (
									<h3>NENHUM PRODUTO CADASTRADO</h3>
								)}
							</CarouselSwiper>
						</Category>
					))}
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
