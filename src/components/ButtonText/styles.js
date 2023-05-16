import styled from 'styled-components'

export const Container = styled.button`
	display: flex;
	align-items: center;

	background-color: transparent;
	border: none;

	color: ${({ theme }) => theme.COLORS.LIGHT_300};

	span {
		font-family: var(--ff-heading);
		font-size: 2.4rem;
		font-weight: 500;
		line-height: 2.4rem;
	}
`
