import styled from 'styled-components'

export const Container = styled.header`
	grid-area: header;
	position: fixed;
	z-index: 999;

	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.DARK_700};

	> .content {
		max-width: 1160px;
		height: 11.6rem;
		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		align-items: center;

		gap: 3.2rem;

		padding: 0 2.3rem;

		@media (min-width: 768px) {
			.menu {
				display: none;
			}
		}

		/* @media (min-width: 1160px) {
			padding: 0 12.3rem;
		} */
	}
`

export const Logo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: clamp(16rem, 10rem + 10vw, 19rem);
	}
`

export const Search = styled.div`
	width: 100%;

	display: none;
	align-items: center;

	padding: 0 1.4rem;
	border-radius: 5px;

	background-color: ${({ theme }) => theme.COLORS.DARK_900};

	> div {
		width: 100%;
		display: flex;
		align-items: center;
	}

	label {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	@media (min-width: 768px) {
		display: flex;
	}

	@media (min-width: 1060px) {
		padding: 0 9.9rem;
	}
`

export const Orders = styled.button`
	background: transparent;
	border: 0;
	position: relative;

	> span {
		width: 20px;
		height: 20px;

		position: absolute;
		top: -2px;
		left: 17.54px;

		border-radius: 99px;

		background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

		display: flex;
		align-items: center;
		justify-content: center;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		font-size: 12px;
		font-weight: 500;
		font-family: var(--ff-heading);

		@media (min-width: 768px) {
			display: none;
		}
	}

	> strong {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-size: 14px;
		display: none;
		white-space: nowrap;

		@media (min-width: 768px) {
			display: block;
		}
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		gap: 8px;

		background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
		padding: 1.2rem 3.2rem;

		border-radius: 5px;
	}
`

export const Logout = styled.button`
	background-color: transparent;
	border: none;

	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	display: none;

	@media (min-width: 768px) {
		display: block;
	}
`
