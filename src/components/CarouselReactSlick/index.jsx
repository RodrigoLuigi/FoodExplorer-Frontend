import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { SamplePrevArrow } from './SamplePrevArrow'
import { SampleNextArrow } from './SampleNextArrow'

import { Container } from './styles'

export function Carousel({ children }) {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3.5,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 2.8
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.4,
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.8,
					arrows: false
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1.5,
					arrows: false
				}
			}
		]
	}

	return (
		<Container>
			<Slider {...settings}>{children}</Slider>
		</Container>
	)
}
