import AddTaskForm from '../components/AddTaskForm'
import Board from '../components/Board'

function DashboardPage({
  taskCount,
  todoTasks,
  inProgressTasks,
  doneTasks,
  onAddTask,
  onResetTasks,
}) {
  return (
    <>
      <section className="page-section" aria-label="Add a task">
        <h2>Add a Task</h2>
        <AddTaskForm onAddTask={onAddTask} />
        <p className="task-count">Total tasks: {taskCount}</p>
        <button className="secondary-button" onClick={onResetTasks}>
          Clear Saved Tasks
        </button>
      </section>

      <section className="page-section" aria-label="Project board">
        <h2>Dashboard</h2>
        <Board
          todoTasks={todoTasks}
          inProgressTasks={inProgressTasks}
          doneTasks={doneTasks}
        />
      </section>
    </>
  )
}

export default DashboardPage
