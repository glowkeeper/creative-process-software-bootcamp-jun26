import { useState } from 'react'

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [statusMessage, setStatusMessage] = useState('Ready to add a task.')

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === '') {
      setStatusMessage('Please enter a task name.')
      return
    }

    const finalDescription = description.trim() || 'No description added.'

    onAddTask(title.trim(), finalDescription)
    setStatusMessage('Task added: ' + title.trim())
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="task-controls">
        <label>
          Task name
          <input
            type="text"
            value={title}
            onChange={function (event) { setTitle(event.target.value) }}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={function (event) { setDescription(event.target.value) }}
          />
        </label>

        <button type="submit">Add Task</button>
      </div>

      <p className="status-message" aria-live="polite">{statusMessage}</p>
    </form>
  )
}

export default AddTaskForm
