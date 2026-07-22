import { useState } from 'react'

function TaskCard({ task, onUpdateTask, onMoveTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)

  function saveChanges(event) {
    event.preventDefault()

    if (title.trim() === '') {
      return
    }

    onUpdateTask(task.id, title.trim(), description.trim() || 'No description added.')
    setIsEditing(false)
  }

  function cancelEditing() {
    setTitle(task.title)
    setDescription(task.description)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <article className="card">
        <form className="edit-task-form" onSubmit={saveChanges}>
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
            <textarea
              value={description}
              onChange={function (event) { setDescription(event.target.value) }}
            />
          </label>

          <div className="card-actions">
            <button type="submit">Save</button>
            <button type="button" className="secondary-button" onClick={cancelEditing}>
              Cancel
            </button>
          </div>
        </form>
      </article>
    )
  }

  return (
    <article className="card">
      <p className="card-title">{task.title}</p>
      <p className="card-description">{task.description}</p>

      <label className="status-control">
        Column
        <select
          value={task.status}
          onChange={function (event) { onMoveTask(task.id, event.target.value) }}
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </label>

      <div className="card-actions">
        <button type="button" onClick={function () { setIsEditing(true) }}>
          Edit
        </button>
        <button
          type="button"
          className="danger-button"
          onClick={function () { onDeleteTask(task.id) }}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskCard
