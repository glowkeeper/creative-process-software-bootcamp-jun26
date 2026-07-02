// App.jsx
// =====================================================
// Project Tracker – Week 4 Showcase
// =====================================================
//
// This version extends the Guided Build Complete version.
// It preserves all Week 3 capability and demonstrates
// a slightly richer use of the same Week 4 concepts:
//   components, reuse, props, organisation.
//
// Showcase extensions compared to Complete:
//   - TaskCard accepts an optional priority prop
//     The priority value adds a coloured left border
//   - AddTaskForm includes a priority selector
//   - Summary shows a breakdown by column (To Do / In Progress / Done)
//   - Footer is a component that receives a text prop
//
// No routing, persistence, effects, or advanced 
// React patterns are introduced.
//

import { useState } from 'react'
import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import Board from './components/Board'
import Summary from './components/Summary'
import About from './components/About'
import Footer from './components/Footer'

// The starting tasks for the board.
// Each task has an id, title, description, status, and priority.
const initialTasks = [
  { id: 1, title: 'Create Header Component',      description: 'Extract the header into its own component file.',    status: 'todo',        priority: 'high'   },
  { id: 2, title: 'Create TaskCard Component',    description: 'Extract a task card into a reusable component.',     status: 'todo',        priority: 'high'   },
  { id: 3, title: 'Pass Information Using Props', description: 'Customise each card by passing different props.',     status: 'todo',        priority: 'medium' },
  { id: 4, title: 'Organise The Application',     description: 'Move components into the components folder.',        status: 'in-progress', priority: 'high'   },
  { id: 5, title: 'Reuse Components',             description: 'Use the same component in multiple places.',         status: 'in-progress', priority: 'medium' },
  { id: 6, title: 'Create repository',            description: 'Set up the GitHub repository for the project.',      status: 'done',        priority: 'medium' },
  { id: 7, title: 'Write README',                 description: 'Document the project purpose and setup steps.',      status: 'done',        priority: 'low'    },
  { id: 8, title: 'Plan project backlog',         description: 'Write out the initial list of tasks.',               status: 'done',        priority: 'low'    },
]

function App() {
  // React needs somewhere to remember the current list of tasks.
  // useState gives this component a simple piece of memory.
  const [tasks, setTasks] = useState(initialTasks)

  // Prepare a separate list for each board column.
  // App.jsx does this work so the Board component stays simple.
  const todoTasks       = tasks.filter(function (task) { return task.status === 'todo' })
  const inProgressTasks = tasks.filter(function (task) { return task.status === 'in-progress' })
  const doneTasks       = tasks.filter(function (task) { return task.status === 'done' })

  // This function adds a new task to the To Do column.
  // It receives the task title and priority from AddTaskForm.
  function addTask(taskTitle, priority) {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      description: 'Added during the session.',
      status: 'todo',
      priority: priority,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="app">

      <Header />

      <main>

        {/* Showcase: AddTaskForm receives onAddTask and also passes priority */}
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

        {/* Showcase: Summary receives the full tasks array for richer stats */}
        <section className="page-section" id="summary">
          <h2>Project Summary</h2>
          <Summary tasks={tasks} />
        </section>

        <section className="page-section" id="about">
          <h2>About This Project</h2>
          <About />
        </section>

      </main>

      {/* Showcase: Footer receives a text prop */}
      <Footer text="Project Tracker – Week 4 Showcase." />

    </div>
  )
}

export default App
