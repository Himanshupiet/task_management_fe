import React from 'react'
import { TaskProvider } from './context/TaskContext'
import TaskList from './component/TaskList'

const App = () => {
  return (
    <TaskProvider>
      <div className="bg-light min-vh-100 d-flex flex-column align-items-center">
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App
