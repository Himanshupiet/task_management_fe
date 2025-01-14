import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { TaskContext } from '../context/TaskContext'
import TaskDetail from './TaskDetail'
import TaskForm from './TaskForm'
import {SETTING} from '../app-config/configuration'

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext)

  const fetchTasks = async () => {
    dispatch({ type: 'FETCH_TASKS_REQUEST' })
    try {
      const response = await axios.get(`${SETTING.APP_CONSTANT.API_URL}/tasks`)
      dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data.data })
    } catch (error) {
      dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message })
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const { tasks, loading, error } = state

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Task Management</h1>
      {loading && <div className="alert alert-info">Loading tasks...</div>}
      <TaskForm />
      {tasks.length === 0 ? (
        <div className="alert alert-warning">No tasks available</div>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div key={task._id} className="col-md-6 col-lg-4">
              <TaskDetail task={task} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList
