/* eslint-disable prefer-const */
/* eslint-disable no-loop-func */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit'
import { GetLocalStorage } from '../utils/helpers/helpers'

const init = {
   tests: [],
   allPoint: 0,
}

export const testsSlice = createSlice({
   name: 'tests',
   initialState: GetLocalStorage('tests/list')
      ? GetLocalStorage('tests/list')
      : init,
   reducers: {
      addTest: (state, actions) => {
         const newTest = actions.payload
         const currentTest = state.tests.findIndex(
            (test) => test.id === newTest.id
         )
         if (currentTest === -1) {
            state.tests.push(newTest)
         }
      },
      changeCheckAnswer: (state, actions) => {
         const { answerId, questionId, testId, questionType } = actions.payload
         const currentTest = state.tests.find((test) => test.id === testId)
         const currentQuestion = currentTest.questions.find(
            (question) => question.id === questionId
         )

         if (questionType.type === 'radio') {
            currentQuestion.answers.map((answer) => {
               if (answer.id === answerId) {
                  return (answer.checked = !answer.checked)
               }
               return (answer.checked = false)
            })
         }
         if (questionType.type === 'checkbox') {
            const currentAnswer = currentQuestion.answers.find(
               (answer) => answer.id === answerId
            )
            currentAnswer.checked = !currentAnswer.checked
         }
      },
      showResult: (state, actions) => {
         const id = actions.payload
         const currentTest = state.tests.find((test) => test.id === id)
         for (let i = 0; i < currentTest.questions.length; i += 1) {
            let countOfAnswers = currentTest.questions[i].answers.length
            let countOfCorrectAnswers = 0
            let countOfCorrectChoise = 0
            let countOfWrongAnswers = 0
            let percentOfCorrectChoise = 0
            let percentOfWrongChoise = 0
            let pointForAnswers = 0
            const currentQuestionPoint = currentTest.questions[i].point
            currentTest.questions[i].answers.map((answer) => {
               if (answer.isCorrect) {
                  countOfCorrectAnswers += 1
               }
               if (answer.isCorrect && answer.checked) {
                  countOfCorrectChoise += 1
               }
               if (!answer.isCorrect && answer.checked) {
                  countOfWrongAnswers += 1
               }
               return answer
            })
            percentOfCorrectChoise =
               (countOfCorrectChoise * 100) / countOfCorrectAnswers
            pointForAnswers =
               (currentQuestionPoint * percentOfCorrectChoise) / 100

            state.allPoint +=
               pointForAnswers -
               countOfWrongAnswers * (pointForAnswers / countOfAnswers)
         }
      },
   },
})

export const testsActions = testsSlice.actions
