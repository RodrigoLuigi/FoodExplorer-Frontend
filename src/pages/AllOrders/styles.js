import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-rows: max-content auto max-content;
	grid-template-areas:
		'header'
		'content'
		'footer';
	overflow-x: hidden;

	> main {
		grid-area: content;
		width: 100vw;

		margin-top: 11.6rem;
	}
`

export const Content = styled.div`
	max-width: 116rem;
	padding: 3rem 2.3rem 5.3rem;
	margin: 0 auto;

	> h1 {
		font-family: var(--ff-heading);
		font-size: 3.2rem;
		font-weight: 500;
		color: ${({ theme }) => theme.COLORS.LIGHT_300};

		margin-top: 2rem;
	}
`
