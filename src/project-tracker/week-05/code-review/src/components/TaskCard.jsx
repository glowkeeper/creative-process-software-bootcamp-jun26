// TaskCard.jsx
// =====================================================
// Project Tracker – TaskCard Component
// =====================================================
//
// Guided Build Part 4: Create a reusable TaskCard component
//
// This component renders a single task card on the board.
// It is designed to be reused – the same component can display
// different information depending on the props it receives.
//
// Guided Build Part 5: Add props
//
// Props are pieces of information we pass in when using a component.
// This component receives three props:
//
//   title       – the name of the task
//   description – a short note about the task
//   status      – the current stage: "To Do", "In Progress", or "Done"
//
// We use curly braces to display the prop values in JSX:
//   {title}       renders the value of the title prop
//   {description} renders the value of the description prop
//   {status}      renders the value of the status prop
//
// Example usage in Board.jsx:
//
//   <TaskCard
//     title="Write README"
//     description="Document the project purpose and setup steps."
//     status="Done"
//   />
//

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
