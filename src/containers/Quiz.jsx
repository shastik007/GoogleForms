import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { NameCustomization } from '../components/Quiz/NameCustomization'
import { QuizMaker } from '../components/Quiz/QuizMaker'
import { ToolBar } from '../components/Quiz/ToolBar'
import { sortCards } from '../utils/helpers/helpers'

const StyledQuiz = styled.div``

export const Quiz = () => {
   const questions = useSelector((state) => state.testCreator.questions)

   return (
      <StyledQuiz>
         <NameCustomization />
         {questions.map((el) => {
            return <QuizMaker key={el.id} id={el.id} information={el} />
         })}
         <ToolBar />
      </StyledQuiz>
   )
}
