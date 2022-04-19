import React from 'react'
import { QuizAnswerCreater } from './QuizAnswerCreater'
import { AnswerInput } from './AnswerInput'

export const Answers = (props) => {
   const { information, onCreateAnswer, type } = props
   const AnswerRendering = React.memo(() => {
      return (
         information.answers.length > 0 &&
         information.answers.map((el) => {
            return (
               <AnswerInput
                  answerValue={el.value}
                  isCorrect={el.isCorrect}
                  type={type.answerType}
                  answerIcon={type.iconAnswer}
                  qwestionId={information.id}
                  answerId={el.id}
                  key={el.id}
               />
            )
         })
      )
   }, [])

   return (
      <>
         <AnswerRendering />
         <QuizAnswerCreater onClick={onCreateAnswer} />
      </>
   )
}
