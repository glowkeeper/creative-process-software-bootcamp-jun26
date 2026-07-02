// Summary.jsx
// =====================================================
// Project Tracker – Summary Component
// =====================================================
//
// Guided Build Part 9: Extract Summary as a content component
//
// This component renders the project summary section.
// It receives a taskCount prop so it can display the current total.
//
// Props:
//   taskCount – the total number of tasks on the board
//

function Summary({ taskCount }) {
  return (
    <>
      <p>The Project Tracker helps plan and visualise work across three stages.</p>

      <h3>Current Progress</h3>
      <p>Total tasks on the board: <strong>{taskCount}</strong></p>

      <h3>Next Milestone</h3>
      <p>Continue organising the application and exploring React components.</p>
    </>
  )
}

export default Summary
