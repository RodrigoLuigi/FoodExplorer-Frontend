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
	}
`

export const Content = styled.div`
	max-width: 1160px;
	margin: 6.2rem auto 4.5rem;
	padding-left: 2.3rem;

	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	@media (min-width: 768px) {
		padding: 0 2.3rem;
	}
`
