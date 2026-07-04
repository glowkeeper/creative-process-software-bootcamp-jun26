// AddTaskForm.jsx
// =====================================================
// Project Tracker – AddTaskForm Component
// =====================================================
//
// Guided Build Part 7: Create an AddTaskForm component
//
// This component renders the task input field and button.
// It manages the current input text using its own local state.
//
// When the user clicks Add Task, it calls the onAddTask prop.
// The onAddTask prop is a function defined in App.jsx that
// adds the new task to the shared tasks list.
//
// Props:
//   onAddTask – a function to call when a task is submitted
//
// This pattern – passing a function as a prop – lets a child
// component (AddTaskForm) tell its parent (App.jsx) that
// something happened.
//

import { useState } from 'react'

function AddTaskForm({ onAddTask }) {
  // Local state for the input field text
  const [inputValue, setInputValue] = useState('')

  // Local state for the status message shown below the form
  const [statusMessage, setStatusMessage] = useState('Ready to add a task.')

  function handleAddTask() {
    if (inputValue.trim() === '') {
      setStatusMessage('No task entered. Please type a task name.')
      return
    }

    onAddTask(inputValue.trim())
    setStatusMessage('Task added: ' + inputValue.trim())
    setInputValue('')
  }

  return (
    <div>
      <div className="task-controls">
        <input
          type="text"
          placeholder="Enter task name"
          value={inputValue}
          onChange={function (e) { setInputValue(e.target.value) }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <p className="status-message">{statusMessage}</p>
    </div>
  )
}

export default AddTaskForm
