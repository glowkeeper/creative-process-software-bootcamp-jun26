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
