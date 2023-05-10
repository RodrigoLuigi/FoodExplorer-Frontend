import styled from 'styled-components'

export const Container = styled.div`
	overflow-y: hidden;
	max-width: 1160px;

	padding-top: 3rem;
	margin: 1.5rem auto 0;

	> .content {
		display: flex;
		justify-content: end;
		align-items: center;
		margin-right: 1.3rem;
		margin-left: 3.6rem;

		height: 120px;

		position: relative;

		border-radius: 3px;
		background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

		img {
			position: absolute;
			bottom: 0;
			left: -28px;
			filter: drop-shadow(6px 4px 6px black);
		}

		.text {
			width: 21.5rem;
			margin-top: 15px;

			z-index: 1;

			h2 {
				font-family: var(--ff-heading);
				font-size: 18px;
				font-weight: 500;
			}

			p {
				font-family: var(--ff-body);
				font-size: 12px;
			}
		}

		@media (min-width: 451px) {
			padding-right: 0.6rem;
			height: 140px;
			justify-content: center;

			img {
				width: 215px;
			}

			.text {
				margin-left: 17rem;
			}
		}

		@media (min-width: 569px) {
			height: 160px;

			img {
				width: 252px;
			}

			.text {
				width: 28.5rem;

				h2 {
					font-size: 24px;
				}

				p {
					font-size: 14px;
				}
			}
		}

		@media (min-width: 768px) {
			height: 200px;

			img {
				width: 556px;
				height: 312px;
				left: -118px;
				top: -77px;
			}

			.text {
				width: 39rem;
				margin-left: 30rem;

				h2 {
					font-size: 36px;
				}
			}
		}

		@media (min-width: 1024px) {
			height: 240px;
			margin-right: 2.3rem;

			img {
				width: 656px;
				height: 412px;
				left: -112px;
				top: -115px;
			}

			.text {
				width: auto;
				margin-top: 0;
				margin-right: -5rem;

				h2 {
					font-size: 40px;
				}

				p {
					font-size: 16px;
				}
			}
		}
	}

	@media (min-width: 569px) {
		padding-top: 4.1rem;
	}

	@media (min-width: 768px) {
		padding-top: 9.1rem;
	}

	@media (min-width: 1024px) {
		padding-top: 13.2rem;
		margin-top: 3.2rem;
	}
`
