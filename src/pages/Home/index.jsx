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
import { useAuth } from '../../hooks/auth'
import { Loading } from '../../components/Loading'

export function Home() {
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])

	const [search, setSearch] = useState('')
	const [ingredientsSearch, setIngredientsSearch] = useState([])

	const { loading } = useAuth()

	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await api.get(`/categories`)
				setCategories(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Não foi possível carregar as categorias.')
				}
			}
		}

		fetchCategories()
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await api.get(
					`/products?name=${search}&ingredients=${ingredientsSearch}`
				)

				setProducts(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Não foi possível carregar os produtos.')
				}
			}
		}

		fetchProducts()

		search ? window.scrollTo(0, 450) : window.scrollTo(0, 0)
	}, [search, ingredientsSearch])

	return (
		<Container>
			<Header setSearch={setSearch} />

			<main>
				<Brand />

				<Content>
					{loading ? (
						<Loading />
					) : (
						categories.map((category) => (
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
						))
					)}
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
