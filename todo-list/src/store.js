import { combineReducers, createStore } from 'redux';
import { completedReducer } from './completed/completedRedcuer'
import {uncompletedReducer} from './uncompeleted/uncompletedRedcuer'
const reducers = {
  compeleted:completedReducer,
  uncompeleted: uncompletedReducer
}
const combineReducer = combineReducers(reducers)
export const store = createStore(combineReducer)