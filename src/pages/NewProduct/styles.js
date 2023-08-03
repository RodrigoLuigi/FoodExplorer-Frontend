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

	.ingredients-wrapper {
		width: 100%;
		padding: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_800};

		border-radius: 8px;

		display: flex;
		gap: 1.6rem;

		flex-wrap: wrap;
		align-items: center;
	}
`

export const Content = styled.div`
	max-width: 116rem;
	padding: 1rem 2.3rem 5.3rem;
	margin: 0 auto;
`

export const Form = styled.form`
	display: grid;
	gap: 3.2rem;

	width: 100%;
	margin-top: 2rem;

	.form-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 3.2rem;
	}

	.form-item {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		width: 100%;
	}

	label {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
	}

	.image input {
		display: none;
	}

	.image label:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 8px;

		width: 100%;
		padding: 1.2rem 3.2rem;

		font-family: var(--ff-heading);
		font-size: 1.4rem;
		font-weight: 500;
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		border: none;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_800};

		cursor: pointer;
		transition: filter 0.2s;
	}

	.image label:nth-child(2):hover {
		filter: brightness(0.9);
	}

	.name input,
	.price input {
		background-color: ${({ theme }) => theme.COLORS.DARK_800};
	}

	.price input {
		width: 100%;
		height: 4.8rem;
		color: rgb(255, 255, 255);
		padding: 1.2rem 1.4rem;
		border: none;
		border-radius: 8px;
	}

	.category div {
		position: relative;
		display: inline-block;
	}

	.category select {
		width: 100%;
		height: 4.8rem;

		padding: 1.2rem 1.4rem;

		border: none;
		border-radius: 8px;

		appearance: none;

		font-size: 1.4rem;
		color: ${({ theme }) => theme.COLORS.LIGHT_400};

		background-color: ${({ theme }) => theme.COLORS.DARK_900};

		cursor: pointer;
	}

	.category svg {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		position: absolute;
		top: 12px;
		right: 14px;
	}

	.description textarea {
		width: 100%;
		resize: none;
		height: 17.2rem;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		background-color: ${({ theme }) => theme.COLORS.DARK_800};

		padding: 1.2rem 1.4rem;

		border: none;
		border-radius: 8px;

		&:placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
		}
	}

	.ingredients {
		display: flex;
		align-items: center;
		gap: 5px;

		background-color: ${({ theme }) => theme.COLORS.DARK_800};

		border: ${({ theme }) => `1px dashed ${theme.COLORS.LIGHT_300}`};

		border-radius: 8px;
		padding-inline: 16px;
		height: 32px;
	}

	.ingredients select {
		appearance: none;

		/* color: ${({ theme }) => theme.COLORS.LIGHT_400}; */
		color: ${({ theme }) => theme.COLORS.LIGHT_500};
		background-color: ${({ theme }) => theme.COLORS.DARK_800};

		border: none;
		font-size: 1.4rem;
	}

	.ingredients button {
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: none;
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.TOMATO_100};
	}

	.button-add {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	> button {
		width: 200px;
		justify-self: flex-end;
	}

	@media (min-width: 768px) {
		.image {
			width: 229px;
		}

		.name {
			flex: 1 0 220px;
		}

		.category {
			width: 200px;
		}

		.price {
			width: 150px;
		}

		section {
			flex: 1 0 358px;
		}
	}

	@media (min-width: 1024px) {
		.category {
			width: 358px;
		}

		.price {
			width: 251px;
		}
	}
`
