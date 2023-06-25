import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;
	width: clamp(37.5rem, 30rem + 20vw, 47.6rem);

	margin: 0 auto;

	display: flex;
	flex-direction: column;

	justify-content: center;
	gap: 7.3rem;

	padding: 3.4rem;

	@media (min-width: 900px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-around;

		align-items: center;
	}
`

export const Logo = styled.div`
	img {
		width: clamp(27.8rem, 22rem + 10vw, 35rem);
	}

	@media (min-width: 900px) {
		margin-bottom: 8rem;
	}
`

export const Form = styled.form`
	display: flex;

	flex-direction: column;
	gap: 3.2rem;

	width: 100%;

	> h1 {
		display: none;

		font-family: var(--ff-heading);

		font-size: 3.2rem;
		font-weight: 500;
		line-height: 2.4rem;

		text-align: center;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 8px;

		label {
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
		}
	}

	> a {
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-weight: 500;

		text-align: center;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	@media (min-width: 900px) {
		width: 47.6rem;
		padding: 6.4rem;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		border-radius: 1.6rem;

		> h1 {
			display: block;
		}
	}
`
