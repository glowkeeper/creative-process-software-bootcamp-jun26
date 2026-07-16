import { useState } from 'react'

function AddTaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('')

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
