import styled from 'styled-components'

const StyledEmailNameAnswerInput = styled.input`
   width: 70%;
   text-align: center;
   height: 30px;
   border: none;
   border-bottom: 1px solid black;
   outline: none;
   margin-bottom: 30px;
`

export const EmailNameAnswerInput = ({ text }) => {
   console.log(text)
   return (
      <StyledEmailNameAnswerInput disabled name={text} defaultValue={text} />
   )
}
