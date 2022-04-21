import { createSlice } from '@reduxjs/toolkit'

const init = []

export const testsSlice = createSlice({
   name: 'tests',
   initialState: init,
   reducers: {
      addTest: (state, actions) => {
         const newTest = actions.payload
         state.push(newTest)
      },
   },
})

export const testsActions = testsSlice.actions
