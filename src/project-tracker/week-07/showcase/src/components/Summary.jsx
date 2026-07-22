function Summary({ taskCount, todoCount, inProgressCount, doneCount }) {
  const completionPercentage = taskCount === 0
    ? 0
    : Math.round((doneCount / taskCount) * 100)

  return (
    <>
      <p>The Project Tracker helps plan and visualise work across three stages.</p>

      <div className="summary-grid">
        <article className="summary-card">
          <span>Total</span>
          <strong>{taskCount}</strong>
        </article>
        <article className="summary-card">
          <span>To Do</span>
          <strong>{todoCount}</strong>
        </article>
        <article className="summary-card">
          <span>In Progress</span>
          <strong>{inProgressCount}</strong>
        </article>
        <article className="summary-card">
          <span>Done</span>
          <strong>{doneCount}</strong>
        </article>
      </div>

      <h3>Current Progress</h3>
      <p>{completionPercentage}% of tasks are currently marked as done.</p>

      <h3>Remember</h3>
      <p>The board should show the honest state of the work. New ideas can wait in To Do.</p>
    </>
  )
}

export default Summary
