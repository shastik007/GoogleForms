import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { NameCustomization } from '../components/Quiz/NameCustomization'
import { QuizMaker } from '../components/Quiz/QuizMaker'
import { ToolBar } from '../components/Quiz/ToolBar'

const StyledQuiz = styled.div`
	background-color: #ede7f6;
	padding-top: 15px;
`

export const Quiz = () => {
	const questions = useSelector((state) => state.testCreator.questions)
	const dispatch = useDispatch()
	return (
		<StyledQuiz>
			<NameCustomization />
			{questions.length > 0 &&
				questions.map((el) => {
					return <QuizMaker key={el.id} id={el.id} information={el} />
				})}
			<ToolBar />
		</StyledQuiz>
	)
}
