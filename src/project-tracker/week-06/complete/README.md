# Project Tracker – Week 6 Complete

This is the completed result of the Week 6 guided build and the canonical
reference for the week's core outcome.

The application saves its task list in browser `localStorage`. Tasks survive a
page refresh, closing the browser and returning later on the same device.

## What Week 6 Adds

- `getInitialTasks()` reads saved tasks when the application starts.
- `useState(getInitialTasks)` uses saved tasks when they exist.
- `useEffect()` saves the task list whenever it changes.
- `JSON.stringify()` and `JSON.parse()` convert between JavaScript data and
  stored text.
- `project-tracker-tasks` provides one clear storage key.

Only the task list is saved. Temporary interface state, such as the text in the
add-task input, is deliberately not persistent.

Navigation remains within one page using anchors. React Router is not required
for successful completion of Week 6.

## Getting Started

```bash
npm install
npm run dev
```

Add a task and refresh the page. The task should still be present.

## Core Pattern

```jsx
const [tasks, setTasks] = useState(getInitialTasks)

useEffect(function () {
  localStorage.setItem(savedTasksKey, JSON.stringify(tasks))
}, [tasks])
```

The Showcase demonstrates optional extensions. It is reference code to inspect
and understand, not the expected Week 6 result.
