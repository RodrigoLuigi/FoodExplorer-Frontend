import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	width: 100%;

	text-align: left;

	label {
		font-size: 1.6rem;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	label:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 8px;

		width: 100%;
		padding: 1.2rem 3.2rem;

		font-family: var(--ff-heading);
		font-size: 1.4rem;
		font-weight: 500;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		border: none;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_800};

		cursor: pointer;
	}

	input {
		display: none;
	}

	@media (min-width: 1024px) {
		width: 229px;
	}
`
