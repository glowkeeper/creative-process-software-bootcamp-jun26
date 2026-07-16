// App.jsx
// =====================================================
// Project Tracker – Week 6 Showcase
// =====================================================
//
// Week 6 Showcase keeps the localStorage code in a small helper module.
// This keeps App.jsx readable and gives the app a safer fallback if the
// saved browser data is missing or broken.
//
// It also demonstrates optional routing. Routing is not part of the Week 6
// guided build: learners can inspect this version when their own application
// needs separate views.
//

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import SummaryPage from './pages/SummaryPage'
import { clearSavedTasks, loadTasks, saveTasks } from './utils/taskStorage'

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

function App() {
  // The helper module decides whether to use saved tasks or starter tasks.
  const [tasks, setTasks] = useState(function () {
    return loadTasks(initialTasks)
  })

  // App.jsx still saves when tasks changes, but the storage details live elsewhere.
  useEffect(function () {
    saveTasks(tasks)
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

  function resetSavedTasks() {
    clearSavedTasks()
    setTasks(initialTasks)
  }

  return (
    <div className="app">

      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                taskCount={tasks.length}
                todoTasks={todoTasks}
                inProgressTasks={inProgressTasks}
                doneTasks={doneTasks}
                onAddTask={addTask}
                onResetTasks={resetSavedTasks}
              />
            }
          />
          <Route path="/summary" element={<SummaryPage taskCount={tasks.length} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
