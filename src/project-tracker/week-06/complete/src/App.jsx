// App.jsx
// =====================================================
// Project Tracker – Week 6 Complete
// =====================================================
//
// Week 6 adds one new idea:
// React state can be saved to localStorage so tasks survive a refresh.
//

import { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import Board from './components/Board'
import Summary from './components/Summary'
import About from './components/About'
import Footer from './components/Footer'

// The starting tasks for the board.
// Each task has an id, title, description, and status.
// Status values: 'todo', 'in-progress', or 'done'
const initialTasks = [
  { id: 1, title: 'Create Header Component',      description: 'Extract the header into its own component file.',    status: 'todo' },
  { id: 2, title: 'Create TaskCard Component',    description: 'Extract a task card into a reusable component.',     status: 'todo' },
  { id: 3, title: 'Pass Information Using Props', description: 'Customise each card by passing different props.',     status: 'todo' },
  { id: 4, title: 'Organise The Application',     description: 'Move components into the components folder.',        status: 'in-progress' },
  { id: 5, title: 'Reuse Components',             description: 'Use the same component in multiple places.',         status: 'in-progress' },
  { id: 6, title: 'Create repository',            description: 'Set up the GitHub repository for the project.',      status: 'done' },
  { id: 7, title: 'Write README',                 description: 'Document the project purpose and setup steps.',      status: 'done' },
  { id: 8, title: 'Plan project backlog',         description: 'Write out the initial list of tasks.',               status: 'done' },
]

const savedTasksKey = 'project-tracker-tasks'

function getInitialTasks() {
  // Read saved tasks before React creates the tasks state.
  const savedTasks = localStorage.getItem(savedTasksKey)

  if (savedTasks !== null) {
    return JSON.parse(savedTasks)
  }

  return initialTasks
}

function App() {
  // Start with saved tasks if the browser has them.
  // Otherwise, start with the default task list.
  const [tasks, setTasks] = useState(getInitialTasks)

  // Save only the task list whenever it changes.
  // Temporary UI state, such as form input, is not saved.
  useEffect(function () {
    localStorage.setItem(savedTasksKey, JSON.stringify(tasks))
  }, [tasks])

  // Prepare a separate list for each board column.
  // App.jsx does this work so the Board component stays simple.
  const todoTasks       = tasks.filter(function (task) { return task.status === 'todo' })
  const inProgressTasks = tasks.filter(function (task) { return task.status === 'in-progress' })
  const doneTasks       = tasks.filter(function (task) { return task.status === 'done' })

  // This function adds a new task to the To Do column.
  // It is passed to AddTaskForm as a prop called onAddTask.
  function addTask(taskTitle) {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      description: 'Added during the session.',
      status: 'todo',
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="app">

      <Header />

      <main>

        <section className="page-section" id="add-task" aria-label="Add a task">
          <h2>Add a Task</h2>
          <AddTaskForm onAddTask={addTask} />
          <p className="task-count">Total tasks: {tasks.length}</p>
        </section>

        <section className="page-section" id="board" aria-label="Project board">
          <h2>Dashboard</h2>
          <Board
            todoTasks={todoTasks}
            inProgressTasks={inProgressTasks}
            doneTasks={doneTasks}
          />
        </section>

        <section className="page-section" id="summary">
          <h2>Project Summary</h2>
          <Summary taskCount={tasks.length} />
        </section>

        <section className="page-section" id="about">
          <h2>About This Project</h2>
          <About />
        </section>

      </main>

      <Footer />

    </div>
  )
}

export default App
