// Summary.jsx
// =====================================================
// Project Tracker – Summary Component (Showcase)
// =====================================================
//
// Showcase Extension: Summary with per-column breakdown.
//
// This version receives the full tasks array so it can
// count tasks in each column separately.
//
// Props:
//   tasks – the full array of task objects from App.jsx
//

function Summary({ tasks }) {
  // Count tasks in each column
  const todoCount = tasks.filter(function (task) {
    return task.status === 'todo'
  }).length

  const inProgressCount = tasks.filter(function (task) {
    return task.status === 'in-progress'
  }).length

  const doneCount = tasks.filter(function (task) {
    return task.status === 'done'
  }).length

  return (
    <>
      <p>The Project Tracker helps plan and visualise work across three stages.</p>

      <h3>Current Progress</h3>
      <p>Total tasks on the board: <strong>{tasks.length}</strong></p>
      <p>
        To Do: <strong>{todoCount}</strong>
        &nbsp;&middot;&nbsp;
        In Progress: <strong>{inProgressCount}</strong>
        &nbsp;&middot;&nbsp;
        Done: <strong>{doneCount}</strong>
      </p>

      <h3>Next Milestone</h3>
      <p>Continue organising the application and exploring React components.</p>
    </>
  )
}

export default Summary
