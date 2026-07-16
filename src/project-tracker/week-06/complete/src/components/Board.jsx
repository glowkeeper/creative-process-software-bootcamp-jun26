import TaskCard from './TaskCard'

function Board({ todoTasks, inProgressTasks, doneTasks }) {
  return (
    <div className="board">

      <div className="column">
        <h3>To Do</h3>
        {todoTasks.map(function (task) {
          return (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status="To Do"
            />
          )
        })}
      </div>

      <div className="column">
        <h3>In Progress</h3>
        {inProgressTasks.map(function (task) {
          return (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status="In Progress"
            />
          )
        })}
      </div>

      <div className="column">
        <h3>Done</h3>
        {doneTasks.map(function (task) {
          return (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status="Done"
            />
          )
        })}
      </div>

    </div>
  )
}

export default Board
