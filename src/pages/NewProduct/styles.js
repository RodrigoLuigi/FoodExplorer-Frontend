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
	max-width: 1160px;
	margin: 3.6rem 3.3rem 5.3rem;
	padding: 0 2.3rem;

	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	@media (min-width: 1024px) {
		gap: 4.2rem;
		margin: 0 auto;
		padding: 3.6rem 2.3rem 5.3rem;
	}
`
