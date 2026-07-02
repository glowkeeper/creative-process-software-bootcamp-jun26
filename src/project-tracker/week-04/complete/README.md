# Project Tracker – Week 4 Complete

This is the **Week 4 Complete** project for the Software Development Bootcamp.

It represents the finished state of the guided build session.

## What This Project Preserves

All Week 3 capability is retained:

- Navigation links
- Add Task section (type a task name and click Add Task)
- Project board with To Do, In Progress, and Done columns
- Project Summary section
- About section

## What Week 4 Adds

The same application has been reorganised into React components.

- Components: reusable pieces of UI defined as JavaScript functions
- Reuse: the same `TaskCard` component used for every task on the board
- Props: information passed into components to customise what they display
- Organisation: each section lives in its own file inside `src/components/`

Routing is intentionally not introduced. Navigation links use page anchors
to scroll between sections on a single page.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`) in your browser.

## Guided Build Mapping

This project represents the completed result of the Week 4 guided build.

The guided build follows this sequence:

1. Explore React Project Structure
2. Create Header Component
3. Create Board Component
4. Create TaskCard Component
5. Reuse TaskCard
6. Add Props
7. Create AddTaskForm Component
8. Preserve Add Task behaviour using React state
9. Extract Summary and About as content components
10. Organise Application
11. Commit And Push

The source code contains comments showing where each step was implemented.

## Project Structure

```text
src/
├── App.jsx                     Root component. Holds the tasks list in state.
├── main.jsx                    Entry point. Connects React to the page.
├── components/
│   ├── Header.jsx              Page title, description, and navigation.
│   ├── AddTaskForm.jsx         Task input and button. Calls onAddTask prop.
│   ├── Board.jsx               Three-column board. Receives separate lists for To Do, In Progress, and Done.
│   ├── TaskCard.jsx            Task card. Accepts title, description, and status props.
│   ├── Summary.jsx             Summary section. Receives taskCount prop.
│   ├── About.jsx               About section. No props.
│   └── Footer.jsx              Footer. No props.
└── styles/
    └── style.css               Styles for the application.
```

## Key Concepts

### Components

A component is a JavaScript function that returns JSX.

```jsx
function TaskCard({ title, description, status }) {
  return (
    <article className="card">
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <span className="card-status">{status}</span>
    </article>
  )
}
```

### Props

Props are pieces of information passed to a component when you use it.

```jsx
<TaskCard
  title="Create Header Component"
  description="Extract the header into its own component file."
  status="Done"
/>
```

The same component can be used many times with different props.

### State

`useState` is used to remember the current task list.
When a new task is added, the list updates and React re-renders the page.

```jsx
const [tasks, setTasks] = useState(initialTasks)
```
