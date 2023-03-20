import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	width: 100%;

	text-align: left;

	> label {
		font-size: 1.6rem;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}

	> input {
		font-size: 1.6rem;
		font-weight: 400;

		color: ${({ theme }) => theme.COLORS.WHITE};

		padding: 1.2rem 1.4rem;

		border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
		border-radius: 5px;

		background-color: transparent;

		::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_200};
		}
	}
`
