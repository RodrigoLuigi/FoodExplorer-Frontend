import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	button {
		background-color: transparent;
		border: none;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 872px) {
		gap: 1.4rem;
	}
`
