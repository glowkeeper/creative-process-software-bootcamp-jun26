# Project Tracker – Week 4 Showcase

This is the **Week 4 Showcase** project for the Software Development Bootcamp.

It extends the completed guided build to show how the same Week 4 concepts can go further.

This version is intended as **inspiration** rather than a required outcome. The guided build Complete version is the target for the session.

## What This Project Preserves

All Week 3 capability is retained:

- Navigation links
- Add Task section with input, priority selector, and feedback
- Project board with To Do, In Progress, and Done columns
- Project Summary section with per-column counts
- About section

## Showcase Extensions

- `TaskCard` accepts a `priority` prop (`low`, `medium`, `high`) which adds a coloured left border
- `AddTaskForm` includes a priority selector
- `Summary` shows a breakdown of tasks by column
- `Footer` is a component that receives a `text` prop

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

## Project Structure

```text
src/
├── App.jsx                     Root component. Holds tasks in state.
├── main.jsx                    Entry point.
├── components/
│   ├── Header.jsx              Page title, description, and navigation.
│   ├── AddTaskForm.jsx         Task input with priority selector.
│   ├── Board.jsx               Three-column board. Receives separate lists for To Do, In Progress, and Done.
│   ├── TaskCard.jsx            Task card. Accepts title, description, status, priority.
│   ├── Summary.jsx             Summary section. Receives tasks array for per-column counts.
│   ├── About.jsx               About section. No props.
│   └── Footer.jsx              Footer. Receives a text prop.
└── styles/
    └── style.css               Styles including priority border classes.
```
