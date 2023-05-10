import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;

	height: 100%;
	width: 200px;

	position: absolute;
	left: -2px;
	top: 0;

	z-index: 9999;

	background: linear-gradient(to left, rgba(0, 10, 15, 0.27) 0%, #000a0f 100%);

	> button {
		background: transparent;
		color: white;
		border: none;

		position: absolute;
		left: 0;

		cursor: pointer;
	}
`
