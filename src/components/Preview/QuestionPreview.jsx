import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { testsActions } from '../../store/testSlice'

const StyledQuestionPreview = styled.div`
   width: 40%;
   margin: 0 auto;
   padding: 0 10px;
   background-color: #ede7f6;
   border-radius: 10px;
   margin-bottom: 30px;
   border: 1px solid gray;
   ul {
      margin: 0;
      padding: 0;
      list-style: none;
   }
   ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0;
   }
   .warn {
      color: red;
   }
`

const StyledAnswerTitle = styled.p`
   width: 80%;
   text-align: start;
`

const StyledInput = styled.input``

export const QuestionPreview = ({
   questionTitle,
   questionId,
   answers,
   testId,
   questionType,
   importance,
}) => {
   const dispatch = useDispatch()
   const onCheckHandler = (id, questionId) => {
      dispatch(
         testsActions.changeCheckAnswer({
            answerId: id,
            questionId,
            testId,
            questionType,
         })
      )
   }

   return (
      <StyledQuestionPreview>
         <h2>{questionTitle}</h2>
         {importance && <span className="warn">обязательный вопрос</span>}
         <ul>
            {answers.map((answer) => {
               return (
                  <li key={answer.id}>
                     <StyledInput
                        checked={answer.checked}
                        onChange={() => onCheckHandler(answer.id, questionId)}
                        type={questionType.type}
                     />
                     <StyledAnswerTitle>{answer.value}</StyledAnswerTitle>
                  </li>
               )
            })}
         </ul>
      </StyledQuestionPreview>
   )
}
