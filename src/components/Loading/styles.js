import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 10px;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 4;

	backdrop-filter: blur(15px);
	background: #00000080;

	.circle {
		animation: rotating 1s infinite;
		border-radius: 50%;
		border: ${({ theme }) => `5px solid ${theme.COLORS.TOMATO_400}`};
		border-top-color: ${({ theme }) => `${theme.COLORS.DARK_100}`};
		height: 50px;
		width: 50px;
	}

	.loader {
		color: #fff;
		display: inline-block;
		position: relative;
		font-family: Arial, Helvetica, sans-serif;
		box-sizing: border-box;
	}

	.loader::after {
		content: '';
		width: 2px;
		height: 2px;
		background: currentColor;
		position: absolute;
		bottom: 5px;
		right: -10px;
		box-sizing: border-box;
		animation: animloader 1s linear infinite;
	}

	@keyframes rotating {
		to {
			transform: rotate(1turn);
		}
	}

	@keyframes animloader {
		0% {
			box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
		}
		50% {
			box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
		}
		100% {
			box-shadow: 10px 0 white, 20px 0 white;
		}
	}
`
