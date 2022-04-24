/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { createSlice, nanoid } from '@reduxjs/toolkit'
import { QustionTypes } from '../data/QuestionTypes'
import { GetLocalStorage } from '../utils/helpers/helpers'

const init = {
   title: 'New Form',
   description: 'description',
   id: nanoid(),
   questions: [
      {
         question: 'how are you?',
         answers: [],
         duration: 1,
         type: 'date',
         important: false,
         id: nanoid(),
         order: 0,
         point: 5,
      },
   ],
}

export const testCreatorSlice = createSlice({
   name: 'testCreator',
   initialState: GetLocalStorage('testsCreater')
      ? GetLocalStorage('testsCreater')
      : init,
   reducers: {
      createAnswer: (state, actions) => {
         const { id } = actions.payload
         const currentQwestion = state.questions.find((el) => el.id === id)
         currentQwestion.answers.push({
            id: nanoid(),
            isCorrect: false,
            checked: false,
         })
      },
      addCorrectAnswer: (state, actions) => {
         const { qwestionId, answerId } = actions.payload
         const currentQuestion = state.questions.find(
            (question) => question.id === qwestionId
         )
         const currectAnswer = currentQuestion.answers.find(
            (el) => el.id === answerId
         )
         currectAnswer.isCorrect = !currectAnswer.isCorrect
      },
      deleteAnswer: (state, actions) => {
         const { qwestionId, answerId } = actions.payload
         const currentQwestion = state.questions.find(
            (qwestion) => qwestion.id === qwestionId
         )
         const currentAnswerIndex = currentQwestion.answers.findIndex(
            (answer) => answer.id === answerId
         )

         currentQwestion.answers.splice(currentAnswerIndex, 1)
      },
      changeAnswerValue: (state, actions) => {
         const { qwestionId, answerId, value } = actions.payload
         const currentQwestion = state.questions.find(
            (el) => el.id === qwestionId
         )
         const currentAnswer = currentQwestion.answers.find(
            (el) => el.id === answerId
         )
         currentAnswer.value = value
      },
      changeAnswersTyps: (state, actions) => {
         const { questionId, type } = actions.payload
         const currentQuestion = state.questions.find(
            (el) => el.id === questionId
         )
         currentQuestion.type = type
      },
      changeTitle: (state, actions) => {
         state.title = actions.payload
      },
      changeDescription: (state, actions) => {
         state.description = actions.payload
      },
      changeQuestionValue: (state, actions) => {
         const { value, questionId } = actions.payload
         const currentQuestion = state.questions.find(
            (el) => el.id === questionId
         )
         currentQuestion.question = value
      },
      addQwestion: (state) => {
         state.questions.push({
            id: nanoid(),
            answers: [
               {
                  id: nanoid(),
               },
            ],
            important: false,
            type: QustionTypes[0],
            order: state.questions.length - 1,
            point: 5,
         })
      },
      changeQuestionPoint: (state, actions) => {
         const { qwestionId, point } = actions.payload
         const currentQuestion = state.questions.find(
            (question) => question.id === qwestionId
         )

         currentQuestion.point = point
      },
      deleteQwestion: (state, actions) => {
         const { qwestionId } = actions.payload
         const currentQwestionIndex = state.questions.findIndex(
            (el) => el.id === qwestionId
         )
         state.questions.splice(currentQwestionIndex, 1)
      },
      copyQwestion: (state, actions) => {
         const qwestionId = actions.payload
         const currentQwestion = state.questions.find(
            (el) => el.id === qwestionId
         )
         state.questions.push({
            ...currentQwestion,
            answers: currentQwestion.answers.map((el) => {
               return {
                  ...el,
                  id: nanoid(),
               }
            }),
            id: nanoid(),
         })
      },
      changeImportanceQuestion: (state, actions) => {
         const questionId = actions.payload
         const currentQuestion = state.questions.find(
            (el) => el.id === questionId
         )

         currentQuestion.important = !currentQuestion.important
      },
      dragDropAction: (state, actions) => {
         const { dragQuestion, currentQuestion } = actions.payload
         state.questions = state.questions.map((question) => {
            if (question.id === dragQuestion.id) {
               return { ...question, order: currentQuestion.order }
            }
            if (question.id === currentQuestion.id) {
               return { ...question, order: dragQuestion.order }
            }
            return question
         })
      },
      clearStore: (state, actions) => {
         state.title = 'New Form'
         state.description = 'descriptions'
         state.id = nanoid()
         state.questions = [
            {
               question: 'how are you?',
               answers: [],
               duration: 1,
               type: 'date',
               important: false,
               id: nanoid(),
            },
         ]
      },
   },
})

export const testCreatorActions = testCreatorSlice.actions
