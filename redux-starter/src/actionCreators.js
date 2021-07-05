import {BUG_ADDED} from './actionTypes'
export function bugAdded(description) {
  return {
    type:BUG_ADDED,
    payload: {
      description: description
    }
  }
}