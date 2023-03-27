import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	width: 100%;

	text-align: left;

	> label {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	> input {
		width: 100%;
		height: 4.8rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		padding: 1.2rem 1.4rem;

		border: none;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_900};

		&:placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}
`
