import styled from 'styled-components'

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3.7rem;

	label {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	input {
		background-color: transparent;
		border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	.form-item {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.card-validate {
		display: flex;
		gap: 1.7rem;
	}

	> button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;

		width: 100%;
		padding: 12px 32px;

		border: 0;
		border-radius: 5px;

		font-family: var(--ff-heading);
		font-size: 1.4rem;
		font-weight: 500;
		line-height: 2.4rem;
		text-align: center;

		background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		&:disabled {
			opacity: 0.5;
		}
	}
`
