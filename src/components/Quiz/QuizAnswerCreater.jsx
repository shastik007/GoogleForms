import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Input'

const StyledAnswerCreater = styled.div`
	width: 95%;
	display: flex;
	padding: 0 20px;
  margin-bottom: 15px;
`

export const QuizAnswerCreater = ({onClick}) => {
	return (
		<StyledAnswerCreater>
			<Input
			    onClick={onClick}
				width={20}
				defaultValue='create new answer'
				placeholder='create new answer'
			/>
		</StyledAnswerCreater>
	)
}
