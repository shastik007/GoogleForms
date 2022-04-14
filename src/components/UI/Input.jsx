import styled from 'styled-components'

export const Input = styled.input`
	padding: 5px;
	width: ${({ width }) => `${width}%`};
	height: 30px;
	color: black;
	text-align: start;
	outline: none;
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	font-size: ${({ fontsize }) => `${fontsize}px`};
	&::placeholder {
		color: black;
	}
`
