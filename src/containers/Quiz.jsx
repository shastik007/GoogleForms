import React from 'react'
import styled from 'styled-components'
import { NameCustomization } from '../components/Quiz/NameCustomization'
import { QuizMaker } from '../components/Quiz/QuizMaker'


const StyledQuiz = styled.div`
	background-color: #ede7f6;
	padding-top: 15px;
	height: 600px;
`

export const Quiz = () => {
	return (
		<StyledQuiz>
			<NameCustomization />
			<QuizMaker />
		</StyledQuiz>
	)
}
