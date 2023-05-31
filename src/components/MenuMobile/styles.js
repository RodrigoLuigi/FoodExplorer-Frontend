import styled, { css } from 'styled-components'

export const Container = styled.div`
	display: grid;

	grid-template-rows: max-content auto;
	grid-template-areas:
		'header'
		'content';

	position: absolute;
	z-index: 5;
	top: -100vh;
	left: 0;

	width: 100%;
	height: 100vh;

	opacity: 0;

	background-color: ${({ theme }) => theme.COLORS.DARK_400};

	transition: 0.6s ease-in-out;

	${({ isVisible }) =>
		isVisible &&
		css`
			top: 0vh;
			opacity: 1;
		`}

	.header {
		grid-area: header;
		height: 11.6rem;

		display: flex;
		align-items: center;

		gap: 1.6rem;

		padding: 0 2.8rem;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		> span {
			font-size: 2.1rem;
		}
	}

	.content {
		grid-area: content;
		padding: 0 2.8rem;

		ul {
			margin-top: 3.2rem;
			list-style: none;
		}

		li {
			padding: 1rem;
			border-bottom: 1px solid #192227;
		}

		span {
			font-weight: 300;
		}
	}
`
export const Search = styled.div`
	display: flex;
	align-items: center;

	padding: 0 1.4rem;
	border-radius: 5px;

	margin-top: 3.5rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_900};

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
`
