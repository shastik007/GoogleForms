import { createSlice } from '@reduxjs/toolkit'

const init = {
	title: 'New Form',
	description: 'description',
	id: Math.random().toString(),
	questions: [
		{
			question: 'how are you?',
			answers: [],
			currectA: 1,
			id: Math.random().toString(),
		},
		{
			question: 'how are you?',
			answers: [],
			currectA: 1,
			id: Math.random().toString(),
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
				id: Math.random().toString(),
			})
		},
		deleteAnswer: (state, actions) => {
			const { qwestionId, answerId } = actions.payload
			const currentQwestion = state.questions.find(
				(qwestion) => qwestion.id === qwestionId,
			)
			const currentAnswerIndex = currentQwestion.answers.findIndex(
				(answer) => answer.id === answerId,
			)

			currentQwestion.answers.splice(currentAnswerIndex, 1)
		},
		changeAnswerValue: (state, actions) => {
			const { qwestionId, answerId, value } = actions.payload
			const currentQwestion = state.questions.find(
				(el) => el.id === qwestionId,
			)
			const currentAnswer = currentQwestion.answers.find(
				(el) => el.id == answerId,
			)
			currentAnswer.value = value
		},
		changeTitle: (state, actions) => {
			state.title = actions.payload
		},
		changeDescription: (state, actions) => {
			state.description = actions.payload
		},
		addQwestion: (state, actions) => {
			state.questions.push({ id: Math.random().toString(), answers: [] })
		},
		deleteQwestion: (state, actions) => {
			const { qwestionId } = actions.payload
			state.questions.splice(
				state.questions.findIndex((el) => el.id === qwestionId),
				1,
			)
		},
		copyQwestion: (state, actions) => {
			const qwestionId = actions.payload
			const currentQwestion = state.questions.find(
				(el) => el.id == qwestionId,
			)
			state.questions.push({
				...currentQwestion,
				answers:currentQwestion.answers.map(el => {
					return {
						...el,
						id:Math.random().toString(),
					}
				}),
				id: Math.random().toString(),
			})
		},
	},
})

export const testCreatorActions = testCreatorSlice.actions
