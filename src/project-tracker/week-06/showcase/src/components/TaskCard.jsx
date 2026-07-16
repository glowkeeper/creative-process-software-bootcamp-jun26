function TaskCard({ title, description, status }) {
  return (
    <article className="card">
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <span className="card-status">{status}</span>
    </article>
  )
}

export default TaskCard
