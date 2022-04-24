/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { testCreatorActions } from '../../store/testCreatorSlice'
import { QuizMakerForm } from './QuizMakerForm'

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
   const [currentQuestion, setCurrenQuestion] = useState(null)
   const dispatch = useDispatch()
   const onDragStart = (question) => {
      setCurrenQuestion(question)
   }
   const onDragLeave = () => {}
   const onDragEnd = () => {
      // console.log('drag end')
   }
   const onDragOver = (event) => {
      event.preventDefault()
   }
   const onDragDrop = (event, question) => {
      event.preventDefault()
      dispatch(
         testCreatorActions.dragDropAction({
            dragQuestion: question,
            currentQuestion,
         })
      )
   }

   return (
      <StyledQuizMaker
         onDragStart={(e) => onDragStart(e, information)}
         onDragLeave={(e) => onDragLeave(e)}
         onDragEnd={(e) => onDragEnd(e)}
         onDragOver={(e) => onDragOver(e)}
         onDrag={(e) => onDragDrop(e, information)}
         draggable="true"
      >
         <div className="left_border" />
         <QuizMakerForm information={information} />
      </StyledQuizMaker>
   )
}
