

let id = 0;

export const completedAddTask = "completed/addTask"
export const completedRemoveTask = "completed/removeTask"
const initailState = [];
export function completedReducer(state = initailState, action) {
  switch (action.type) {
    case completedAddTask:
      action.payload.id =++id;
      return [...state.map(task => Object.assign(task)), action.payload]
    
      case completedRemoveTask:
      return [...state.filter(t => t.id !== action.payload)]
    default:
      return state;
  }
}
export const actionRemove = (id, type) => {
  return {
    type: type,
    payload: id
  }
}
export const actionAdd = (title,description,type) => {
  return {
    type: type,
    payload: {
      title,
      description,
      compeleted:true
    }
  }
}
