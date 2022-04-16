import { createSlice } from '@reduxjs/toolkit'

const init = []

export const testsSlice = createSlice({
	name: 'tests',
	initialState: init,
	reducers: {},
})

export const testsActions = testsSlice.actions
