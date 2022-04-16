import React from 'react'
import styled from 'styled-components'
import { QuizMakerForm } from './QuizMakerForm'
import { ToolBar } from './ToolBar'

const StyledQuizMaker = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.12);
  background-color: white;
  display: flex;
  .left_border {
    width: 7px;
    background-color: #4285f4;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 12px;
  }
`

export const QuizMaker = ({ information }) => {
  return (
    <StyledQuizMaker>
      <div className='left_border' />
      <QuizMakerForm information={information} />
    </StyledQuizMaker>
  )
}
