import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-rows: max-content auto max-content;
	grid-template-areas:
		'header'
		'content'
		'footer';
	overflow-x: hidden;

	> main {
		grid-area: content;
		width: 100vw;
		margin-top: 11.6rem;
	}
`

export const Content = styled.div`
	max-width: 1160px;
	margin: 3.6rem 3.3rem 5.3rem;
	padding: 0 2.3rem;

	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	@media (min-width: 1024px) {
		gap: 4.2rem;
		margin: 0 auto;
		padding: 3.6rem 2.3rem 5.3rem;

		.new-product {
			width: 13.1rem;
			height: 4.8rem;
			align-self: flex-start;
		}
	}
`

export const ProductNote = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;

	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 4.7rem;
	}
`

export const Image = styled.div`
	width: 26.4rem;
	height: 26.4rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 1024px) {
		width: 40rem;
		height: 40rem;

		img {
			width: 390px;
			height: 389px;
			object-fit: cover;
		}
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4.8rem;
	text-align: center;

	max-width: 687px;

	.description {
		display: flex;
		flex-direction: column;
		gap: 2.4rem;

		h2 {
			font-family: var(--ff-heading);
			font-weight: 500;
			font-size: 2.7rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};

			white-space: nowrap;
		}

		p {
			font-family: var(--ff-heading);
			font-weight: 400;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
		}

		.ingredients {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 2.4rem;
		}
	}

	@media (min-width: 1024px) {
		gap: 2.4rem;
		text-align: left;

		.description {
			h2 {
				font-size: 4rem;
			}

			p {
				font-size: 2.4rem;
			}

			.ingredients {
				gap: 1.2rem;
				justify-content: left;
			}
		}
	}
`

export const Include = styled.div`
	width: 100%;
	margin-top: 45px;

	display: flex;

	align-items: center;
	gap: 1.6rem;

	.count {
		display: flex;
		align-items: center;
		gap: 1.6rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_300};

		span {
			font-size: 2.2rem;
			font-weight: 700;
		}

		button {
			background-color: transparent;
			border: none;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.btn-order {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;

		background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

		padding: 8.11237px 16.2247px;
		width: 188px;
		height: 37.86px;

		border-radius: 3px;
		border: none;

		img {
			width: 21px;
			height: 21px;
		}

		strong {
			font-size: 1.2rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_100};
			white-space: nowrap;
			font-weight: 500;
		}
	}

	@media (min-width: 1024px) {
		.count {
			gap: 1.4rem;
		}

		.btn-order {
			padding: 12px 24px;
			width: 162px;
			height: 48px;

			border-radius: 3px;
			img {
				display: none;
			}

			strong {
				font-family: var(--ff-heading);
				font-size: 1.4rem;
			}
		}
	}
`
