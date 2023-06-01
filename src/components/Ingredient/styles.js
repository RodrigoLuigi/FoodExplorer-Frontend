import styled from 'styled-components'

export const Container = styled.span`
	font-family: var(--ff-heading);
	font-weight: 500;
	font-size: 14px;

	height: 3.2rem;

	padding: 4px 8px;
	border-radius: 5px;

	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`
