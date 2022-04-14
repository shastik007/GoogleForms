import React from 'react'
import styled from 'styled-components'
import { IoMdArrowDropdown } from 'react-icons/io'

const StyledSelcet = styled.div`
	outline: none;
	display: flex;
	justify-content: space-between;
	padding-right: 5px;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.12);
	width: ${({ width }) => `${width}%`};
	height: ${({ height }) => `${height}px`};
	.wrapper {
		width: 60%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`

export const Select = ({ width, height, onClick, type }) => {
	console.log(type)
	return (
		<StyledSelcet onClick={onClick} height={height} width={width}>
			<div className='wrapper'>
				<img height={20} width={20} src={type.icon} alt='' />
				<p>{type.text}</p>
			</div>
			<IoMdArrowDropdown />
		</StyledSelcet>
	)
}
