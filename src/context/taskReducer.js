export const initialState = {
    tasks: [],
    loading: false,
    error: null,
  }
  
export const taskReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_REQUEST':
        return { ...state, loading: true, error: null }
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, loading: false, tasks: action.payload }
      case 'FETCH_TASKS_FAILURE':
        return { ...state, loading: false, error: action.payload }
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] }
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task._id === action.payload._id ? action.payload : task
          ),
        }
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task._id !== action.payload),
        }
      default:
        return state
    }
}
  