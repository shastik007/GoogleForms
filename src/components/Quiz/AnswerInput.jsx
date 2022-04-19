import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { testCreatorActions } from '../../store/testCreatorSlice'
import { useDebounce } from '../../hooks/useDebounce'

const StyledAnswerInput = styled.input`
   text-align: center;
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
   align-items: center;
   padding: 0 20px;
   margin-bottom: 15px;
   & img {
      width: 20px;
      height: 20px;
   }
`

export const AnswerInput = ({
   type,
   answerId,
   qwestionId,
   isCorrect,
   answerValue,
}) => {
   const [inputValue, setInputValue] = useState('')
   const debouncedInputValue = useDebounce(inputValue, 1000)
   useEffect(() => {
      dispatch(
         testCreatorActions.changeAnswerValue({
            qwestionId,
            answerId,
            value: debouncedInputValue,
         })
      )
   }, [debouncedInputValue])
   const dispatch = useDispatch()

   const changeInput = (e) => {
      setInputValue(e.target.value)
   }
   const deleteAnswer = () => {
      dispatch(
         testCreatorActions.deleteAnswer({
            qwestionId,
            answerId,
         })
      )
   }

   const addCorrectAnsewer = () => {
      dispatch(
         testCreatorActions.addCorrectAnswer({
            qwestionId,
            answerId,
         })
      )
   }

   return (
      <StyledAnswerInputWrapper>
         <div>
            <input
               onChange={addCorrectAnsewer}
               checked={isCorrect}
               type="checkbox"
            />
            <StyledAnswerInput
               onChange={changeInput}
               fontSize={16}
               height={30}
               width={600}
               type={type}
               value={answerValue}
            />
         </div>
         <GrFormClose onClick={deleteAnswer} />
      </StyledAnswerInputWrapper>
   )
}
