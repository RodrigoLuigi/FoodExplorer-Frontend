import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	overflow: hidden;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	width: 47.6rem;

	padding: 6.4rem;
	margin-right: 10.8rem;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
	border-radius: 1.6rem;

	> h1 {
		font-family: var(--ff-heading);
		font-weight: 500;
		font-size: 3.2rem;
		line-height: 2.4rem;
		text-align: center;
	}

	> a {
		font-size: 1.4rem;
		line-height: 2.4rem;
		font-weight: 500;

		text-align: center;

		color: ${({ theme }) => theme.COLORS.WHITE};
	}
`

export const Logo = styled.div`
	flex: 1;
	text-align: center;
	margin-bottom: 5rem;
`
