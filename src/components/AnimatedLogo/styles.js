import styled from 'styled-components'

export const Container = styled.div`
	position: absolute;
	left: 0;
	top: 0;

	background-color: ${({ theme }) => theme.COLORS.DARK_400};

	height: 100vh;
	width: 100vw;

	display: flex;
	align-items: center;
	justify-content: center;

	overflow: hidden;

	/* padding: 0 3.4rem; */

	animation: bannerRecoil 2s ease-out both 5.5s;

	@keyframes bannerRecoil {
		0% {
			opacity: 1;
		}
		70% {
			opacity: 1;
		}
		100% {
			transform: translateY(-101vh);
			opacity: 0;
		}
	}

	/*=========== CONTENT ===========*/
	.content {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		height: 100%;
	}
	/*=========== LOGO SVG ===========*/
	.content-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 19px;
	}

	.content-logo svg:first-child {
		animation: animateTopDown 3s ease-in, rotateAnimation 4s;
	}

	.content-logo svg:first-child path {
		stroke: #065e7c;
		stroke-width: 3px;
		stroke-dashoffset: 1000;
		stroke-dasharray: 1000;

		animation: animate-1 3s forwards, svg-animation 3s ease-out 3.8s forwards;
	}

	.content-logo svg:last-child path {
		stroke: #ffffff;
		stroke-width: 2px;
		stroke-dashoffset: 1000;
		stroke-dasharray: 1000;

		animation: animateleftToRight 3.05s ease-out;
	}

	/*=========== ANIMATED LINE ===========*/

	.content .line {
		width: 3px;

		background: linear-gradient(#000000, #000000, #000000, #065e7c);

		position: absolute;
		top: 0;
		left: 20px;

		animation: animate-line 0.7s ease-in;
		animation-delay: 3s;
	}

	@keyframes animate-line {
		from {
			box-shadow: 0 0 1em 5px #00bfff;

			height: 0%;
		}

		to {
			box-shadow: 0 0 0;

			height: 47%;
		}
	}

	@keyframes svg-animation {
		0% {
			fill-opacity: 0%;
			stroke: #00bfff;
			stroke-dashoffset: 1000;
		}

		50% {
			stroke-dashoffset: 500;
		}

		100% {
			fill: #065e7c;

			fill-opacity: 100%;
			stroke: transparent;
			stroke-dashoffset: 0;
		}
	}

	@keyframes svg-animation-2 {
		0% {
			stroke-dashoffset: 1000;
		}

		50% {
			stroke-dashoffset: 500;
		}

		100% {
			fill-opacity: 100%;
			stroke: transparent;
			stroke-dashoffset: 0;
		}
	}

	@keyframes animateTopDown {
		0% {
			transform: translateX(150px) scale(5);
		}

		/* 30% {
    transform: translateY(0px) translateX(150px) scale(4);
  } */

		100% {
			transform: translateY(0) translateX(0);
		}
	}

	@keyframes animateleftToRight {
		0% {
			transform: translateX(-1000px);
		}

		50% {
			transform: translateX(-400px);
		}

		100% {
			transform: translateX(0);
		}
	}

	/*========================================*/
	@keyframes animate-1 {
		0% {
			/* fill-opacity: 0; */
			fill: ${({ theme }) => theme.COLORS.DARK_400};

			stroke-dashoffset: 1000;
			stroke: ${({ theme }) => theme.COLORS.DARK_900};
		}

		50% {
			stroke-dashoffset: 500;
		}

		100% {
			/* fill-opacity: 0%; */
			fill: ${({ theme }) => theme.COLORS.DARK_400};
			stroke: ${({ theme }) => theme.COLORS.DARK_900};

			/*  stroke: transparent; */
			stroke-dashoffset: 0;
		}
	}

	@keyframes rotateAnimation {
		0% {
			transform: rotate(0deg) scale(8);
			transform-origin: right 50px;
		}
		100% {
			transform: rotate(360deg) scale(1);
		}
	}
`
