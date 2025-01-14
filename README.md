
# Task Management System - Frontend

This is the frontend of the **Task Management System**, built with **React.js**. It provides a user interface to perform CRUD operations on tasks via the backend API.

---

## Features

- **View All Tasks**: Display a list of tasks with their details (title, description, completed status, and created date).
- **Add Task**: Add a new task with a title and description.
- **Update Task**: Update an existing task's title, description, or toggle its completion status.
- **Delete Task**: Remove a task from the task list.

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Himanshupiet/task-management-fe.git
   cd task-management-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following (replace `localhost` with the appropriate backend URL if using a remote backend):
     ```env
        REACT_APP_API_BASE_URL=http://localhost:3010/api
     ```

4. Start the React development server:
   ```bash
   npm start
   ```

---

## Folder Structure

```
task-management-frontend/
├── src/
│   ├── app-config/
│   │   ├── configuration.js   # Setting and Configuration for API Call
│   ├── components/
│   │   ├── TaskForm.js        # Component for adding/editing tasks
│   │   ├── TaskDetail.js      # Component for displaying each task
│   │   └── TaskList.js        # Component for displaying task list
│   ├── context/
│   │   ├── TaskContext.js     # Context and reducer for managing tasks
│   │   ├── taskReducer.js     # Define the Reducer Function and Initial state
│   ├── App.js                 # Main app component
│   ├── api.js                 # API methods for interacting with the backend
│   ├── index.js               # Entry point
│   └── styles.css             # Global styles
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

---

## API Integration

The frontend interacts with the backend using API calls. Below are the API endpoints used:

### API Endpoints

| Method | Endpoint        | Description               |
|--------|-----------------|---------------------------|
| GET    | `/tasks`        | Fetch all tasks.          |
| POST   | `/tasks`        | Create a new task.        |
| PUT    | `/tasks/:id`    | Update a task by ID.      |
| DELETE | `/tasks/:id`    | Delete a task by ID.      |

---

## Usage

Once the frontend and backend are running, you can access the Task Management System in your browser at `http://localhost:3000`.

---

## Built With

- **React.js**: Frontend framework
- **Axios**: For making HTTP requests
- **Bootstrap**: For styling and responsive design

---
