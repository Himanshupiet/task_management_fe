import React, { createContext, useReducer } from 'react'
import { taskReducer, initialState } from './taskReducer'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
