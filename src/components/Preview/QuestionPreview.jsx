import styled, { createGlobalStyle } from 'styled-components'

const StyledQuestionPreview = styled.div`
   width: 30%;
   margin: 0 auto;
   padding: 0 10px;
   background-color: white;
   border-radius: 10px;
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
   }
   h2 {
      margin: 10px 0;
      width: 60%;
   }
`

const StyledAnswerTitle = styled.p`
   width: 80%;
   text-align: start;
`

const StyledInput = styled.input``

const GlobalStyle = createGlobalStyle`
    body{
        background-color:rgb(240, 235, 248); ;
   }
`

export const QuestionPreview = ({ questionTitle, id, answers }) => {
   return (
      <StyledQuestionPreview>
         <GlobalStyle />
         <h2 id={id}>{questionTitle}</h2>
         <ul>
            {answers.map((answer) => {
               return (
                  <li>
                     <StyledInput type="checkbox" />
                     <StyledAnswerTitle>{answer.value}</StyledAnswerTitle>
                  </li>
               )
            })}
         </ul>
      </StyledQuestionPreview>
   )
}
