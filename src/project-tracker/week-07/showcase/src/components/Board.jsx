import TaskCard from './TaskCard'

const columns = [
  { status: 'todo', title: 'To Do' },
  { status: 'in-progress', title: 'In Progress' },
  { status: 'done', title: 'Done' },
]

function Board({ tasks, onUpdateTask, onMoveTask, onDeleteTask }) {
  return (
    <div className="board">
      {columns.map(function (column) {
        const columnTasks = tasks.filter(function (task) {
          return task.status === column.status
        })

        return (
          <section className="column" key={column.status}>
            <h3>{column.title} <span className="column-count">{columnTasks.length}</span></h3>

            {columnTasks.length === 0 && (
              <p className="empty-column">No tasks in this column.</p>
            )}

            {columnTasks.map(function (task) {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  onUpdateTask={onUpdateTask}
                  onMoveTask={onMoveTask}
                  onDeleteTask={onDeleteTask}
                />
              )
            })}
          </section>
        )
      })}
    </div>
  )
}

export default Board
