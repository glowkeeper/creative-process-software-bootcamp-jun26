// App.jsx
// =====================================================
// Project Tracker – Week 7 Showcase
// =====================================================
//
// Week 7 introduces no new React concept. This Showcase brings together the
// ideas used across the course in a complete, adaptable project tracker.
// Learners can add, edit, move and delete tasks. The board is saved in
// localStorage and HashRouter keeps the separate views simple to deploy.

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import SummaryPage from './pages/SummaryPage'
import { clearSavedTasks, loadTasks, saveTasks } from './utils/taskStorage'

const initialTasks = [
  { id: 1, title: 'Test the main user journey', description: 'Ask another person to use the project without showing them how.', status: 'todo' },
  { id: 2, title: 'Create a production build', description: 'Run the Vite build and preview the result locally.', status: 'todo' },
  { id: 3, title: 'Prepare a demonstration fallback', description: 'Keep screenshots or a local version ready for the showcase.', status: 'todo' },
  { id: 4, title: 'Improve one important feature', description: 'Choose the smallest change that will make the project easier to demonstrate.', status: 'in-progress' },
  { id: 5, title: 'Rehearse the presentation', description: 'Use the six prompts and keep the presentation within five minutes.', status: 'in-progress' },
  { id: 6, title: 'Create repository', description: 'Set up the GitHub repository for the project.', status: 'done' },
  { id: 7, title: 'Plan project backlog', description: 'Capture project tasks on the GitHub Project board.', status: 'done' },
  { id: 8, title: 'Save tasks between visits', description: 'Use localStorage so the board survives a refresh.', status: 'done' },
]

function App() {
  const [tasks, setTasks] = useState(function () {
    return loadTasks(initialTasks)
  })

  useEffect(function () {
    saveTasks(tasks)
  }, [tasks])

  const todoTasks = tasks.filter(function (task) {
    return task.status === 'todo'
  })

  const inProgressTasks = tasks.filter(function (task) {
    return task.status === 'in-progress'
  })

  const doneTasks = tasks.filter(function (task) {
    return task.status === 'done'
  })

  function addTask(taskTitle, taskDescription) {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      status: 'todo',
    }

    setTasks([...tasks, newTask])
  }

  function updateTask(taskId, updatedTitle, updatedDescription) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return {
          ...task,
          title: updatedTitle,
          description: updatedDescription,
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function moveTask(taskId, newStatus) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return { ...task, status: newStatus }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter(function (task) {
      return task.id !== taskId
    })

    setTasks(remainingTasks)
  }

  function resetBoard() {
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
                onUpdateTask={updateTask}
                onMoveTask={moveTask}
                onDeleteTask={deleteTask}
                onResetBoard={resetBoard}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <SummaryPage
                taskCount={tasks.length}
                todoCount={todoTasks.length}
                inProgressCount={inProgressTasks.length}
                doneCount={doneTasks.length}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
