import { useSelector } from 'react-redux'
import { QuestionPreview } from '../components/Preview/QuestionPreview'

export const Preview = () => {
   const tests = useSelector((state) => state.tests)
   console.log(tests)
   return (
      <div>
         <h1>{tests[0].title}</h1>
         <p>{tests[0].description}</p>
         {tests[0].questions.map((question) => {
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
