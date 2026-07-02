// TaskCard.jsx
// =====================================================
// Project Tracker – TaskCard Component (Showcase)
// =====================================================
//
// Showcase Extension: Enhanced version of the Complete TaskCard.
//
// This version accepts an additional "priority" prop.
// When provided, a CSS class is added to give the card
// a coloured left border (low = green, medium = amber, high = red).
//
// Props:
//   title       – the name of the task
//   description – a short note about the task
//   status      – "To Do", "In Progress", or "Done"
//   priority    – "low", "medium", or "high"
//
// This is still the same core idea as the Guided Build:
//   one component, reused many times, with different props.
// We have just added one more prop to carry extra information.
//

function TaskCard({ title, description, status, priority }) {
  // Build the CSS class for the card.
  // Adding a priority class gives the card a coloured left border.
  const cardClass = 'card card--' + priority

  return (
    <article className={cardClass}>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <span className="card-status">{status}</span>
      <span className="card-priority">{priority}</span>
    </article>
  )
}

export default TaskCard
