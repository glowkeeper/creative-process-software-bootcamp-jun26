import AddTaskForm from '../components/AddTaskForm'
import Board from '../components/Board'

function DashboardPage({
  taskCount,
  todoTasks,
  inProgressTasks,
  doneTasks,
  onAddTask,
  onUpdateTask,
  onMoveTask,
  onDeleteTask,
  onResetBoard,
}) {
  const allTasks = [...todoTasks, ...inProgressTasks, ...doneTasks]

  return (
    <>
      <section className="page-section" aria-labelledby="add-task-heading">
        <h2 id="add-task-heading">Add a Task</h2>
        <AddTaskForm onAddTask={onAddTask} />
        <div className="board-toolbar">
          <p className="task-count">Total tasks: {taskCount}</p>
          <button className="secondary-button" onClick={onResetBoard}>
            Reset Example Board
          </button>
        </div>
      </section>

      <section className="page-section" aria-labelledby="dashboard-heading">
        <h2 id="dashboard-heading">Dashboard</h2>
        <p>Move a task by changing its column. Edit a task to update its details.</p>
        <Board
          tasks={allTasks}
          onUpdateTask={onUpdateTask}
          onMoveTask={onMoveTask}
          onDeleteTask={onDeleteTask}
        />
      </section>
    </>
  )
}

export default DashboardPage
