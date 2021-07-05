import { completedReducer } from './completed/completedRedcuer'
import {uncompeletedReducer} from './uncompeleted/uncompletedRedcuer'
import {configureStore} from '@reduxjs/toolkit'
console.dir(uncompeletedReducer)
const store =configureStore({
  reducer:{
    uncompeletedTask:uncompeletedReducer,
    compeletedTask:completedReducer
  }
})
export default store