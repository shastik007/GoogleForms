import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useBeforeunload } from 'react-beforeunload'
import { NameCustomization } from '../components/Quiz/NameCustomization'
import { QuizMaker } from '../components/Quiz/QuizMaker'
import { ToolBar } from '../components/Quiz/ToolBar'
import { sortCards, SaveLocalStorage } from '../utils/helpers/helpers'

const StyledQuiz = styled.div``

export const Quiz = () => {
   const testCreator = useSelector((state) => state.testCreator)
   useBeforeunload(() => {
      SaveLocalStorage('testsCreater', testCreator)
   })
   return (
      <StyledQuiz>
         <NameCustomization />
         {testCreator.questions.map((el) => {
            return <QuizMaker key={el.id} id={el.id} information={el} />
         })}
         <ToolBar />
      </StyledQuiz>
   )
}
