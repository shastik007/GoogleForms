import React from 'react'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'

const StyledAnswerInput = styled.input`
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	outline: none;
	border: none;
	transition: 0.5s;
	&:focus {
		border-bottom: 1px solid #4285f4;
	}
`
const StyledAnswerInputWrapper = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	margin-bottom: 15px;
`

export const AnswerInput = ({ icon, type }) => {
	return (
		<StyledAnswerInputWrapper>
			<div>
				<img src={icon} alt='' />
				<StyledAnswerInput
					fontSize={16}
					height={30}
					width={600}
					type={type}
				/>
			</div>
			<GrFormClose />
		</StyledAnswerInputWrapper>
	)
}
