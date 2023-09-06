import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1.3rem;

	padding: 1.6rem 0;

	.card-image {
		width: 7.8rem;
		height: 7.8rem;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info-container div {
		display: flex;
		align-items: center;
		gap: 1.2rem;
	}

	.info-container h2 {
		font-family: var(--ff-heading);
		font-size: 2rem;
		font-weight: 500;
	}

	.info-container span {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
		font-size: 1.2rem;
	}

	.info-container button {
		background: none;
		border: none;

		font-size: 1.2rem;
		color: ${({ theme }) => theme.COLORS.TOMATO_400};
	}
`
