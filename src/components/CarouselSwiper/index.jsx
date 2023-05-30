// Import Swiper React components
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

import { Container } from './styles'

export function CarouselSwiper({ children }) {
	const settings = {
		slidesPerView: 1.5,
		spaceBetween: 30,
		navigation: true,
		modules: [Navigation],
		className: 'mySwiper',
		breakpoints: {
			1160: {
				slidesPerView: 3.5
			},
			768: {
				slidesPerView: 2.9
			},
			600: {
				slidesPerView: 2.5
			},
			425: {
				slidesPerView: 1.93
			}
		}
	}

	return (
		<Container>
			<Swiper {...settings}>
				<div className="shadowLeft"></div>
				{children}
				<div className="shadowRight"></div>
			</Swiper>
		</Container>
	)
}
