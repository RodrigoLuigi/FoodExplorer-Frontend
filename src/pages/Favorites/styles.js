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

	margin: 5.6rem auto;
	padding: 0 2.3rem;

	display: flex;
	flex-direction: column;
	gap: 2.7rem;

	h1 {
		font-family: var(--ff-heading);
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-size: 3.2rem;
		font-weight: 500;
	}
`

export const FavoritesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 4.8rem;

	> .favorite-card {
		display: flex;
		align-items: center;
		gap: 1.3rem;
		padding-block: 1.6rem;
	}
`

export const CardImage = styled.div`
	width: 7.5rem;
	height: 7.5rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;

	h2 {
		font-family: var(--ff-heading);
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-size: 20px;
		font-weight: 500;
	}

	> button {
		background-color: transparent;
		border: none;

		font-size: 12px;

		color: ${({ theme }) => theme.COLORS.TOMATO_400};
	}
`
