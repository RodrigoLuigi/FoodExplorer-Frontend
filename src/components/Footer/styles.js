import styled from 'styled-components'

export const Container = styled.footer`
	grid-area: footer;
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	> .content {
		max-width: 1160px;
		height: 7.7rem;
		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 0 2.3rem;
	}
`

export const Logo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: clamp(16rem, 10rem + 10vw, 19rem);
	}

	span {
		color: ${({ theme }) => theme.COLORS.LIGHT_200};
	}
`
