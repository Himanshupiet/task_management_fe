import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import axios from 'axios'
import {SETTING} from '../app-config/configuration'

const TaskDetail = ({ task }) => {
  const { dispatch } = useContext(TaskContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)
  const [editedDescription, setEditedDescription] = useState(task.description)

  const toggleCompletion = async () => {
    try {
      const updatedTask = { ...task, completed: !task.completed }
      const response = await axios.put(`${SETTING.APP_CONSTANT.API_URL}/tasks/${task._id}`,updatedTask)
      dispatch({ type: 'UPDATE_TASK', payload: response.data.data })
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedTask = {
        ...task,
        title: editedTitle,
        description: editedDescription,
      }
      const response = await axios.put(`${SETTING.APP_CONSTANT.API_URL}/tasks/${task._id}`,updatedTask)
      dispatch({ type: 'UPDATE_TASK', payload: response.data.data })
      setIsEditing(false) 
    } catch (error) {
      console.error(error.message)
    }
  }

  const deleteTask = async () => {
    try {
      await axios.delete(`${SETTING.APP_CONSTANT.API_URL}/tasks/${task._id}`)
      dispatch({ type: 'DELETE_TASK', payload: task._id })
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="card my-3">
      <div className="card-body">
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <div className="mb-2">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success me-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <div>
              <h5 className={`card-title ${task.completed ? 'text-decoration-line-through' : ''}`}>
                {task.title}
              </h5>
              <p className="card-text">
                <small>
                  <strong>Description:</strong> {task.description}
                </small>
              </p>
              <p className="card-text">
                <small>
                  <strong>Completed:</strong> {task.completed ? 'Yes' : 'No'}
                </small>
              </p>
              <p className="card-text">
                <small>
                  <strong>Created At:</strong> {new Date(task.createdAt).toLocaleDateString("en-GB")} 
                  
                </small>
              </p>
            </div>
            <div className="d-flex flex-wrap justify-content-end gap-2 mt-3">
                <button
                    className={`btn btn-${task.completed ? 'secondary' : 'success'} flex-grow-1`}
                    onClick={toggleCompletion}
                >
                    {task.completed ? 'Pending' : 'Completed'}
                </button>
                <button
                    className="btn btn-primary flex-grow-1"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger flex-grow-1"
                    onClick={deleteTask}
                >
                    Delete
                </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskDetail
