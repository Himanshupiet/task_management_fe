import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import axios from 'axios'
import {SETTING} from '../app-config/configuration'

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const newTaskPayload={
            title,
            description,
        }
      const response = await axios.post(`${SETTING.APP_CONSTANT.API_URL}/tasks`,newTaskPayload)

      dispatch({ type: 'ADD_TASK', payload: response.data.data })

      setTitle('')
      setDescription('')
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="card p-3 my-3">
      <h4>Add Task</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
