let id = 0;
export const uncompletedAddTask = "uncompleted/addTask"
export const uncompletedRemoveTask = "uncompleted/compeletedTask"

const initailState = [];


export function uncompletedReducer(state = initailState, action) {
  switch (action.type) {
    case uncompletedAddTask:
      action.payload.id =++id;
      return [...state.map(task => {
        return Object.assign(task)
      }), action.payload]
    case uncompletedRemoveTask:
      return [...state.filter(t => t.id !== action.payload)]
    default:
      return state;
  }
}
export const actionRemove = (type,id) => {
  return {
    type:type ,
    payload: id
  }
}
export const actionAdd = (title,description,type) => {
  return {
    type,
    payload: {
      title,
      description,
      compeleted:false
    }
  }
}
