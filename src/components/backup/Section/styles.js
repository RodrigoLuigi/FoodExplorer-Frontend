import styled from 'styled-components'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;

	width: 100%;

	> h2 {
		font-size: 1.6rem;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}
`
