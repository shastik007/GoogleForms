import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { EmailPreviewItem } from '../components/Preview/EmailPreviewItem'
import { QuestionPreview } from '../components/Preview/QuestionPreview'
import { testsActions } from '../store/testSlice'
import { PreviewModal } from '../components/UI/PreviewModal'

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
               <header>{`your point is ${allPoint.toFixed(2)}`}</header>
            )}
            {allComplete && <h2>enter all fields</h2>}
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
