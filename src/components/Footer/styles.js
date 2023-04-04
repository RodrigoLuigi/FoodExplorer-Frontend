import styled from 'styled-components'

export const Container = styled.footer`
	grid-area: footer;
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	> .content {
		max-width: 1160px;
		height: 7.7rem;

		margin: 0 auto;
		padding: 0 2.3rem;

		display: flex;
		justify-content: space-between;
		align-items: center;

		img {
			width: clamp(16rem, 10rem + 10vw, 18.6rem);
		}

		span {
			color: ${({ theme }) => theme.COLORS.LIGHT_200};
		}
	}
`
