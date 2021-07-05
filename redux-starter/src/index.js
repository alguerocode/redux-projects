import store from './store';
import * as actions from './actionTypes'
import {bugAdded} from './actionCreators'

const unsubscribe =store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch();
unsubscribe(bugAdded('bug1'))
store.dispatch({
  type:actions.BUG_REMOVED,
  payload:{
    id:1
  }
})
console.log(store.getState())
