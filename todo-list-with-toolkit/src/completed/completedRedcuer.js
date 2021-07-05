import {createSlice} from '@reduxjs/toolkit'


const compeletedTaskSlice = createSlice({
  name:'compeletedTask',
  initialState:[],
  reducers:{
    actionAdd:(state,action)=>{
      state.push(action.payload)
    },
    actionRemove:(state,action) =>{
      return state.filter(task => task.id !== action.payload.id)
    }
  }
})
export const completedReducer =compeletedTaskSlice.reducer;
export const {actionAdd, actionRemove}  =compeletedTaskSlice.actions;