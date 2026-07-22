const savedTasksKey = 'project-tracker-tasks'

function isValidTask(task) {
  const validStatuses = ['todo', 'in-progress', 'done']

  return (
    typeof task.id === 'number' &&
    typeof task.title === 'string' &&
    typeof task.description === 'string' &&
    validStatuses.includes(task.status)
  )
}

export function loadTasks(defaultTasks) {
  const savedTasks = localStorage.getItem(savedTasksKey)

  if (savedTasks === null) {
    return defaultTasks
  }

  try {
    const parsedTasks = JSON.parse(savedTasks)

    if (Array.isArray(parsedTasks) && parsedTasks.every(isValidTask)) {
      return parsedTasks
    }
  } catch {
    // If saved data is broken, fall back to the normal starter tasks.
  }

  return defaultTasks
}

export function saveTasks(tasks) {
  localStorage.setItem(savedTasksKey, JSON.stringify(tasks))
}

export function clearSavedTasks() {
  localStorage.removeItem(savedTasksKey)
}
