import Summary from '../components/Summary'

function SummaryPage({ taskCount }) {
  return (
    <section className="page-section">
      <h2>Project Summary</h2>
      <Summary taskCount={taskCount} />
    </section>
  )
}

export default SummaryPage
