import { createSlice, nanoid } from '@reduxjs/toolkit'

const init = {
   title: 'New Form',
   description: 'description',
   id: Math.random().toString(),
   questions: [
      {
         question: 'how are you?',
         answers: [],
         currectAnswer: [],
         duration: 1,
         important: false,
         id: nanoid(),
      },
   ],
}

export const testCreatorSlice = createSlice({
   name: 'testCreator',
   initialState: init,
   reducers: {
      createAnswer: (state, actions) => {
         const { id } = actions.payload
         const currentQwestion = state.questions.find((el) => el.id === id)
         currentQwestion.answers.push({
            id: nanoid(),
         })
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
         state.questions.push({ id: nanoid(), answers: [] })
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
            // answers: currentQwestion.answers.map((el) => {
            // 	return {
            // 		...el,
            // 		id: nanoid(),
            // 	}
            // }),
            id: nanoid(),
         })
      },
      //   changeImportanceQuestion: (state, actions) => {},
   },
})

export const testCreatorActions = testCreatorSlice.actions
