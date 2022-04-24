/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { EmailPreviewItem } from '../components/Preview/EmailPreviewItem'
import { QuestionPreview } from '../components/Preview/QuestionPreview'
import { testsActions } from '../store/testSlice'
import { PreviewModal } from '../components/UI/PreviewModal'
import { ResponseForPoints } from '../data/ResponseForPoints'

const StyledWrapperModal = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`

export const Preview = () => {
   const [resultModal, setResultModal] = useState(false)
   const { tests, allPoint, allComplete } = useSelector((state) => state.tests)
   const { id } = useParams()
   const dispatch = useDispatch()
   const CurrentIndex = tests.findIndex((test) => test.id === id)

   const toggleModal = () => {
      setResultModal((prev) => !prev)
   }

   const showResultHandler = () => {
      dispatch(testsActions.showResult(id))
      toggleModal()
   }

   const ResultModal = React.memo(() => {
      return (
         <PreviewModal cancel={toggleModal}>
            {!allComplete && (
               <StyledWrapperModal>
                  <header>Your Points</header>
                  <h3>{`your point is ${allPoint.toFixed(2)}`}</h3>
                  <h4>
                     {allPoint.toFixed(2) == 0 &&
                        allPoint.toFixed(2) < 5 &&
                        ResponseForPoints[0]}
                     {allPoint.toFixed(2) >= 5 &&
                        allPoint.toFixed(2) < 10 &&
                        ResponseForPoints[1]}
                     {allPoint.toFixed(2) >= 10 && ResponseForPoints[2]}
                  </h4>
               </StyledWrapperModal>
            )}
            {allComplete && (
               <StyledWrapperModal>
                  <h2>enter all fields</h2>
               </StyledWrapperModal>
            )}
         </PreviewModal>
      )
   })

   return (
      <>
         {resultModal && <ResultModal />}
         <EmailPreviewItem
            title={tests[CurrentIndex].title}
            description={tests[CurrentIndex].description}
         />
         {tests[CurrentIndex].questions.map((question) => {
            return (
               <QuestionPreview
                  key={question.id}
                  questionTitle={question.question}
                  answers={question.answers}
                  checked={question.checked}
                  questionId={question.id}
                  testId={tests[CurrentIndex].id}
                  questionType={question.type}
                  importance={question.important}
               />
            )
         })}
         <div>
            <button onClick={showResultHandler} type="button">
               showResult
            </button>
         </div>
      </>
   )
}
