import { useEffect, useState } from 'react'

import { NumericFormat } from 'react-number-format'
import { useNavigate, useParams } from 'react-router-dom'

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

export function EditProduct() {
	const [categoryData, setCategoryData] = useState([])
	const [ingredientsData, setIngredientsData] = useState([])

	const [selectedIngredient, setSelectedIngredient] = useState(null)

	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState()
	const [ingredients, setIngredients] = useState([])
	const [productImageFile, setProductImageFile] = useState(null)
	const [imagePath, setImagePath] = useState('')
	const [description, setDescription] = useState('')

	const [loading, setLoading] = useState(true)

	const params = useParams()

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

	function handleChangeImage(event) {
		const imageFile = event.target.files[0]

		setProductImageFile(imageFile)
		setImagePath(formatImagePath(imageFile.name))
	}

	async function handleUpdateProductImage(productImageFile) {
		const fileUploadForm = new FormData()
		fileUploadForm.append('productImage', productImageFile)

		try {
			await api.patch(`/products/image/${params.id}`, fileUploadForm)
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possivel atualizar a imagem do produto.')
			}
		}
	}

	async function handleUpdateProduct() {
		if (ingredients.length <= 0) {
			return alert('Adicione ao menos 1 ingrediente!')
		}

		const ingredientsId = ingredients.map((ingredient) => ingredient.id)

		if (productImageFile) {
			handleUpdateProductImage(productImageFile)
		}

		try {
			await api.put(`/products/${params.id}`, {
				name,
				category_id: category,
				ingredients: ingredientsId,
				price,
				description
			})
			alert('Produto atualizado.')

			navigate(-1)
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possivel atualizar o produto.')
			}
		}
	}

	async function handleDeleteProduct() {
		try {
			if (confirm('Deseja excluir o prato?')) {
				await api.delete(`/products/${params.id}`)

				alert('Prato excluido com sucesso!')
				navigate(-1)
			} else {
				alert('Exclusão cancelada.')
			}
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message)
			} else {
				alert('Não foi possível excluir o produto!')
			}
		}
	}

	function formatImagePath(imagePath) {
		if (imagePath === null) {
			return ''
		}
		if (imagePath.length > 11) {
			const extractedPart = imagePath.slice(-13)

			return `. . . ${extractedPart}`
		} else {
			return imagePath
		}
	}

	useEffect(() => {
		async function fetchProduct() {
			try {
				const response = await api.get(`/products/${params.id}`)

				const {
					name,
					price,
					category_id,
					description,
					productIngredients,
					imagePath
				} = response.data

				setName(name)
				setPrice(price)
				setIngredients([])
				setCategory(category_id)
				setDescription(description)
				setIngredients(productIngredients)
				setImagePath(formatImagePath(imagePath))
			} catch (error) {
				if (error.response) {
					alert(error.response.data.message)
					setLoading(false)
				} else {
					alert('Não foi possível carregar os dados do produto.')
				}
			} finally {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			}
		}

		fetchProduct()
	}, [])

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
					alert('Não foi possível carregar os ingredientes.')
				}
			} finally {
				setTimeout(() => {
					setLoading(false)
				}, 500)
			}
		}

		fetchIngredients()
		window.scrollTo(0, 0)
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
					alert('Não foi possível carregar as categorias.')
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
							<h1>Editar Prato</h1>

							<div className="form-wrapper">
								<div className="form-item image">
									<label htmlFor="product-img">Imagem do Prato</label>
									<label htmlFor="product-img">
										<FiUpload size={24} />
										{imagePath ? imagePath : 'Selecione Imagem'}
									</label>
									<Input
										type="file"
										name="product-img"
										id="product-img"
										onChange={handleChangeImage}
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
										value={name}
									/>
								</div>

								<div className="form-item category">
									<label htmlFor="category">Category</label>
									<div>
										<select
											value={category}
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
										value={price}
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
										value={description}
									/>
								</div>
							</div>

							<div className="submit-buttons">
								<Button title="Excluir Prato" onClick={handleDeleteProduct} />

								<Button
									title="Salvar Alterações"
									onClick={handleUpdateProduct}
								/>
							</div>
						</Form>
					)}
				</Content>
			</main>
			<Footer />
		</Container>
	)
}
