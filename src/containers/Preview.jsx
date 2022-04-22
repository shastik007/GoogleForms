import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { QuestionPreview } from '../components/Preview/QuestionPreview'

export const Preview = () => {
   const tests = useSelector((state) => state.tests)
   const { id } = useParams()
   const CurrentIndex = tests.findIndex((test) => test.id === id)
   return (
      <div>
         <h1>{tests[CurrentIndex].title}</h1>
         <p>{tests[CurrentIndex].description}</p>
         {tests[CurrentIndex].questions.map((question) => {
            return (
               <QuestionPreview
                  questionTitle={question.question}
                  answers={question.answers}
               />
            )
         })}
      </div>
   )
}
