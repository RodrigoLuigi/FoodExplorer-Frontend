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

		::before {
			@media (min-width: 1024px) {
				content: 'Histórico de ';
			}
		}
	}
`

export const HistoryTable = styled.div`
	width: 100%;
	margin-top: 3.4rem;

	table {
		width: 100%;

		text-align: left;
		font-size: 14px;
	}

	thead {
		display: none;
	}

	tbody {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	tbody tr {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
		border-radius: 8px;

		padding: 16px 20px;

		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	tbody tr td:nth-child(1) {
		order: 2;
	}
	tbody tr td:nth-child(2) {
		order: 1;
	}
	tbody tr td:nth-child(3) {
		order: 4;
	}
	tbody tr td:nth-child(4) {
		order: 3;
	}

	.status-cell {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.status-cell div {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: red;
	}

	.waitingStyle div {
		background-color: red;
	}

	.inProductionStyle div {
		background-color: yellow;
	}

	.doneStyle div {
		background-color: green;
	}

	@media (min-width: 425px) {
		tbody tr {
			gap: 3.1rem;
		}
	}

	@media (min-width: 768px) {
		tbody {
			flex-wrap: wrap;
			flex-direction: row;
		}

		tbody tr {
			width: 48%;
		}
	}

	@media (min-width: 1024px) {
		border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

		border-radius: 8px;

		table {
			border-collapse: collapse;
		}

		thead {
			display: contents;
		}

		thead th {
			padding: 2.1rem 2.4rem;

			font-weight: 700;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
		}

		tbody {
			display: contents;
		}

		tbody tr {
			display: table-row;
			border: none;
		}

		tbody td {
			padding: 1.6rem 2.4rem;
		}

		thead th,
		tbody td {
			border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
		}

		tbody td,
		thead th {
			border-top: none;
			border-left: none;
		}

		thead th:last-child,
		tbody td:last-child {
			border-right: none;
		}

		tbody tr:last-child td {
			border-bottom: none;
		}
	}
`
