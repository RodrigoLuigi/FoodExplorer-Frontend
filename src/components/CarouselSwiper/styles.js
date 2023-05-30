import styled from 'styled-components'

export const Container = styled.div`
	.swiper {
		width: 100%;
		/* 	height: 100%; */
	}

	/* .swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		color: red;

		/* Center slide text vertically */ /*
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	} */

	/* .swiper-button-next,
	.swiper-button-prev {
		color: blue;
		margin: 0;
		top: 0;
		height: 100%;
	}

	.swiper-button-next {
		background: linear-gradient(
			to right,
			rgba(0, 10, 15, 0.27) 0%,
			#000a0f 100%
		);
		right: -2px;
	}

	.swiper-button-prev {
		background: linear-gradient(
			to left,
			rgba(0, 10, 15, 0.27) 0%,
			#000a0f 100%
		);
		left: -2px;
	} */

	.swiper-button-next::after,
	.swiper-button-prev::after {
		font-size: 35px;
		font-weight: bold;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		@media (max-width: 768px) {
			display: none;
		}
	}
	@media (min-width: 768px) {
		.shadowLeft {
			width: 200px;
			height: 100%;
			background: linear-gradient(
				to left,
				rgba(0, 10, 15, 0.27) 0%,
				#000a0f 100%
			);
			position: absolute;
			top: 0;
			left: 0;
			z-index: 5;
		}

		.shadowRight {
			width: 200px;
			height: 100%;
			background: linear-gradient(
				to right,
				rgba(0, 10, 15, 0.27) 0%,
				#000a0f 100%
			);
			position: absolute;
			top: 0;
			right: 0;
			z-index: 5;
		}
	}
`
