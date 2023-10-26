import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Loading } from '../../components/Loading'
import { ButtonText } from '../../components/ButtonText'
import { ProductItem } from '../../components/ProductItem'

import { FiChevronDown, FiChevronLeft, FiPlus, FiUpload } from 'react-icons/fi'

import { Container, Content, Form } from './styles'

export function NewProduct() {
	const [categoryData, setCategoryData] = useState([])
	const [ingredientsData, setIngredientsData] = useState([])

	const [selectedIngredient, setSelectedIngredient] = useState('')

	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState(1)
	const [ingredients, setIngredients] = useState([])
	const [productImage, setProductImage] = useState(null)
	const [description, setDescription] = useState('')

	const [loading, setLoading] = useState(true)

	const navigate = useNavigate()

	function handleBack() {
		navigate(-1)
	}

	function handleChangeIngredient(event) {
		const selectedValue = event.target.value
		const selectedObject = JSON.parse(selectedValue)
		setSelectedIngredient(selectedObject)
	}

	function handleAddIngredient() {
		if (!selectedIngredient) {
			return alert('Selecione um ingrediente para poder Adicionar!')
		}
		setIngredients((prevState) => [...prevState, selectedIngredient])
		setSelectedIngredient('')
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredient) => ingredient.id !== deleted)
		)
	}

	function handleChangePrice(event) {
		const price = event.target.value

		const formattedPrice = price.replace(/\s/g, '').replace('R$', '')

		setPrice(formattedPrice)
	}

	async function handleNewProduct() {
		if (ingredients.length <= 0) {
			return alert('Adicione ao menos 1 ingrediente!')
		}
		const ingredientsId = ingredients.map((ingredient) => ingredient.id)

		try {
			await api.post('/products', {
				name,
				description,
				price,
				category_id: category,
				ingredients: ingredientsId
			})

			alert('Produto criado com sucesso!')
			navigate(-1)
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possível criar o produto!')
			}
		}

		/* const formData = new FormData()
		formData.append('name', name)
		formData.append('description', description)
		formData.append('price', price)
		formData.append('category_id', category)
		for (let i = 0; i < ingredients.length; i++) {
			formData.append('ingredients', ingredients[i])
		}

		await api
			.post('/products', formData)
			.then((response) => {
				console.log('Produto enviado com sucesso:', response.data)
			})
			.catch((error) => {
				console.error('Erro ao enviar o produto:', error)
			})

		console.log('Dados do FormData:')
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`)
		} */
	}

	useEffect(() => {
		async function fetchIngredients() {
			try {
				const response = await api.get('/ingredients')
				setIngredientsData(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
					setLoading(false)
				} else {
					alert('Não foi possível carregar os ingredientes!')
				}
			} finally {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			}
		}

		fetchIngredients()
	}, [])

	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await api.get('/categories')
				setCategoryData(response.data)
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
					setLoading(false)
				} else {
					alert('Não foi possível carregar as categorias!')
				}
			} finally {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			}
		}

		fetchCategories()
	}, [])

	return (
		<Container>
			<Header />

			<main>
				<Content>
					<ButtonText
						title="voltar"
						icon={FiChevronLeft}
						onClick={handleBack}
					/>

					{loading ? (
						<Loading />
					) : (
						<Form>
							<h1>Novo Prato</h1>

							<div className="form-wrapper">
								<div className="form-item image">
									<label htmlFor="product-img">Imagem do Prato</label>
									<label htmlFor="product-img">
										<FiUpload size={24} />
										{productImage ? productImage.name : 'Selecione Imagem'}
									</label>
									<Input
										type="file"
										name="product-img"
										id="product-img"
										onChange={(e) => setProductImage(e.target.files[0])}
									/>
								</div>

								<div className="form-item name">
									<label htmlFor="name">Name</label>
									<Input
										type="text"
										placeholder="Ex.: Salada Ceasar"
										name="name"
										id="name"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>

								<div className="form-item category">
									<label htmlFor="category">Category</label>
									<div>
										<select
											value={category.id}
											name="category"
											id="category"
											onChange={(e) => setCategory(e.target.value)}
										>
											{categoryData.map((category, index) => (
												<option value={category.id} key={String(index)}>
													{category.name}
												</option>
											))}
										</select>
										<FiChevronDown size={24} />
									</div>
								</div>

								<Section title="Ingredientes">
									<div className="ingredients-wrapper">
										{ingredients.map((ingredient, index) => (
											<ProductItem
												key={String(index)}
												value={ingredient.name}
												onClick={() => {
													handleRemoveIngredient(ingredient.id)
												}}
											/>
										))}

										<div className="ingredients">
											<select
												value={
													selectedIngredient
														? JSON.stringify(selectedIngredient)
														: ''
												}
												onChange={handleChangeIngredient}
											>
												<option value="">Adicionar</option>
												{ingredientsData.map((ingredient, index) => (
													<option
														value={JSON.stringify(ingredient)}
														key={String(index)}
													>
														{ingredient.name}
													</option>
												))}
											</select>

											<button
												type="button"
												className="button-add"
												onClick={handleAddIngredient}
											>
												<FiPlus />
											</button>
										</div>
									</div>
								</Section>

								<div className="form-item price">
									<label htmlFor="price">Preço</label>
									<NumericFormat
										thousandSeparator="."
										decimalSeparator=","
										prefix="R$ "
										placeholder="R$ 00,00"
										format="###.###,00"
										id="price"
										onChange={handleChangePrice}
									/>
								</div>

								<div className="form-item description">
									<label htmlFor="description">Descrição</label>
									<textarea
										placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
										name="description"
										id="description"
										onChange={(e) => setDescription(e.target.value)}
									/>
								</div>
							</div>
							<Button title="Adicionar Prato" onClick={handleNewProduct} />
						</Form>
					)}
				</Content>
			</main>
			<Footer />
		</Container>
	)
}
