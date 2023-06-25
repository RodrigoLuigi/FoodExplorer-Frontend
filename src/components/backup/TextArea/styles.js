import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	width: 100%;

	text-align: left;

	label {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	textarea {
		width: 100%;
		min-height: 274px;
		background-color: ${({ theme }) => theme.COLORS.DARK_800};
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		border: none;
		resize: none;
		margin-bottom: 8px;
		border-radius: 10px;
		padding: 16px;

		&:placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_100};
		}
	}
`
