import { api } from '../../services/api'
import { useEffect, useState } from 'react'

import { SwiperSlide } from 'swiper/react'

import { Card } from '../../components/Card'
import { Brand } from '../../components/Brand'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Category } from '../../components/Category'
import { CarouselSwiper } from '../../components/CarouselSwiper'

import { Container, Content } from './styles'

export function Home() {
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])

	const [search, setSearch] = useState('')
	const [ingredientsSearch, setIngredientsSearch] = useState([])

	useEffect(() => {
		async function fetchCategories() {
			const response = await api.get(`/categories`)
			setCategories(response.data)
		}
		fetchCategories()
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		async function fetchProducts() {
			const response = await api.get(
				`/products?name=${search}&ingredients=${ingredientsSearch}`
			)
			setProducts(response.data)
		}

		fetchProducts()

		search ? window.scrollTo(0, 470) : window.scrollTo(0, 0)
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
										.map((product) => (
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
