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
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7.5rem;

	margin-top: 2rem;

	> section {
		display: flex;
		flex-direction: column;
		gap: 3.2rem;

		h2 {
			font-size: 3.2rem;
			font-weight: 500;
			font-family: var(--ff-heading);
		}

		ul {
			list-style: none;
		}
	}

	.my-order {
		width: 440px;
	}

	.payment {
		/* width: 100%; */

		/* max-width: 530px; */
	}

	.buttons {
		display: flex;
		width: 100%;
	}

	.buttons button {
		flex: 1;
		height: 81px;
		padding: 12px 14px;

		font-size: 16px;
		font-family: sans-serif;
		color: #ffffff;

		background-color: #000c12;
		border: 1px solid #76797b;
		border-bottom: none;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
	}

	.buttons button:nth-child(1) {
		border-top-left-radius: 8px;
		border-right: none;
	}
	.buttons button:nth-child(2) {
		border-top-right-radius: 8px;
	}

	.buttons button.active {
		background-color: ${({ theme }) => theme.COLORS.DARK_800};
	}

	.payment-content {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 350px;

		border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
		border-radius: 0 0 8px 8px;
	}

	.checkout {
		display: none;
		padding-inline: 9.1rem;
	}

	.checkout > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3.7rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	.checkout > span {
		font-size: 24px;
		font-style: normal;
		font-weight: 700;

		white-space: nowrap;
	}

	.active {
		display: block;
	}

	@media (min-width: 768px) {
		flex-direction: row;

		.payment {
			width: 530px;
		}
	}
`
