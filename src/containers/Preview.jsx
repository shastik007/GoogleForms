import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { EmailPreviewItem } from '../components/Preview/EmailPreviewItem'
import { QuestionPreview } from '../components/Preview/QuestionPreview'
import { testsActions } from '../store/testSlice'

export const Preview = () => {
   const tests = useSelector((state) => state.tests.tests)
   const { id } = useParams()
   const dispatch = useDispatch()
   const CurrentIndex = tests.findIndex((test) => test.id === id)

   const showResultHandler = () => {
      dispatch(testsActions.showResult(id))
   }

   return (
      <div>
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
               />
            )
         })}
         <div>
            <button onClick={showResultHandler} type="button">
               showResult
            </button>
         </div>
      </div>
   )
}
