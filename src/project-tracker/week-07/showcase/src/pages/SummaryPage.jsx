import Summary from '../components/Summary'

function SummaryPage({ taskCount, todoCount, inProgressCount, doneCount }) {
  return (
    <section className="page-section">
      <h2>Project Summary</h2>
      <Summary
        taskCount={taskCount}
        todoCount={todoCount}
        inProgressCount={inProgressCount}
        doneCount={doneCount}
      />
    </section>
  )
}

export default SummaryPage
