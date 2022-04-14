import styled from 'styled-components'

export const TypeItem = styled.li`
	list-style: none;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 45px;
	margin-bottom: 15px;
	font-size: 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	transition: 0.5s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.12);
	}
	& p {
		width: 70%;
		text-align: start;
	}
`
