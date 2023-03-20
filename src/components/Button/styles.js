import styled from 'styled-components'

export const Container = styled.button`
	width: 100%;
	height: 4.6rem;

	border: 0;
	border-radius: 5px;

	font-family: var(--ff-heading);
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 2.4rem;
	text-align: center;

	background-color: ${({ theme }) => theme.COLORS.RED_500};
	color: ${({ theme }) => theme.COLORS.WHITE};

	&:disabled {
		opacity: 0.5;
	}
`
