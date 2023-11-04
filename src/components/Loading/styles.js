import styled from 'styled-components'

export const Container = styled.div`
	align-items: center;
	backdrop-filter: blur(15px);
	background-color: red;
	background: #00000080;
	display: flex;
	gap: 10px;
	height: 100vh;
	justify-content: center;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 4;
	flex-direction: column;

	.circle {
		animation: rotating 1s infinite;
		border-radius: 50%;
		border: ${({ theme }) => `5px solid ${theme.COLORS.TOMATO_400}`};
		border-top-color: ${({ theme }) => `${theme.COLORS.DARK_100}`};
		height: 50px;
		width: 50px;
	}

	.loading {
		animation: fade-out 1s 300s forwards;
	}

	.just-moment {
		animation: fade-in 1s 300s forwards;
		opacity: 0;
	}

	@keyframes rotating {
		to {
			transform: rotate(1turn);
		}
	}

	@keyframes fade-in {
		to {
			transform: translateY(-150%);
			opacity: 1;
		}
	}

	@keyframes fade-out {
		to {
			transform: translateY(50%);
			opacity: 0;
		}
	}

	.loading {
		color: #fff;
		display: inline-block;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 400;
		position: relative;
	}
	.loading:before {
		content: '';
		animation: 3s print linear alternate infinite;
	}
	.loading:after {
		content: '';
		position: absolute;
		right: -4px;
		top: 50%;
		transform: translatey(-45%);
		width: 2px;
		height: 1.3em;
		background: currentColor;
		opacity: 0.8;
		animation: 1s blink steps(2) infinite;
	}

	@keyframes blink {
		0% {
			visibility: hidden;
		}
		100% {
			visibility: visible;
		}
	}
	@keyframes print {
		0% {
			content: 'Carregando...';
		}
		5% {
			content: 'Carregando..';
		}
		10% {
			content: 'Carregando.';
		}
		20% {
			content: 'Carregando';
		}
		30% {
			content: 'Carregan';
		}
		40% {
			content: 'Carrega';
		}
		50% {
			content: 'Carreg';
		}
		60% {
			content: 'Carre';
		}
		70% {
			content: 'Carr';
		}
		80% {
			content: 'Car';
		}
		90% {
			content: 'Ca';
		}
		100% {
			content: 'C';
		}
	}
`
