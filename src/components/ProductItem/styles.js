import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	background-color: ${({ theme }) => theme.COLORS.LIGHT_600};

	border: none;

	border-radius: 8px;
	padding-inline: 16px;
	height: 32px;

	> input {
		width: 65px;
		display: flex;

		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		background: transparent;

		border: none;
		font-size: 1.4rem;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}

	> button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: none;
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.TOMATO_100};
	}

	.button-add {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}
`
