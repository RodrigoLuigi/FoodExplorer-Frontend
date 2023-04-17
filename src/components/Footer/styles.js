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

		gap: 8px;

		img {
			width: clamp(14.2rem, 10rem + 10vw, 18.6rem);
		}

		span {
			text-align: center;
			font-size: 12px;
			color: ${({ theme }) => theme.COLORS.LIGHT_200};

			@media (min-width: 768px) {
				font-size: 14px;
			}
		}
	}
`
