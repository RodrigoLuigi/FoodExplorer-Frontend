import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Brand } from '../../components/Brand'

import { Category } from '../../components/Category'
import { Carousel } from '../../components/Carousel'
import { Card } from '../../components/Card'

import { Container, Content } from './styles'

export function Home() {
	const dishes = [
		{
			id: 1,
			disheImg: '',
			title: 'Torrada de Parma',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 2,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 3,
			disheImg: '',
			title: 'Isca de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 4,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 5,
			disheImg: '',
			title: 'Torrada de Integral',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		}
	]

	const desserts = [
		{
			id: 1,
			disheImg: '',
			title: 'Torrada de Parma',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 2,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 3,
			disheImg: '',
			title: 'Isca de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 4,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 5,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		}
	]

	const drinks = [
		{
			id: 1,
			disheImg: '',
			title: 'Torrada de Parma',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 2,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 3,
			disheImg: '',
			title: 'Isca de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 4,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		},
		{
			id: 5,
			disheImg: '',
			title: 'Torrada de Flango',
			description:
				'	Presunto de parma e rúcula em um pão com fermentação natural.',
			price: '25,95'
		}
	]

	return (
		<Container>
			<Header />

			<main>
				<Brand />

				<Content>
					<Category title="Refeições">
						<Carousel>
							{dishes.map((dishe) => {
								return <Card data={dishe} key={String(dishe.id)} />
							})}
						</Carousel>
					</Category>

					<Category title="Sobremesas">
						<Carousel>
							{desserts.map((dessert) => {
								return <Card data={dessert} key={String(dessert.id)} />
							})}
						</Carousel>
					</Category>

					<Category title="Bebidas">
						<Carousel>
							{drinks.map((drink) => {
								return <Card data={drink} key={String(drink.id)} />
							})}
						</Carousel>
					</Category>
				</Content>
			</main>

			<Footer />
		</Container>
	)
}
