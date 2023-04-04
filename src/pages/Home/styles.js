import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: max-content auto;
	grid-template-areas:
		'header'
		'content';

	> .content {
		grid-area: content;
	}
`
