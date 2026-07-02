// Board.jsx
// =====================================================
// Project Tracker – Board Component
// =====================================================
//
// Guided Build Part 3: Create a Board component
//
// This component renders the three-column project board.
// It receives three props – one list of tasks for each column.
// App.jsx prepares the lists and passes them in.
//
// Each task is rendered using the TaskCard component.
// This is Guided Build Part 5 (reuse) in action:
// the same TaskCard component is used in every column.
//
// Props:
//   todoTasks       – tasks with status "todo"
//   inProgressTasks – tasks with status "in-progress"
//   doneTasks       – tasks with status "done"
//
// The key prop on each TaskCard helps React keep track of
// which card is which when the list changes.
//

import TaskCard from './TaskCard'

function Board({ todoTasks, inProgressTasks, doneTasks }) {
  return (
    <div className="board">

      <div className="column">
        <h3>To Do</h3>
        {/* This line creates one TaskCard for each task in the list.   */}
        {/* We will understand this pattern more fully as we practise React. */}
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
