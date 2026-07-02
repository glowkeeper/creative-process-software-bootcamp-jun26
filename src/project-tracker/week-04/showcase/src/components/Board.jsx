// Board.jsx
// =====================================================
// Project Tracker – Board Component (Showcase)
// =====================================================
//
// Same structure as the Complete Board.
// Receives three task lists as props (one per column).
// Renders each using TaskCard, passing the priority prop through.
//
// Props:
//   todoTasks       – tasks with status "todo"
//   inProgressTasks – tasks with status "in-progress"
//   doneTasks       – tasks with status "done"
//

import TaskCard from './TaskCard'

function Board({ todoTasks, inProgressTasks, doneTasks }) {
  return (
    <div className="board">

      <div className="column">
        <h3>To Do</h3>
        {/* This line creates one TaskCard for each task in the list.         */}
        {/* We will understand this pattern more fully as we practise React. */}
        {todoTasks.map(function (task) {
          return (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status="To Do"
              priority={task.priority}
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
              priority={task.priority}
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
              priority={task.priority}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Board
