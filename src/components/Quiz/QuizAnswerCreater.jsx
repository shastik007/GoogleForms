import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Input'

const StyledAnswerCreater = styled.div`
	width: 95%;
	display: flex;
	padding: 0 20px;
  margin-bottom: 15px;
`

export const QuizAnswerCreater = () => {
	return (
		<StyledAnswerCreater>
			<Input
				width={20}
				defaultValue='create new answer'
				placeholder='create new answer'
			/>
		</StyledAnswerCreater>
	)
}
