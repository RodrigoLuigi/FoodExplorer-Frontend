import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${({ theme }) => theme.COLORS.DARK_300};
	border: 1px solid #000204;
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	padding: 2.4rem;

	width: clamp(21rem, 18rem + 7vw, 30.4rem);
	min-height: 29.2rem;

	position: relative;

	@media (min-width: 768px) {
		height: 390px;
	}

	@media (min-width: 872px) {
		width: 30.4rem;
		height: 462px;
	}
`

export const Favorites = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;

	> button {
		background-color: transparent;
		border: none;

		color: white;

		img {
			width: 2.4rem;
			height: 2.4rem;
		}
	}

	.favorite-icon {
		fill: red;
	}
`

export const CardImage = styled.div`
	/* width: 8.8rem;
		height: 8.8rem; */
	width: clamp(8.8rem, 5rem + 7vw, 17.6rem);
	height: clamp(8.8rem, 5rem + 7vw, 17.6rem);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 872px) {
		width: 17.6rem;
		height: 17.6rem;
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	text-align: center;

	button {
		background-color: transparent;
		border: none;

		display: flex;
		align-items: center;
		gap: 0.5rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	.title {
		font-family: var(--ff-heading);
		font-size: clamp(1.4rem, 0.4rem + 2vw, 2.4rem);
		font-weight: 700;

		white-space: nowrap;
	}

	span {
		font-family: var(--ff-heading);
		font-size: clamp(1.4rem, 0.4rem + 2vw, 2.4rem);
		font-weight: 700;

		transition: 300ms linear;
	}

	button:hover span {
		transform: translateX(3px);
		color: ${({ theme }) => theme.COLORS.CAKE_200};
	}

	.description {
		display: none;
		font-size: 1.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	.price {
		font-size: clamp(1.6rem, 0.8rem + 2vw, 3.2rem);
		font-weight: 400;

		color: ${({ theme }) => theme.COLORS.CAKE_200};
	}

	@media (min-width: 768px) {
		.description {
			display: block;
		}

		.price {
			padding-block: 1.1rem;
		}
	}
`

export const Include = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	align-items: center;
	gap: 1.6rem;

	> button {
		height: 32px;
	}

	@media (min-width: 872px) {
		flex-direction: row;
		width: auto;

		> button {
			width: 9.2rem;
			height: 4.8rem;
		}

		svg {
			width: 18px;
			height: 18px;
		}
	}
`
