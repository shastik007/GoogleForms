import { configureStore } from '@reduxjs/toolkit'
import { testsSlice } from './testSlice'
import { testCreatorSlice } from './testCreatorSlice'

export const store = configureStore({
	reducer: {
		tests: testsSlice.reducer,
		testCreator: testCreatorSlice.reducer,
	},
})
