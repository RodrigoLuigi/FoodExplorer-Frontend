import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	width: 100%;

	text-align: left;

	> label {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}
`

export const SelectWrapper = styled.div`
	position: relative;
	display: inline-block;

	> select {
		appearance: none;

		width: 100%;
		height: 4.8rem;

		padding: 1.2rem 1.4rem;

		font-size: 1.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};

		border: none;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_900};

		cursor: pointer;
	}

	svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		position: absolute;
		top: 12px;
		right: 14px;
	}
`

/* -webkit-appearance: none;
		-moz-appearance: none; */

/* width: 100%;
		height: 4.8rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		padding: 1.2rem 1.4rem;

		border: none;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_900}; */
