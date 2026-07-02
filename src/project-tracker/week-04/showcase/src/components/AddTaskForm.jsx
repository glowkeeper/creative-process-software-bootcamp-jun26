// AddTaskForm.jsx
// =====================================================
// Project Tracker – AddTaskForm Component (Showcase)
// =====================================================
//
// Showcase Extension: AddTaskForm with a priority selector.
//
// This version adds a priority dropdown next to the input.
// When the user adds a task, both the title and priority
// are passed to the onAddTask prop.
//
// Props:
//   onAddTask – a function called with (taskTitle, priority)
//               when the user submits a new task
//

import { useState } from 'react'

function AddTaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('')
  const [priority, setPriority] = useState('medium')
  const [statusMessage, setStatusMessage] = useState('Ready to add a task.')

  function handleAddTask() {
    if (inputValue.trim() === '') {
      setStatusMessage('No task entered. Please type a task name.')
      return
    }

    onAddTask(inputValue.trim(), priority)
    setStatusMessage('Task added: ' + inputValue.trim() + ' (' + priority + ')')
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
        <select
          value={priority}
          onChange={function (e) { setPriority(e.target.value) }}
          aria-label="Task priority"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <p className="status-message">{statusMessage}</p>
    </div>
  )
}

export default AddTaskForm
