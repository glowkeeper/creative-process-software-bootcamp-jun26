// App.jsx
// =====================================================
// Project Tracker – Week 4 Complete
// =====================================================
//
// Guided Build Part 1: Explore React Project Structure
// This is App.jsx – the root component of the application.
// In React, every component is a JavaScript function that returns JSX.
// App is the top-level component. All other components are used inside it.
//
// Guided Build Part 8: Preserve Add Task behaviour using React state
// React needs somewhere to remember the current list of tasks.
// useState gives this component a simple piece of memory.
// When the task list changes, React automatically updates what is shown.
//

import { useState } from 'react'
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

function App() {
  // Guided Build Part 8: React state for the tasks list
  // React needs somewhere to remember the current list of tasks.
  // useState gives this component a simple piece of memory.
  const [tasks, setTasks] = useState(initialTasks)

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

      {/* Guided Build Part 2: Header component */}
      {/* Defined in src/components/Header.jsx  */}
      <Header />

      <main>

        {/* Guided Build Part 7: AddTaskForm component       */}
        {/* Defined in src/components/AddTaskForm.jsx        */}
        {/* onAddTask passes the addTask function as a prop  */}
        <section className="page-section" id="add-task" aria-label="Add a task">
          <h2>Add a Task</h2>
          <AddTaskForm onAddTask={addTask} />
          <p className="task-count">Total tasks: {tasks.length}</p>
        </section>

        {/* Guided Build Part 3: Board component                      */}
        {/* Defined in src/components/Board.jsx                        */}
        {/* Each column list is passed as a separate prop              */}
        <section className="page-section" id="board" aria-label="Project board">
          <h2>Dashboard</h2>
          <Board
            todoTasks={todoTasks}
            inProgressTasks={inProgressTasks}
            doneTasks={doneTasks}
          />
        </section>

        {/* Guided Build Part 9: Summary component           */}
        {/* Defined in src/components/Summary.jsx            */}
        <section className="page-section" id="summary">
          <h2>Project Summary</h2>
          <Summary taskCount={tasks.length} />
        </section>

        {/* Guided Build Part 9: About component             */}
        {/* Defined in src/components/About.jsx              */}
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
