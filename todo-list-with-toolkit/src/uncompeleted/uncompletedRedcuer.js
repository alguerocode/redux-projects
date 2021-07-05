import { createSlice } from '@reduxjs/toolkit'


export const uncompeleteSlice = createSlice({
  name: 'uncompelete',
  initialState: [],
  reducers: {
    actionAdd1: (state, action) => {
      state.push(action.payload)
    },
    actionRemove1: (state, action) => {
      return state.filter(task => task.id !== action.payload.id)
    }
  }
})
export const { actionAdd1, actionRemove1 } = uncompeleteSlice.actions;
export const uncompeletedReducer = uncompeleteSlice.reducer;